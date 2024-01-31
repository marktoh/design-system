import { FC } from "react";
import NavList from "@/lib/components/molecules/NavList";
import store from "@/store";

const Page: FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="font-semibold" data-testid="heading">
          HomePage
        </h1>
        <NavList links={store.navList} />
      </div>
    </main>
  );
};

export default Page;
