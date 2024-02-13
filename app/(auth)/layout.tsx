import { ReactNode } from "react";
import AuthLayout from "@/lib/components/auth-form/layout";
import store from "@/store";
interface LayoutProps {
  children: ReactNode;
}
function Layout({ children: form }: LayoutProps) {
  return <AuthLayout left={form} right={store.auth.coverPhoto} />;
}

export default Layout;
