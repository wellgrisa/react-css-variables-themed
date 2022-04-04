import './app.scss'

import hexToHsl from 'hex-to-hsl'
import { useEffect, useState } from 'react'

import { setTheme } from './lib/set-theme'
import { themes } from './theme'

const getHueSaturationAndLightness = (value: string) => {
  const [hue, saturation, lightness] = hexToHsl(value)

  return {
    hue,
    saturation,
    lightness,
  }
}

export default function App() {
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0)

  const onChangeTheme = () => {
    setCurrentThemeIndex((prevCurrentThemeIndex) => (prevCurrentThemeIndex === 2 ? 0 : prevCurrentThemeIndex + 1))

    setTheme({
      variables: themes[currentThemeIndex],
      getHueSaturationAndLightness,
    })
  }

  useEffect(() => {
    setTheme({
      variables: themes[currentThemeIndex],
      getHueSaturationAndLightness,
    })
  }, [currentThemeIndex])

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={onChangeTheme}>Change Theme</button>
    </div>
  )
}
