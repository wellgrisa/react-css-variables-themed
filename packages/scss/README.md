# Tame Your Theme

[![https://github.com/wellgrisa/tame-your-theme/workflows/.github/workflows/main.yml/badge.svg](https://github.com/wellgrisa/tame-your-theme/workflows/.github/workflows/main.yml/badge.svg)](https://github.com/wellgrisa/tame-your-theme/actions/workflows/main.yml) [![Npm package version](https://badgen.net/npm/v/@tame-your-theme/scss)](https://www.npmjs.com/package/@tame-your-theme/scss)

# Overview

For the [full and interactive documentation go here](https://wellgrisa.github.io/tame-your-theme/).

The main idea of this lib is to help creating themes by using [CSS custom variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties#Inheritance_of_CSS_Variables) alongside with [HSL](https://vanseodesign.com/web-design/hue-saturation-and-lightness/) colors and the [CSS Object Model](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model) to change the css variables in runtime.

To achieve that, this lib is split in two packages:

- [`@tame-your-theme/scss`](https://www.npmjs.com/package/@tame-your-theme/scss) - scss helper functions to create themed css variable colors, themed color harmonies
- [`@tame-your-theme/css-style-declaration`](https://www.npmjs.com/package/@tame-your-theme/css-style-declaration) - native css style declarations api helper to change theme in run time

Each package can be used independently.

If you don't need to change in run time, you can just use the [`@tame-your-theme/scss`](https://www.npmjs.com/package/@tame-your-theme/scss) to create your variables and play with its colors easily.

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

# The package `tame-your-theme/scss`

## Why [HSL](https://vanseodesign.com/web-design/hue-saturation-and-lightness/) ?

Colors come in different ways from different designers and companies, sometimes in:

- #ffffff
- rgb(255 255 255)
- hsl(0deg 0% 100%)

[HSL](https://vanseodesign.com/web-design/hue-saturation-and-lightness/) stands for Hue, Saturation and Lightness whereas:

- hue comes from a palette of 360 colors defined from a color wheel where each degree of the color wheel is a color
- saturation is the vibrance of the color: 0% is the least vibrant, 100% is the most
- lightness is the lighting intensity: 0% is the darkest, 100% is the lightest

In short HSL is easier to read, modify, improvise and this lib is willing to show how to achieve it.

## @mixin create-theme-color

The main function is the **create-theme-color**. Here is an example of how to create a variable called primary-color with the yellow color used in the white theme.

```scss
@import "~tame-your-theme-scss";

:root {
  // $color-name: --primary-color, $color-value: #f6a820, $hover-opacity: 0.5
  @include create-theme-color(--primary-color, #f6a820, 0.5);
}
```

This functions creates some key variables to use:

- --primary-color
- --primary-color-h
- --primary-color-s
- --primary-color-l
- --primary-color-hover

The variables with the suffixes -h, -s and -l are most used to modify and improvise as necessary, a good example is the hover effect seen in every primary-color used in this document.

When hovering the yellow texts (in the white theme) it's possible to see the created hover variable (--primary-color-hover) working.

The other variables are used in the other functions explained below.

## @function change-alpha

This functions changes the uses the hsla function to change the alpha of the given color. To see this in action in this document, check the border below the purple titles, it has a different purple alpha to have a nice effect of the same color.

This is common to use when making light borders in boxes for example.

```scss
@import "~tame-your-theme-scss";

h3 {
  // $color-name: --h3-title, $opacity: 0.1
  border-bottom: 1px solid change-alpha(--h3-title, 0.1);
}
```

## @function darken-theme-color and @function lighten-theme-color

```scss
@import "~tame-your-theme-scss";

li {
  &:nth-child(1) {
    color: lighten-theme-color(--primary-color, 30%);
  }
  &:nth-child(2) {
    color: lighten-theme-color(--primary-color, 15%);
  }
  &:nth-child(3) {
    color: var(--primary-color);
  }
  &:nth-child(4) {
    color: darken-theme-color(--primary-color, 15%);
  }
  &:nth-child(5) {
    color: darken-theme-color(--primary-color, 30%);
  }
}
```

## @function create-theme-color-complementary

This function creates the color given and also a complementary one to it.

```scss
@import "~tame-your-theme-scss";

:root {
  @include create-theme-color-complementary(--primary-color, #f6a820);
}

h4 {
  &:nth-of-type(1) {
    color: var(--primary-color);
  }

  &:nth-of-type(2) {
    color: var(--primary-color-complementary);
  }
}
```

## @function create-theme-color-split-complementary

This function creates the color given and also a complementary one to it.

```scss
@import "~tame-your-theme-scss";

:root {
  @include create-theme-color-split-complementary(--primary-color, #f6a820);
}

h4 {
  &:nth-of-type(1) {
    color: var(--primary-color);
  }

  &:nth-of-type(2) {
    color: var(--primary-color-split-complementary-second-hue);
  }

  &:nth-of-type(3) {
    color: var(--primary-color-split-complementary-third-hue);
  }
}
```

## @function create-theme-color-triadic

This function creates the color given and two other colors, **#{color}-triadic-second-hue** and **#{color}-triadic-third-hue**.

```scss
@import "~tame-your-theme-scss";

:root {
  @include create-theme-color-triadic(--primary-color, #f6a820);
}

h4 {
  &:nth-of-type(1) {
    color: var(--primary-color);
  }

  &:nth-of-type(2) {
    color: var(--primary-color-triadic-second-hue);
  }

  &:nth-of-type(3) {
    color: var(--primary-color-triadic-third-hue);
  }
}
```

## @function create-theme-color-tetradic

This function creates the color given and three other colors, **#{color-name}-tetradic-second-hue**, **#{color-name}-tetradic-third-hue** and **#{color}-tetradic-fourth-hue**.

```scss
@import "~tame-your-theme-scss";

:root {
  @include create-theme-color-tetradic(--primary-color, #f6a820);
}

h4 {
  &:nth-of-type(1) {
    color: var(--primary-color);
  }

  &:nth-of-type(2) {
    color: var(--primary-color-tetradic-second-hue);
  }

  &:nth-of-type(3) {
    color: var(--primary-color-tetradic-third-hue);
  }

  &:nth-of-type(4) {
    color: var(--primary-color-tetradic-fourth-hue);
  }
}
```

## @function create-theme-color-analogous

This function creates the color given and four others, creating an analogous color harmony, **#{color-name}-analogous-second-hue**, **#{color-name}-analogous-third-hue**, **#{color-name}-analogous-fourth-hue** and **#{color}-analogous-fifth-hue**.

```scss
@import "~tame-your-theme-scss";

:root {
  @include create-theme-color-analogous(--primary-color, #f6a820);
}

h4 {
  &:nth-of-type(1) {
    color: var(--primary-color);
  }

  &:nth-of-type(2) {
    color: var(--primary-color-analogous-second-hue);
  }

  &:nth-of-type(3) {
    color: var(--primary-color-analogous-third-hue);
  }

  &:nth-of-type(4) {
    color: var(--primary-color-analogous-fourth-hue);
  }

  &:nth-of-type(4) {
    color: var(--primary-color-analogous-fifth-hue);
  }
}
```

Test Publish from lerna in actions 4
