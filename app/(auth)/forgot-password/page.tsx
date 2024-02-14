import { ForgotPasswordPage } from "@/lib/features/authentication";
import store from "@/store";

function Page() {
  return <ForgotPasswordPage background={store.auth.pageBackground} />;
}

export default Page;
