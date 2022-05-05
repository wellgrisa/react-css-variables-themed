export const scssMarkdown = `***
# The package \`tame-your-theme/scss\`

## Overview

The main aim of the [\`@tame-your-theme/scss\`](https://www.npmjs.com/package/@tame-your-theme/scss) is to help creating themes by using [CSS custom variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties#Inheritance_of_CSS_Variables) alongside with [HSL](https://vanseodesign.com/web-design/hue-saturation-and-lightness/) colors.

Besides creating the css variables with hsl colors, this lib also has some functions to create colors harmonies (which are best seen in the section of each function described below):
- @create-theme-color-complementary
- @create-theme-color-split-complementary
- @create-theme-color-triadic
- @create-theme-color-tetradic
- @create-theme-color-analogous

This lib is totally usable on its own, the idea is to have a helper to create css variables colors which are much easier to manipulate.

If you have to change themes in runtime either by giving options of dark and white themes or by having themes loaded asynchronously you can use this lib alongside with [\`@tame-your-theme/css-style-declaration\`](https://www.npmjs.com/package/@tame-your-theme/css-style-declaration).

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

You might be thinking of why to recreate the methods darken, lighten and change alpha once scss already has it. The reason is that these mixins don't work with css variables, which makes difficult to change and manipulate them in runtime. By using the functions of this lib it's possible to have the colors changed on the go as you can see in the sections change-alpha and darken/lighten colors.

As an example, if you try to use the function lighten from scss you might see the following error:

\`\`\`
color: lighten(var(--primary-color), 30%);
\`\`\`

\`\`\`csharp
SassError: $color: var(--primary-color) is not a color.
\`\`\`

### @mixin create-theme-color

The main function is the **create-theme-color**. Here is an example of how to create a variable called primary-color with the yellow color used in the white theme.

\`\`\`scss
@import "~@tame-your-theme/scss";

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
@import "~@tame-your-theme/scss";

h3 {
  // $color-name: --h3-title, $opacity: 0.1
  border-bottom: 1px solid change-alpha(--h3-title, 0.1);
}
\`\`\`
`;
