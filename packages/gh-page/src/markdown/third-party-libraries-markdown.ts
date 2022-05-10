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
  .my-react-select {
    // this is a mixin which you can check in the file mentioned before 
    // it basically sets the --react-select css variables accordingly
    // it doesn't really matter where you put this, since it's within your
    // app scss structure, e.g.: within your main application className
    @include change-select-colors();
  }

  &[data-theme="dark"] {
    .tame-your-theme-select {
      // to change the colors of the select, you just need to create the 
      // color within the css selector, in this case [data-theme="dark"] selector
      // the css variable will do the rest, once you have previously set up the 
      // colors of your select by using css variables
      @include create-theme-color(
        --react-select-background-color,
        #ffffff
      );
      @include create-theme-color(
        --react-select-background-contrast-color,
        #212121
      );
    }
  }

  &[data-theme="white"] {
    .tame-your-theme-select {
      @include create-theme-color(--react-select-primary-color, $pink);
    }
  }
}
\`\`\`

\`\`\`ts
export const ThirdPartyLibraries = () => (
  <Row className="themed real-world-examples">
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
    <section className="imagine-i-am-a-form">
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

The full style code from the components below can be seen [here](https://github.com/wellgrisa/tame-your-theme/blob/main/packages/gh-page/src/ThirdPartyLibraries/third-party-libraries.scss). Not that the main functions which are responsible to set the colors of the components are only called once within the main section \`.real-world-examples.themed\` class.

\`\`\`scss
.real-world-examples.themed {
  .my-react-select {
    @include change-select-colors();
  }

  @include change-datepicker-colors();

  // the colors are being set within the data-theme attributes selectors
}
\`\`\`

You might be wondering why you would change specifically a section with different colors than your "default select colors". Well, imagine a situation where your website has a specific form with different colors than the rest of your theme, you can easily achieve that as seen in the third column.
`;

export const colorHarmoniesThirdPartyLibrariesMarkdown = `
## Color Harmonies and Third Party Components

Another good example of the use of this lib, is the color harmonies and the named arguments. This can be seen in the box below, where there are different react-select components built on top of the combination of:
 - color harmonies
 - the css variables
 - and the named arguments from the mixins given in this lib

As you can see in the example below, the \`create-theme-color-analogous\` is used alongside with each css variable name responsible to set the colors of the components.

\`\`\`scss
.color-harmonies {
  --color-harmony-background-color: #fff;

  section {
    // this is used just to set the background of the sections
    // accordingly to the color harmony chosen, in this case,
    // the color harmony create-theme-color-analogous
    background-color: var(--color-harmony-background-color);
  }

  section:nth-child(1) {
    @include create-theme-color-analogous(
      --color-harmony-background-color,
      #1e90ff,
      $color-second-hue-name: "--react-select-primary-color",
      $color-third-hue-name: "--react-select-background-color",
      $color-fourth-hue-name: "--react-select-primary-contrast-color",
      $color-fifth-hue-name: "--react-select-background-contrast-color"
    );

    @include create-theme-color-analogous(
      --color-harmony-background-color,
      #1e90ff,
      $color-second-hue-name: "--datepicker-primary-color",
      $color-third-hue-name: "--datepicker-background-color",
      $color-fourth-hue-name: "--datepicker-primary-contrast-color",
      $color-fifth-hue-name: "--datepicker-background-contrast-color"
    );
  }

  section:nth-child(2) {
    @include create-theme-color-analogous(
      --color-harmony-background-color,
      #ffa500,
      $color-second-hue-name: "--react-select-primary-color",
      $color-third-hue-name: "--react-select-background-color",
      $color-fourth-hue-name: "--react-select-primary-contrast-color",
      $color-fifth-hue-name: "--react-select-background-contrast-color"
    );

    @include create-theme-color-analogous(
      --color-harmony-background-color,
      #ffa500,
      $color-second-hue-name: "--datepicker-primary-color",
      $color-third-hue-name: "--datepicker-background-color",
      $color-fourth-hue-name: "--datepicker-primary-contrast-color",
      $color-fifth-hue-name: "--datepicker-background-contrast-color"
    );
  }
}
\`\`\`


`;
