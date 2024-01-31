"use client";
import { FormEvent } from "react";
import AuthForm from "./auth-form";
import EmailFormGroup from "./auth-form/FormGroup-Email";

const props = {
  title: "Reset Password",
  formGroups: <EmailFormGroup />,
  buttonTitle: "Get Reset Password Link",
  authLinks: [
    {
      href: "/login",
      title: "Login",
    },
    {
      href: "/sign-up",
      title: "Sign Up",
    },
  ],
  onSubmit: function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  },
};
function ForgotPasswordForm() {
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

export default ForgotPasswordForm;
