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
  type: "secondary" | "tertiary";
}
const AuthLink: FC<AuthLinkProps> = ({ title, href, type }) => {
  let className = "text-sm font-semibold rounded-lg px-4 py-3";
  if (type === "secondary") {
    className += " bg-neutral-100 text-gray-600";
  } else {
    className += " bg-white border border-neutral-100 text-gray-600";
  }
  return (
    <NextLink className={className} href={href}>
      {title}
    </NextLink>
  );
};

export { type Route, LoginRoute, SignUpRoute, ForgotPasswordRoute, AuthLink };
