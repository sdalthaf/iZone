import { ShoppingBag, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 glass-card">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center gap-2">
          <ShoppingBag className="h-7 w-7 text-primary" />
          <span className="font-heading text-xl font-bold tracking-tight text-foreground">iZoneGadgets
            <span className="text-primary">STORE</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link to="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Home
          </Link>
          <Link to="/?cat=shoes" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Shoes
          </Link>
          <Link to="/?cat=crocs" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Crocs
          </Link>
          <Link to="/?cat=flipflops" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Flip Flops
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <button className="rounded-full bg-secondary p-2.5 text-muted-foreground transition-colors hover:text-foreground">
            <Search className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>);

};

export default Header;