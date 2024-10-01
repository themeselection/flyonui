/*
 * Plugin
 * @version: 2.4.1
 * @author: Preline Labs Ltd.
 * @requires: tailwindcss ^3.4.1
 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
 * Copyright 2024 Preline Labs Ltd.
 */

const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addVariant, e }) {
  addVariant('dropdown-open', [
    ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.dropdown.open > .${e(`dropdown-open${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.dropdown.open .dropdown-toggle .${e(`dropdown-open${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.dropdown.open > .dropdown-menu > .${e(`dropdown-open${separator}${className}`)}`
      })
    }
  ])

  addVariant('removing', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.removing.${e(`removing${separator}${className}`)}`
    })
  })

  addVariant('tooltip-shown', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.tooltip.show .${e(`tooltip-shown${separator}${className}`)}`
    })
  })

  addVariant('accordion-item-active', [
    ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.accordion-item.active.${e(`accordion-item-active${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.accordion-item.active > .${e(`accordion-item-active${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.accordion-item.active > .accordion-toggle .${e(`accordion-item-active${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.accordion-item.active > .accordion-heading > .accordion-toggle .${e(
          `accordion-item-active${separator}${className}`
        )}`
      })
    },
    ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.accordion-item.active > .accordion-toggle.${e(`accordion-item-active${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.accordion-item.active > .accordion-heading > .accordion-toggle.${e(
          `accordion-item-active${separator}${className}`
        )}`
      })
    }
  ])

  addVariant('accordion-selected', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.accordion-item .selected.${e(`accordion-selected${separator}${className}`)}`
    })
  })

  addVariant('collapse-open', [
    ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.collapse.open .${e(`collapse-open${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.collapse.open.${e(`collapse-open${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.collapse-toggle.open .${e(`collapse-open${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.collapse-toggle.open.${e(`collapse-open${separator}${className}`)}`
      })
    }
  ])

  addVariant('active-tab', [
    ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `[data-tab].active.${e(`active-tab${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `[data-tab].active .${e(`active-tab${separator}${className}`)}`
      })
    }
  ])

  addVariant('overlay-open', [
    ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.open.${e(`overlay-open${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.open .${e(`overlay-open${separator}${className}`)}`
      })
    }
  ])

  addVariant('overlay-layout-open', [
    ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.overlay-body-open.${e(`overlay-layout-open${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.overlay-body-open .${e(`overlay-layout-open${separator}${className}`)}`
      })
    }
  ])

  addVariant('overlay-backdrop-open', [
    ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.overlay-backdrop.${e(`overlay-backdrop-open${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.overlay-backdrop .${e(`overlay-backdrop-open${separator}${className}`)}`
      })
    }
  ])

  addVariant('scrollspy-active', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.active.${e(`scrollspy-active${separator}${className}`)}`
    })
  })

  addVariant('carousel-active', [
    ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.active.${e(`carousel-active${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.active .${e(`carousel-active${separator}${className}`)}`
      })
    }
  ])

  addVariant('carousel-disabled', [
    ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.disabled.${e(`carousel${separator}disabled${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.disabled .${e(`carousel${separator}disabled${separator}${className}`)}`
      })
    }
  ])

  addVariant('selected', [
    ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.selected.${e(`selected${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.selected .${e(`selected${separator}${className}`)}`
      })
    }
  ])

  addVariant('select-disabled', [
    ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.disabled.${e(`select-disabled${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.disabled .${e(`select-disabled${separator}${className}`)}`
      })
    }
  ])

  addVariant('select-active', [
    ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.active.${e(`select-active${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.active .${e(`select-active${separator}${className}`)}`
      })
    }
  ])

  addVariant('select-opened', [
    ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.opened.${e(`select-opened${separator}${className}`)}`
      })
    }
  ])

  addVariant('input-number-disabled', [
    ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.disabled.${e(`input-number-disabled${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.disabled .${e(`input-number-disabled${separator}${className}`)}`
      })
    }
  ])

  addVariant('pin-input-active', [
    ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.active.${e(`pin-input-active${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.active .${e(`pin-input-active${separator}${className}`)}`
      })
    }
  ])

  addVariant('password-active', [
    ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.active.${e(`password-active${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.active .${e(`password-active${separator}${className}`)}`
      })
    }
  ])

  addVariant('stepper-active', [
    ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.active.${e(`stepper-active${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.active .${e(`stepper-active${separator}${className}`)}`
      })
    }
  ])

  addVariant('stepper-success', [
    ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.is-valid.${e(`stepper-success${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.is-valid .${e(`stepper-success${separator}${className}`)}`
      })
    }
  ])

  addVariant('stepper-completed', [
    ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.completed.${e(`stepper-completed${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.completed .${e(`stepper-completed${separator}${className}`)}`
      })
    }
  ])

  addVariant('stepper-error', [
    ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.is-invalid.${e(`stepper-error${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.is-invalid .${e(`stepper-error${separator}${className}`)}`
      })
    }
  ])

  addVariant('stepper-processed', [
    ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.processed.${e(`stepper-processed${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.processed .${e(`stepper-processed${separator}${className}`)}`
      })
    }
  ])

  addVariant('stepper-disabled', [
    ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.disabled.${e(`stepper-disabled${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.disabled .${e(`stepper-disabled${separator}${className}`)}`
      })
    }
  ])

  addVariant('stepper-skipped', [
    ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.skipped.${e(`stepper-skipped${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.skipped .${e(`stepper-skipped${separator}${className}`)}`
      })
    }
  ])

  addVariant('strong-password', [
    ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.passed.${e(`strong-password${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.passed .${e(`strong-password${separator}${className}`)}`
      })
    }
  ])

  addVariant('strong-password-accepted', [
    ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.accepted.${e(`strong-password-accepted${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.accepted .${e(`strong-password-accepted${separator}${className}`)}`
      })
    }
  ])

  addVariant('strong-password-active', [
    ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.active.${e(`strong-password-active${separator}${className}`)}`
      })
    }
  ])

  addVariant('combo-box-active', [
    ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.active .${e(`combo-box-active${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.active.${e(`combo-box-active${separator}${className}`)}`
      })
    }
  ])

  addVariant('combo-box-selected', [
    ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.selected .${e(`combo-box-selected${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.selected.${e(`combo-box-selected${separator}${className}`)}`
      })
    }
  ])

  addVariant('combo-box-has-value', [
    ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.has-value .${e(`combo-box-has-value${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.has-value.${e(`combo-box-has-value${separator}${className}`)}`
      })
    }
  ])

  addVariant('combo-box-tab-active', [
    ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.active.${e(`combo-box-tab-active${separator}${className}`)}`
      })
    }
  ])

  addVariant('file-upload-complete', [
    ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.complete .${e(`file-upload-complete${separator}${className}`)}`
      })
    },
    ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.complete.${e(`file-upload-complete${separator}${className}`)}`
      })
    }
  ])
})
