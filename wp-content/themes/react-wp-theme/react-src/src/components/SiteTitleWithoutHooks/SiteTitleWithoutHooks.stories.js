import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import SiteTitleWithoutHooks from "./SiteTitleWithoutHooks";
import description from "./SiteTitleWithoutHooks.md";

storiesOf("Components/SiteTitleWithoutHooks", module).add(
  "Overview",
  () => <SiteTitleWithoutHooks />,
  {
    info: {
      inline: true,
      text: description
    }
  }
);
