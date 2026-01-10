import { Link } from "react-router-dom";
import { Instagram, Youtube } from "lucide-react";

// TikTok icon component
const TikTok = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
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
    <footer className="bg-secondary/50 border-t">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                A
              </div>
              <span className="font-display font-bold text-xl">Abdeens Academy</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your guided journey to memorizing, understanding, and living the Qur'an.
            </p>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>Email: admin@abdeenacademy.com</p>
              <p>KVK: 95364218</p>
              <p>Registered in the Netherlands</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/abdeentube"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 md:h-10 md:w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a
                href="https://youtube.com/@AbdeenTube"
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

        <div className="mt-12 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Abdeens Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
