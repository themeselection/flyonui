// regext for all flyonui colors
// ((primary|secondary|accent|neutral)(-content|))|((info|success|warning|error)(-content|))|(base)(-100|-200|-300|-content)

// regex for all Tailwind CSS color utilities
// (bg|to|via|from|text|ring|fill|caret|stroke|border|divide|accent|shadow|outline|decoration|placeholder|ring-offset)

module.exports = [
  {
    pattern: /.*/
  },
  {
    // responsive utilites for flyonui responsive modifiers
    pattern: /.(sm|md|lg|xl)/,
    variants: ['sm', 'md', 'lg', 'xl']
  },
  {
    // responsive utilites for flyonui components
    pattern: /(modal-(middle|top|bottom)|card-(side|compact)|(stats|divider)-(horizontal|vertical))/,
    variants: ['sm', 'md', 'lg', 'xl']
  },
  {
    // color utilities for flyonui colors
    pattern:
      /(bg|to|via|from|text|fill|stroke|border|outline)-((primary|secondary|accent|neutral)(-content|))|((info|success|warning|error)(-content|))|(base)(-100|-200|-300|-content)/,
    variants: [
      // "first",
      // "last",
      // "odd",
      // "even",
      // "visited",
      // "checked",
      // "empty",
      // "read-only",
      // "group-hover",
      // "group-focus",
      // "focus-within",
      'hover',
      'focus'
      // "focus-visible",
      // "active",
      // "disabled",
    ]
  }
]
