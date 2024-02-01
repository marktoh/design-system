import { ReactNode } from "react";
import AuthLayout from "@/lib/layouts/auth-layout/AuthLayout";
import store from "@/store";
interface LayoutProps {
  children: ReactNode;
}
function Layout({ children }: LayoutProps) {
  return <AuthLayout left={store?.auth?.cover} right={children} />;
}

export default Layout;
