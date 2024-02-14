import type { Meta, StoryObj } from "@storybook/react";

import { ShoppingGallery } from ".";
import { demo } from "../../data";

const meta = {
  title: "ShoppingGallery/ShoppingGallery",
  component: ShoppingGallery,
  tags: ["autodocs"],
} satisfies Meta<typeof ShoppingGallery>;

export default meta;
type Story = StoryObj<typeof ShoppingGallery>;

export const Default: Story = {
  args: { products: demo?.products },
};
