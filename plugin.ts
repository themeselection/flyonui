/*
 * Plugin
 * @version: 2.7.0
 * @author: Preline Labs Ltd.
 * @requires: tailwindcss ^3.4.1
 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
 * Copyright 2024 Preline Labs Ltd.
 */

export type TStringFunc = () => string

export interface IModifySelectors {
  className: string
}

export interface IAddVariantOptions {
  modifySelectors: (callback: (options: IModifySelectors) => string) => string
  separator: string
}

import plugin from 'tailwindcss/plugin'
import type { PluginAPI } from 'tailwindcss/types/config'

export default plugin(function ({ addVariant, e }: PluginAPI) {
  addVariant('dropdown-open', [
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.dropdown.open > .${e(`dropdown-open${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.dropdown.open .dropdown-toggle .${e(`dropdown-open${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.dropdown.open > .dropdown-menu > .${e(`dropdown-open${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.dropdown-menu.open.${e(`dropdown-open${separator}${className}`)}`
      })
    }
  ] as TStringFunc[])

  addVariant('dropdown-item-disabled', (({ modifySelectors, separator }: IAddVariantOptions) => {
    modifySelectors(({ className }) => {
      return `.dropdown.open > .dropdown-menu .disabled.${e(`dropdown-item-disabled${separator}${className}`)}`
    })
  }) as TStringFunc)

  addVariant('dropdown-item-checked', [
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.dropdown.open > .dropdown-menu [aria-checked="true"].${e(
          `dropdown-item-checked${separator}${className}`
        )}`
      })
    },
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.dropdown.open > .dropdown-menu [aria-checked="true"] .${e(
          `dropdown-item-checked${separator}${className}`
        )}`
      })
    }
  ] as TStringFunc[])

  addVariant('removing', (({ modifySelectors, separator }: IAddVariantOptions) => {
    modifySelectors(({ className }) => {
      return `.removing.${e(`removing${separator}${className}`)}`
    })
  }) as TStringFunc)

  addVariant('tooltip-shown', [
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.tooltip.show .${e(`tooltip-shown${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.tooltip-content.show.${e(`tooltip-shown${separator}${className}`)}`
      })
    }
  ] as TStringFunc[])

  addVariant('accordion-item-active', [
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.accordion-item.active.${e(`accordion-item-active${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.accordion-item.active > .${e(`accordion-item-active${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.accordion-item.active > .accordion-toggle .${e(`accordion-item-active${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.accordion-item.active > .accordion-heading > .accordion-toggle .${e(
          `accordion-item-active${separator}${className}`
        )}`
      })
    },
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.accordion-item.active > .accordion-toggle.${e(`accordion-item-active${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.accordion-item.active > .accordion-heading > .accordion-toggle.${e(
          `accordion-item-active${separator}${className}`
        )}`
      })
    },
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.accordion-item.active .accordion-force-active.${e(`accordion-item-active${separator}${className}`)}`
      })
    }
  ] as TStringFunc[])

  addVariant('accordion-selected', (({ modifySelectors, separator }: IAddVariantOptions) => {
    modifySelectors(({ className }) => {
      return `.accordion-item .selected.${e(`accordion-selected${separator}${className}`)}`
    })
  }) as TStringFunc)

  addVariant('tree-view-selected', [
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `[data-tree-view-item].selected > .${e(`tree-view-selected${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `[data-tree-view-item].selected.${e(`tree-view-selected${separator}${className}`)}`
      })
    }
  ] as TStringFunc[])

  addVariant('tree-view-disabled', [
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `[data-tree-view-item].disabled.${e(`tree-view-disabled${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `[data-tree-view-item].disabled > .${e(`tree-view-disabled${separator}${className}`)}`
      })
    }
  ] as TStringFunc[])

  addVariant('collapse-open', [
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.collapse.open > .${e(`collapse-open${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.collapse.open.${e(`collapse-open${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.collapse-toggle.open > .${e(`collapse-open${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.collapse-toggle.open.${e(`collapse-open${separator}${className}`)}`
      })
    }
  ] as TStringFunc[])

  addVariant('active-tab', [
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `[data-tab].active.${e(`tab-active${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `[data-tab].active .${e(`active-tab${separator}${className}`)}`
      })
    }
  ] as TStringFunc[])

  addVariant('overlay-open', [
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.open.${e(`overlay-open${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.open .${e(`overlay-open${separator}${className}`)}`
      })
    }
  ] as TStringFunc[])

  addVariant('overlay-layout-open', [
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.overlay-body-open.${e(`overlay-layout-open${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.overlay-body-open .${e(`overlay-layout-open${separator}${className}`)}`
      })
    }
  ] as TStringFunc[])

  addVariant('overlay-backdrop-open', [
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.overlay-backdrop.${e(`overlay-backdrop-open${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.overlay-backdrop .${e(`overlay-backdrop-open${separator}${className}`)}`
      })
    }
  ] as TStringFunc[])

  addVariant('scrollspy-active', (({ modifySelectors, separator }: IAddVariantOptions) => {
    modifySelectors(({ className }) => {
      return `.active.${e(`scrollspy-active${separator}${className}`)}`
    })
  }) as TStringFunc)

  addVariant('carousel-active', [
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.active.${e(`carousel-active${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.active .${e(`carousel-active${separator}${className}`)}`
      })
    }
  ] as TStringFunc[])

  addVariant('carousel-disabled', [
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.disabled.${e(`carousel-disabled${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.disabled .${e(`carousel-disabled${separator}${className}`)}`
      })
    }
  ] as TStringFunc[])

  addVariant('carousel-dragging', [
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.dragging.${e(`carousel-dragging${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.dragging .${e(`carousel-dragging${separator}${className}`)}`
      })
    }
  ] as TStringFunc[])

  addVariant('selected', [
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.selected.${e(`selected${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.selected .${e(`selected${separator}${className}`)}`
      })
    }
  ] as TStringFunc[])

  addVariant('select-disabled', [
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.disabled.${e(`select-disabled${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.disabled .${e(`select-disabled${separator}${className}`)}`
      })
    }
  ] as TStringFunc[])

  addVariant('select-active', [
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.active.${e(`select-active${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.active .${e(`select-active${separator}${className}`)}`
      })
    }
  ] as TStringFunc[])

  addVariant('select-opened', [
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.opened.${e(`select-opened${separator}${className}`)}`
      })
    }
  ] as TStringFunc[])

  addVariant('input-number-disabled', [
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.disabled.${e(`input-number-disabled${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.disabled .${e(`input-number-disabled${separator}${className}`)}`
      })
    }
  ] as TStringFunc[])

  addVariant('pin-input-active', [
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.active.${e(`pin-input-active${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.active .${e(`pin-input-active${separator}${className}`)}`
      })
    }
  ] as TStringFunc[])

  addVariant('password-active', [
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.active.${e(`password-active${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.active .${e(`password-active${separator}${className}`)}`
      })
    }
  ] as TStringFunc[])

  addVariant('stepper-active', [
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.active.${e(`stepper-active${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.active .${e(`stepper-active${separator}${className}`)}`
      })
    }
  ] as TStringFunc[])

  addVariant('stepper-success', [
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.is-valid.${e(`stepper-success${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.is-valid .${e(`stepper-success${separator}${className}`)}`
      })
    }
  ] as TStringFunc[])

  addVariant('stepper-completed', [
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.completed.${e(`stepper-completed${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.completed .${e(`stepper-completed${separator}${className}`)}`
      })
    }
  ] as TStringFunc[])

  addVariant('stepper-error', [
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.is-invalid.${e(`stepper-error${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.is-invalid .${e(`stepper-error${separator}${className}`)}`
      })
    }
  ] as TStringFunc[])

  addVariant('stepper-processed', [
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.processed.${e(`stepper-processed${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.processed .${e(`stepper-processed${separator}${className}`)}`
      })
    }
  ] as TStringFunc[])

  addVariant('stepper-disabled', [
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.disabled.${e(`stepper-disabled${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.disabled .${e(`stepper-disabled${separator}${className}`)}`
      })
    }
  ] as TStringFunc[])

  addVariant('stepper-skipped', [
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.skipped.${e(`stepper-skipped${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.skipped .${e(`stepper-skipped${separator}${className}`)}`
      })
    }
  ] as TStringFunc[])

  addVariant('strong-password', [
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.passed.${e(`strong-password${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.passed .${e(`strong-password${separator}${className}`)}`
      })
    }
  ] as TStringFunc[])

  addVariant('strong-password-accepted', [
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.accepted.${e(`strong-password-accepted${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.accepted .${e(`strong-password-accepted${separator}${className}`)}`
      })
    }
  ] as TStringFunc[])

  addVariant('strong-password-active', [
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.active.${e(`strong-password-active${separator}${className}`)}`
      })
    }
  ] as TStringFunc[])

  addVariant('combo-box-active', [
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.active .${e(`combo-box-active${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.active.${e(`combo-box-active${separator}${className}`)}`
      })
    }
  ] as TStringFunc[])

  addVariant('combo-box-selected', [
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.selected .${e(`combo-box-selected${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.selected.${e(`combo-box-selected${separator}${className}`)}`
      })
    }
  ] as TStringFunc[])

  addVariant('combo-box-has-value', [
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.has-value .${e(`combo-box-has-value${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.has-value.${e(`combo-box-has-value${separator}${className}`)}`
      })
    }
  ] as TStringFunc[])

  addVariant('combo-box-tab-active', [
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.active.${e(`combo-box-tab-active${separator}${className}`)}`
      })
    }
  ] as TStringFunc[])

  // Datatables.net
  addVariant('datatable-ordering-asc', [
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.dt-ordering-asc .${e(`datatable-ordering-asc${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.dt-ordering-asc.${e(`datatable-ordering-asc${separator}${className}`)}`
      })
    }
  ] as TStringFunc[])

  addVariant('datatable-ordering-desc', [
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.dt-ordering-desc .${e(`datatable-ordering-desc${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.dt-ordering-desc.${e(`datatable-ordering-desc${separator}${className}`)}`
      })
    }
  ] as TStringFunc[])

  // Sortable.js
  addVariant('dragged', (({ modifySelectors, separator }: IAddVariantOptions) => {
    modifySelectors(({ className }) => {
      return `.dragged.${e(`dragged${separator}${className}`)}`
    })
  }) as TStringFunc)

  // noUiSlider
  addVariant('range-slider-disabled', [
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.disabled .${e(`range-slider-disabled${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.disabled.${e(`range-slider-disabled${separator}${className}`)}`
      })
    }
  ] as TStringFunc[])

  // Dropzone
  addVariant('file-upload-complete', [
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.complete .${e(`file-upload-complete${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }: IAddVariantOptions) => {
      modifySelectors(({ className }) => {
        return `.complete.${e(`file-upload-complete${separator}${className}`)}`
      })
    }
  ] as TStringFunc[])
})
