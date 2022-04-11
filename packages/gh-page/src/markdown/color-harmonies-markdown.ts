export const colorHarmoniesMarkdown = `
### @function create-theme-color-complimentary

This function creates the color given and also a complimentary one to it.

#### var(--primary-color)
#### var(--primary-color-complimentary)

\`\`\`scss
@import "~tame-your-theme-scss";

:root {
  @include create-theme-color-complimentary(--primary-color, #f6a820);
}

h4 {
  &:nth-of-type(1) {
    color: var(--primary-color);
  }

  &:nth-of-type(2) {
    color: var(--primary-color-complimentary);
  }
}
\`\`\`

### @function create-theme-color-split-complimentary

This function creates the color given and also a complimentary one to it.

#### var(--primary-color)
#### var(--primary-color-split-complimentary-second-hue)
#### var(--primary-color-split-complimentary-third-hue)

\`\`\`scss
@import "~tame-your-theme-scss";

:root {
  @include create-theme-color-split-complimentary(--primary-color, #f6a820);
}

h4 {
  &:nth-of-type(1) {
    color: var(--primary-color);
  }

  &:nth-of-type(2) {
    color: var(--primary-color-split-complimentary-second-hue);
  }

  &:nth-of-type(3) {
    color: var(--primary-color-split-complimentary-third-hue);
  }
}
\`\`\`

### @function create-theme-color-triadic

This function creates the color given and two other colors, **#{color}-triadic-second-hue** and **#{color}-triadic-third-hue**.

#### var(--primary-color)
#### var(--primary-color-triadic-first-hue)
#### var(--primary-color-triadic-second-hue)

\`\`\`scss
@import "~tame-your-theme-scss";

:root {
  @include create-theme-color-triadic(--primary-color, #f6a820);
}

h4 {
  &:nth-of-type(1) {
    color: var(--primary-color);
  }

  &:nth-of-type(2) {
    color: var(--primary-color-triadic-second-hue);
  }

  &:nth-of-type(3) {
    color: var(--primary-color-triadic-third-hue);
  }
}
\`\`\`

### @function create-theme-color-tetradic

This function creates the color given and three other colors, **#{color-name}-tetradic-second-hue**, **#{color-name}-tetradic-third-hue** and **#{color}-tetradic-fourth-hue**.

#### var(--primary-color)
#### var(--primary-color-tetradic-second-hue)
#### var(--primary-color-tetradic-third-hue)
#### var(--primary-color-tetradic-fourth-hue)

\`\`\`scss
@import "~tame-your-theme-scss";

:root {
  @include create-theme-color-tetradic(--primary-color, #f6a820);
}

h4 {
  &:nth-of-type(1) {
    color: var(--primary-color);
  }

  &:nth-of-type(2) {
    color: var(--primary-color-tetradic-second-hue);
  }

  &:nth-of-type(3) {
    color: var(--primary-color-tetradic-third-hue);
  }

  &:nth-of-type(4) {
    color: var(--primary-color-tetradic-fourth-hue);
  }
}
\`\`\`

### @function create-theme-color-analogous

This function creates the color given and four others, creating an analogous color harmony, **#{color-name}-analogous-second-hue**, **#{color-name}-analogous-third-hue**, **#{color-name}-analogous-fourth-hue** and **#{color}-analogous-fifth-hue**.

#### var(--primary-color)
#### var(--primary-color-analogous-second-hue)
#### var(--primary-color-analogous-third-hue)
#### var(--primary-color-analogous-fourth-hue)
#### var(--primary-color-analogous-fifth-hue)

\`\`\`scss
@import "~tame-your-theme-scss";

:root {
  @include create-theme-color-analogous(--primary-color, #f6a820);
}

h4 {
  &:nth-of-type(1) {
    color: var(--primary-color);
  }

  &:nth-of-type(2) {
    color: var(--primary-color-analogous-second-hue);
  }

  &:nth-of-type(3) {
    color: var(--primary-color-analogous-third-hue);
  }

  &:nth-of-type(4) {
    color: var(--primary-color-analogous-fourth-hue);
  }

  &:nth-of-type(4) {
    color: var(--primary-color-analogous-fifth-hue);
  }
}
\`\`\`
`;