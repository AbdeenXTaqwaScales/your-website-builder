import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, User, ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const navLinks = [
  { href: "/start", label: "Programs" },
  { href: "/results", label: "Results" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { totalItems } = useCart();

  const handleJoinNow = () => {
    if (location.pathname === "/") {
      const section = document.querySelector("#programs");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const section = document.querySelector("#programs");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
              A
            </div>
            <span className="font-display font-bold text-xl hidden sm:block">Abdeens Academy</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.href ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link to="/cart" className="relative p-2 hover:bg-muted rounded-lg transition-colors">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                  {totalItems > 9 ? "9+" : totalItems}
                </span>
              )}
            </Link>
            <Link to="/auth">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
            </Link>
            <Button size="sm" onClick={handleJoinNow}>
              Join Now!
            </Button>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <Link to="/cart" className="relative p-2">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                  {totalItems > 9 ? "9+" : totalItems}
                </span>
              )}
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="p-2"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 z-50 h-full w-80 max-w-full bg-background border-l shadow-xl transform transition-transform duration-300 md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <span className="font-semibold">Menu</span>
          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
            className="p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="p-4">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`block px-4 py-3 rounded-lg transition-colors ${
                  location.pathname === link.href
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t space-y-2">
          <Link to="/auth" onClick={() => setMobileMenuOpen(false)}>
            <Button variant="outline" className="w-full">
              Sign In
            </Button>
          </Link>
          <Button
            className="w-full"
            onClick={() => {
              handleJoinNow();
              setMobileMenuOpen(false);
            }}
          >
            Join Now!
          </Button>
        </div>
      </div>
    </>
  );
};
