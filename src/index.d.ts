import type plugin from 'tailwindcss/plugin'

declare const flyonui: ReturnType<typeof plugin>

export default flyonui

// todo - the keys of a theme could be typed here? see: https://flyonui.com/docs/themes/#-5
/**
 * @link https://flyonui.com/docs/themes/#-4
 */
type CustomTheme = Record<string, Record<string, string>>

/**
 * https://flyonui.com/docs/themes/#
 */
type Theme = 'light' | 'dark' | 'gourmet' | 'corporate' | 'luxury' | 'soft'

interface FlyonUIConfig {
  /**
   * If it's true, all themes will be included. If it's false, only light and dark themes will be available.
   * If it's an array, only themes in the array will be included and the first theme will be the default theme.
   * Read more about [themes](https://flyonui.com/docs/themes/).
   *
   * @default false
   */
  themes?: boolean | (Theme | CustomTheme)[]
  /**
   * Allows us to pick another theme for the system's auto dark mode. By default, dark theme
   * (or a custom theme named dark) will be the default theme if no theme is specified and
   * the user is using dark mode on their system.
   * With this config, you can set another theme to be the default dark mode theme.
   *
   * @default 'dark'
   */
  darkTheme?: string
  /**
   * If it's true, a [few base styles](https://github.com/themeslection/flyonui.git/blob/main/src/base) will be added.
   *
   * @default true
   */
  base?: boolean
  /**
   * If it's true, components will have colors and style, so you won't need to design anything.
   * If it's false, components will have no color and no visual style, so you can design your own style
   * on a basic skeleton.
   *
   * @default true
   */
  styled?: boolean
  /**
   * If it's true, [responsive and utility classes](https://github.com/themeslection/flyonui.git/tree/main/src/utilities) will be added.
   *
   * @default true
   */
  utils?: boolean
  /**
   * If it's true, Vendor style will be included
   *
   * @default false
   */
  vendors?: boolean
  /**
   * If it's true, your theme will be right-to-left. You need to add `dir='rtl'` to your body tag.
   * If you're using flyonui with RTL option, I suggest using [tailwindcss-flip](https://github.com/cvrajeesh/tailwindcss-flip)
   * plugin to flip all your Tailwind utilities automatically.
   *
   * @default false
   */
  rtl?: boolean
  /**
   * Adds a prefix to class name for all flyonui classes (including component classes, modifier classes and responsive
   * classes). For example, `btn` will become `prefix-btn`. If you're using a second CSS library that has similar
   * class names, you can use this config to avoid conflicts. Utility classes like color names (e.g. `bg-primary`)
   * or border-radius (e.g. `rounded-box`) will not be affected by this config because they're being added
   * as extensions to Tailwind CSS classes. If you use flyonui `prefix` option (like `flyon-`) and
   * Tailwind CSS `prefix` option (like `tw-`) together, classnames will be prefixed like
   * this: `tw-flyon-btn`.
   *
   * @default ''
   */
  prefix?: string
  /**
   * If it's true, flyonui shows logs in the terminal while CSS is building.
   *
   * @default true
   */
  logs?: boolean
  /**
   * The element that receives theme color CSS variables
   *
   * @default ':root'
   */
  themeRoot?: string
}

export type { FlyonUIConfig as Config, Theme, CustomTheme }
