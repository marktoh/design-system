import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";

import LoginForm from "./LoginForm";
import AuthLayout from "../layouts/AuthLayout";
import store from "../../store";

const meta = {
  title: "Auth/LoginForm",
  component: LoginForm,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {
  args: {},
};

export const DefaultTest: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(canvas.getByTestId("email"), "email@provider.com");

    await userEvent.type(canvas.getByTestId("password"), "a-random-password");

    await userEvent.click(canvas.getByRole("button"));
  },
};

export const Integration: Story = {
  args: {},
  decorators: (Story) => (
    <AuthLayout left={store?.auth?.cover} right={<Story />} />
  ),
};

export const IntegrationTest: Story = {
  args: {},
  decorators: (Story) => (
    <AuthLayout left={store?.auth?.cover} right={<Story />} />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(canvas.getByTestId("email"), "email@provider.com");

    await userEvent.type(canvas.getByTestId("password"), "a-random-password");

    await userEvent.click(canvas.getByRole("button"));
  },
};
