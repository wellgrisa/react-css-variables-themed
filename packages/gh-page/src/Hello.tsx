import { darkenLightenMarkdown } from './markdown/darken-lighten-markdown'
import { Markdown } from './markdown/Markdown'

const initialValue = `
## Overview

The main idea of this lib is to help creating themes by using [CSS custom variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties#Inheritance_of_CSS_Variables) alongside with [HSL](https://vanseodesign.com/web-design/hue-saturation-and-lightness/) colors.

To achieve that, this lib is split in two packages:
* \`tame-your-theme/scss\` - scss helper functions to create css variable colors 
* \`tame-your-theme/functions\` - helper functions to change theme in runtime

## Installation

Using npm:

\`\`\`
npm install @tame-your-theme/runtime-handler
\`\`\`

Using yarn:

\`\`\`
yarn add @tame-your-theme-functions/runtime-handler
\`\`\`

## Why [HSL](https://vanseodesign.com/web-design/hue-saturation-and-lightness/) ?

Colors come in different ways from different designers and companies, sometimes in:
* #ffffff 
* rgb(255 255 255) 
* hsl(0deg 0% 100%)

[HSL](https://vanseodesign.com/web-design/hue-saturation-and-lightness/) stands for Hue, Saturation and Lightness whereas:
* hue comes from a palette of 360 colors defined from a color wheel where each degree of the color wheel is a color
* saturation is the vibrance of the color: 0% is the least vibrant, 100% is the most
* lightness is the lighting intensity: 0% is the darkest, 100% is the lightest

In short HSL is easier to read, modify, improvise and this lib is willing to show how to achieve it.

## Functions in \`tame-your-theme/scss\`

### @mixin create-theme-color

The main function is the **create-theme-color**. Here is an example of how to create a variable called primary-color with the yellow color used in the white theme.

\`\`\`scss
@import "~tame-your-theme-scss";

:root {
  // $color-name: --primary-color, $color-value: #f6a820, $hover-opacity: 0.5
  @include create-theme-color(--primary-color, #f6a820, 0.5);
}
\`\`\`

This functions creates some key variables to use:
- --primary-color
- --primary-color-h
- --primary-color-s
- --primary-color-l
- --primary-color-hover

The variables with the suffixes -h, -s and -l are most used to modify and improvise as necessary, a good example is the hover effect seen in every primary-color used in this document.

When hovering the yellow texts (in the white theme) it's possible to see the created hover variable (--primary-color-hover) working. 

The other variables are used in the other functions explained below.

### @function change-alpha

This functions changes the uses the hsla function to change the alpha of the given color. To see this in action in this document, check the border below the purple titles, it has a different purple alpha to have a nice effect of the same color.

This is common to use when making light borders in boxes for example.

\`\`\`scss
@import "~tame-your-theme-scss";

h3 {
  // $color-name: --h3-title, $opacity: 0.1
  border-bottom: 1px solid change-alpha(--h3-title, 0.1);
}
\`\`\`
`;

export const colorHarmoniesMarkdown = `
### @function create-theme-color-complimentary

This function creates the color given and also a complimentary one to it.

#### var(--primary-color)
#### var(--primary-color-complimentary)

\`\`\`scss
@import "~tame-your-theme-scss";

:root {
  @include create-theme-color-complimentary(--primary-color, #f6a820);
}

h4 {
  &:nth-of-type(1) {
    color: var(--primary-color);
  }

  &:nth-of-type(2) {
    color: var(--primary-color-complimentary);
  }
}
\`\`\`

### @function create-theme-color-triadic

This function creates the color given and two other colors, color-triadic-first-hue and color-triadic-second-hue

#### var(--primary-color)
#### var(--primary-color-triadic-first-hue)
#### var(--primary-color-triadic-second-hue)

\`\`\`scss
@import "~tame-your-theme-scss";

:root {
  @include create-theme-color-triadic(--primary-color-triadic, #f6a820);
}

h4 {
  &:nth-of-type(1) {
    color: var(--primary-color-triadic);
  }

  &:nth-of-type(2) {
    color: var(--primary-color-triadic-triadic-first-hue);
  }

  &:nth-of-type(3) {
    color: var(--primary-color-triadic-triadic--second-hue);
  }
}
\`\`\`
`;

export const DarkenLightenMarkdown = () => (
  <Markdown className="darken-lighten-markdown">
    {darkenLightenMarkdown}
  </Markdown>
);

export const ColorHarmoniesMarkdown = () => (
  <Markdown className="color-harmonies-markdown">
    {colorHarmoniesMarkdown}
  </Markdown>
);

export const Hello = () => <Markdown>{initialValue}</Markdown>;
