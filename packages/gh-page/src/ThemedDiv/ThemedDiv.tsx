import hexToHsl from 'hex-to-hsl'
import { useEffect, useState } from 'react'

import { setTheme } from '@tame-your-theme/css-style-declaration'

import { Markdown } from '../markdown/Markdown'
import { tldrStepsMarkdown } from '../markdown/tlrl-markdown'

export const whiteTheme = [
  {
    name: "themed-div-background-contrast-color",
    value: "#212121",
  },
  {
    name: "themed-div-background-color",
    value: "#ffffff",
  },
  {
    name: "themed-div-primary-color",
    value: "#ffa500",
  },
];

export const darkTheme = [
  {
    name: "themed-div-background-contrast-color",
    value: "#FFFFFF",
  },
  {
    name: "themed-div-background-color",
    value: "#292d33",
  },
  {
    name: "themed-div-primary-color",
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

export const ThemedDiv = () => {
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
    <>
      <Markdown className="tldr-steps">{tldrStepsMarkdown}</Markdown>
      <div className="themed">
        <label className="custom-checkbox-container">
          <input onChange={onCheckChange} type="checkbox" />
          <span className="checkmark"></span>
          Fancy a dark theme?
        </label>

        <h1>Title using var(--themed-div-primary-color)</h1>
      </div>
    </>
  );
};
