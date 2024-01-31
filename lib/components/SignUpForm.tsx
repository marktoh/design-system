"use client";
import { FormEvent, FC } from "react";
import AuthForm from "./auth-form";
import EmailFormGroup from "./auth-form/FormGroup-Email";
import PasswordFormGroup from "./auth-form/FormGroup-Password";
import ConfirmPasswordFormGroup from "./auth-form/FormGroup-ConfirmPassword";

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
  authLinks: [
    {
      href: "/login",
      title: "Log In",
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
