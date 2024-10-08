/*
 * HSCarousel
 * @version: 2.4.1
 * @author: Preline Labs Ltd.
 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
 * Copyright 2024 Preline Labs Ltd.
 */

import { ICarousel, ICarouselOptions } from './interfaces'

import HSBasePlugin from '../base-plugin'
import { ICollectionItem } from '../../interfaces'

class HSCarousel extends HSBasePlugin<ICarouselOptions> implements ICarousel {
  private readonly inner: HTMLElement | null
  private readonly slides: NodeListOf<HTMLElement> | undefined[]
  private readonly prev: HTMLElement | null
  private readonly next: HTMLElement | null
  private readonly dots: NodeListOf<HTMLElement> | null
  private sliderWidth: number
  private currentIndex: number
  private readonly loadingClasses: string | string[]
  private readonly loadingClassesRemove: string | string[]
  private readonly loadingClassesAdd: string | string[]
  private readonly afterLoadingClassesAdd: string | string[]
  private readonly isAutoPlay: boolean
  private readonly isRTL: boolean
  private readonly speed: number
  private readonly isInfiniteLoop: boolean
  private timer: any

  // Touch events' help variables
  private readonly touchX: {
    start: number
    end: number
  }

  constructor(el: HTMLElement, options?: ICarouselOptions) {
    super(el, options)

    const data = el.getAttribute('data-carousel')
    const dataOptions: ICarouselOptions = data ? JSON.parse(data) : {}
    const concatOptions = {
      ...dataOptions,
      ...options
    }

    this.currentIndex = concatOptions.currentIndex || 0
    this.loadingClasses = concatOptions.loadingClasses ? `${concatOptions.loadingClasses}`.split(',') : null
    this.loadingClassesRemove = this.loadingClasses?.[0] ? this.loadingClasses[0].split(' ') : 'opacity-0'
    this.loadingClassesAdd = this.loadingClasses?.[1] ? this.loadingClasses[1].split(' ') : ''
    this.afterLoadingClassesAdd = this.loadingClasses?.[2] ? this.loadingClasses[2].split(' ') : ''
    this.isAutoPlay = typeof concatOptions.isAutoPlay !== 'undefined' ? concatOptions.isAutoPlay : false
    this.speed = concatOptions.speed || 4000
    this.isInfiniteLoop = typeof concatOptions.isInfiniteLoop !== 'undefined' ? concatOptions.isInfiniteLoop : true
    this.inner = this.el.querySelector('.carousel-body') || null
    this.slides = this.el.querySelectorAll('.carousel-slide') || []
    this.prev = this.el.querySelector('.carousel-prev') || null
    this.next = this.el.querySelector('.carousel-next') || null
    this.dots = this.el.querySelectorAll('.carousel-pagination > *') || null
    this.isRTL = this.checkIsRTL() || false // Initialize RTL mode
    this.sliderWidth = this.inner.parentElement.clientWidth

    // Touch events' help variables
    this.touchX = {
      start: 0,
      end: 0
    }

    this.init()
  }

  private checkIsRTL(): boolean {
    const checkParentForRTL = (element: HTMLElement | null): boolean => {
      if (!element) {
        return false // If no parent element, return false
      }

      const dir = element.getAttribute('dir')
      if (dir === 'rtl') {
        return true // Return true if dir is 'rtl'
      }

      // Recursively check the parent's parent
      return checkParentForRTL(element.parentElement)
    }

    const isRTL = checkParentForRTL(this.el.parentElement)
    return isRTL
  }

  private init() {
    this.createCollection(window.$hsCarouselCollection, this)

    if (this.inner) {
      this.calculateWidth()
      if (this.loadingClassesRemove) {
        if (typeof this.loadingClassesRemove === 'string') this.inner.classList.remove(this.loadingClassesRemove)
        else this.inner.classList.remove(...this.loadingClassesRemove)
      }
      if (this.loadingClassesAdd) {
        if (typeof this.loadingClassesAdd === 'string') this.inner.classList.add(this.loadingClassesAdd)
        else this.inner.classList.add(...this.loadingClassesAdd)
      }
    }
    if (this.prev)
      this.prev.addEventListener('click', () => {
        this.goToPrev()
        if (this.isAutoPlay) {
          this.resetTimer()
          this.setTimer()
        }
      })
    if (this.next)
      this.next.addEventListener('click', () => {
        this.goToNext()
        if (this.isAutoPlay) {
          this.resetTimer()
          this.setTimer()
        }
      })
    if (this.dots) {
      this.dots.forEach((el, i) =>
        el.addEventListener('click', () => {
          this.goTo(i)
          if (this.isAutoPlay) {
            this.resetTimer()
            this.setTimer()
          }
        })
      )
    }
    if (this.slides.length) {
      this.addCurrentClass()
      this.addDisabledClass()
      if (this.isAutoPlay) this.autoPlay()
    }
    if (this.inner && this.afterLoadingClassesAdd) {
      setTimeout(() => {
        if (typeof this.afterLoadingClassesAdd === 'string') this.inner.classList.add(this.afterLoadingClassesAdd)
        else this.inner.classList.add(...this.afterLoadingClassesAdd)
      })
    }

    this.el.classList.add('init')

    this.el.addEventListener('touchstart', evt => {
      this.touchX.start = evt.changedTouches[0].screenX
    })

    this.el.addEventListener('touchend', evt => {
      this.touchX.end = evt.changedTouches[0].screenX

      this.detectDirection()
    })

    this.observeResize()
  }

  private observeResize() {
    const resizeObserver = new ResizeObserver(() => this.recalculateWidth())

    resizeObserver.observe(document.querySelector('body'))
  }

  private calculateWidth() {
    // Set slider width
    this.inner.style.width = `${this.sliderWidth * this.slides.length}px`

    // Set direction based on isRTL property
    const direction = this.isRTL ? 'rtl' : 'ltr'
    this.inner.style.direction = direction
    this.inner.style.transform = this.calculateTransform()

    // Set width and direction to each slide
    this.slides.forEach(el => {
      el.style.width = `${this.sliderWidth}px`
      el.style.direction = direction
    })
  }

  private addCurrentClass() {
    this.slides.forEach((el, i) => {
      if (i === this.currentIndex) {
        el.classList.add('active')
      } else {
        el.classList.remove('active')
      }
    })

    if (this.dots) {
      this.dots.forEach((el, i) => {
        if (i === this.currentIndex) {
          el.classList.add('active')
        } else {
          el.classList.remove('active')
        }
      })
    }
  }

  private addDisabledClass() {
    // Exit early if infinite loop is enabled
    if (this.isInfiniteLoop) return
    if (!this.prev || !this.next) return false

    if (this.currentIndex === 0) {
      this.next.classList.remove('disabled')
      this.prev.classList.add('disabled')
    } else if (this.currentIndex === this.slides.length - 1) {
      this.prev.classList.remove('disabled')
      this.next.classList.add('disabled')
    } else {
      this.prev.classList.remove('disabled')
      this.next.classList.remove('disabled')
    }
  }

  private autoPlay() {
    this.setTimer()
  }

  private setTimer() {
    this.timer = setInterval(() => {
      if (this.currentIndex === this.slides.length - 1) this.goTo(0)
      else this.goToNext()
    }, this.speed)
  }

  private resetTimer() {
    clearInterval(this.timer)
  }

  private detectDirection() {
    const { start, end } = this.touchX

    if (end < start) this.goToNext()
    if (end > start) this.goToPrev()
  }

  // Public methods
  public recalculateWidth() {
    this.sliderWidth = this.inner.parentElement.clientWidth

    this.calculateWidth()
  }

  private calculateTransform(): string {
    let value = this.currentIndex * this.sliderWidth
    return this.isRTL ? `translate(${value}px, 0px)` : `translate(-${value}px, 0px)`
  }

  public goToPrev() {
    if (this.currentIndex === 0 && this.isInfiniteLoop) {
      this.currentIndex = this.slides.length - 1
      this.inner.style.transform = this.calculateTransform()

      this.addCurrentClass()
    } else if (this.currentIndex !== 0) {
      this.currentIndex -= 1
      this.inner.style.transform = this.calculateTransform()

      this.addCurrentClass()
      this.addDisabledClass()
    }
  }

  public goToNext() {
    if (this.currentIndex === this.slides.length - 1 && this.isInfiniteLoop) {
      this.currentIndex = 0
      this.inner.style.transform = this.calculateTransform()

      this.addCurrentClass()
    } else if (this.currentIndex < this.slides.length - 1) {
      this.currentIndex += 1
      this.inner.style.transform = this.calculateTransform()

      this.addCurrentClass()
      this.addDisabledClass()
    }
  }

  public goTo(i: number) {
    this.currentIndex = i
    this.inner.style.transform = this.calculateTransform()

    this.addCurrentClass()
    this.addDisabledClass()
  }

  // Static methods
  static getInstance(target: HTMLElement | string, isInstance?: boolean) {
    const elInCollection = window.$hsCarouselCollection.find(
      el => el.element.el === (typeof target === 'string' ? document.querySelector(target) : target)
    )

    return elInCollection ? (isInstance ? elInCollection : elInCollection.element) : null
  }

  static autoInit() {
    if (!window.$hsCarouselCollection) window.$hsCarouselCollection = []

    document.querySelectorAll('[data-carousel]:not(.--prevent-on-load-init)').forEach((el: HTMLElement) => {
      if (!window.$hsCarouselCollection.find(elC => (elC?.element?.el as HTMLElement) === el)) new HSCarousel(el)
    })
  }
}

declare global {
  interface Window {
    HSCarousel: Function
    $hsCarouselCollection: ICollectionItem<HSCarousel>[]
  }
}

window.addEventListener('load', () => {
  HSCarousel.autoInit()

  // Uncomment for debug
  // console.log('Carousel collection:', window.$hsCarouselCollection)
})

window.addEventListener('resize', () => {
  if (!window.$hsCarouselCollection) return false

  window.$hsCarouselCollection.forEach(el => {
    el.element.recalculateWidth()
  })
})

if (typeof window !== 'undefined') {
  window.HSCarousel = HSCarousel
}

export default HSCarousel
