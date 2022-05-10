import "./third-party-libraries.scss";
import "react-datepicker/dist/react-datepicker.css";

import ReactDatePicker from "react-datepicker";
import { Column, Row } from "react-display-flex";
import ReactSelect from "react-select";

import { Markdown } from "../markdown/Markdown";
import { colorHarmoniesThirdPartyLibrariesMarkdown } from "../markdown/third-party-libraries-markdown";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export const ColorHarmoniesThirdPartyLibraries = () => (
  <>
    <Markdown>{colorHarmoniesThirdPartyLibrariesMarkdown}</Markdown>
    <Row className="themed color-harmonies real-world-examples">
      <section>
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
      <section>
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
    </Row>
  </>
);
