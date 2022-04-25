export const cssStyleDeclarationMarkdown = `***

# The package \`@tame-your-theme/css-style-declaration\`

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

In the example shown in the commence of this document the lib being used to get these values is [hex-to-hsl](https://www.npmjs.com/package/hex-to-hsl), but one can use any lib or even create the logic to get the values from a hexadecimal color. The following example uses the \`setTheme\` function to change the theme dynamically. To achieve this change, it's necessary to have a proper css set in place in the components.

### Using this lib independently of @tame-your-theme/scss

In order to use this lib regardless of the scss helpers given by [\`@tame-your-theme/scss\`](https://www.npmjs.com/package/@tame-your-theme/scss), it's necessary to create a minimum structure of variables in the css:
 - color-name-h
 - color-name-s
 - color-name-l
 - color-name (using the hsl function with the variables above)

 It's possible to see an example in the code below.

\`\`\`scss
:root {
  --primary-color-h: 39deg;
  --primary-color-s: 100%;
  --primary-color-l: 50%;
  --primary-color: hsl(var(--primary-color-h), var(--primary-color-s), var(--primary-color-l));

  --background-color-h: 0deg;
  --background-color-s: 0%; 
  --background-color-l: 100%;
  --background-color: hsl(var(--background-color-h), var(--background-color-s), var(--background-color-l));

  --background-contrast-color-h: 0deg;
  --background-contrast-color-s: 0%;
  --background-contrast-color-l: 13%;
  --background-contrast-color: hsl(var(--background-contrast-color-h), var(--background-contrast-color-s), var(--background-contrast-color-l));
}
\`\`\`

After creating these variables, it's just a matter of calling the \`setThemes\` function the same way describe in the commence of this document. Below it's possible to see the lib working without the use of [\`@tame-your-theme/scss\`](https://www.npmjs.com/package/@tame-your-theme/scss).

`;
