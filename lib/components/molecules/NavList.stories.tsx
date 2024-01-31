import type { Meta, StoryObj } from "@storybook/react";
import store from "../../../store";

import NavList from "./NavList";

const meta = {
  title: "Molecules/NavList",
  component: NavList,
  tags: ["autodocs"],
} satisfies Meta<typeof NavList>;

export default meta;
type Story = StoryObj<typeof NavList>;

export const Default: Story = {
  args: {
    links: store?.navList,
  },
};
