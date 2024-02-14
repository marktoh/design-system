import { FC } from "react";
import { AuthLayout } from "../layout";
import { LoginForm } from "../../components";
import { PageProps } from "../helpers/";

const LoginPage: FC<PageProps> = ({ background }) => {
  return <AuthLayout left={<LoginForm />} right={background} />;
};

export { LoginPage };
