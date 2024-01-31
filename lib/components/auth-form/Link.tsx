import { FC } from "react";
import NextLink from "next/link";

type RouteHref = "/login" | "/sign-up" | "/forgot-password";
type RouteName = "Log In" | "Sign Up" | "Forgot Password";
interface Route {
  href: RouteHref;
  title: RouteName;
}
const LoginRoute: Route = {
  href: "/login",
  title: "Log In",
};
const SignUpRoute: Route = {
  href: "/sign-up",
  title: "Sign Up",
};
const ForgotPasswordRoute: Route = {
  href: "/forgot-password",
  title: "Forgot Password",
};
interface AuthLinkProps {
  href: string;
  title: string;
}
const AuthLink: FC<AuthLinkProps> = ({ title, href }) => {
  return (
    <NextLink className="text-sm text-gray-400 hover:text-gray-500" href={href}>
      {title}
    </NextLink>
  );
};

export { type Route, LoginRoute, SignUpRoute, ForgotPasswordRoute };
export default AuthLink;
