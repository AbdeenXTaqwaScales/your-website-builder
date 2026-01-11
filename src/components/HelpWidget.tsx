import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  HelpCircle,
  X,
  Book,
  Languages,
  BookOpen,
  GraduationCap,
  MessageCircle,
  ChevronRight,
  Search,
} from "lucide-react";
import { Link } from "react-router-dom";

interface HelpItem {
  question: string;
  answer: string;
  link?: string;
  linkText?: string;
}

const helpItems: HelpItem[] = [
  {
    question: "What programs do you offer?",
    answer:
      "We offer Hifdh (memorization), Arabic language, and Tafsir (interpretation) programs. You can take them individually or as a complete package.",
    link: "/start",
    linkText: "View All Programs",
  },
  {
    question: "How do I get started?",
    answer: "Browse our programs and choose the one that fits your goals. You can also contact us for guidance.",
    link: "/start",
    linkText: "View Programs",
  },
  {
    question: "What are the pricing options?",
    answer:
      "Group classes start from €75/month. 1-on-1 sessions start from €150/month. The full package offers significant savings.",
    link: "/full-package",
    linkText: "See Full Package",
  },
  {
    question: "Are classes online or in-person?",
    answer: "All our classes are 100% online, so you can learn from anywhere in the world with an internet connection.",
    link: "/faq",
    linkText: "More FAQs",
  },
  {
    question: "Who are the teachers?",
    answer:
      "Our teachers are qualified scholars with ijazah (certification). They provide personalized guidance throughout your journey.",
    link: "/about",
    linkText: "Meet Our Team",
  },
];

const quickLinks = [
  { icon: Book, label: "Hifdh Program", href: "/hifdh" },
  { icon: Languages, label: "Arabic Program", href: "/arabic" },
  { icon: BookOpen, label: "Tafsir Program", href: "/tafsir" },
  { icon: GraduationCap, label: "Full Package", href: "/full-package" },
  { icon: MessageCircle, label: "Contact Us", href: "/contact" },
];

export const HelpWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleQuestionClick = (index: number) => {
    setSelectedQuestion(selectedQuestion === index ? null : index);
  };

  const filteredQuickLinks = useMemo(() => {
    if (!searchQuery.trim()) return quickLinks;
    const query = searchQuery.toLowerCase();
    return quickLinks.filter((link) => link.label.toLowerCase().includes(query));
  }, [searchQuery]);

  const filteredHelpItems = useMemo(() => {
    if (!searchQuery.trim()) return helpItems;
    const query = searchQuery.toLowerCase();
    return helpItems.filter(
      (item) => item.question.toLowerCase().includes(query) || item.answer.toLowerCase().includes(query),
    );
  }, [searchQuery]);

  return (
    <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 group">
      {/* Help Panel */}
      {isOpen && (
        <Card className="absolute bottom-14 left-0 w-[calc(100vw-2rem)] max-w-[320px] sm:max-w-80 md:max-w-96 lg:max-w-[420px] max-h-[60vh] sm:max-h-[70vh] overflow-hidden shadow-2xl border-border bg-card animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="p-3 sm:p-4 border-b border-border bg-primary/5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <HelpCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                <h3 className="font-display font-semibold text-sm sm:text-base text-foreground">How can we help?</h3>
              </div>
              <button
                onClick={() => {
                  setIsOpen(false);
                  setSelectedQuestion(null);
                }}
                className="text-muted-foreground hover:text-foreground transition-colors p-1"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Search */}
          <div className="p-3 sm:p-4 border-b border-border">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search questions or links..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 text-sm"
              />
            </div>
          </div>

          {/* Content */}
          <div className="overflow-y-auto max-h-[calc(60vh-10rem)] sm:max-h-[calc(70vh-180px)]">
            {/* Quick Links */}
            {filteredQuickLinks.length > 0 && (
              <div className="p-3 sm:p-4 border-b border-border">
                <p className="text-xs sm:text-sm font-medium text-muted-foreground mb-2 sm:mb-3">Quick Links</p>
                <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                  {filteredQuickLinks.map((link, index) => (
                    <Link
                      key={index}
                      to={link.href}
                      onClick={() => {
                        setIsOpen(false);
                        setSearchQuery("");
                      }}
                      className="flex items-center gap-1.5 sm:gap-2 p-2 rounded-lg bg-secondary/50 hover:bg-secondary text-xs sm:text-sm text-foreground transition-colors"
                    >
                      <link.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary flex-shrink-0" />
                      <span className="truncate">{link.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* FAQ Section */}
            {filteredHelpItems.length > 0 && (
              <div className="p-3 sm:p-4">
                <p className="text-xs sm:text-sm font-medium text-muted-foreground mb-2 sm:mb-3">Common Questions</p>
                <div className="space-y-1.5 sm:space-y-2">
                  {filteredHelpItems.map((item, index) => (
                    <div key={index} className="border border-border rounded-lg overflow-hidden">
                      <button
                        onClick={() => handleQuestionClick(index)}
                        className="w-full flex items-center justify-between p-2.5 sm:p-3 text-left text-xs sm:text-sm font-medium text-foreground hover:bg-secondary/50 transition-colors"
                      >
                        <span className="pr-2">{item.question}</span>
                        <ChevronRight
                          className={`h-4 w-4 text-muted-foreground transition-transform flex-shrink-0 ${
                            selectedQuestion === index ? "rotate-90" : ""
                          }`}
                        />
                      </button>
                      {selectedQuestion === index && (
                        <div className="px-2.5 sm:px-3 pb-2.5 sm:pb-3 animate-in fade-in slide-in-from-top-2 duration-200">
                          <p className="text-xs sm:text-sm text-muted-foreground mb-2">{item.answer}</p>
                          {item.link && (
                            <Link
                              to={item.link}
                              onClick={() => {
                                setIsOpen(false);
                                setSearchQuery("");
                              }}
                              className="inline-flex items-center gap-1 text-xs sm:text-sm text-primary hover:underline"
                            >
                              {item.linkText}
                              <ChevronRight className="h-3 w-3" />
                            </Link>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* No results */}
            {filteredQuickLinks.length === 0 && filteredHelpItems.length === 0 && (
              <div className="p-6 sm:p-8 text-center text-muted-foreground">
                <Search className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 opacity-50" />
                <p className="text-xs sm:text-sm">No results found for "{searchQuery}"</p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-3 sm:p-4 border-t border-border bg-secondary/30">
            <Link
              to="/contact"
              onClick={() => {
                setIsOpen(false);
                setSearchQuery("");
              }}
              className="w-full"
            >
              <Button variant="outline" className="w-full gap-2 text-xs sm:text-sm h-9 sm:h-10">
                <MessageCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                Contact Support
              </Button>
            </Link>
          </div>
        </Card>
      )}

      {/* Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="icon"
        className={`h-12 w-12 sm:h-14 sm:w-14 rounded-full shadow-lg transition-all duration-300 ${
          isOpen
            ? "bg-muted text-foreground hover:bg-muted/80 opacity-100"
            : "bg-primary text-primary-foreground hover:bg-primary/90 opacity-40 group-hover:opacity-100"
        }`}
      >
        {isOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <HelpCircle className="h-5 w-5 sm:h-6 sm:w-6" />}
      </Button>
    </div>
  );
};
