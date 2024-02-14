import type { Meta, StoryObj } from "@storybook/react";

import { SignUpForm } from ".";
import { AuthLayout } from "../../../pages/layout";
import { demo } from "../../../data";

const meta = {
  title: "Auth/SignUpForm",
  component: SignUpForm,
  tags: ["autodocs"],
} satisfies Meta<typeof SignUpForm>;

export default meta;
type Story = StoryObj<typeof SignUpForm>;

export const Default: Story = {
  args: {},
};

export const Integration: Story = {
  args: {},
  parameters: {
    layout: "fullscreen",
  },
  decorators: (Story) => (
    <AuthLayout left={<Story />} right={demo.pageBackground} />
  ),
};
