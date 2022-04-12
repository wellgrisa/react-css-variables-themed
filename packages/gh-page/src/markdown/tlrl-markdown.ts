export const overviewMarkdown = `
## Overview

The main idea of this lib is to help creating themes by using [CSS custom variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties#Inheritance_of_CSS_Variables) alongside with [HSL](https://vanseodesign.com/web-design/hue-saturation-and-lightness/) colors and the [CSS Object Model](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model) to change the css variables in runtime.

To achieve that, this lib is split in two packages:
* \`@tame-your-theme/scss\` - scss helper functions to create css variable colors 
* \`@tame-your-theme/css-style-declaration\` - css style declarations function helpers

## Installation

Using npm:

\`\`\`
npm install @tame-your-theme/css-style-declaration
npm install @tame-your-theme/scss
\`\`\`

Using yarn:

\`\`\`
yarn add @tame-your-theme/css-style-declaration
yarn add @tame-your-theme/scss
\`\`\`
`;

export const tldrStepsMarkdown = `
## TL;DR
      
How to use in just a few steps:

* create the themed colors by using the mixin \`create-theme-color\` from the \`@tame-your-theme/scss\`
* create the themes using a list of names and values in your javascript preferred language (typescript, vanilla, react, angular...)
* call the \`setTheme\` from the \`@tame-your-theme/css-style-declaration\` with the desired theme

The component below is an example in React, however it's not necessary as the \`setTheme\` function uses [native code from the browser](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty).
`;

export const tldrMarkdown = `
\`\`\`scss
@import "~@tame-your-theme/scss";

:root {
  @include create-theme-color(--themed-div-background-color, #ffffff);
  @include create-theme-color(
    --themed-div-background-contrast-color,
    #212121
  );
  @include create-theme-color-complementary(
    --themed-div-primary-color,
    #ffa500
  );
}
\`\`\`

\`\`\`ts
import hexToHsl from "hex-to-hsl";
import { setTheme } from "@tame-your-theme/css-style-declaration";

const getHueSaturationAndLightness = (value: string) => {
  const [hue, saturation, lightness] = hexToHsl(value);

  return {
    hue,
    saturation,
    lightness,
  };
};

export const whiteTheme = [
  {
    name: "themed-div-background-contrast-color",
    value: "#212121",
  },
  {
    name: "themed-div-background-color",
    value: "#ffffff",
  },
  {
    name: "themed-div-primary-color",
    value: "#ffa500",
  },
];

export const darkTheme = [
  {
    name: "themed-div-background-contrast-color",
    value: "#FFFFFF",
  },
  {
    name: "themed-div-background-color",
    value: "#292d33",
  },
  {
    name: "themed-div-primary-color",
    value: "#FFB6C1",
  },
];

const getHueSaturationAndLightness = (value: string) => {
  const [hue, saturation, lightness] = hexToHsl(value);

  return {
    hue,
    saturation,
    lightness,
  };
};

export const ThemedDiv = () => {
  const [currentTheme, setCurrentTheme] = useState(whiteTheme);

  useEffect(() => {
    setTheme({
      variables: currentTheme,
      getHueSaturationAndLightness,
    });
  }, [currentTheme]);

  const onCheckChange = (event) => {
    setCurrentTheme(event.target.checked ? darkTheme : whiteTheme);
  };

  return (
    <div className="themed">
      <input onChange={onCheckChange} type="checkbox" /> Dark Theme?
      <h1>This is a title which will change color</h1>
    </div>
  );
};

\`\`\`
`;
