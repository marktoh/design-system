import { FC } from "react";
import { AuthLayout } from "../layout";
import { SignUpForm } from "../../components";
import { PageProps } from "../helpers/";

const SignUpPage: FC<PageProps> = ({ background }) => {
  return <AuthLayout left={<SignUpForm />} right={background} />;
};

export { SignUpPage };
