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
            className="flex items-center gap-2 rounded p-4 text-base font-semibold text-gray-700 hover:bg-neutral-100"
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
