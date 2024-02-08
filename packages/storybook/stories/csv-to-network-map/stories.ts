import { Meta, StoryObj } from "@storybook/html";

import play from "./index";
import template from "./index.html?raw";
import source from "./index?raw";

const meta: Meta = {
  id: "csv-to-network-map",
  title: "Examples",
};
export default meta;

type Story = StoryObj;

export const story: Story = {
  name: "From CSV to network mapples",
  render: () => template,
  play,
  args: {},
  parameters: {
    storySource: {
      source,
    },
  },
};
