"use client";
import { FormEvent, FC } from "react";
import { BaseAuthForm } from "../templates/base-form";
import {
  EmailFormGroup,
  PasswordFormGroup,
  SignUpRoute,
  ForgotPasswordRoute,
} from "../../ui";
import { mockApi } from "../templates/base-form/mock-api";

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
};

const LoginForm: FC = () => {
  const { title, actionText, formGroups, buttonTitle, authLinks } = props;
  return (
    <BaseAuthForm
      title={title}
      actionText={actionText}
      formGroups={formGroups}
      buttonTitle={buttonTitle}
      authLinks={authLinks}
      apiCall={mockApi}
    />
  );
};

export { LoginForm };
