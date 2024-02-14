import type { Meta, StoryObj } from "@storybook/react";

import { InteractiveShoppingGallery } from ".";
import { demo } from "../../data";

const meta = {
  title: "ShoppingGallery/InteractiveShoppingGallery",
  component: InteractiveShoppingGallery,
  tags: ["autodocs"],
} satisfies Meta<typeof InteractiveShoppingGallery>;

export default meta;
type Story = StoryObj<typeof InteractiveShoppingGallery>;

export const Default: Story = {
  args: { products: demo?.products },
};
