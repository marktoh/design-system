"use client";
import { FormEvent, FC } from "react";
import { BaseAuthForm } from "../templates/base-form";
import { EmailFormGroup, LoginRoute, SignUpRoute } from "../../ui";
import { mockApi } from "../templates/base-form/mock-api";

const props = {
  title: "Retrieve Account",
  actionText: "Reset Password",
  formGroups: <EmailFormGroup />,
  buttonTitle: "Get Reset Password Link",
  authLinks: [LoginRoute, SignUpRoute],
};
const ForgotPasswordForm: FC = () => {
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

export { ForgotPasswordForm };
