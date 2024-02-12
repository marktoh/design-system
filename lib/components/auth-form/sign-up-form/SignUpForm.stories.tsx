import type { Meta, StoryObj } from "@storybook/react";

import SignUpForm from "./SignUpForm";
import AuthLayout from "../../../layouts/auth-layout";
import store from "../../../../store";

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
    <AuthLayout left={<Story />} right={store?.auth?.cover} />
  ),
};
