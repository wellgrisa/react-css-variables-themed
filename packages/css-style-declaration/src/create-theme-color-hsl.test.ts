import faker from '@faker-js/faker'

import { createThemeColorHSL } from './create-theme-color-hsl'

describe('create-theme-color-hsl', () => {
  describe('when calling create theme color hsl', () => {
    it('sets the properties in document using the proper hue, saturation and lightness', () => {
      const mockedHue = faker.datatype.number()
      const mockedSaturation = faker.datatype.number()
      const mockedLightness = faker.datatype.number()

      const mockGetHueSaturationAndLightness = jest.fn().mockReturnValue({
        hue: mockedHue,
        saturation: mockedSaturation,
        lightness: mockedLightness,
      })

      const mockedSetDocumentProperty = jest.fn()

      document.documentElement.style.setProperty = mockedSetDocumentProperty

      const mockedName = faker.random.alpha()
      const mockedValue = faker.random.alpha()

      createThemeColorHSL({
        name: mockedName,
        value: mockedValue,
        getHueSaturationAndLightness: mockGetHueSaturationAndLightness,
      })

      expect(mockedSetDocumentProperty).toHaveBeenCalledWith(`--${mockedName}-h`, `${mockedHue}deg`)
      expect(mockedSetDocumentProperty).toHaveBeenCalledWith(`--${mockedName}-s`, `${mockedSaturation}%`)
      expect(mockedSetDocumentProperty).toHaveBeenCalledWith(`--${mockedName}-l`, `${mockedLightness}%`)
    })
  })
})
