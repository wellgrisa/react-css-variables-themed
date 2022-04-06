import { createThemeColorHSL } from './create-theme-color-hsl'
import { GetHueSaturationAndLightnessType, ThemeAttribute } from './models'

export interface Theme {
  variables: ThemeAttribute[]
  getHueSaturationAndLightness: GetHueSaturationAndLightnessType
}

export const setTheme = ({ variables, getHueSaturationAndLightness }: Partial<Theme>) =>
  variables.forEach(({ name, value, querySelector }) => {
    createThemeColorHSL({ name, value, querySelector, getHueSaturationAndLightness })
  })
