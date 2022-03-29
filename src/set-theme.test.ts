import faker from '@faker-js/faker'

import { createThemeAttribute } from './set-theme'

describe('set-theme', () => {
  describe('when calling create theme attribute', () => {
    it('calls set property in document using the proper hue, saturation and lightness', () => {
      const mockedHue = faker.datatype.number()
      const mockedSaturation = faker.datatype.number()
      const mockedLightness = faker.datatype.number()

      const mockGetHueSaturationAndLightness = jest.fn().mockReturnValue({
        hue: mockedHue,
        saturation: mockedSaturation,
        lightness: mockedLightness,
      })

      const mockedSetProperty = jest.fn()

      document.documentElement.style.setProperty = mockedSetProperty

      const mockedName = faker.random.alpha()
      const mockedValue = faker.random.alpha()

      createThemeAttribute({
        name: mockedName,
        value: mockedValue,
        getHueSaturationAndLightness: mockGetHueSaturationAndLightness,
      })

      expect(mockedSetProperty).toHaveBeenCalledWith(`--${mockedName}-h`, mockedHue)
      expect(mockedSetProperty).toHaveBeenCalledWith(`--${mockedName}-s`, `${mockedSaturation}%`)
      expect(mockedSetProperty).toHaveBeenCalledWith(`--${mockedName}-l`, `${mockedLightness}%`)
    })
  })
})
