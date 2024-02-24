import { FC } from "react";
import Link from "next/link";

interface LinkProps {
  href: string;
  title: string;
  icon?: any;
}
interface LinksProps {
  links: Array<LinkProps>;
}
const NavList: FC<LinksProps> = ({ links }) => {
  return (
    <ul>
      {links?.map((link) => (
        <li key={link.href}>
          <Link
            className="flex items-center gap-4 rounded-md p-6 text-lg font-semibold text-gray-900 transition duration-500 ease-in-out hover:bg-gray-100"
            href={link.href}
          >
            <div className="h-4 w-4">{link.icon}</div>
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export { NavList };
