import { FC } from "react";
import { AuthLayout } from "../layout";
import { ForgotPasswordForm } from "../../components";
import { PageProps } from "../helpers/";

const ForgotPasswordPage: FC<PageProps> = ({ background }) => {
  return <AuthLayout left={<ForgotPasswordForm />} right={background} />;
};

export { ForgotPasswordPage };
