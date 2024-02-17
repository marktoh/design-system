import { FC } from "react";
import { NavList } from "@/lib/components/common/nav-list";
import store from "@/store";

const Page: FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col gap-4">
        <h1
          className="text-center text-3xl font-semibold text-gray-700"
          data-testid="heading"
        >
          HomePage
        </h1>
        <NavList links={store.navList} />
      </div>
    </main>
  );
};

export default Page;
