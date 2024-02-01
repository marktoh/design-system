"use client";
import { FormEvent, FC } from "react";
import AuthForm from "..";
import EmailFormGroup from "../FormGroup-Email";
import PasswordFormGroup from "../FormGroup-Password";
import ConfirmPasswordFormGroup from "../FormGroup-ConfirmPassword";
import { LoginRoute, ForgotPasswordRoute } from "../Link";

const props = {
  title: "Sign Up for Free",
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
  const { title, formGroups, buttonTitle, authLinks, onSubmit } = props;
  return (
    <AuthForm
      title={title}
      formGroups={formGroups}
      buttonTitle={buttonTitle}
      authLinks={authLinks}
      onSubmit={onSubmit}
    />
  );
};

export default SignUpForm;
