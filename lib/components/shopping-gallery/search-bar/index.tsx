import { FC, ChangeEvent, useState, useEffect } from "react";
import { MagnifyingGlassIcon as SearchIcon } from "@heroicons/react/24/outline";
import { Product } from "@/store/products-generator";

interface SearchBarProps {
  products: Array<Product>;
  setProducts: (products: Array<Product>) => void;
}
const SearchBar: FC<SearchBarProps> = ({ products, setProducts }) => {
  const [input, setInput] = useState("");
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  useEffect(() => {
    const filteredProducts = products?.filter((product: Product) => {
      const lowerCaseName = product?.name?.toLowerCase();
      const lowerCaseInput = input?.toLowerCase();
      return lowerCaseName.includes(lowerCaseInput);
    });
    setProducts(filteredProducts);
  }, [input]);

  return (
    <div className="flex items-center">
      <SearchIcon className="h-5 w-5 text-slate-400" />
      <input
        className="w-full rounded p-2 text-slate-900 placeholder:font-thin placeholder:text-slate-400 focus:outline-none md:placeholder:text-sm"
        placeholder="Search all products..."
        value={input}
        onChange={onChange}
        data-testid="shopping-gallery-search-bar"
      />
    </div>
  );
};

export default SearchBar;
