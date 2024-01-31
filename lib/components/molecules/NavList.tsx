import Link from "next/link";

interface LinkProps {
  href: string;
  title: string;
}
function NavList({ links }: { links: Array<LinkProps> }) {
  return (
    <ul>
      {links?.map((link) => (
        <li key={link.href}>
          <Link
            className="text-sm text-blue-700 hover:text-blue-800"
            href={link.href}
          >
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default NavList;
