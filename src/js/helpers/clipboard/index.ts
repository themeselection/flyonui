/*
 * @version: 3.1.0
 * @author: Preline Labs Ltd.
 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
 * Copyright 2024 Preline Labs Ltd.
 */

declare var ClipboardJS: any

const clipboardSelector = window?.HS_CLIPBOARD_SELECTOR ?? '.js-clipboard'

function clipboardHelper(selector: string) {
  const $clipboards = document.querySelectorAll(selector)

  $clipboards.forEach((el: HTMLElement) => {
    const clipboard = new ClipboardJS(el, {
      text: (trigger: HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement) => {
        const clipboardText = trigger.dataset.clipboardText

        if (clipboardText) return clipboardText

        const clipboardTarget = trigger.dataset.clipboardTarget
        const $element: HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement =
          document.querySelector(clipboardTarget)

        if ($element.tagName === 'SELECT' || $element.tagName === 'INPUT' || $element.tagName === 'TEXTAREA') {
          return $element.value
        } else return $element.textContent
      }
    })
    clipboard.on('success', () => {
      const $default: HTMLElement = el.querySelector('.js-clipboard-default')
      const $success: HTMLElement = el.querySelector('.js-clipboard-success')
      const $successText = el.querySelector('.js-clipboard-success-text')
      const successText = el.dataset.clipboardSuccessText || ''
      const tooltip = el.closest('.tooltip')
      let oldSuccessText: string

      if ($successText) {
        oldSuccessText = $successText.textContent
        $successText.textContent = successText
      }
      if ($default && $success) {
        $default.style.display = 'none'
        $success.style.display = 'block'
      }
      if (tooltip) (window.HSTooltip as any).show(tooltip)

      setTimeout(function () {
        if ($successText && oldSuccessText) {
          $successText.textContent = oldSuccessText
        }
        if (tooltip) (window.HSTooltip as any).hide(tooltip)
        if ($default && $success) {
          $success.style.display = ''
          $default.style.display = ''
        }
      }, 2000)
    })
  })
}

window.addEventListener('load', () => {
  clipboardHelper(clipboardSelector)
})

export default clipboardHelper
