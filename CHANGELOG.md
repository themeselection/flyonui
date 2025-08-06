# Changelog 

All notable changes to this project will be documented in this file.

## [2.4.0] - [06-August-2025]

## Added

**Sidebar** : [Collapsible sidebar](https://flyonui.com/docs/navigations/sidebar/#collapsible-sidebar)

**Sidebar** : [collapsible with mini sidebar](https://flyonui.com/docs/navigations/sidebar/#collapsible-to-mini-icon-sidebar)

**Dropdown** : [Scope Window](https://flyonui.com/docs/overlays/dropdown/#scope-window)

## Updated

- **Updated:** [Preline V3.2.0](https://preline.co/docs/changelog.html#v3_2_0)

## Fixes and Improvements

- **Themes:** Refined `--color-neutral` in the Corporate theme for better consistency.
- **Improvements:** Introduced a centralized [Accessibility Management](https://flyonui.com/docs/getting-started/accessibility/) system with full keyboard navigation and interaction support across all UI components.
- **Popover:** Removed the `--interaction` class option and focus example.
- **Menu:** Fixed hover issue with `dropdown-active` when used in menus.

## [2.3.1] - [17-July-2025]

## Updated

- **Modal & Drawer:** Adjusted shadow color for improved visual consistency.

## [2.3.0] - [15-July-2025]

## Added

- **AI and MCP Setup:**
  - Included guidelines for setting up the Context7 MCP server for FlyonUI. For details, refer to the [AI and MCP Setup](https://flyonui.com/docs/ai-mcp-setup/code-editors/) documentation.
  - Integrated the [Copy Prompt](https://flyonui.com/docs/ai-mcp-setup/copy-prompt/) functionality into the documentation to streamline the process of copying code snippets, enabling faster implementation with AI Editor.

- **New Themes:**
  - Claude
  - Pastel
  - Perplexity
  - Spotify
  - Vs Code

- **Skeleton Component:** Introduced a new [skeleton-striped](https://flyonui.com/docs/components/skeleton/#striped-skeleton) variant.

## Updated

- **Updated:** [Preline V3.0.1](https://preline.co/docs/changelog.html#v3_0_1)
- **Switch:** Border-radius now uses `var(--radius-selector)` for enhanced consistency.
- **Radial Progress:** Circular background color has been refined.
- **gradient-bg:** Added a configurable gradient angle variable.

## Fixes and Improvements

- **Class Specificity:** Addressed specificity conflicts in Avatar, Breadcrumb, Drawer, Pin Input, and Stat components.
- **Avatar:** CSS now supports usage with `<span>` elements for button integrations.
- **Modals:** Resolved animation delay issue when closing modals.
- **Indicator:** Corrected typo error in class naming.
- **Dropdown:** Removed unnecessary hover effect from active states.
- **Menu:** Improved compatibility between menu styles and accordion behavior.

## [2.2.0] - [21-May-2025]

## Updated

- **Updated:** [Preline V3.1.1](https://preline.co/docs/changelog.html#v3_1_0)

## Fixes and Improvements

- **Themes:** Updated the `radius-selector` variable for the Valorant theme and `--color-accent` variable in Black theme.
- **Switch:** Updated default switch color.
- **FlatPickr:** Fixed styling for the range date picker.
- **Form Element:** Adjusted the opacity of disabled states to 50%.
- **Badge:** Fine-tuned horizontal padding across all badge sizes.
- **Select:** Added hover state for better interactivity.
- **Accordion:** Reduced shadow depth to `sm` for a cleaner look.
- **Carousel:** Updated navigation button styles for improved usability.
- **Footer:** Resolved specificity issue with the `footer-title` class.
- **Fixed:** Keep selected value when building options of HSSelect [PR #93](https://github.com/themeselection/flyonui/pull/93)
- **Updated** the `package.json` configuration by setting `"type"` to `"module"`.
- **Renamed** the files from `"webpack.config.js"` to `"webpack.config.cjs"`, `"webpack.config.mjs.js"` to `"webpack.config.mjs.cjs"`, and `"dts-config.js"` to `"dts-config.cjs"` to accommodate `"type": "module"`.

## [2.1.0] - [07-April-2025]

## New Theme

- Ghibli

## New Framework Guide

- Added framework guide for [11ty](https://flyonui.com/framework-integrations/eleventy/)

## Fixes and Improvements

- **Fixed:** Floating textarea placeholder and label positioning issue when using both trailing and leading icons. [PR #83](https://github.com/themeselection/flyonui/pull/83)
- Improves `neutral-content` color in light theme and `neutral` color in luxury theme.

## [2.0.1] - [31-March-2025]

## New in Components
- **Card:** Introduced `card-alert` class to style alert messages inside a card with rounded corners.


## Updated

- **Framework Guides:** The framework integration documentation has been updated for all frameworks.

## Fixes and Improvements

- **Dropdown:**
  - Removed unused `label` class.

- **Tabs:**
  - Resolved the `tab-lifted` warning during the build process.

## [2.0.0] - [24-March-2025]

For a detailed overview of the changes, please refer to the [Upgrade Guide](https://flyonui.com/docs/getting-started/upgrade/).
link

## New DaisyUI Components

- [Filter](https://flyonui.com/docs/forms/filter/)
- [Status](https://flyonui.com/docs/components/status/)

## New Themes

- **Black**
- **Mintlify**
- **Shadcn**
- **Slack**
- **Valorant**

## New in Components
- **Accordion:**
  - Added new option `[--keep-one-open:*]`.
  - Added new new events `on:beforeOpen` and `on:beforeClose`.

- **Advance Select:**
  - Added new option `:minSearchLength` and [example](https://flyonui.com/docs/advanced-forms/advanced-select/#minimum-search-length/) for it.

- **Alert:**
  - [Dashed Alerts](https://flyonui.com/docs/components/alert/#dashed-alerts/)
  - [Responsive Alert](https://flyonui.com/docs/components/alert/#responsive-alert/) 

- **Apex Chart:**
  - [Candle Stick Chart](https://flyonui.com/docs/third-party-plugins/apex-charts/#candle-stick-chart/)

- **Badge:**
  - [Dashed Badge](https://flyonui.com/docs/components/badges/#dashed-badges/)
  - **New badge sizes:** `badge-md` (default) and `badge-xl` for more badge variety.
  - Added variable structure, creating custom badge became easy.

- **Button:**
  - **New button sizes:** `btn-md` (default) and `btn-xl` for more button variety.
  - Added variable structure, creating custom button became easy.

- **Card:**
  - New `card-border` style that adapts the border width from the theme.
  - **New card sizes:** `card-xs`, `card-sm`, `card-md` (default), `card-lg` and `card-xl`.

- **Checkbox:**
  - **New checkbox sizes:** `checkbox-md` (default) and `checkbox-xl`
  - Improved the checkmark icon and its animation.

- **Dropdown:**
  - Added new options `[--scope:*]`, `[--has-autofocus:*]` and `[--gpu-acceleration:*]`.
  
- **File Input:**
  - **New file input sizes:** `file-input-md` (default) and `file-input-xl`
  - Adjusted padding and font size for a more polished look.

- **Input:**
  - **New input sizes:** `input-md` (default) and `input-xl`
  - Added helper-text for additional guidance on inputs.

- **Loading:**
  - **New loading sizes:** `loading-md` (default) and `loading-xl`.

- **Menu:**
  - **New menu sizes:** `menu-md` (default) and `menu-xl`.

- **Modal:**
  - Added `modal-dialog-md` as a default modal size.
  - Added new options `[--auto-close-equality-type:*]` and `[--has-dynamic-z-index:*]`.

- **Pin Input:**
  - **New pin input sizes:** `pin-input-xs` , `pin-input-md` (default) and `pin-input-xl`.
  
- **Progress:**
  - Added `progress-horizontal` for direction.

- **Radio:**
  - **New radio sizes:** `radio-md` (default) and `radio-xl`.

- **Range:**
  - Added `range-xl` class for range size.

- **Select:**
  - [Select Group](https://flyonui.com/docs/forms/select/#select-group/)
  - **New select sizes:** `select-md` (default) and `select-xl` for more select variety.
  - Added new options `data-tabs` and `:eventType`.

- **Stack:**
  - Added support for stack directions `stack-start` and `stack-end`.

- **Stat:**
  - Added `stats-border` for bordered variant of stat and `stats-horizontal` or default direction.

- **Switch:**
  - **New switch sizes:** `switch-md` (default) and `switch-xl`.

- **Table:**
  - Added `table-xl` class for table size.
  
- **Tabs:**
  - **New tabs sizes:** `tab-md` (default) and `tab-xl`.

- **Textarea:**
  - [Textarea Group](https://flyonui.com/docs/forms/textarea/#textarea-group/)
  - **New textarea sizes:** `textarea-xs` , `textarea-sm` , `textarea-md` (default), `textarea-lg` and `textarea-xl` for more textarea variety.

## Added
- Introduce new `gradient-bg` class for gradient background with semantic class support like `gradient-bg-primary` etc.
- Use [tailwindcss-intersect](https://github.com/heidkaemper/tailwindcss-intersect) plugin for scroll-triggered animations.

## Breaking Changes

- The installation steps for third-party components have been updated.

- **Avatar:**
  - Rename `placeholder` with `avatar-placeholder` , `online-top` with `avatar-online-top`, `online-bottom` with `avatar-online-bottom`, `away-top` with `avatar-away-top`, `away-bottom` with `avatar-away-bottom`, `busy-top` with `avatar-busy-top`, `busy-bottom` with `avatar-busy-bottom`, `offline-top` with `avatar-offline-top`, `offline-bottom` with `avatar-offline-bottom`

- **Dropdown:**
  - Renamed `active` to `dropdown-active` and `disabled` to `dropdown-disabled` of dropdown items to maintain the class consitency.

- **Input:**
  - Removed `input-group`. Grouping can now be achieved by wrapping inputs with the `input` class. (Structure affected components: Input Number and Toggle Password)

- **Input Number:**
  - Structure impacted due to the removal of the `input-group`.

- **Menu:**
  - Renamed `disabled` class to `menu-disabled`, `active` class to `menu-active` and `focus` class to `menu-focus`.

- **Phone:**
  - Renamed `camera` class to `mockup-phone-camera` and `display` class to `mockup-phone-display`.
  - Removed the use of `artboard` in phone components.

- **Range:**
  - Rename variable name to `--range-color` from `--range-shdw`.

- **Stack:**
  - Instead of setting the width and height of the stack items, use width and height for the stack itself.

- **Table:**
  - Renamed `hover` class to `row-hover` and `active` class to `row-active`.

- **Toggle Password:**
  - Structure impacted due to the removal of the `input-group`.

## Removed

- The classes `vertical-scrollbar`, `horizontal-scrollbar`, and `rounded-scrollbar` has been removed.

- **Alert:**
  - Removed `alert-neutral` color.

- **Artboard:**
  - Removed all `artboard-*` and `phone-*` classes. These classes only set the width and height of the div, and now we recommend using Tailwind CSS `w-*` and `h-*` classes for better control and flexibility.

- **Badge:**
  - Removed `badge-neutral` color.

- **Button:**
  - Removed `btn-neutral` color.

- **Card:**
  - Removed `card-compact` instead use `card-sm` or any other card sizes.

- **Drawer:**
  - Removed `drawer-close` class.

- **Dropdown:**
  - Removed `[--skidding:*]` option.

- **Input:**
  - Removed `input-group`, `input-group-filled`, `input-group-text`, `input-floating-label`, `input-filled-label`, `input-filled-focused`, `label-text-alt` and `input-filled` variant.

- **Progress:**
  - Removed `progress-neutral` color.

- **Radio:**
  - The `radio-inset-{size}` and `radio-inset-{semantic-color}` classes have been removed. Now, `radio-inset` is used as a style class instead of a component class.

- **Select:**
  - Removed `select-filled` variant.

- **Textarea:**
  - Removed `textarea-filled` variant.

- **Timeline:**
  - Removed `timeline-trimmed` class.

## Updated

- **Updated:** [Tailwind V4.0.0](https://tailwindcss.com/docs/upgrade-guide)

- **Updated:** [DaisyUI V5.0.0](https://daisyui.com/docs/changelog/)

- **Updated:** [Preline V3.0.0](https://preline.co/docs/changelog.html#v3_0_0)

- Updated how to use semantic colors in JS files from `'oklch(var(--bc) / 0.4)'` to `'color-mix(in oklab, var(--color-base-content) 40%, transparent)'`.

- **Alert:**
  - The neutral alert is now the default.

- **Badge:**
  - The neutral badge is now the default.
  - Adjusted the badge sizes based on a new scale for better visual consistency.

- **Button:**
  - The neutral button is now the default.
  - Button sizes have been adjusted to fit the new design scale.

- **Checkbox:**
  - Adjusted the size scale to better align with other components.

- **Dropdown:**
  - [Floating UI](https://floating-ui.com/) has now completely replaced Popper.js across all plugins.

- **File input:**
  - Adjusted padding and font size for a more polished look.

- **Input:**
  - Updated `input-floating` structure.
  - Adjusted size scale for better uniformity across components.

- **Keyboard:**
  - Adjusted `kbd` height for all sizes.

- **Link:**
  - Update `font-weight:500` as default.

- **Modal:**
  - Updated `backdrop` color to `base-300/60`.

- **Radio:**
  - Adjusted the size scale to better align with other components.

- **Range:**
  - Adjusted the size scale to better align with other components.

- **Select:**
  - Updated `select-floating` structure.
  - Adjusted size scale for better uniformity across components.

- **Sidebar:**
  - The structure for collapsible menu/sidebar has been updated.

- **Textarea:**
  - Updated `textarea-floating` structure.
  - Adjusted size scale for better uniformity across components.

- **Tooltip/Popover:**
  - [Floating UI](https://floating-ui.com/) has now completely replaced Popper.js across all plugins.

## Fixes and Improvements

- **Advance Select:**
  - Fixed `advanced-select` search bar background not correct with themes. [#Issues/57](https://github.com/themeselection/flyonui/issues/57)

- **Diff:**
  - Fixed Firefox lag issue.

- **Drawer:**
  - Fixed edge cuts off in the narrow devices. [#Issues/38](https://github.com/themeselection/flyonui/issues/38)

- **Input:**
  - Fixed floating input label width problem. [#Issues/56](https://github.com/themeselection/flyonui/issues/56)

- **Loading:**
  - Fixed a bug where Safari sometimes froze the animation.

- **Menu:**
  - Fixed Menu title will have an active effect by click when it is not plain text. [#Issues/54](https://github.com/themeselection/flyonui/issues/54)

- **Table:**
  - Fixed table border bottom issue with single row. [#Issues/60](https://github.com/themeselection/flyonui/issues/60)
