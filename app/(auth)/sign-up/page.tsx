import { SignUpPage } from "@/lib/features/authentication";
import store from "@/store";

function Page() {
  return <SignUpPage background={store.auth.pageBackground} />;
}

export default Page;
