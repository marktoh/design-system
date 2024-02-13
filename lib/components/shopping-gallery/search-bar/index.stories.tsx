import type { Meta, StoryObj } from "@storybook/react";

import SearchBar from ".";
import store from "../../../../store";

const meta = {
  title: "ShoppingGallery/SearchBar",
  component: SearchBar,
  tags: ["autodocs"],
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {
  args: {
    products: [],
    setProducts: () => {},
  },
};
