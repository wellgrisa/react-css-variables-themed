const setDocumentProperty = ({ name, value }) => document.documentElement.style.setProperty(`--${name}`, value)

export interface ThemeColorCreation<TVariableName> extends ThemeAttribute<TVariableName> {
  getHueSaturationAndLightness: GetHueSaturationAndLightnessType
}

export const createThemeColorHSL = <TVariableName>({
  name,
  value,
  getHueSaturationAndLightness,
}: ThemeColorCreation<TVariableName>) => {
  const { hue, saturation, lightness } = getHueSaturationAndLightness(value)

  setDocumentProperty({ name: `${name}-h`, value: hue })
  setDocumentProperty({ name: `${name}-s`, value: `${saturation}%` })
  setDocumentProperty({ name: `${name}-l`, value: `${lightness}%` })
}

export const getDocumentBodyVariableByName = (name) => getComputedStyle(document.body).getPropertyValue(`--${name}`)

export interface ThemeAttribute<TVariableName> {
  name: TVariableName
  value: string
}

export type GetHueSaturationAndLightnessType = (value: string) => {
  hue: number
  saturation: number
  lightness: number
}

export interface Theme<TVariableName> {
  variables: ThemeAttribute<TVariableName>[]
  getHueSaturationAndLightness: GetHueSaturationAndLightnessType
}

export const setTheme = <TVariableName>({ variables, getHueSaturationAndLightness }: Partial<Theme<TVariableName>>) =>
  variables.forEach(({ name, value }) => {
    createThemeColorHSL({ name, value, getHueSaturationAndLightness: getHueSaturationAndLightness })
  })
