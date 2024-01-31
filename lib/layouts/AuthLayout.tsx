import { ReactNode } from "react";
interface AuthLayoutProps {
  left: ReactNode;
  right: ReactNode;
}
function AuthLayout({ left, right }: AuthLayoutProps) {
  return (
    <div className="flex h-screen flex-col md:grid md:grid-cols-[3fr_2fr]">
      <section className="hidden md:block md:h-screen">{left}</section>
      <section className="my-auto flex h-full w-full items-center px-4">
        {right}
      </section>
    </div>
  );
}

export default AuthLayout;
