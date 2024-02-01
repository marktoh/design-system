import { FC } from "react";
import { Product } from "@/store/products-generator";

const ShoppingGalleyCard: FC<Product> = ({
  id,
  name,
  description,
  material,
  adjective,
  price,
  dateCreated,
}) => {
  return (
    <div className="flex flex-col gap-2 rounded border px-4 py-2">
      <div className="flex items-center justify-between">
        <div
          className="text-xl font-medium text-slate-700"
          data-testid="shopping-gallery-card-name"
        >
          {name}
        </div>
      </div>
      <div>
        <div
          className="text-sm text-slate-600 [max-inline-size:45ch]"
          data-testid="shopping-gallery-card-description"
        >
          <span>{description}</span>
        </div>
      </div>
      <div>
        <div className="flex items-center text-sm text-slate-600">
          <div
            className="w-16"
            data-testid="shopping-gallery-card-material-label"
          >
            Material
          </div>
          <span
            className="text-xs"
            data-testid="shopping-gallery-card-material-value"
          >
            {material}
          </span>
        </div>
        <div className="flex items-center text-sm text-slate-600">
          <div className="w-16" data-testid="shopping-gallery-card-tags-label">
            Tags
          </div>
          <span
            className="text-xs"
            data-testid="shopping-gallery-card-tags-value"
          >
            {adjective?.join(", ")}
          </span>
        </div>
      </div>
      <div
        className="text-sm font-semibold text-slate-700"
        data-testid="shopping-gallery-card-price"
      >
        <span>MYR </span>
        <span>{price}</span>
      </div>
      <div
        className="text-xs font-light text-slate-600"
        data-testid="shopping-gallery-card-date"
      >
        <span>Date Created: </span>
        <span>{new Date(dateCreated).toLocaleDateString()}</span>
      </div>
    </div>
  );
};

export default ShoppingGalleyCard;
