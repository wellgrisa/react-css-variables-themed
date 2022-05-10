# Tame Your Theme

[![https://github.com/wellgrisa/tame-your-theme/workflows/.github/workflows/main.yml/badge.svg](https://github.com/wellgrisa/tame-your-theme/workflows/.github/workflows/main.yml/badge.svg)](https://github.com/wellgrisa/tame-your-theme/actions/workflows/main.yml) [![Npm package version](https://badgen.net/npm/v/@tame-your-theme/scss)](https://www.npmjs.com/package/@tame-your-theme/scss)

# Overview

For the [full and interactive documentation go here](https://wellgrisa.github.io/tame-your-theme/).

The main aim of the [`@tame-your-theme/scss`](https://www.npmjs.com/package/@tame-your-theme/scss) is to help creating themes by using [CSS custom variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties#Inheritance_of_CSS_Variables) alongside with [HSL](https://vanseodesign.com/web-design/hue-saturation-and-lightness/) colors.

Besides creating the css variables with hsl colors, this lib also has some functions to create colors harmonies (which are best seen in [here](https://wellgrisa.github.io/tame-your-theme/)):

- @create-theme-color-complementary
- @create-theme-color-split-complementary
- @create-theme-color-triadic
- @create-theme-color-tetradic
- @create-theme-color-analogous

This lib is totally usable on its own, the idea is to have a helper to create css variables colors which are much easier to manipulate.

If you have to change themes in runtime either by giving options of dark and white themes or by having themes loaded asynchronously you can use this lib alongside with [`@tame-your-theme/css-style-declaration`](https://www.npmjs.com/package/@tame-your-theme/css-style-declaration).

The following installation is covering both libs.

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

You might be thinking of why to recreate the methods darken, lighten and change alpha once scss already has it. The reason is that these mixins don't work with css variables, which makes difficult to change and manipulate them in runtime. By using the functions of this lib it's possible to have the colors changed on the go as you can see in the sections change-alpha and darken/lighten colors.

As an example, if you try to use the function lighten from scss you might see the following error:

```
color: lighten(var(--primary-color), 30%);
```

```
SassError: $color: var(--primary-color) is not a color.
```

## @mixin create-theme-color

The main function is the **create-theme-color**. Here is an example of how to create a variable called primary-color with the yellow color used in the white theme.

```scss
@import "~@tame-your-theme/scss";

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
@import "~@tame-your-theme/scss";

h3 {
  // $color-name: --h3-title, $opacity: 0.1
  border-bottom: 1px solid change-alpha(--h3-title, 0.1);
}
```

## @function darken-theme-color and @function lighten-theme-color

```scss
@import "~@tame-your-theme/scss";

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

## Color Harmonies - Overview

Every mixin creates each of the colors of the harmony with the following css variables

- --color-name-{harmony-position-hue}
- --color-name-{harmony-position-hue}-h
- --color-name-{harmony-position-hue}-s
- --color-name-{harmony-position-hue}-l
- --color-name-{harmony-position-hue}-hover

Therefore they can be used the same way as the main \`create-theme-color\` mixin, which mean any variable can be manipulated as much as possible.

## @function create-theme-color-complementary

This function creates the color given and also a complementary one to it.

```scss
@import "~@tame-your-theme/scss";

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
@import "~@tame-your-theme/scss";

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
@import "~@tame-your-theme/scss";

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
@import "~@tame-your-theme/scss";

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
@import "~@tame-your-theme/scss";

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

## Third Party Libraries (Real World Examples)

This section shows this lib working on a more meaningful way by taking the liberty of borrowing two known libs:

- [react-select](https://react-select.com/)
- [react-datepicker](https://reactdatepicker.com/)

To achieve the theming is necessary to replace the colors being used in these libs by css variables ones, as an example:

```scss
:root {
  @include create-theme-color(--datepicker-background-color, #ffffff);
}

.react-datepicker {
  background-color: var(--datepicker-background-color);

  &__header {
    background-color: var(--datepicker-background-color);
  }

  // ..and so on
}
```

Disclaimer, if you want to have some starting guide, check the files used for the example below:

- [react select scss](https://github.com/wellgrisa/tame-your-theme/blob/main/packages/gh-page/src/ThirdPartyLibraries/change-selector-colors.scss)
- [react datepicker scss](https://github.com/wellgrisa/tame-your-theme/blob/main/packages/gh-page/src/ThirdPartyLibraries/change-datepicker-colors.scss)

Without further ado, below is possible to the see the code responsible to change the components colors, which are changed only by setting different css variables in the element section by the data-theme attribute. To see it working with the components check the [full and interactive documentation go here](https://wellgrisa.github.io/tame-your-theme/).

```scss
@import "~@tame-your-theme/scss";

:root {
  // These are the default react-select-colors as a start

  @include create-theme-color(--react-select-primary-color, #ffa500);
  @include create-theme-color(--react-select-primary-contrast-color, #24292f);
  @include create-theme-color(--react-select-background-color, #212121);
  @include create-theme-color(
    --react-select-background-contrast-color,
    #ffffff
  );
}

section {
  .my-react-select {
    // this is a mixin which you can check in the file mentioned before
    // it basically sets the --react-select css variables accordingly
    // it doesn't really matter where you put this, since it's within your
    // app scss structure, e.g.: within your main application className
    @include change-select-colors();
  }

  &[data-theme="dark"] {
    .tame-your-theme-select {
      // to change the colors of the select, you just need to create the
      // color within the css selector, in this case [data-theme="dark"] selector
      // the css variable will do the rest, once you have previously set up the
      // colors of your select by using css variables
      @include create-theme-color(--react-select-background-color, #ffffff);
      @include create-theme-color(
        --react-select-background-contrast-color,
        #212121
      );
    }
  }

  &[data-theme="white"] {
    .tame-your-theme-select {
      @include create-theme-color(--react-select-primary-color, $pink);
    }
  }
}
```

The full style code from the third party components can be seen [here](https://github.com/wellgrisa/tame-your-theme/blob/main/packages/gh-page/src/ThirdPartyLibraries/third-party-libraries.scss). Not that the main functions which are responsible to set the colors of the components are only called once within the main section \`.real-world-examples.themed\` class.

```scss
.real-world-examples.themed {
  .my-react-select {
    @include change-select-colors();
  }

  @include change-datepicker-colors();

  // the colors are being set within the data-theme attributes selectors
}
```

```ts
export const ThirdPartyLibraries = () => (
  <Row className="themed real-world-examples">
    <section data-theme="dark">
      <Column>
        <ReactSelect
          className="tame-your-theme-select"
          classNamePrefix="my-react-select"
          options={options}
        />
        <Column className="tame-your-theme-datepicker-wrapper">
          <p>Select a date</p>
          <ReactDatePicker dateFormat="P" todayButton="Today" />
        </Column>
      </Column>
    </section>
    <section data-theme="white">
      <ReactSelect
        className="tame-your-theme-select"
        classNamePrefix="my-react-select"
        options={options}
      />
      <Column className="tame-your-theme-datepicker-wrapper">
        <p>Select a date</p>
        <ReactDatePicker dateFormat="P" todayButton="Today" />
      </Column>
    </section>
  </Row>
);
```

## Color Harmonies and Third Party Components

Another good example of the use of this lib, is the color harmonies and the named arguments. This can be seen in the section `Color Harmonies and Third Party Components` in [here](https://wellgrisa.github.io/tame-your-theme/), where there are different react-select components built on top of the combination of:

- color harmonies
- the css variables
- and the named arguments from the mixins given in this lib

```scss
.color-harmonies {
  --color-harmony-background-color: #fff;

  section {
    // this is used just to set the background of the sections
    // accordingly to the color harmony chosen, in this case,
    // the color harmony create-theme-color-analogous
    background-color: var(--color-harmony-background-color);
  }

  section:nth-child(1) {
    @include create-theme-color-analogous(
      --color-harmony-background-color,
      #1e90ff,
      $color-second-hue-name: "--react-select-primary-color",
      $color-third-hue-name: "--react-select-background-color",
      $color-fourth-hue-name: "--react-select-primary-contrast-color",
      $color-fifth-hue-name: "--react-select-background-contrast-color"
    );

    @include create-theme-color-analogous(
      --color-harmony-background-color,
      #1e90ff,
      $color-second-hue-name: "--datepicker-primary-color",
      $color-third-hue-name: "--datepicker-background-color",
      $color-fourth-hue-name: "--datepicker-primary-contrast-color",
      $color-fifth-hue-name: "--datepicker-background-contrast-color"
    );
  }

  section:nth-child(2) {
    @include create-theme-color-analogous(
      --color-harmony-background-color,
      #ffa500,
      $color-second-hue-name: "--react-select-primary-color",
      $color-third-hue-name: "--react-select-background-color",
      $color-fourth-hue-name: "--react-select-primary-contrast-color",
      $color-fifth-hue-name: "--react-select-background-contrast-color"
    );

    @include create-theme-color-analogous(
      --color-harmony-background-color,
      #ffa500,
      $color-second-hue-name: "--datepicker-primary-color",
      $color-third-hue-name: "--datepicker-background-color",
      $color-fourth-hue-name: "--datepicker-primary-contrast-color",
      $color-fifth-hue-name: "--datepicker-background-contrast-color"
    );
  }
}
```
