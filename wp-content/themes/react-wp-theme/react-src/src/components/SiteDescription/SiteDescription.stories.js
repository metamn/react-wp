import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import SiteDescription from "./SiteDescription";
import description from "./SiteDescription.md";

storiesOf("Components/SiteDescription", module).add(
  "Overview",
  () => <SiteDescription />,
  {
    info: {
      inline: true,
      text: description
    }
  }
);
