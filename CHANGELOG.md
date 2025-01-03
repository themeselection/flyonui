## [1.3.0] - [2025-01-03]

## Added 

**Combo Box** : [Minimum search Length](https://flyonui.com/docs/advanced-forms/combo-box/#minimum-search-length)

**Datatables** : [Multiple Controls](https://flyonui.com/docs/third-party-plugins/datatables/#multiple-controls)

## Updated

- Preline v2.7.0
- Updated divider component border-color from `base-content/10` to `base-content/20`
- Updated heading color from `text-base-content/90` to `text-base-content`
- You can now invoke overlay methods directly on the overlay itself without linking it to any button. The previous functionality is retained for backward compatibility.

## Fixes and Improvements

- Added: A new parameter `optionAllowEmptyOption` has been added for Advanced Select
- Added: A new parameter `minSearchLength` has been added for Combo Box
- Added: Enhanced support for multiple `prev` and `next` elements, each with its own event listeners, ensuring proper initialization and cleanup in the destroy method. Improved event listener management for `search` and `pagination` controls to prevent memory leaks and support dynamic elements.
- Fixed: Removed `flyonui.mjs` as it was creating issues while using `import`
- Fixed: Improve card style specificity
- Fixed: Typo in select and textarea. [[PR #30]](https://github.com/themeselection/flyonui/pull/30)
- Fixed: Improved label styles for better usability in form elements.
- Fixed: `setValue` method functionality with tags in Advanced Select.

## [1.2.0] - [2024-12-11]

## Added

**New Plugins**
 - Plugins: [Tree View](https://flyonui.com/docs/components/tree-view/)
 - Plugins: [Advanced Range Slider](https://flyonui.com/docs/third-party-plugins/advance-range-slider/)
 - Plugins: [Datatable](https://flyonui.com/docs/third-party-plugins/datatable/)

**New Components**
 - Third-Party Plugins: [Datatable](https://flyonui.com/docs/third-party-plugins/datatable/)
 - Third-Party Plugins: [Advanced Range Slider](https://flyonui.com/docs/third-party-plugins/advance-range-slider/)
 - Third-Party Plugins: [Drag and Drop (Sortable.js)](https://flyonui.com/docs/third-party-plugins/drag-and-drop/)
 - Third-Party Plugins: [Animation](https://flyonui.com/docs/third-party-plugins/animation/)
 - Navigations: [Sidebar](https://flyonui.com/docs/navigations/sidebar/)
 - Overlays: [Context Menu](https://flyonui.com/docs/overlays/context-menu/)
 
**Tree View:**
 - [Multiple selection](https://flyonui.com/docs/components/tree-view/#default)
 - [Draggable](https://flyonui.com/docs/components/tree-view/#draggable)
 - [Draggable and auto collapse one level group](https://flyonui.com/docs/components/tree-view/#draggable-and-close-active-element)
 - [Checkbox based](https://flyonui.com/docs/components/tree-view/#checkbox)
 
**Carousel:**
 - [Multiple slides](https://flyonui.com/docs/components/carousel/#multi-slide-carousel)
 - [Centered](https://flyonui.com/docs/components/carousel/#centered)
 - [Draggable](https://flyonui.com/docs/components/carousel/#draggable-slides)
 - [Snap point](https://flyonui.com/docs/components/carousel/#snap-point-scrolling)
 - [Auto height](https://flyonui.com/docs/components/carousel/#auto-height)
 - [Current state info](https://flyonui.com/docs/components/carousel/#info)
 - [Thumbnails (horizontal)](https://flyonui.com/docs/components/carousel/#thumbs-gallery-horizontal)
 - [Thumbnails (vertical)](https://flyonui.com/docs/components/carousel/#thumbs-gallery-vertical)
 - [isRtl](https://flyonui.com/docs/components/carousel/#isrtl)
 
**Drawer**
 - [Scoped Based drawer](https://flyonui.com/docs/overlays/drawer/#scoped-based-drawer)

**Advanced Select:**
 - [Fixed Position](https://flyonui.com/docs/advanced-forms/advanced-select/#fixed-position)
 - [Static search limit](https://flyonui.com/docs/advanced-forms/advanced-select/#search-result-limit)
 - [Direct match searching Off](https://flyonui.com/docs/advanced-forms/advanced-select/#direct-match-searching-off)
 - [Generate select according to the remote data (single)](https://flyonui.com/docs/advanced-forms/advanced-select/#remote-data-selection)
 - [Multiple (remote data)](https://flyonui.com/docs/advanced-forms/advanced-select/#remote-data-selection-multiple-options)
 - [Tags (remote data)](https://flyonui.com/docs/advanced-forms/advanced-select/#remote-data-selection-with-removable-tags)
 - [Option template (remote data)](https://flyonui.com/docs/advanced-forms/advanced-select/#multiple-selection-with-option-template-remote-data)
 - [Conditional counter (remote data)](https://flyonui.com/docs/advanced-forms/advanced-select/#multiple-with-conditional-counter-remote-data)
 - [Custom template with avatars (remote data)](https://flyonui.com/docs/advanced-forms/advanced-select/#custom-template-with-avatars-remote-data)
 - [Modal example with overflow:hidden;](https://flyonui.com/docs/advanced-forms/advanced-select/#modal-example-with-overflowhidden)

**Combox**
 - [Json example (based on API pathes)](https://flyonui.com/docs/advanced-forms/combo-box/#json-example-based-on-api-pathes)
 
**Theme Generator**

**New Variant in plugins : Destroy and Reinitialize**

**Helpers**
- [ApexChart helper](https://flyonui.com/docs/third-party-plugins/apex-charts/)
- [Clipboard helper](https://flyonui.com/docs/third-party-plugins/clipboard/) 
 
## Updated

- Preline V2.6.0
- Updated button outlined variant [#Issue/20](https://github.com/themeselection/flyonui/issues/20)
- Update file upload disable state styling [#Issue/22](https://github.com/themeselection/flyonui/issues/22)
- Update `stat-value` font-size in stat component
- Update menu-item active state style [#issue/26](https://github.com/themeselection/flyonui/issues/26)
- Update timeline style
- Update style for default range slider
- The class options in Clipboard have been updated for consistency with Preline: `copy-clipboard` is now `js-clipboard`, `copy-clipboard-default` is now `js-clipboard-default`, `copy-clipboard-success` is now `js-clipboard-success`, and `copy-clipboard-success-text` is now `js-clipboard-success-text`.

## Fixes and Improvements

- Added: global.d.ts for more convenient work with types.
- Added: plugin.ts, the typed version of plugin.js.
- Added: mjs versions of plugins.
- Fixed: Update theme link in src/index.js
- Fixed: Disabled button make it pointer event none
- Fixed: In the smaller screen Dropdown inside collapse had a closing issue
- Fixed: Hamburger transition issue in navbar [#Issues/18](https://github.com/themeselection/flyonui/issues/18)
- Fixed: Update the code structure for form elements [#Issues/15](https://github.com/themeselection/flyonui/issues/15)

## [1.1.0] - [2024-10-09]

### Added

- Integrated the third-party  [Wave](https://flyonui.com/docs/third-party-plugins/wave-effect/) plugin for a ripple effect, enhancing interactive elements.

### Updated

1. Corrected spelling errors for the stripped class in the table and progress sections.
2. Fixed class specificity in card.
3. Fixed a typo in the documentation: changed “sematic” to “semantic”. [#6](https://github.com/themeselection/flyonui/issues/6)

## [1.0.0] - [2024-09-23]

### Added

- Initial Release
