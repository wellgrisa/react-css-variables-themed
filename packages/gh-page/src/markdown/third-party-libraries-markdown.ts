export const thirdPartyLibrariesMarkdown = `
## Third Party Libraries (Real World Examples)

This section shows this lib working on a more meaningful way by taking the liberty of borrowing two known libs:
 - [react-select](https://react-select.com/)
 - [react-datepicker](https://reactdatepicker.com/)

To achieve the theming is necessary to replace the colors being used in these libs by css variables ones, as an example:

\`\`\`scss
:root {
  @include create-theme-color(--datepicker-background-color, #ffffff);
}

.react-datepicker {
  background-color: var(--datepicker-background-color);

  &__header {
    background-color: var(--datepicker-background-color);
  }

  // ..and so on
}
\`\`\`

Disclaimer, if you want to have some starting guide, check the files used for the example below:
 - [react select scss](https://github.com/wellgrisa/tame-your-theme/blob/main/packages/gh-page/src/ThirdPartyLibraries/change-selector-colors.scss)
 - [react datepicker scss](https://github.com/wellgrisa/tame-your-theme/blob/main/packages/gh-page/src/ThirdPartyLibraries/change-datepicker-colors.scss)

 Without further ado, below is possible to the see the components with different colors, which are changed only by setting different css variables in the element section by the data-theme attribute.

\`\`\`scss
@import "~@tame-your-theme/scss";

:root {
  // These are the default react-select-colors as a start

  @include create-theme-color(--react-select-primary-color, #ffa500);
  @include create-theme-color(--react-select-primary-contrast-color, #24292f);
  @include create-theme-color(--react-select-background-color, #212121);
  @include create-theme-color(--react-select-background-contrast-color, #ffffff);
}

section {
  &[data-theme="dark"] {
    .tame-your-theme-select {
      @include create-theme-color(
        --react-select-background-color,
        #ffffff
      );
      @include create-theme-color(
        --react-select-background-contrast-color,
        #212121
      );

      .my-react-select {
        // this is a mixin which you can check in the file mentioned before 
        // it basically sets the --react-select css variables accordingly
        @include change-select-colors();
      }
    }
  }

  &[data-theme="white"] {
    .tame-your-theme-select {
      @include create-theme-color(--react-select-primary-color, $pink);

      .my-react-select {
        // as the white theme only changes the primary-color, 
        // it's not necessary to pass the other properties
        @include change-select-colors();
      }
    }
  }
}
\`\`\`

\`\`\`ts
export const ThirdPartyLibraries = () => (
  <Row className="themed real-world-examples">
    <section data-theme="dark">
      <Column>
        <ReactSelect
          className="tame-your-theme-select"
          classNamePrefix="my-react-select"
          options={options}
        />
        <Column className="tame-your-theme-datepicker-wrapper">
          <p>Select a date</p>
          <ReactDatePicker dateFormat="P" todayButton="Today" />
        </Column>
      </Column>
    </section>
    <section data-theme="white">
      <ReactSelect
        className="tame-your-theme-select"
        classNamePrefix="my-react-select"
        options={options}
      />
      <Column className="tame-your-theme-datepicker-wrapper">
        <p>Select a date</p>
        <ReactDatePicker dateFormat="P" todayButton="Today" />
      </Column>
    </section>
  </Row>
)
\`\`\`
`;
