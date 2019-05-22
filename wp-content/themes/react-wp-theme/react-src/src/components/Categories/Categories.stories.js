import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import Categories from "./Categories";
import description from "./Categories.md";

storiesOf("Components/Categories", module).add(
  "Overview",
  () => <Categories />,
  {
    info: {
      inline: true,
      text: description
    }
  }
);
