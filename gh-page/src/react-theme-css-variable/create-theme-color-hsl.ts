import { GetHueSaturationAndLightnessType, ThemeAttribute } from './models'

const setDocumentProperty = ({ name, value, querySelector = undefined }) => {
  const documentContainer = querySelector ? document.querySelectorAll(querySelector) : [document.documentElement]

  document.documentElement.classList.add('color-theme-in-transition')

  documentContainer.forEach((element) => {
    element.style.setProperty(`--${name}`, value)
  })

  window.setTimeout(() => {
    document.documentElement.classList.remove('color-theme-in-transition')
  }, 1000)
}

export interface ThemeColorCreation extends ThemeAttribute {
  getHueSaturationAndLightness: GetHueSaturationAndLightnessType
}

export const createThemeColorHSL = ({
  name,
  value,
  querySelector,
  getHueSaturationAndLightness,
}: ThemeColorCreation) => {
  const { hue, saturation, lightness } = getHueSaturationAndLightness(value)

  setDocumentProperty({ name: `${name}-h`, value: hue, querySelector })
  setDocumentProperty({ name: `${name}-s`, value: `${saturation}%`, querySelector })
  setDocumentProperty({ name: `${name}-l`, value: `${lightness}%`, querySelector })
}

export const getDocumentBodyVariableByName = (name) => getComputedStyle(document.body).getPropertyValue(`--${name}`)
