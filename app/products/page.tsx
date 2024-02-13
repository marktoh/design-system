import { FC } from "react";
import store from "@/store";
import { InteractiveShoppingGallery } from "@/lib/components/shopping-gallery/interactive-shopping-gallery";

const Page: FC = () => {
  return (
    <div>
      <InteractiveShoppingGallery products={store?.products} />
    </div>
  );
};

export default Page;
