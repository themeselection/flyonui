/*
 * @version: 3.2.2
 * @author: Preline Labs Ltd.
 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
 * Copyright 2024 Preline Labs Ltd.
 */

import {
  IBuildTooltipHelperOptions,
  IBuildTooltipHelperSingleOptions,
  IChartDonutProps,
  IChartProps,
  IChartPropsSeries
} from './interfaces'
import ApexCharts from 'apexcharts'

function buildTooltip(props: IChartProps, options: IBuildTooltipHelperOptions) {
  const {
    title,
    valuePrefix = '$',
    isValueDivided = true,
    valuePostfix = '',
    hasTextLabel = false,
    invertGroup = false,
    labelDivider = '',
    wrapperClasses = 'bg-base-100 min-w-28 text-base-content/80 rounded-lg !border-none',
    wrapperExtClasses = '',
    seriesClasses = 'text-xs items-center',
    seriesExtClasses = '',
    titleClasses = '!text-sm !font-semibold !bg-base-100 !border-base-content/40 text-base-content rounded-t-lg !px-2.5',
    titleExtClasses = '',
    markerClasses = '!w-2.5 !h-2.5 !me-1.5 rtl:!mr-0 !rounded-full',
    markerExtClasses = '',
    valueClasses = '!font-medium text-base-content/80 !ms-auto',
    valueExtClasses = '',
    labelClasses = 'text-base-content',
    labelExtClasses = '',
    thousandsShortName = 'k'
  } = options
  const { dataPointIndex } = props
  const { colors } = props.ctx.opts
  const series = props.ctx.opts.series as IChartPropsSeries[]
  let seriesGroups = ''

  series.forEach((_, i) => {
    const val =
      props.series[i][dataPointIndex] ||
      (typeof series[i].data[dataPointIndex] !== 'object'
        ? series[i].data[dataPointIndex]
        : props.series[i][dataPointIndex])
    const label = series[i].name
    const groupData = invertGroup
      ? {
          left: `${hasTextLabel ? label : ''}${labelDivider}`,
          right: `${valuePrefix}${val >= 1000 && isValueDivided ? `${val / 1000}${thousandsShortName}` : val}${valuePostfix}`
        }
      : {
          left: `${valuePrefix}${val >= 1000 && isValueDivided ? `${val / 1000}${thousandsShortName}` : val}${valuePostfix}`,
          right: `${hasTextLabel ? label : ''}${labelDivider}`
        }
    const labelMarkup = `<span class="apexcharts-tooltip-text-y-label ${labelClasses} ${labelExtClasses}">${groupData.left}</span>`

    seriesGroups += `<div class="apexcharts-tooltip-series-group !flex ${hasTextLabel ? '!justify-between' : ''} order-${i + 1} ${seriesClasses} ${seriesExtClasses}">
      <span class="flex items-center">
        <span class="apexcharts-tooltip-marker ${markerClasses} ${markerExtClasses}" style="background: ${colors[i]}"></span>
        <div class="apexcharts-tooltip-text">
          <div class="apexcharts-tooltip-y-group">
            <span class="apexcharts-tooltip-text-y-value ${valueClasses} ${valueExtClasses}">${groupData.right}</span>
          </div>
        </div>
      </span>
      ${labelMarkup}
    </div>`
  })

  return `<div class="${wrapperClasses} ${wrapperExtClasses}">
    <div class="apexcharts-tooltip-title ${titleClasses} ${titleExtClasses}">${title}</div>
    ${seriesGroups}
  </div>`
}

function buildHeatmapTooltip(props: IChartProps, options: IBuildTooltipHelperSingleOptions) {
  const {
    valuePrefix = '$',
    valuePostfix = '',
    divider = '',
    wrapperClasses = 'ms-0.5 mb-2 bg-base-100 border border-base-content/20 text-base-content rounded-box shadow-md',
    wrapperExtClasses = '',
    markerClasses = '!w-2.5 !h-2.5 !me-1.5',
    markerStyles = '',
    markerExtClasses = '!rounded-xs',
    valueClasses = '!font-medium text-base-content !ms-auto',
    valueExtClasses = ''
  } = options
  const { dataPointIndex, seriesIndex, series } = props
  const { name } = props.ctx.opts.series[seriesIndex] as IChartPropsSeries
  const val = `${valuePrefix}${series[seriesIndex][dataPointIndex]}${valuePostfix}`

  return `<div class="${wrapperClasses} ${wrapperExtClasses}">
    <div class="apexcharts-tooltip-series-group !flex">
      <span class="apexcharts-tooltip-marker ${markerClasses} ${markerExtClasses}" style="${markerStyles}"></span>
      <span class="flex items-center">
        <div class="apexcharts-tooltip-text">
          <div class="apexcharts-tooltip-y-group !py-0.5">
            <span class="apexcharts-tooltip-text-y-value ${valueClasses} ${valueExtClasses}">${name}${divider}</span>
          </div>
        </div>
      </span>
      <span class="apexcharts-tooltip-text-y-value ${valueClasses} ${valueExtClasses}">${val}</span>
    </div>
  </div>`
}

function buildTooltipCompareTwo(props: IChartProps, options: IBuildTooltipHelperOptions) {
  const {
    title,
    valuePrefix = '$',
    isValueDivided = true,
    valuePostfix = '',
    hasCategory = true,
    hasTextLabel = false,
    labelDivider = '',
    wrapperClasses = 'bg-base-100 min-w-48 text-base-content/80 rounded-lg !border-none',
    wrapperExtClasses = '',
    seriesClasses = 'text-xs items-center !justify-between',
    seriesExtClasses = '',
    titleClasses = '!text-sm !font-semibold !bg-base-100 !border-base-content/40 text-base-content rounded-t-lg !px-2.5',
    titleExtClasses = 'flex justify-between',
    markerClasses = '!w-2.5 !h-2.5 !me-1.5 !rounded-full',
    markerExtClasses = '',
    valueClasses = '!font-medium text-base-content/80 !ms-auto',
    valueExtClasses = '',
    labelClasses = 'text-base-content !font-medium',
    labelExtClasses = '',
    thousandsShortName = 'k'
  } = options
  const { dataPointIndex } = props
  const { categories } = props.ctx.opts.xaxis
  const { colors } = props.ctx.opts
  const series = props.ctx.opts.series as IChartPropsSeries[]

  let seriesGroups = ''
  const s0 = series[0].data[dataPointIndex]
  const s1 = series[1].data[dataPointIndex]
  const category = categories[dataPointIndex].split(' ')
  const newCategory = hasCategory
    ? `${category[0]}${category[1] ? ' ' : ''}${category[1] ? category[1].slice(0, 3) : ''}`
    : ''
  // const isGrowing = s0 > s1;
  // const isDifferenceIsNull = s0 / s1 === 1;
  // const difference = isDifferenceIsNull ? 0 : (s0 / s1) * 100;
  // TODO: test this before deleting the code above
  const isPrevZero = s1 === 0
  const difference = isPrevZero ? 0 : ((s0 - s1) / Math.abs(s1)) * 100
  const isDifferenceIsNull = difference === 0
  const isGrowing = difference > 0
  const icon = isGrowing
    ? `<span class="icon-[tabler--trending-up] size-5"></span>`
    : `<span class="icon-[tabler--trending-down] size-5"></span>`

  series.forEach((_, i) => {
    const val =
      props.series[i][dataPointIndex] ||
      (typeof series[i].data[dataPointIndex] !== 'object'
        ? series[i].data[dataPointIndex]
        : props.series[i][dataPointIndex])
    const label = series[i].name
    const altValue = series[i].altValue || null
    const labelMarkup = `<span class="apexcharts-tooltip-text-y-label ${labelClasses} ${labelExtClasses}">${newCategory} ${label || ''}</span>`
    const valueMarkup =
      altValue ||
      `<span class="apexcharts-tooltip-text-y-value ${valueClasses} ${valueExtClasses}">${valuePrefix}${val >= 1000 && isValueDivided ? `${val / 1000}${thousandsShortName}` : val}${valuePostfix}${labelDivider}</span>`

    seriesGroups += `<div class="apexcharts-tooltip-series-group ${seriesClasses} !flex order-${i + 1} ${seriesExtClasses}">
      <span class="flex items-center">
        <span class="apexcharts-tooltip-marker ${markerClasses} ${markerExtClasses}" style="background: ${colors[i]}"></span>
        <div class="apexcharts-tooltip-text">
          <div class="apexcharts-tooltip-y-group">
            ${valueMarkup}
          </div>
        </div>
      </span>
      ${hasTextLabel ? labelMarkup : ''}
    </div>`
  })

  return `<div class="${wrapperClasses} ${wrapperExtClasses}">
    <div class="apexcharts-tooltip-title ${titleClasses} ${titleExtClasses}">
      <span>${title}</span>
      <span class="flex items-center gap-x-1 ${!isDifferenceIsNull ? (isGrowing ? 'text-success' : 'text-error') : ''} ms-2">
        ${!isDifferenceIsNull ? icon : ''}
        <span class="inline-block text-sm"> ${difference.toFixed(1)}% </span>
      </span>
    </div>
    ${seriesGroups}
  </div>`
}

function buildTooltipCompareTwoAlt(props: IChartProps, options: IBuildTooltipHelperOptions) {
  const {
    title,
    valuePrefix = '$',
    isValueDivided = true,
    valuePostfix = '',
    hasCategory = true,
    hasTextLabel = false,
    labelDivider = '',
    wrapperClasses = 'bg-base-100 min-w-48 text-base-content/80 rounded-lg !border-none',
    wrapperExtClasses = '',
    seriesClasses = 'text-xs items-center !justify-between',
    seriesExtClasses = '',
    titleClasses = '!text-sm !font-semibold !bg-base-100 !border-base-content/40 text-base-content rounded-t-lg flex !justify-between !px-2.5',
    titleExtClasses = '',
    markerClasses = '!w-2.5 !h-2.5 !me-1.5 !rounded-full',
    markerExtClasses = '',
    valueClasses = '!font-medium text-base-content/80 !ms-auto',
    valueExtClasses = '',
    labelClasses = 'text-base-content !font-medium',
    labelExtClasses = '',
    thousandsShortName = 'k'
  } = options
  const { dataPointIndex } = props
  const { categories } = props.ctx.opts.xaxis
  const { colors } = props.ctx.opts
  const series = props.ctx.opts.series as IChartPropsSeries[]

  let seriesGroups = ''
  const s0 = series[0].data[dataPointIndex]
  const s1 = series[1].data[dataPointIndex]
  const category = categories[dataPointIndex].split(' ')
  const newCategory = hasCategory
    ? `${category[0]}${category[1] ? ' ' : ''}${category[1] ? category[1].slice(0, 3) : ''}`
    : ''
  // const isGrowing = s0 > s1;
  // const isDifferenceIsNull = s0 / s1 === 1;
  // const difference = isDifferenceIsNull ? 0 : (s0 / s1) * 100;
  // TODO: test this before deleting the code above
  const isPrevZero = s1 === 0
  const difference = isPrevZero ? 0 : ((s0 - s1) / Math.abs(s1)) * 100
  const isDifferenceIsNull = difference === 0
  const isGrowing = difference > 0
  const icon = isGrowing
    ? `<span class="icon-[tabler--trending-up] size-5"></span>`
    : `<span class="icon-[tabler--trending-down] size-5"></span>`

  series.forEach((_, i) => {
    const val =
      props.series[i][dataPointIndex] ||
      (typeof series[i].data[dataPointIndex] !== 'object'
        ? series[i].data[dataPointIndex]
        : props.series[i][dataPointIndex])

    const label = series[i].name
    const labelMarkup = `<span class="apexcharts-tooltip-text-y-label ${labelClasses} ${labelExtClasses}">${valuePrefix}${val >= 1000 && isValueDivided ? `${val / 1000}${thousandsShortName}` : val}${valuePostfix}</span>`

    seriesGroups += `<div class="apexcharts-tooltip-series-group !flex ${seriesClasses} order-${i + 1} ${seriesExtClasses}">
      <span class="flex items-center">
        <span class="apexcharts-tooltip-marker ${markerClasses} ${markerExtClasses}" style="background: ${colors[i]}"></span>
        <div class="apexcharts-tooltip-text text-xs">
          <div class="apexcharts-tooltip-y-group">
            <span class="apexcharts-tooltip-text-y-value ${valueClasses} ${valueExtClasses}">${newCategory} ${label || ''}${labelDivider}</span>
          </div>
        </div>
      </span>
      ${hasTextLabel ? labelMarkup : ''}
    </div>`
  })

  return `<div class="${wrapperClasses} ${wrapperExtClasses}">
    <div class="apexcharts-tooltip-title ${titleClasses} ${titleExtClasses}">
      <span>${title}</span>
      <span class="flex items-center gap-x-1 ${!isDifferenceIsNull ? (isGrowing ? 'text-success' : 'text-error') : ''} ms-2">
        ${!isDifferenceIsNull ? icon : ''}
        <span class="inline-block text-sm"> ${difference.toFixed(1)}% </span>
      </span>
    </div>
    ${seriesGroups}
  </div>`
}

function buildTooltipForDonut({ series, seriesIndex, w }: IChartDonutProps, textColor: string[]) {
  const { globals } = w
  const { colors } = globals

  return `<div class="apexcharts-tooltip-series-group" style="background-color: ${colors[seriesIndex]}; display: block;">
    <div class="apexcharts-tooltip-text" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;">
      <div class="apexcharts-tooltip-y-group" style="color: ${textColor[seriesIndex]}">
        <span class="apexcharts-tooltip-text-y-label">${globals.labels[seriesIndex]}: </span>
        <span class="apexcharts-tooltip-text-y-value">${series[seriesIndex]}</span>
      </div>
    </div>
  </div>`
}

function buildChart(id: string, shared: Function) {
  const $chart = document.querySelector(id)
  let chart: any = null

  if (!$chart) return false

  const optionsFn = () => shared()
  // Initialize and render the chart
  if ($chart) {
    chart = new ApexCharts($chart, optionsFn())
    chart.render()
  }

  return chart
}

function fullBarHoverEffect(
  chartCtx: ApexCharts & {
    el: HTMLElement
    w: { config: { xaxis?: { categories?: any[] } } }
  },
  { shadowClasses = 'fill-gray-200' }: { shadowClasses?: string } = {}
): void {
  const grid = chartCtx.el.querySelector<HTMLElement>('.apexcharts-grid')
  const svg = chartCtx.el.querySelector('svg')
  if (!grid || !svg) return

  const categories: any[] = chartCtx.w.config.xaxis?.categories || []
  if (categories.length === 0) return

  let shadowRect: SVGRectElement | null = null
  let isVisible = false
  let isRemoving = false

  function cleanup() {
    shadowRect?.remove()
    shadowRect = null
    isVisible = false
    isRemoving = false
  }

  function showForIndex(index: number) {
    const seriesGroup = chartCtx.el.querySelector('.apexcharts-bar-series')
    if (!seriesGroup) return

    const bars = seriesGroup.querySelectorAll<SVGPathElement>('path')
    const bar = bars[index]
    if (!bar) return

    const bbox = bar.getBBox()
    const x = bbox.x
    const y = bbox.y
    const width = bbox.width
    if (y <= 0) return

    if (!shadowRect) {
      shadowRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
      shadowRect.setAttribute('y', '0')
      shadowRect.setAttribute('class', shadowClasses)
      bar.parentNode?.insertBefore(shadowRect, bar)
    }

    shadowRect.setAttribute('x', x.toString())
    shadowRect.setAttribute('width', width.toString())
    shadowRect.setAttribute('height', y.toString())

    requestAnimationFrame(() => {
      shadowRect?.classList.add('opacity-100')
    })

    isVisible = true
    isRemoving = false
  }

  function hide() {
    if (!shadowRect || !isVisible || isRemoving) return
    isRemoving = true
    shadowRect.classList.remove('opacity-100')
    cleanup()
  }

  svg.addEventListener('mousemove', (e: MouseEvent) => {
    const gridRect = grid.getBoundingClientRect()
    if (
      e.clientX < gridRect.left ||
      e.clientX > gridRect.right ||
      e.clientY < gridRect.top ||
      e.clientY > gridRect.bottom
    ) {
      hide()
      return
    }

    const relativeX = e.clientX - gridRect.left
    const ratio = relativeX / gridRect.width
    const index = Math.floor(ratio * categories.length)

    if (index < 0 || index >= categories.length) {
      hide()
      return
    }

    showForIndex(index)
  })

  svg.addEventListener('mouseleave', hide)
}

export {
  buildChart,
  buildHeatmapTooltip,
  buildTooltip,
  buildTooltipCompareTwo,
  buildTooltipCompareTwoAlt,
  buildTooltipForDonut,
  fullBarHoverEffect
}
