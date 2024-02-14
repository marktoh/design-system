"use client";
import { FormEvent, FC } from "react";
import { BaseAuthForm } from "../templates/base-form";
import {
  EmailFormGroup,
  PasswordFormGroup,
  ConfirmPasswordFormGroup,
  LoginRoute,
  ForgotPasswordRoute,
} from "../../ui";

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
    <BaseAuthForm
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
