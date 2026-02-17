import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Star } from "lucide-react";
import { products } from "@/data/products";
import WhatsAppButton from "@/components/WhatsAppButton";
import Header from "@/components/Header";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);
  const [selectedSize, setSelectedSize] = useState<string>("");

  if (!product) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-background">
        <p className="text-xl text-muted-foreground">Product not found</p>
        <Link to="/" className="mt-4 text-primary underline">Go back home</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <Link
          to="/"
          className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Shop
        </Link>

        <div className="grid gap-10 md:grid-cols-2">
          {/* Image */}
          <div className="animate-scale-in overflow-hidden rounded-xl bg-secondary">
            <img
              src={product.image}
              alt={product.name}
              className="aspect-square w-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col gap-6 animate-fade-in-up">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                {product.brand}
              </p>
              <h1 className="mt-1 font-heading text-3xl font-bold text-foreground md:text-4xl">
                {product.name}
              </h1>
              <div className="mt-3 flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
                <span className="ml-2 text-sm text-muted-foreground">(128 reviews)</span>
              </div>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="font-heading text-3xl font-bold text-primary">
                ₹{product.price.toLocaleString("en-IN")}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-muted-foreground line-through">
                  ₹{product.originalPrice.toLocaleString("en-IN")}
                </span>
              )}
              {product.originalPrice && (
                <span className="rounded-full bg-destructive/10 px-3 py-1 text-xs font-semibold text-destructive">
                  {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                </span>
              )}
            </div>

            <p className="leading-relaxed text-secondary-foreground">
              {product.description}
            </p>

            {/* Size Selector */}
            <div>
              <p className="mb-3 font-heading text-sm font-semibold text-foreground">
                Select Size
              </p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`rounded-lg border px-4 py-2 text-sm font-medium transition-all ${
                      selectedSize === size
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="mt-2">
              <WhatsAppButton
                productName={`${product.brand} ${product.name}`}
                price={product.price}
                selectedSize={selectedSize}
              />
              <p className="mt-3 text-center text-xs text-muted-foreground">
                You'll be redirected to WhatsApp to complete your order
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
