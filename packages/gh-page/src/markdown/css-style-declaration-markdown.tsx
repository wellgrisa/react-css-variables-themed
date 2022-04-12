import hexToHsl from 'hex-to-hsl'
import { useEffect, useState } from 'react'

import { setTheme } from '@tame-your-theme/css-style-declaration'

export const cssStyleDeclarationMarkdown = `## Functions in \`@tame-your-theme/css-style-declaration\`

The idea of this package is to benefit from the native api from [CSS Object Model](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model) to change the css variables in runtime.

### setTheme

Changes the theme according to the given variables. This method uses the [native css set property method](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty) to change the css variable.


This method accepts two arguments:

\`\`\`ts
export interface Theme {
  variables: ThemeAttribute[]
  getHueSaturationAndLightness: GetHueSaturationAndLightnessType
}
\`\`\`

Following some principles from the [Clean Architecture](https://www.amazon.com.br/dp/B075LRM681/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1) this lib aims to be dependencyless and this can be seen particularly in the parameter \`getHueSaturationAndLightness\`.

The idea of this method is basically avoid an extra dependency, so it receives a function which needs to return the specific values used in the lib.

\`\`\`ts
export type GetHueSaturationAndLightnessType = (value: string) => {
  hue: number
  saturation: number
  lightness: number
}
\`\`\`

In the example below the lib being used to get these values is [hex-to-hsl](https://www.npmjs.com/package/hex-to-hsl), but one can use any lib or even create the logic to get the values from a hexadecimal color. The following example uses the \`setTheme\` function to change the theme dynamically. To achieve this change, it's necessary to have a proper css set in place in the components.

\`\`\`scss
.themed {
  background-color: var(--themed-div-background-color);
  color: var(--themed-div-background-contrast-color);
}

.themed h1 {
  color: var(--themed-div-primary-color);
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
