# Tame Your Theme

[![https://github.com/wellgrisa/tame-your-theme/workflows/.github/workflows/main.yml/badge.svg](https://github.com/wellgrisa/tame-your-theme/workflows/.github/workflows/main.yml/badge.svg)](https://github.com/wellgrisa/tame-your-theme/actions/workflows/main.yml) [![Npm package version](https://badgen.net/npm/v/@tame-your-theme/css-style-declaration)](https://www.npmjs.com/package/@tame-your-theme/css-style-declaration)
![Statements](https://img.shields.io/badge/statements-94.44%25-brightgreen.svg?style=flat)
![Lines](https://img.shields.io/badge/lines-95.23%25-brightgreen.svg?style=flat)

# Overview

For the [full and interactive documentation go here](https://wellgrisa.github.io/tame-your-theme/).

The main idea of this lib is to help creating themes by using [CSS custom variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties#Inheritance_of_CSS_Variables) alongside with [HSL](https://vanseodesign.com/web-design/hue-saturation-and-lightness/) colors and the [CSS Object Model](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model) to change the css variables in runtime.

To achieve that, this lib is split in two packages:

- [`@tame-your-theme/scss`](https://www.npmjs.com/package/@tame-your-theme/scss) - scss helper functions to create themed css variable colors, themed color harmonies
- [`@tame-your-theme/css-style-declaration`](https://www.npmjs.com/package/@tame-your-theme/css-style-declaration) - native css style declarations api helper to change theme in run timetheme in run time

Each package might be used independently, though they are thought of being used together.

# Installation

Using npm:

```
npm install @tame-your-theme/css-style-declaration
npm install @tame-your-theme/scss
```

Using yarn:

```
yarn add @tame-your-theme/css-style-declaration
yarn add @tame-your-theme/scss
```

# TL;DR

How to use in just a few steps:

- create the themed colors by using the mixin `create-theme-color` from the `@tame-your-theme/scss`
- create the themes using a list of names and values in your javascript preferred language (typescript, vanilla, react, angular...)
- call the `setTheme` from the `@tame-your-theme/css-style-declaration` with the desired theme

---

# The package `@tame-your-theme/css-style-declaration`

## setTheme

Changes the theme according to the given variables. This method uses the [native css set property method](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty) to change the css variable.

This method accepts two arguments:

```ts
export interface Theme {
  variables: ThemeAttribute[]
  getHueSaturationAndLightness: GetHueSaturationAndLightnessType
}
```

Following some principles from the [Clean Architecture](https://www.amazon.com.br/dp/B075LRM681/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1) this lib aims to be dependencyless and this can be seen particularly in the parameter `getHueSaturationAndLightness`.

The idea of this method is basically avoid an extra dependency, so it receives a function which needs to return the specific values used in the lib.

```ts
export type GetHueSaturationAndLightnessType = (value: string) => {
  hue: number
  saturation: number
  lightness: number
}
```

In the example shown in the the [documentation](https://wellgrisa.github.io/tame-your-theme/) the lib being used to get these values is [hex-to-hsl](https://www.npmjs.com/package/hex-to-hsl), but one can use any lib or even create the logic to get the values from a hexadecimal color. The following example uses the `setTheme` function to change the theme dynamically. To achieve this change, it's necessary to have a proper css set in place in the components.
