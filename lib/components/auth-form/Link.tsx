import NextLink from "next/link";

interface AuthLinkProps {
  href: string;
  title: string;
}
function AuthLink({ title, href }: AuthLinkProps) {
  return (
    <NextLink className="text-sm text-gray-400 hover:text-gray-500" href={href}>
      {title}
    </NextLink>
  );
}

export default AuthLink;
