import { ThemeAttribute } from "@tame-your-theme/css-style-declaration";

export enum ThemesHarmonies {
  Dark = "dark",
  White = "white",
}

const yellowPrimaryColor = "#ffa500";
const pinkPrimaryColor = "#FFB6C1";

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
    value: yellowPrimaryColor,
  },
  {
    name: "primary-color-triadic",
    value: yellowPrimaryColor,
  },
  {
    name: "primary-color-tetradic",
    value: yellowPrimaryColor,
  },
  {
    name: "primary-color-analogous",
    value: yellowPrimaryColor,
  },
  {
    name: "primary-color-split-complementary",
    value: yellowPrimaryColor,
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
    value: pinkPrimaryColor,
  },
  {
    name: "primary-color-triadic",
    value: pinkPrimaryColor,
  },
  {
    name: "primary-color-tetradic",
    value: pinkPrimaryColor,
  },
  {
    name: "primary-color-analogous",
    value: pinkPrimaryColor,
  },
  {
    name: "primary-color-split-complementary",
    value: pinkPrimaryColor,
  },
];

export const themes: { [key in ThemesHarmonies]: ThemeAttribute[] } = {
  [ThemesHarmonies.Dark]: darkTheme,
  [ThemesHarmonies.White]: whiteTheme,
};
