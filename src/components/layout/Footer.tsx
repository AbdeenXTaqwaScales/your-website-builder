import { Link } from "react-router-dom";
import { Instagram, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

// TikTok icon component
const TikTok = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const quickLinks = [
  { href: "/start", label: "Programs" },
  { href: "/library", label: "Library" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/refund-policy", label: "Refund Policy" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/cancellation-policy", label: "Cancellation Policy" },
  { href: "/cookie-preferences", label: "Cookie Preferences" },
];

export const Footer = () => {
  return (
    <footer className="border-t bg-secondary/50">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
          <div className="col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-3 md:mb-4">
              <img
                src={logo}
                alt="Abdeens Academy Logo"
                className="h-8 w-8 md:h-10 md:w-10 rounded-lg object-contain"
              />
              <span className="font-display font-semibold text-lg md:text-xl text-foreground">Abdeens Academy</span>
            </Link>
            <p className="text-muted-foreground text-xs md:text-sm max-w-xs mb-3 md:mb-4">
              Your guided journey to memorizing, understanding, and living the Qur'an.
            </p>
            <div className="text-muted-foreground text-xs space-y-1">
              <p>Email: admin@abdeenacademy.com</p>
              <p>KVK: 95364218</p>
              <p className="hidden sm:block">Registered in the Netherlands</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground text-sm md:text-base mb-3 md:mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-1.5 md:gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-semibold text-foreground text-sm md:text-base mb-3 md:mb-4">Legal</h4>
            <nav className="flex flex-col gap-1.5 md:gap-2">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <h4 className="font-semibold text-foreground text-sm md:text-base mb-3 md:mb-4">Follow Us</h4>
            <div className="flex gap-3 md:gap-4">
              <a
                href="https://instagram.com/abdeentube_"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 md:h-10 md:w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a
                href="https://www.youtube.com/@AbdeenTube"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 md:h-10 md:w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a
                href="https://tiktok.com/@abdeentube"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 md:h-10 md:w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="TikTok"
              >
                <TikTok className="h-4 w-4 md:h-5 md:w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-6 md:mt-8 pt-6 md:pt-8 text-center text-xs md:text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Abdeens Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
