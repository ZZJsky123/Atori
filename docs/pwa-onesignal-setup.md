# PWA + OneSignal 推送通知配置指南

> 当前项目默认只保留 RSS 订阅；本文档仅作为将来重新启用 PWA/OneSignal 推送通知时的配置参考。

## 功能说明

OneSignal 可以为站点提供 Web Push 推送能力。当发布新的 Tweet 或 Review 时，服务端可以调用 OneSignal REST API，将更新推送给已经授权通知的订阅用户。

如果只需要开放订阅入口，推荐继续使用项目内已有的 RSS：

- RSS 地址：`/rss.xml`
- RSS metadata：`src/app/layout.tsx`
- RSS 页面入口：`src/features/profile/index.tsx`

## OneSignal 准备

1. 访问 [OneSignal](https://onesignal.com/) 并注册账号。
2. 在 Dashboard 中创建 Web Push 应用。
3. 选择站点类型并填写站点 URL。
4. 在 **Settings -> Keys & IDs** 中找到 App ID 和 REST API Key。

## 环境变量

如需重新启用推送通知，需要在环境变量中添加：

```bash
NEXT_PUBLIC_ONESIGNAL_APP_ID=你的_APP_ID
ONESIGNAL_REST_API_KEY=你的_REST_API_KEY
```

`NEXT_PUBLIC_ONESIGNAL_APP_ID` 会暴露给浏览器端使用，`ONESIGNAL_REST_API_KEY` 只应在服务端使用，不要提交到仓库。

## 前端初始化

如果重新启用 OneSignal，需要在全局 layout 的 `<head>` 中加载 SDK 并初始化：

```tsx
<script
  src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js"
  async
/>
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.OneSignalDeferred = window.OneSignalDeferred || [];
      OneSignalDeferred.push(async function(OneSignal) {
        await OneSignal.init({
          appId: "${process.env.NEXT_PUBLIC_ONESIGNAL_APP_ID}",
        });
      });
    `,
  }}
/>
```

同时需要在 `public/` 下放置 OneSignal service worker：

```js
importScripts('https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js')
```

## 服务端通知工具

服务端可以封装一个 OneSignal 通知工具，发布内容成功后再触发通知。建议通知失败不要阻塞主发布流程。

```ts
export async function sendOneSignalNotification(options: {
  headings?: { en: string; [key: string]: string }
  contents: { en: string; [key: string]: string }
  url?: string
  data?: Record<string, string>
}) {
  const appId = process.env.NEXT_PUBLIC_ONESIGNAL_APP_ID
  const restApiKey = process.env.ONESIGNAL_REST_API_KEY

  if (!appId || !restApiKey) {
    return { success: false, error: 'Missing OneSignal configuration' }
  }

  const response = await fetch('https://onesignal.com/api/v1/notifications', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${restApiKey}`,
    },
    body: JSON.stringify({
      app_id: appId,
      headings: options.headings || { en: 'Atori Blog' },
      contents: options.contents,
      url: options.url,
      data: options.data,
      included_segments: ['All'],
      web_url: options.url,
      chrome_web_icon: '/atori.svg',
      firefox_icon: '/atori.svg',
      chrome_web_badge: '/atori.svg',
    }),
  })

  const result = await response.json()

  if (!response.ok) {
    return { success: false, error: result }
  }

  return { success: true, data: result }
}
```

## 发布流程建议

重新启用时，可以在发布 Tweet 或 Review 成功后触发推送：

1. 写入数据库。
2. 调用 `revalidateTag()` 刷新缓存。
3. 异步发送 OneSignal 推送。
4. 即使推送失败，也返回发布成功结果。

## 测试清单

- 本地或预览环境能正常加载 OneSignal SDK。
- 浏览器弹出通知授权提示。
- OneSignal Dashboard 中能看到订阅用户。
- 发布内容后能收到推送。
- 未配置环境变量时，发布流程不会失败。

## 参考链接

- [OneSignal Web Push Documentation](https://documentation.onesignal.com/docs/web-push-quickstart)
- [OneSignal REST API](https://documentation.onesignal.com/reference/create-message)
