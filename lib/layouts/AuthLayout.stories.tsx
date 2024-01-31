import type { Meta, StoryObj } from "@storybook/react";
import LoginForm from "../components/LoginForm";
import AuthLayout from "./AuthLayout";
import store from "../../store";

const meta = {
  title: "Auth/AuthLayout",
  component: AuthLayout,
  tags: ["autodocs"],
} satisfies Meta<typeof AuthLayout>;

export default meta;
type Story = StoryObj<typeof AuthLayout>;

export const Login: Story = {
  args: {
    left: store?.auth?.cover,
    right: <LoginForm />,
  },
  parameters: {
    layout: "fullscreen",
  },
};
