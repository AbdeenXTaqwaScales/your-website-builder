import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Cookie, X } from "lucide-react";

const COOKIE_CONSENT_KEY = "abdeens_academy_cookie_consent";

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify({ 
      accepted: true, 
      preferences: { essential: true, analytics: true, marketing: true },
      timestamp: new Date().toISOString() 
    }));
    setIsVisible(false);
  };

  const handleAcceptEssential = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify({ 
      accepted: true, 
      preferences: { essential: true, analytics: false, marketing: false },
      timestamp: new Date().toISOString() 
    }));
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify({ 
      accepted: false, 
      preferences: { essential: true, analytics: false, marketing: false },
      timestamp: new Date().toISOString() 
    }));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center p-4 sm:items-center">
      <div 
        className="fixed inset-0 bg-background/80 backdrop-blur-sm"
        onClick={handleDecline}
      />
      <div className="relative w-full max-w-lg rounded-xl border bg-card p-6 shadow-xl animate-fade-in">
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="rounded-full bg-primary/10 p-3">
              <Cookie className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg">We value your privacy</h3>
                <button 
                  onClick={handleDecline}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <p className="text-sm text-muted-foreground">
                We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
                By clicking "Accept All", you consent to our use of cookies. Read our{" "}
                <Link to="/privacy-policy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>{" "}
                for more information.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button onClick={handleAcceptAll} className="flex-1">
              Accept All
            </Button>
            <Button onClick={handleAcceptEssential} variant="outline" className="flex-1">
              Essential Only
            </Button>
            <Button onClick={() => setIsVisible(false)} variant="ghost" asChild className="flex-1">
              <Link to="/cookie-preferences">Manage Preferences</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
