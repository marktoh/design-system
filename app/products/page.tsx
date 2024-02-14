import { FC } from "react";
import { InteractiveShoppingGallery } from "@/lib/features/e-commerce/shopping-gallery/components/interactive-shopping-gallery";
import store from "@/store";

const Page: FC = () => {
  return (
    <div>
      <InteractiveShoppingGallery products={store?.products} />
    </div>
  );
};

export default Page;
