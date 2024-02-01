import { FC } from "react";
import { Product } from "@/store/products-generator";
import ShoppingGalleyCard from "./ShoppingGalleryCard";

interface ShoppingGalleryProps {
  products: Array<Product>;
}
const ShoppingGallery: FC<ShoppingGalleryProps> = ({ products }) => {
  return (
    <div
      className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      data-testid="shopping-gallery"
    >
      {products?.map((product, idx) => (
        <ShoppingGalleyCard key={idx} {...product} />
      ))}
    </div>
  );
};

export default ShoppingGallery;
