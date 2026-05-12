export const getElementTop = (element: HTMLElement, window: Window) => {
  return element.getBoundingClientRect().top
}

export const getElementBottom = (element: HTMLElement) => {
  return element.getBoundingClientRect().bottom
}

export const getElementLeft = (element: HTMLElement) => {
  return element.getBoundingClientRect().left
}
