import type { Meta, StoryObj } from "@storybook/react";
import { LoginForm } from "../../login-form";
import { AuthLayout } from ".";
import store from "../../../../../store";

const meta = {
  title: "Auth/AuthLayout",
  component: AuthLayout,
  tags: ["autodocs"],
} satisfies Meta<typeof AuthLayout>;

export default meta;
type Story = StoryObj<typeof AuthLayout>;

export const Login: Story = {
  args: {
    left: <LoginForm />,
    right: store?.auth?.coverPhoto,
  },
  parameters: {
    layout: "fullscreen",
  },
};
