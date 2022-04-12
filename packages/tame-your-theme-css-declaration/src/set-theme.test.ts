import faker from '@faker-js/faker'

import { createThemeColorHSL } from './create-theme-color-hsl'
import { setTheme } from './set-theme'

jest.mock('./create-theme-color-hsl.ts')

describe('set-theme', () => {
  it('crates theme colors for each variable given', () => {
    const mockGetHueSaturationAndLightness = jest.fn()

    const mockedFirstVariableName = faker.random.alpha()
    const mockedFirstVariableValue = faker.random.alpha()

    const mockedSecondVariableName = faker.random.alpha()
    const mockedSecondVariableValue = faker.random.alpha()

    const variables = [
      { name: mockedFirstVariableName, value: mockedFirstVariableValue },
      { name: mockedSecondVariableName, value: mockedSecondVariableValue },
    ]

    setTheme({
      variables,
      getHueSaturationAndLightness: mockGetHueSaturationAndLightness,
    })

    expect(createThemeColorHSL).toHaveBeenCalledWith({
      name: mockedFirstVariableName,
      value: mockedFirstVariableValue,
      getHueSaturationAndLightness: mockGetHueSaturationAndLightness,
    })
    expect(createThemeColorHSL).toHaveBeenCalledWith({
      name: mockedSecondVariableName,
      value: mockedSecondVariableValue,
      getHueSaturationAndLightness: mockGetHueSaturationAndLightness,
    })
  })
})
