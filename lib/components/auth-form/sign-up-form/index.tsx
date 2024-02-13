"use client";
import { FormEvent, FC } from "react";
import { AuthForm } from "../templates/base-form";
import {
  EmailFormGroup,
  PasswordFormGroup,
  ConfirmPasswordFormGroup,
  LoginRoute,
  ForgotPasswordRoute,
} from "../helper";

const props = {
  title: "Take Off",
  actionText: "Sign Up for Free",
  formGroups: (
    <>
      <EmailFormGroup />
      <PasswordFormGroup />
      <ConfirmPasswordFormGroup />
    </>
  ),
  buttonTitle: "Continue",
  authLinks: [LoginRoute, ForgotPasswordRoute],
  onSubmit: function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  },
};
const SignUpForm: FC = () => {
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

export { SignUpForm };
