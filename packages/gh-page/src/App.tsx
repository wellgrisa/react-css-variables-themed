import 'github-markdown-css/github-markdown-light.css'
import './scss/app.scss'

import hexToHsl from 'hex-to-hsl'
import { useEffect, useState } from 'react'
import { Row } from 'react-display-flex'

import { setTheme } from '@tame-your-theme/css-style-declaration'

import { cssStyleDeclarationMarkdown } from './markdown/css-style-declaration-markdown'
import { ColorHarmoniesMarkdown, DarkenLightenMarkdown, Markdown } from './markdown/Markdown'
import { scssMarkdown } from './markdown/scss-markdown'
import { overviewMarkdown, tldrMarkdown } from './markdown/tlrl-markdown'
import { themes, whiteTheme, ThemesHarmonies } from './theme'
import { CssStyleDeclarationIndependently } from './ThemedDiv/CssStyleDeclarationIndependently'
import { ThemedDiv } from './ThemedDiv/ThemedDiv'

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
      <Markdown>{overviewMarkdown}</Markdown>
      <ThemedDiv />
      <Markdown>{tldrMarkdown}</Markdown>
      <Markdown>{cssStyleDeclarationMarkdown}</Markdown>
      <CssStyleDeclarationIndependently />
      <Markdown>{scssMarkdown}</Markdown>
      <DarkenLightenMarkdown />
      <ColorHarmoniesMarkdown />
    </div>
  );
}
