"use client";
import { FC, useState } from "react";
import { Product } from "@/store/products-generator";
import ShoppingGallery from "../shopping-gallery";
import SearchBar from "../search-bar";

const SearchResultsCount: FC<{ count: number }> = ({ count }) => {
  return (
    <div className="text-xs text-slate-400" data-testid="search-results-count">
      {count} products found.
    </div>
  );
};

interface ShoppingShoppingGalleryProps {
  products: Array<Product>;
}
const InteractiveShoppingGallery: FC<ShoppingShoppingGalleryProps> = ({
  products,
}) => {
  const [filteredProducts, setFilteredProducts] = useState(products || []);
  return (
    <div className="flex flex-col gap-2 px-8 py-5">
      <SearchBar products={products} setProducts={setFilteredProducts} />
      <SearchResultsCount count={filteredProducts?.length} />
      <ShoppingGallery products={filteredProducts} />
    </div>
  );
};

export default InteractiveShoppingGallery;
