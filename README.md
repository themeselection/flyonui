<a href="https://flyonui.com">
  <img alt="flyonui logo" width="350" src="https://cdn.flyonui.com/fy-assets/logo/flyonui-logo.svg">
</a>

[FlyonUI](http://flyonui.com/) is the most easiest, free and open-source Tailwind CSS component library with semantic classes. 🚀

<p>
    <a href="https://www.npmjs.com/package/flyonui"><img src="https://img.shields.io/npm/dt/flyonui.svg" alt="Total Downloads on NPM"></a>
    <a href="https://github.com/themesberg/flyonui/releases"><img src="https://img.shields.io/npm/v/flyonui.svg" alt="Latest Version"></a>
    <a href="https://flyonui.com/docs/getting-started/license/"><img src="https://img.shields.io/badge/license-MIT-blue" alt="MIT License"></a>
</p>

---

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Overview](#overview)
- [Why should I use FlyonUI?](#why-should-i-use-flyonui)
- [Features](#features)
- [Documentation](#documentation)
- [Getting Started](#getting-started)
  - [Installation via NPM](#installation-via-npm)
  - [RTL (Right-to-Left) Language Support](#rtl-right-to-left-language-support)
- [Available Components](#available-components)
  - [Component Examples](#component-examples)
- [Community](#community)
- [Credits](#credits)
- [License](#license)

---

## Overview

FlyonUI is designed to combine the best of both worlds: the aesthetic appeal of semantic classes and the powerful functionality of JS plugins.

## Why should I use FlyonUI?

FlyonUI brings together the beauty of semantic classes and the interactive JS plugins, offering you a powerful toolkit to build stunning, interactive user interfaces with ease.

- **Beautiful and Semantic Styling:** Utilize comprehensive CSS components with semantic class names for a clean and readable codebase.
- **Interactive and Dynamic Features:** Incorporate JavaScript plugins to add interactivity and dynamic behavior to your UI components.
- **Efficiency and Productivity:** Enjoy a faster and more efficient development process by combining the strengths of semantic classes and JS plugins.
- **Maintainable and Scalable:** Keep your projects maintainable and scalable with a consistent coding approach and powerful JS plugins.

## Features

1. **800+ Free Components & Examples**: Hundreds of component examples for all your WebApp needs that meet accessibility criteria.
2. **Universal Framework Compatibility**: Fully compatible wherever Tailwind CSS is in action, from React to Vue and beyond.
3. **Unstyled & Accessible Plugins**: Seamlessly add unstyled, accessible plugins for functionality without sacrificing design.
4. **Responsive & RTL support** : Built with responsiveness in mind, ensuring your app looks great on all devices with RTL language support.
5. **Free Forever:** Completely free forever, open-source, and built for the community.

## Documentation

For comprehensive documentation, please visit [flyonui.com](https://flyonui.com/).

## Getting Started

FlyonUI can be easily integrated into any existing Tailwind CSS project.

### Installation via NPM

To use FlyonUI, ensure that you have [Node.js](https://nodejs.org/en/) and [Tailwind CSS](https://tailwindcss.com/) installed.

1. Install FlyonUI as a dependency:

   ```bash
   npm install flyonui
   ```

2. Include FlyonUI as a plugin in your `tailwind.config.js` file:

   ```javascript
   module.exports = {
     plugins: [
      require("flyonui"), 
      require("flyonui/plugin")  // Include this line if you are using JS plugins/components
      ]
   }
   ```

> [!TIP]
> Step no 3 and 4 are optional if you are not using any JS plugins/components.

3. Add the template path in `tailwind.config.js` to allow Tailwind to scan FlyonUI's JavaScript files:

   ```javascript
   module.exports = {
     content: ["./node_modules/flyonui/dist/js/*.js"]
   }
   ```

4. Include the main JavaScript file to activate interactive elements:

   ```html
   <script src="../path/to/flyonui/flyonui.js"></script>
   ```
### RTL (Right-to-Left) Language Support

FlyonUI components offer native RTL support. Simply add the `dir="rtl"` attribute to your HTML element to enable this feature.

## Available Components

FlyonUI provides a robust library of UI components built with Tailwind CSS utility classes, enabling fast and efficient web development. Our library includes 78+ components, from basic elements like buttons and cards to more complex third-party integrations.

[Explore all components](https://flyonui.com/docs/components/accordion/)

### Component Examples

<table>
  <tr>
    <td width="33.3333%">Accordion</td>
    <td width="33.3333%">Alert</td>
    <td width="33.3333%">Apex Charts</td>
  </tr>
  <tr>
    <td width="33.3333%" align="center">
        <a href="https://flyonui.com/docs/components/accordion/">
            <img alt="Tailwind CSS Accordion" src="https://cdn.flyonui.com/fy-assets/components-svg/components/accordion.svg">
        </a>
    </td>
    <td width="33.3333%" align="center">
        <a href="https://flyonui.com/docs/components/alert/">
            <img alt="Tailwind CSS Alert" src="https://cdn.flyonui.com/fy-assets/components-svg/components/alert.svg">
        </a>
    </td>
    <td width="33.3333%" align="center">
        <a href="https://flyonui.com/docs/third-party-plugins/apex-charts/">
            <img alt="Tailwind CSS Apex Charts" src="https://cdn.flyonui.com/fy-assets/components-svg/third-party-plugins/apex-charts.svg">
        </a>
    </td>
  </tr>
  <tr>
    <td width="33.3333%">Button</td>
    <td width="33.3333%">Card</td>
    <td width="33.3333%">Checkbox</td>
  </tr>
  <tr>
    <td width="33.3333%" align="center">
        <a href="https://flyonui.com/docs/components/button/">
            <img alt="Tailwind CSS Button" src="https://cdn.flyonui.com/fy-assets/components-svg/components/button.svg">
        </a>
    </td>
    <td width="33.3333%" align="center">
        <a href="https://flyonui.com/docs/components/card/">
            <img alt="Tailwind CSS Card" src="https://cdn.flyonui.com/fy-assets/components-svg/components/card.svg">
        </a>
    </td>
    <td width="33.3333%" align="center">
        <a href="https://flyonui.com/docs/components/checkbox/">
            <img alt="Tailwind CSS Checkbox" src="https://cdn.flyonui.com/fy-assets/components-svg/form-elements/checkbox.svg">
        </a>
    </td>
  </tr>
  <tr>
     <td width="33.3333%">Dropdown</td>
    <td width="33.3333%">Input</td>
    <td width="33.3333%">Modal</td>
  </tr>
  <tr>
    <td width="33.3333%" align="center">
        <a href="https://flyonui.com/docs/overlays/dropdown/">
            <img alt="Tailwind CSS Dropdown" src="https://cdn.flyonui.com/fy-assets/components-svg/overlays/dropdown.svg">
        </a>
    </td>
    <td width="33.3333%" align="center">
        <a href="https://flyonui.com/docs/forms/input/">
            <img alt="Tailwind CSS Input" src="https://cdn.flyonui.com/fy-assets/components-svg/form-elements/input.svg">
        </a>
    </td>
    <td width="33.3333%" align="center">
        <a href="https://flyonui.com/docs/overlays/modal/">
            <img alt="Tailwind CSS Modal" src="https://cdn.flyonui.com/fy-assets/components-svg/overlays/modal.svg">
        </a>
    </td>
  </tr>
  <tr>
    <td width="33.3333%">Navbar</td>
    <td width="33.3333%">Tabs & Pills</td>
    <td width="33.3333%">Tooltip</td>
  </tr>
  <tr>
    <td width="33.3333%" align="center">
        <a href="https://flyonui.com/docs/navigations/navbar/">
            <img alt="Tailwind CSS Navbar" src="https://cdn.flyonui.com/fy-assets/components-svg/navigations/navbar.svg">
        </a>
    </td>
    <td width="33.3333%" align="center">
        <a href="https://flyonui.com/docs/navigations/tabs-pills/">
            <img alt="Tailwind CSS Tabs & Pills" src="https://cdn.flyonui.com/fy-assets/components-svg/navigations/tabs-pills.svg">
        </a>
    </td>
    <td width="33.3333%" align="center">
        <a href="https://flyonui.com/docs/overlays/tooltip/">
            <img alt="Tailwind CSS Tooltip" src="https://cdn.flyonui.com/fy-assets/components-svg/overlays/tooltip.svg">
        </a>
    </td>
  </tr>
</table>

[Explore all components](https://flyonui.com/docs/components/accordion/)

## Community

Join the FlyonUI community to discuss the library, ask questions, and share your experiences:

- 📢 [Follow us on Twitter](https://x.com/flyonui)
- ⌨️ [Discuss on GitHub](https://github.com/themeselection/flyonui/discussions)


## Credits

We are grateful for the contributions of the open-source community, particularly:

- [TailwindCSS](https://tailwindcss.com/)
- [daisyUI](https://daisyui.com/)
- [Preline UI](https://preline.co/).

These projects form the backbone of FalyonUI, allowing us to build a powerful and user-friendly UI kit.

## License

FlyonUI is open-source software licensed under the MIT License.

- 📝 [Read the License](https://github.com/themeselection/flyonui/blob/main/LICENSE)
- 📀 [View THIRD_PARTY_LICENSES](https://github.com/themeselection/flyonui/blob/main/THIRD_PARTY_LICENSES)
