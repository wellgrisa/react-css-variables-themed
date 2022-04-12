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

In the example below the lib being used to get these values is [hex-to-hsl](https://www.npmjs.com/package/hex-to-hsl), but one can use any lib or even create the logic to get the values from a hexadecimal color. The following example uses the \`setTheme\` function to change the theme dynamically. To achieve this change, it's necessary to have a proper css set in place in the components.
`;
