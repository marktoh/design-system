import type { Meta, StoryObj } from "@storybook/react";

import { ShoppingGalleryCard } from ".";
import { demo } from "../../data";

const meta = {
  title: "ShoppingGallery/ShoppingGalleryCard",
  component: ShoppingGalleryCard,
  tags: ["autodocs"],
} satisfies Meta<typeof ShoppingGalleryCard>;

export default meta;
type Story = StoryObj<typeof ShoppingGalleryCard>;

const sampleProduct = demo?.products?.[0];
export const Default: Story = {
  args: { ...sampleProduct },
};
