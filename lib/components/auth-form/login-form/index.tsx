"use client";
import { FormEvent, FC } from "react";
import { AuthForm } from "../templates/base-form";
import {
  EmailFormGroup,
  PasswordFormGroup,
  SignUpRoute,
  ForgotPasswordRoute,
} from "../helper";

const props = {
  title: "Welcome Back",
  actionText: "Log in to your account",
  formGroups: (
    <>
      <EmailFormGroup />
      <PasswordFormGroup />
    </>
  ),
  buttonTitle: "Continue",
  authLinks: [SignUpRoute, ForgotPasswordRoute],
  onSubmit: function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  },
};
const LoginForm: FC = () => {
  const { title, actionText, formGroups, buttonTitle, authLinks, onSubmit } =
    props;
  return (
    <AuthForm
      title={title}
      actionText={actionText}
      formGroups={formGroups}
      buttonTitle={buttonTitle}
      authLinks={authLinks}
      onSubmit={onSubmit}
    />
  );
};

export { LoginForm };
