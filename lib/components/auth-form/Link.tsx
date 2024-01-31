import { FC } from "react";
import NextLink from "next/link";

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

export default AuthLink;
