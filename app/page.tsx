import NavList from "@/lib/components/molecules/NavList";
import store from "@/store";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="font-semibold">HomePage</h1>
        <NavList links={store.navList} />
      </div>
    </main>
  );
}
