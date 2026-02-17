import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";
import heroBanner from "@/assets/hero-banner.jpg";

const Index = () => {
  const [searchParams] = useSearchParams();
  const catParam = searchParams.get("cat");
  const [activeCategory, setActiveCategory] = useState(catParam || "all");

  const filtered =
  activeCategory === "all" ?
  products :
  products.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[480px] overflow-hidden">
        <img
          src={heroBanner}
          alt="Premium footwear collection"
          className="absolute inset-0 h-full w-full object-cover" />

        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="relative flex h-full flex-col items-center justify-end pb-16 text-center">
          <h1 className="animate-fade-in-up font-heading text-5xl font-bold leading-tight text-foreground md:text-7xl">
            Step Into <span className="text-gradient">Style</span>
          </h1>
          <p className="mt-4 max-w-md animate-fade-in-up text-lg text-muted-foreground [animation-delay:0.15s]">
            Premium sneakers, crocs & flip flops from the brands you love.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-10">
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) =>
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`rounded-full px-5 py-2 font-heading text-sm font-medium transition-all ${
            activeCategory === cat.id ?
            "bg-primary text-primary-foreground" :
            "bg-secondary text-secondary-foreground hover:bg-secondary/80"}`
            }>

              {cat.label}
            </button>
          )}
        </div>
      </section>

      {/* Product Grid */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((product, i) =>
          <div
            key={product.id}
            className="animate-fade-in-up"
            style={{ animationDelay: `${i * 0.07}s` }}>

              <ProductCard product={product} />
            </div>
          )}
        </div>
        {filtered.length === 0 &&
        <p className="py-20 text-center text-muted-foreground">
            No products in this category yet.
          </p>
        }
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-8 text-center text-sm text-muted-foreground">© 2026 iZoneGadgets. All rights reserved.

      </footer>
    </div>);

};

export default Index;