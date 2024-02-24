import { FC } from "react";
import { NavList } from "@/lib/components/common/nav-list";
import store from "@/store";

const Page: FC = () => {
  return (
    <main className="grid min-h-screen grid-cols-[300px_1fr] p-4">
      <div className="flex flex-col gap-4 p-4">
        <h1
          className="pl-4 text-xl font-semibold text-gray-900"
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
