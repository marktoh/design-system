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
import { mockApi } from "../templates/base-form/mock-api";

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
};
const SignUpForm: FC = () => {
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

export { SignUpForm };
