import { FC, ReactNode } from "react";
interface AuthLayoutProps {
  left: ReactNode;
  right: ReactNode;
}
const AuthLayout: FC<AuthLayoutProps> = ({ left, right }) => {
  return (
    <div className="flex h-screen flex-col md:grid md:grid-cols-[2fr_1fr_]">
      <section className="my-auto flex h-full w-full items-center px-4">
        {left}
      </section>
      <section className="hidden md:block md:h-screen">{right}</section>
    </div>
  );
};

export { AuthLayout };
