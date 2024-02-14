import { LoginPage } from "@/lib/features/authentication";
import store from "@/store";

function Page() {
  return <LoginPage background={store.auth.pageBackground} />;
}

export default Page;
