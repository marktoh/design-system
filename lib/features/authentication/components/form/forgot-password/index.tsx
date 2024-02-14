"use client";
import { FormEvent, FC } from "react";
import { BaseAuthForm } from "../templates/base-form";
import { EmailFormGroup, LoginRoute, SignUpRoute } from "../../ui";

const props = {
  title: "Retrieve Account",
  actionText: "Reset Password",
  formGroups: <EmailFormGroup />,
  buttonTitle: "Get Reset Password Link",
  authLinks: [LoginRoute, SignUpRoute],
  onSubmit: function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  },
};
const ForgotPasswordForm: FC = () => {
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

export { ForgotPasswordForm };
