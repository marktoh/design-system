import { FC, ReactNode } from "react";
interface AuthLayoutProps {
  left: ReactNode;
  right: ReactNode;
}
const AuthLayout: FC<AuthLayoutProps> = ({ left, right }) => {
  return (
    <div className="flex h-screen flex-col md:grid md:grid-cols-[3fr_2fr]">
      <section className="hidden md:block md:h-screen">{left}</section>
      <section className="my-auto flex h-full w-full items-center px-4">
        {right}
      </section>
    </div>
  );
};

export default AuthLayout;
