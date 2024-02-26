import { FC } from "react";
import { Product } from "../../data/products/helper";
import { ShoppingGalleryCard } from "../shopping-gallery-card";

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
        <div
          key={idx}
          className="animate-fade-in"
          style={{
            animationDuration: idx > 10 ? "1.0s" : `${0.2 + idx * 0.1}s`,
          }}
        >
          <ShoppingGalleryCard {...product} />
        </div>
      ))}
    </div>
  );
};

export { ShoppingGallery };
