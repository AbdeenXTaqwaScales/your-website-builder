import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, User, ShoppingCart } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useCart } from "@/contexts/CartContext";
import logo from "@/assets/logo.png";

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
  const { user, signOut } = useAuth();
  const { totalItems } = useCart();

  const handleJoinNow = () => {
    if (location.pathname === "/") {
      // On homepage, scroll to choose your path section
      const section = document.querySelector("#programs");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to homepage with hash
      navigate("/");
      setTimeout(() => {
        const section = document.querySelector("#programs");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };


  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
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
      <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          {/* Logo - Left corner with hover text */}
          <Link to="/" className="group flex items-center gap-2">
            <img src={logo} alt="Abdeens Academy" className="h-10 w-auto" />
            <span className="font-display font-bold text-xl text-foreground whitespace-nowrap opacity-0 max-w-0 overflow-hidden group-hover:opacity-100 group-hover:max-w-[200px] transition-all duration-300">
              Abdeens Academy
            </span>
          </Link>

          {/* Desktop Navigation - Centered (hidden on mobile and tablet) */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.href ? "text-primary" : "text-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side actions - visible on desktop only */}
          <div className="hidden lg:flex items-center gap-3">

            {/* Cart Button */}
            <Link to="/cart" className="relative p-2 hover:bg-muted rounded-lg transition-colors text-foreground/80 hover:text-foreground">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                  {totalItems > 9 ? "9+" : totalItems}
                </span>
              )}
            </Link>

            {user ? (
              <>
                <Link to="/profile" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-muted transition-colors">
                  <User className="h-5 w-5 text-foreground/80" />
                  <span className="text-sm font-medium text-foreground/80">{user.email?.split('@')[0]}</span>
                </Link>
                <Button variant="outline" size="sm" onClick={() => signOut()}>
                  Sign Out
                </Button>
              </>
            ) : (
              <div className="flex items-center gap-2">
                <Link to="/auth">
                  <Button variant="ghost" size="sm" className="text-foreground/80 hover:text-foreground">
                    Sign In
                  </Button>
                </Link>
                <Button size="sm" onClick={handleJoinNow}>
                  Join Now!
                </Button>
              </div>
            )}
          </div>

          {/* Mobile/Tablet: Cart & Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link to="/cart" className="relative p-2 text-foreground/80">
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
              className="p-2 text-foreground/80"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
        
      </header>

      {/* Mobile/Tablet Navigation Overlay - Outside header for proper z-index */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile/Tablet Navigation Slide-in Panel - Outside header for proper z-index */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-80 max-w-full bg-background border-l shadow-xl transform transition-transform duration-300 lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Panel Header */}
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

          {/* Navigation Links */}
          <nav className="flex-1 p-4 overflow-y-auto">
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

          {/* Auth Actions - Single line layout */}
          <div className="p-4 border-t space-y-3">
            {user ? (
              <div className="space-y-2">
                <Link
                  to="/profile"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{user.email}</p>
                    <p className="text-xs text-muted-foreground">View Profile</p>
                  </div>
                </Link>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => { signOut(); setMobileMenuOpen(false); }}
                >
                  Sign Out
                </Button>
              </div>
            ) : (
              <div className="space-y-2">
                <Link to="/auth" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full">
                    Sign In
                  </Button>
                </Link>
                <Button className="w-full" onClick={() => { handleJoinNow(); setMobileMenuOpen(false); }}>
                  Join Now!
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
