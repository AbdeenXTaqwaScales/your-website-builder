import { useState } from "react";
import { Button } from "@/components/ui/button";
import { HelpCircle, X, MessageCircle, Mail, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

export const HelpWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-20 right-6 z-40">
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-72 bg-card border rounded-xl shadow-xl p-4 animate-fade-in">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Need Help?</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="space-y-2">
            <Link 
              to="/faq" 
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <BookOpen className="h-5 w-5 text-primary" />
              <span className="text-sm">FAQ</span>
            </Link>
            <Link 
              to="/contact" 
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <Mail className="h-5 w-5 text-primary" />
              <span className="text-sm">Contact Us</span>
            </Link>
            <a 
              href="https://wa.me/1234567890" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors"
            >
              <MessageCircle className="h-5 w-5 text-primary" />
              <span className="text-sm">WhatsApp</span>
            </a>
          </div>
        </div>
      )}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="icon"
        className="h-12 w-12 rounded-full shadow-lg"
      >
        {isOpen ? <X className="h-5 w-5" /> : <HelpCircle className="h-5 w-5" />}
      </Button>
    </div>
  );
};
