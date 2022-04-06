import './app.scss'

import hexToHsl from 'hex-to-hsl'
import { useEffect, useState } from 'react'
import { Column, Row } from 'react-display-flex'

import { setTheme } from './react-theme-css-variable/set-theme'
import { themes, whiteTheme, ThemesHarmonies } from './theme'

const getHueSaturationAndLightness = (value: string) => {
  const [hue, saturation, lightness] = hexToHsl(value)

  return {
    hue,
    saturation,
    lightness,
  }
}

export default function App() {
  const [currentTheme, setCurrentTheme] = useState(whiteTheme)

  useEffect(() => {
    setTheme({
      variables: currentTheme,
      getHueSaturationAndLightness,
    })
  }, [currentTheme])

  const onRadioChange = (event) => {
    setCurrentTheme(themes[event.target.value])
  }

  return (
    <Column element="section" className="App">
      <Row className="radio-group" alignItemsCenter justifyContentCenter>
        <label>
          <input type="radio" defaultChecked onChange={onRadioChange} value={ThemesHarmonies.White} name="theme" />
          White
        </label>
        <label>
          <input type="radio" onChange={onRadioChange} value={ThemesHarmonies.Dark} name="theme" />
          Dark
        </label>
        <label>
          <input type="radio" onChange={onRadioChange} value={ThemesHarmonies.Complimentary} name="theme" />
          Complimentary
        </label>
        <label>
          <input type="radio" onChange={onRadioChange} value={ThemesHarmonies.Triadic} name="theme" />
          Triadic
        </label>
      </Row>

      <Column element="section" className="card">
        {currentTheme.map(({ name, value }) => (
          <h1 style={{ color: value }}>
            {name}: {value}
          </h1>
        ))}
      </Column>

      {/* <h1>Primary Color Outside of Specific Themes</h1>
      <div data-theme="complimentary-theme">
        <h1>Primary Color</h1>
        <h2>Complimentary Color</h2>
      </div>
      <div data-theme="triadic-theme">
        <h1>Primary Color</h1>
        <h2>Triadic First Hue Color</h2>
        <h3>Triadic Second Hue Color</h3>
      </div>
      <div data-theme="theme-by-hue">
        <h1>--complimentary-hue</h1>
        <h2>--background-color-dark</h2>
        <h3>--hue</h3>
      </div> */}
    </Column>
  )
}
