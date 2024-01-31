"use client";
import { FormEvent } from "react";
import EmailFormGroup from "./auth-form/FormGroup-Email";
import PasswordFormGroup from "./auth-form/FormGroup-Password";
import AuthForm from "./auth-form";

const props = {
  title: "Log in to your account",
  formGroups: (
    <>
      <EmailFormGroup />
      <PasswordFormGroup />
    </>
  ),
  buttonTitle: "Continue",
  authLinks: [
    {
      href: "/sign-up",
      title: "Sign Up",
    },
    {
      href: "/forgot-password",
      title: "Forgot Password",
    },
  ],
  onSubmit: function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  },
};
function LoginForm() {
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
}

export default LoginForm;
