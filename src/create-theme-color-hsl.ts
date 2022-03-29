import { GetHueSaturationAndLightnessType, ThemeAttribute } from './models'

const setDocumentProperty = ({ name, value }) => document.documentElement.style.setProperty(`--${name}`, value)

export interface ThemeColorCreation extends ThemeAttribute {
  getHueSaturationAndLightness: GetHueSaturationAndLightnessType
}

export const createThemeColorHSL = ({ name, value, getHueSaturationAndLightness }: ThemeColorCreation) => {
  const { hue, saturation, lightness } = getHueSaturationAndLightness(value)

  setDocumentProperty({ name: `${name}-h`, value: hue })
  setDocumentProperty({ name: `${name}-s`, value: `${saturation}%` })
  setDocumentProperty({ name: `${name}-l`, value: `${lightness}%` })
}

export const getDocumentBodyVariableByName = (name) => getComputedStyle(document.body).getPropertyValue(`--${name}`)
