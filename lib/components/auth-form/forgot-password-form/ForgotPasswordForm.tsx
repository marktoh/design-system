"use client";
import { FormEvent, FC } from "react";
import AuthForm from "..";
import EmailFormGroup from "../FormGroup-Email";
import { LoginRoute, SignUpRoute } from "../Link";

const props = {
  title: "Reset Password",
  formGroups: <EmailFormGroup />,
  buttonTitle: "Get Reset Password Link",
  authLinks: [LoginRoute, SignUpRoute],
  onSubmit: function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  },
};
const ForgotPasswordForm: FC = () => {
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

export default ForgotPasswordForm;
