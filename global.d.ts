import type INoUiSlider from 'nouislider'

import { ICollectionItem } from './src/js/interfaces'

import { IStaticMethods } from './src/js/static/interfaces'

import type HSCopyMarkup from './src/js/plugins/copy-markup'
import type HSAccordion from './src/js/plugins/accordion'
import type HSCarousel from './src/js/plugins/carousel'
import type HSCollapse from './src/js/plugins/collapse'
import type HSComboBox from './src/js/plugins/combobox'
import type HSDataTable from './src/js/plugins/datatable'
import type HSDropdown from './src/js/plugins/dropdown'
import type HSFileUpload from './src/js/plugins/file-upload'
import type HSInputNumber from './src/js/plugins/input-number'
import type HSOverlay from './src/js/plugins/overlay'
import type HSPinInput from './src/js/plugins/pin-input'
import type HSRangeSlider from './src/js/plugins/range-slider'
import type HSRemoveElement from './src/js/plugins/remove-element'
import type HSScrollspy from './src/js/plugins/scrollspy'
import type HSSelect from './src/js/plugins/select'
import type HSStepper from './src/js/plugins/stepper'
import type HSStrongPassword from './src/js/plugins/strong-password'
import type HSTabs from './src/js/plugins/tabs'
import type HSToggleCount from './src/js/plugins/toggle-count'
import type HSTogglePassword from './src/js/plugins/toggle-password'
import type HSTooltip from './src/js/plugins/tooltip'
import type HSTreeView from './src/js/plugins/tree-view'
import type HSAccessibilityObserver from './src/js/plugins/accessibility-manager'

declare global {
  var noUiSlider: typeof INoUiSlider
  var FloatingUIDOM: {
    computePosition: (
      reference: Element,
      floating: HTMLElement,
      options?: any
    ) => Promise<{ x: number; y: number; placement: string }>
    autoUpdate: (reference: Element, floating: HTMLElement, update: () => void) => () => void
    offset: (offset: number | [number, number]) => any
    flip: (options?: { fallbackPlacements?: string[] }) => any
  }

  interface Window {
    HS_CLIPBOARD_SELECTOR: string

    HSStaticMethods: IStaticMethods
    HSAccessibilityObserver: HSAccessibilityObserver

    $hsCopyMarkupCollection: ICollectionItem<HSCopyMarkup>[]
    $hsAccordionCollection: ICollectionItem<HSAccordion>[]
    $hsCarouselCollection: ICollectionItem<HSCarousel>[]
    $hsCollapseCollection: ICollectionItem<HSCollapse>[]
    $hsComboBoxCollection: ICollectionItem<HSComboBox>[]
    $hsDataTableCollection: ICollectionItem<HSDataTable>[]
    $hsDropdownCollection: ICollectionItem<HSDropdown>[]
    $hsFileUploadCollection: ICollectionItem<HSFileUpload>[]
    $hsInputNumberCollection: { id: number; element: HSInputNumber }[]
    $hsOverlayCollection: ICollectionItem<HSOverlay>[]
    $hsPinInputCollection: ICollectionItem<HSPinInput>[]
    $hsRemoveElementCollection: ICollectionItem<HSRemoveElement>[]
    $hsRangeSliderCollection: ICollectionItem<HSRangeSlider>[]
    $hsScrollspyCollection: ICollectionItem<HSScrollspy>[]
    $hsSelectCollection: ICollectionItem<HSSelect>[]
    $hsStepperCollection: ICollectionItem<HSStepper>[]
    $hsStrongPasswordCollection: ICollectionItem<HSStrongPassword>[]
    $hsTabsCollection: ICollectionItem<HSTabs>[]
    $hsToggleCountCollection: ICollectionItem<HSToggleCount>[]
    $hsTogglePasswordCollection: ICollectionItem<HSTogglePassword>[]
    $hsTooltipCollection: ICollectionItem<HSTooltip>[]
    $hsTreeViewCollection: ICollectionItem<HSTreeView>[]
  }
}

export {}
