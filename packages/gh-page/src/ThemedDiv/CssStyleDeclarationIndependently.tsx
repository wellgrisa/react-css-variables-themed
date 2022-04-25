import './css-style-independently.scss'

import hexToHsl from 'hex-to-hsl'
import { useEffect, useState } from 'react'

import { setTheme } from '@tame-your-theme/css-style-declaration'

export const whiteTheme = [
  {
    name: "independently-background-contrast-color",
    value: "#212121",
  },
  {
    name: "independently-background-color",
    value: "#ffffff",
  },
  {
    name: "independently-primary-color",
    value: "#ffa500",
  },
];

export const darkTheme = [
  {
    name: "independently-background-contrast-color",
    value: "#FFFFFF",
  },
  {
    name: "independently-background-color",
    value: "#292d33",
  },
  {
    name: "independently-primary-color",
    value: "#FFB6C1",
  },
];

const getHueSaturationAndLightness = (value: string) => {
  const [hue, saturation, lightness] = hexToHsl(value);

  return {
    hue,
    saturation,
    lightness,
  };
};

export const CssStyleDeclarationIndependently = () => {
  const [currentTheme, setCurrentTheme] = useState(whiteTheme);

  useEffect(() => {
    setTheme({
      variables: currentTheme,
      getHueSaturationAndLightness,
    });
  }, [currentTheme]);

  const onCheckChange = (event) => {
    setCurrentTheme(event.target.checked ? darkTheme : whiteTheme);
  };

  return (
    <div className="themed-css-independently">
      <label className="custom-checkbox-container">
        <input onChange={onCheckChange} type="checkbox" />
        <span className="checkmark"></span>
        Fancy a dark theme?
      </label>

      <h1>Title using var(--independently-primary-color)</h1>
    </div>
  );
};
