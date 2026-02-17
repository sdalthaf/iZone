import { Link } from "react-router-dom";
import type { Product } from "@/data/products";

const badgeStyles = {
  new: "bg-primary text-primary-foreground",
  sale: "bg-destructive text-destructive-foreground",
  trending: "bg-accent text-accent-foreground",
};

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className="group block overflow-hidden rounded-lg bg-card hover-lift"
    >
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        {product.badge && (
          <span
            className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${badgeStyles[product.badge]}`}
          >
            {product.badge}
          </span>
        )}
      </div>
      <div className="p-4">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          {product.brand}
        </p>
        <h3 className="mt-1 font-heading text-base font-semibold text-foreground">
          {product.name}
        </h3>
        <div className="mt-2 flex items-center gap-2">
          <span className="font-heading text-lg font-bold text-primary">
            ₹{product.price.toLocaleString("en-IN")}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ₹{product.originalPrice.toLocaleString("en-IN")}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
