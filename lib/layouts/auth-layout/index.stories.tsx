import type { Meta, StoryObj } from "@storybook/react";
import LoginForm from "../../components/auth-form/login-form/LoginForm";
import AuthLayout from ".";
import store from "../../../store";

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
    right: store?.auth?.cover,
  },
  parameters: {
    layout: "fullscreen",
  },
};