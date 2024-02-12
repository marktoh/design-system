import { ReactNode } from "react";
import AuthLayout from "@/lib/layouts/auth-layout";
import store from "@/store";
interface LayoutProps {
  children: ReactNode;
}
function Layout({ children }: LayoutProps) {
  return <AuthLayout left={children} right={store?.auth?.cover} />;
}

export default Layout;
