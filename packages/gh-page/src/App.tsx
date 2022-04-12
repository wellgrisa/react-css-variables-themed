import "github-markdown-css/github-markdown-light.css";
import "./app.scss";

import hexToHsl from "hex-to-hsl";
import { useEffect, useState } from "react";
import { Row } from "react-display-flex";
import { setTheme } from "tame-your-theme-css-declaration";

import {
  ColorHarmoniesMarkdown,
  DarkenLightenMarkdown,
  Markdown,
  OverviewMarkdown,
} from "./markdown/Markdown";
import { themes, whiteTheme, ThemesHarmonies } from "./theme";

const getHueSaturationAndLightness = (value: string) => {
  const [hue, saturation, lightness] = hexToHsl(value);

  return {
    hue,
    saturation,
    lightness,
  };
};

export default function App() {
  const [currentTheme, setCurrentTheme] = useState(whiteTheme);

  useEffect(() => {
    setTheme({
      variables: currentTheme,
      getHueSaturationAndLightness,
    });
  }, [currentTheme]);

  const onRadioChange = (event) => {
    setCurrentTheme(themes[event.target.value]);
  };

  return (
    <div className="markdown-body">
      <div className="sticky">
        <Markdown># A demo of `tame-your-theme`</Markdown>
        <Row
          className="theme-radio-group"
          alignItemsCenter
          justifyContentCenter
        >
          <label>
            <input
              type="radio"
              defaultChecked
              onChange={onRadioChange}
              value={ThemesHarmonies.White}
              name="theme"
            />
            White
          </label>
          <label>
            <input
              type="radio"
              onChange={onRadioChange}
              value={ThemesHarmonies.Dark}
              name="theme"
            />
            Dark
          </label>
        </Row>
      </div>

      <OverviewMarkdown />
      <DarkenLightenMarkdown />
      <ColorHarmoniesMarkdown />
    </div>
  );
}
