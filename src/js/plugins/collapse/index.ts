/*
 * HSCollapse
 * @version: 3.1.0
 * @author: Preline Labs Ltd.
 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
 * Copyright 2024 Preline Labs Ltd.
 */

import { dispatch, afterTransition } from '../../utils'

import { ICollapse } from './interfaces'

import HSBasePlugin from '../base-plugin'
import { ICollectionItem } from '../../interfaces'
import HSDropdown from '../dropdown'

class HSCollapse extends HSBasePlugin<{}> implements ICollapse {
  private readonly contentId: string | null
  public content: HTMLElement | null
  private animationInProcess: boolean

  private onElementClickListener: () => void

  constructor(el: HTMLElement, options?: {}, events?: {}) {
    super(el, options, events)

    this.contentId = this.el.dataset.collapse
    this.content = document.querySelector(this.contentId)
    this.animationInProcess = false

    if (this.content) this.init()
  }

  private elementClick() {
    if (this.content.classList.contains('open')) {
      this.hide()
    } else {
      this.show()
    }
  }

  private init() {
    this.createCollection(window.$hsCollapseCollection, this)

    this.onElementClickListener = () => this.elementClick()

    if (this?.el?.ariaExpanded) {
      if (this.el.classList.contains('open')) this.el.ariaExpanded = 'true'
      else this.el.ariaExpanded = 'false'
    }

    this.el.addEventListener('click', this.onElementClickListener)
  }

  private hideAllMegaMenuItems() {
    this.content.querySelectorAll('.mega-menu-content.block').forEach(el => {
      el.classList.remove('block')
      el.classList.add('hidden')
    })
  }
  // This function is added to close all dropdowns when the collapse is closed
  private closeDropdowns(): void {
    if (!this.content) return

    const dropdowns = this.content.querySelectorAll('.dropdown')
    dropdowns.forEach((el: Element) => {
      try {
        const instance = HSDropdown.getInstance(el as HTMLElement, true) as ICollectionItem<HSDropdown> | null

        if (!instance?.element) return

        if (el instanceof HTMLElement && el.classList.contains('open')) {
          instance.element.close(false)
        }
      } catch (error) {
        console.warn('Error closing dropdown:', error)
      }
    })
  }

  // Public methods
  public show() {
    if (this.animationInProcess || this.el.classList.contains('open')) return false

    this.animationInProcess = true

    this.el.classList.add('open')
    if (this?.el?.ariaExpanded) this.el.ariaExpanded = 'true'
    this.content.classList.add('open')
    this.content.classList.remove('hidden')

    this.content.style.height = '0'
    setTimeout(() => {
      this.content.style.height = `${this.content.scrollHeight}px`

      this.fireEvent('beforeOpen', this.el)
      dispatch('beforeOpen.collapse', this.el, this.el)
    })

    afterTransition(this.content, () => {
      this.content.style.height = ''

      this.fireEvent('open', this.el)
      dispatch('open.collapse', this.el, this.el)

      this.animationInProcess = false
    })
  }

  public hide() {
    if (this.animationInProcess || !this.el.classList.contains('open')) return false

    this.animationInProcess = true

    this.el.classList.remove('open')
    if (this?.el?.ariaExpanded) this.el.ariaExpanded = 'false'

    this.content.style.height = `${this.content.scrollHeight}px`
    setTimeout(() => {
      this.content.style.height = '0'
    })

    this.content.classList.remove('open')

    afterTransition(this.content, () => {
      this.content.classList.add('hidden')
      this.content.style.height = ''

      this.fireEvent('hide', this.el)
      dispatch('hide.collapse', this.el, this.el)

      this.animationInProcess = false
    })

    if (this.content.querySelectorAll('.mega-menu-content.block').length) {
      this.hideAllMegaMenuItems()
    }

    this.closeDropdowns()
  }

  public destroy() {
    this.el.removeEventListener('click', this.onElementClickListener)

    this.content = null
    this.animationInProcess = false

    window.$hsCollapseCollection = window.$hsCollapseCollection.filter(({ element }) => element.el !== this.el)
  }

  // Static methods
  private static findInCollection(target: HSCollapse | HTMLElement | string): ICollectionItem<HSCollapse> | null {
    return (
      window.$hsCollapseCollection.find(el => {
        if (target instanceof HSCollapse) return el.element.el === target.el
        else if (typeof target === 'string') return el.element.el === document.querySelector(target)
        else return el.element.el === target
      }) || null
    )
  }

  static getInstance(target: HTMLElement, isInstance = false) {
    const elInCollection = window.$hsCollapseCollection.find(
      el => el.element.el === (typeof target === 'string' ? document.querySelector(target) : target)
    )

    return elInCollection ? (isInstance ? elInCollection : elInCollection.element.el) : null
  }

  static autoInit() {
    if (!window.$hsCollapseCollection) window.$hsCollapseCollection = []

    if (window.$hsCollapseCollection)
      window.$hsCollapseCollection = window.$hsCollapseCollection.filter(({ element }) => document.contains(element.el))

    document.querySelectorAll('.collapse-toggle:not(.--prevent-on-load-init)').forEach((el: HTMLElement) => {
      if (!window.$hsCollapseCollection.find(elC => (elC?.element?.el as HTMLElement) === el)) new HSCollapse(el)
    })
  }

  static show(target: HSCollapse | HTMLElement | string) {
    const instance = HSCollapse.findInCollection(target)

    if (instance && instance.element.content.classList.contains('hidden')) instance.element.show()
  }

  static hide(target: HSCollapse | HTMLElement | string) {
    const instance = HSCollapse.findInCollection(target)

    if (instance && !instance.element.content.classList.contains('hidden')) instance.element.hide()
  }

  // Backward compatibility
  static on(evt: string, target: HSCollapse | HTMLElement | string, cb: Function) {
    const instance = HSCollapse.findInCollection(target)

    if (instance) instance.element.events[evt] = cb
  }
}

declare global {
  interface Window {
    HSCollapse: Function
    $hsCollapseCollection: ICollectionItem<HSCollapse>[]
  }
}

window.addEventListener('load', () => {
  HSCollapse.autoInit()

  // Uncomment for debug
  // console.log('Collapse collection:', window.$hsCollapseCollection);
})

if (typeof window !== 'undefined') {
  window.HSCollapse = HSCollapse
}

export default HSCollapse
