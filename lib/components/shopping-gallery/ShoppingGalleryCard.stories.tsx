import type { Meta, StoryObj } from "@storybook/react";

import ShoppingGalleryCard from "./ShoppingGalleryCard";
import store from "../../../store";

const meta = {
  title: "ShoppingGallery/ShoppingGalleryCard",
  component: ShoppingGalleryCard,
  tags: ["autodocs"],
} satisfies Meta<typeof ShoppingGalleryCard>;

export default meta;
type Story = StoryObj<typeof ShoppingGalleryCard>;

const sampleProduct = store?.products?.[0];
export const Default: Story = {
  args: { ...sampleProduct },
};
