export type ThemeAttribute = {
  name: string
  value: string
  querySelector?: string
}

export type GetHueSaturationAndLightnessType = (value: string) => {
  hue: number
  saturation: number
  lightness: number
}
