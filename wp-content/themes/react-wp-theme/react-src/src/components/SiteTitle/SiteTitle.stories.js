import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import SiteTitle from "./SiteTitle";
import description from "./SiteTitle.md";

storiesOf("Components/SiteTitle", module).add("Overview", () => <SiteTitle />, {
  info: {
    inline: true,
    text: description
  }
});
