"use client";
import { FormEvent, FC } from "react";
import AuthForm from "./auth-form";
import EmailFormGroup from "./auth-form/FormGroup-Email";
import PasswordFormGroup from "./auth-form/FormGroup-Password";
import { SignUpRoute, ForgotPasswordRoute } from "./auth-form/Link";

const props = {
  title: "Log in to your account",
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

export default LoginForm;
