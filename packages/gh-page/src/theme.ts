import { ThemeAttribute } from 'tame-your-theme/lib/models'

export enum ThemesHarmonies {
  Dark = "dark",
  White = "white",
  Complimentary = "complimentary",
  Triadic = "triadic",
}

export const whiteTheme = [
  {
    name: "background-contrast-color",
    value: "#212121",
  },
  {
    name: "background-color",
    value: "#ffffff",
  },
  {
    name: "primary-color",
    value: "#f6a820",
  },
];

const darkTheme = [
  {
    name: "background-contrast-color",
    value: "#FFFFFF",
  },
  {
    name: "background-color",
    value: "#292d33",
  },
  {
    name: "primary-color",
    value: "#FFB6C1",
  },
];

const complimentaryTheme = [
  {
    name: "background-contrast-color",
    value: "#FFFFFF",
  },
  {
    name: "background-color",
    value: "#292d33",
  },
  {
    name: "primary-color",
    value: "#90EE90",
  },
  {
    name: "complimentary-primary-color",
    value: "#00ffff",
  },
];

export const themes: { [key in ThemesHarmonies]: ThemeAttribute[] } = {
  [ThemesHarmonies.Dark]: darkTheme,
  [ThemesHarmonies.White]: whiteTheme,
  [ThemesHarmonies.Complimentary]: complimentaryTheme,
  [ThemesHarmonies.Triadic]: darkTheme,
};
