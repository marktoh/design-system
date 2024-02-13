import type { Meta, StoryObj } from "@storybook/react";

import { Input } from ".";

const meta = {
  title: "Atoms/Input",
  component: Input,
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const Text: Story = {
  args: {
    placeholder: "johndoe@gmail.com",
  },
};

export const TextFocus: Story = {
  args: {
    placeholder: "focus@gmail.com",
  },
};

export const Password: Story = {
  args: {
    placeholder: "Enter your password...",
  },
};
