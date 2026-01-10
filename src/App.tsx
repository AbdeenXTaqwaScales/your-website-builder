import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useEffect } from "react";
import ErrorBoundary from "@/components/ErrorBoundary";
import { CartProvider } from "@/contexts/CartContext";
import Index from "./pages/Index";
import Start from "./pages/Start";
import Hifdh from "./pages/Hifdh";
import Arabic from "./pages/Arabic";
import Tafsir from "./pages/Tafsir";
import FullPackage from "./pages/FullPackage";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import Results from "./pages/Results";
import About from "./pages/About";
import FAQPage from "./pages/FAQPage";
import Contact from "./pages/Contact";
import RefundPolicy from "./pages/RefundPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CancellationPolicy from "./pages/CancellationPolicy";
import CookiePreferences from "./pages/CookiePreferences";
import Profile from "./pages/Profile";
import Store from "./pages/Store";
import Cart from "./pages/Cart";
import Sponsors from "./pages/Sponsors";

const queryClient = new QueryClient();

const ScrollToTopOnRoute = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

const AppRoutes = () => (
  <>
    <ScrollToTopOnRoute />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/start" element={<Start />} />
      <Route path="/hifdh" element={<Hifdh />} />
      <Route path="/arabic" element={<Arabic />} />
      <Route path="/tafsir" element={<Tafsir />} />
      <Route path="/full-package" element={<FullPackage />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/results" element={<Results />} />
      <Route path="/about" element={<About />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/sponsors" element={<Sponsors />} />
      <Route path="/refund-policy" element={<RefundPolicy />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/cancellation-policy" element={<CancellationPolicy />} />
      <Route path="/cookie-preferences" element={<CookiePreferences />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/store" element={<Navigate to="/library" replace />} />
      <Route path="/library" element={<Store />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </TooltipProvider>
      </CartProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
