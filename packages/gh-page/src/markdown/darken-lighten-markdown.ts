export const darkenLightenMarkdown = `
### @function darken-theme-color and @function lighten-theme-color

* Lighter
* Light
* Normal
* Dark
* Darker

\`\`\`scss
@import "~tame-your-theme-scss";

li {
  &:nth-child(1) {
    color: lighten-theme-color(--primary-color, 30%);
  }
  &:nth-child(2) {
    color: lighten-theme-color(--primary-color, 15%);
  }
  &:nth-child(3) {
    color: var(--primary-color);
  }
  &:nth-child(4) {
    color: darken-theme-color(--primary-color, 15%);
  }
  &:nth-child(5) {
    color: darken-theme-color(--primary-color, 30%);
  }
}
\`\`\`
`;
