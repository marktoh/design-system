import type { Meta, StoryObj } from "@storybook/react";

import ShoppingGallery from ".";
import store from "../../../store";

const meta = {
  title: "ShoppingGallery/ShoppingGallery",
  component: ShoppingGallery,
  tags: ["autodocs"],
} satisfies Meta<typeof ShoppingGallery>;

export default meta;
type Story = StoryObj<typeof ShoppingGallery>;

export const Default: Story = {
  args: { products: store?.products },
};
