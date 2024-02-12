import type { Meta, StoryObj } from "@storybook/react";

import ForgotPasswordForm from "./ForgotPasswordForm";
import AuthLayout from "../../../layouts/auth-layout";
import store from "../../../../store";

const meta = {
  title: "Auth/ForgotPasswordForm",
  component: ForgotPasswordForm,
  tags: ["autodocs"],
} satisfies Meta<typeof ForgotPasswordForm>;

export default meta;
type Story = StoryObj<typeof ForgotPasswordForm>;

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
