module.exports = {
  borderRadius: {
    tooltip: 'var(--rounded-tooltip, 0.25rem)',
    btn: 'var(--rounded-btn, 0.375rem)',
    box: 'var(--rounded-box, 0.5rem)'
  },
  opacity: {
    22: '0.22',
    26: '0.26',
    32: '0.32',
    34: '0.34',
    38: '0.38',
    42: '0.42'
  },

  boxShadow: {
    sm: '0 1px 2px 0 theme(colors.base-shadow/0.22)',
    DEFAULT: '0 2px 4px 0 theme(colors.base-shadow/0.26)',
    md: '0 4px 6px -1px theme(colors.base-shadow/0.2)',
    lg: '0 10px 15px -2px theme(colors.base-shadow/0.34)',
    xl: '0 20px 25px -6px theme(colors.base-shadow/0.38)',
    '2xl': '0 16px 30px -6px theme(colors.base-shadow/0.42)',
    inner: 'inset 0 2px 4px 0 theme(colors.base-shadow/0.26)',
    none: 'none'
  },

  spacing: {
    4.5: '1.125rem',
    7.5: '1.875rem',
    9.5: '2.375rem',
    11.5: '2.875rem',
    13: '3.25rem',
    15: '3.75rem',
    25: '6.25rem'
  },

  fontSize: {
    base: ['1rem', { lineHeight: '1.375rem' }],
    lg: ['1.125rem', { lineHeight: '1.5rem' }],
    xl: ['1.25rem', { lineHeight: '1.625rem' }]
  }
}
