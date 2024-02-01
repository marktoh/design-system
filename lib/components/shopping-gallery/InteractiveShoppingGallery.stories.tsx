import type { Meta, StoryObj } from "@storybook/react";

import InteractiveShoppingGallery from "./InteractiveShoppingGallery";
import store from "../../../store";

const meta = {
  title: "ShoppingGallery/InteractiveShoppingGallery",
  component: InteractiveShoppingGallery,
  tags: ["autodocs"],
} satisfies Meta<typeof InteractiveShoppingGallery>;

export default meta;
type Story = StoryObj<typeof InteractiveShoppingGallery>;

export const Default: Story = {
  args: { products: store?.products },
};
