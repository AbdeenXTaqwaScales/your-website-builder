import { useParams, Link, useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { useProducts } from "@/hooks/useProducts";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Skeleton } from "@/components/ui/skeleton";
import { ShoppingCart, Check, ArrowLeft, BookOpen, CreditCard } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";
import { redirectToCheckout } from "@/lib/shopify";
import { toast } from "sonner";

const getProductDescription = (title: string): string => {
  const lowerTitle = title.toLowerCase();

  if (lowerTitle.includes("tajweed") || lowerTitle.includes("tadjweed")) {
    return `As passionate teachers at Abdeen's Academy, Ustadh Abdeen and Ustadha Meriam, we've poured our hearts and expertise into creating this comprehensive guide. Our goal is to make learning Tajweed accessible and enjoyable for students and Muslims worldwide.

In this e-book, you'll find step-by-step instructions, examples, and interactive exercises that will help you perfect your recitation skills and connect with the profound messages of the Quran.`;
  }

  if (lowerTitle.includes("memorization") || lowerTitle.includes("hifdh") || lowerTitle.includes("hifz")) {
    return `Discover the art of Quran memorization with the Abdeen Institute's expertly designed eBook. This comprehensive guide is tailored to assist you in mastering Quran memorization efficiently and effectively.

Crafted by experienced teachers at the Abdeen Institute, renowned for their expertise in Quranic education, this eBook offers:

• Step-by-step strategies to enhance your memorization process
• Practical techniques for setting achievable goals and maintaining a consistent study routine
• Solutions to overcome common challenges in memorization
• Insights into the meanings and contexts of Quranic verses for a deeper understanding
• Inspirational personal anecdotes from our teachers, motivating you throughout your journey`;
  }

  if (lowerTitle.includes("serenity") || lowerTitle.includes("salah") || lowerTitle.includes("prayer")) {
    return `In the captivating e-book "Serenity in Salah: Nurturing the Soul," immerse yourself in the tranquil world of prayer. This soul-nurturing guide explores the profound depths of salah, offering insights, practical tips, and heartfelt reflections to enhance your prayer experience.

Discover the serenity and spiritual growth that comes from connecting with Allah through salah. Let this e-book be your companion on the journey to finding peace, tranquility, and a deeper connection with your Creator.`;
  }

  if (lowerTitle.includes("test") || lowerTitle.includes("islamic") || lowerTitle.includes("quiz")) {
    return `In this comprehensive guide, we've gathered a collection of thought-provoking questions about Islam and provided insightful answers to deepen your understanding of the faith.

Whether you're a curious seeker, a new Muslim, or simply looking to expand your knowledge, this e-book is here to enlighten and empower you on your spiritual journey. Join us as we embark on an exploration of Islam's wisdom, guidance, and beauty. Let's dive in together!`;
  }

  if (lowerTitle.includes("bundle") || lowerTitle.includes("all")) {
    return `The Abdeen Bundle of Islamic eBooks contains a wide range of literature on various aspects of Islam, including Tajweed scholarship, theology, spirituality and contemporary issues.

These eBooks may include classic works by well-known scholars in the Islamic tradition, as well as modern interpretations and reflections on Islamic teachings.

This bundle offers exceptional value for those seeking a comprehensive Islamic learning experience.`;
  }

  return `Enhance your Islamic knowledge with this carefully crafted eBook from Abdeen's Academy. Our educational materials are designed to support your learning journey and deepen your connection with the Quran and Islamic teachings.`;
};

const ProductDetail = () => {
  const { handle } = useParams<{ handle: string }>();
  const navigate = useNavigate();
  const { data, isLoading, error } = useProducts(24);
  const { addToCart, items } = useCart();
  const [justAdded, setJustAdded] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"card" | "paypal">("card");

  const products = data?.products?.edges?.map((edge) => edge.node) || [];
  const product = products.find((p) => p.handle === handle);

  const handleAddToCart = () => {
    if (!product) return;
    addToCart(product);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  };

  const handleBuyNow = async () => {
    if (!product) return;
    
    if (!termsAccepted) {
      toast.error("Please accept the Terms and Conditions to proceed with payment.");
      return;
    }

    setIsCheckingOut(true);
    try {
      await redirectToCheckout(product.handle);
    } catch (error) {
      console.error("Checkout error:", error);
      toast.error("Failed to proceed to checkout. Please try again.");
    } finally {
      setIsCheckingOut(false);
    }
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="container py-16">
          <Skeleton className="h-8 w-32 mb-8" />
          <div className="grid md:grid-cols-2 gap-12">
            <Skeleton className="aspect-[3/4] rounded-2xl" />
            <div className="space-y-4">
              <Skeleton className="h-6 w-24" />
              <Skeleton className="h-10 w-3/4" />
              <Skeleton className="h-8 w-32" />
              <Skeleton className="h-32 w-full" />
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!product) {
    return (
      <Layout>
        <div className="container py-16 text-center">
          <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-muted mb-6">
            <BookOpen className="h-10 w-10 text-muted-foreground" />
          </div>
          <h1 className="font-display text-2xl font-bold text-foreground mb-4">
            Product Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            The eBook you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <Link to="/library">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Library
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const image = product.images.edges[0]?.node;
  const price = parseFloat(product.priceRange.minVariantPrice.amount);
  const currency = product.priceRange.minVariantPrice.currencyCode;
  const isInCart = items.some((item) => item.product.id === product.id);
  const customDescription = getProductDescription(product.title);

  return (
    <Layout>
      <div className="container py-8 md:py-16">
        <Button variant="ghost" onClick={() => navigate(-1)} className="mb-6 md:mb-8 -ml-2">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Library
        </Button>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Product Image */}
          <div className="relative">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-muted shadow-lg">
              {image ? (
                <img src={image.url} alt={image.altText || product.title} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <BookOpen className="h-16 w-16 text-muted-foreground" />
                </div>
              )}
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
                Digital eBook
              </span>
              <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
                {product.title}
              </h1>
              <p className="text-2xl md:text-3xl font-bold text-primary">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency,
                }).format(price)}
              </p>
            </div>

            {/* Description */}
            <div className="prose prose-sm max-w-none mb-8">
              {customDescription.split('\n').map((paragraph, index) => (
                <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Add to Cart Button */}
            <Button onClick={handleAddToCart} variant="outline" size="lg" className="w-full mb-4">
              {justAdded ? (
                <>
                  <Check className="mr-2 h-5 w-5" />
                  Added to Cart!
                </>
              ) : isInCart ? (
                <>
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add More to Cart
                </>
              ) : (
                <>
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </>
              )}
            </Button>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Or buy now</span>
              </div>
            </div>

            {/* Payment Method Selection */}
            <div className="space-y-3 mb-6">
              <p className="text-sm font-medium text-foreground">Select payment method:</p>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setPaymentMethod("card")}
                  className={`flex items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all ${
                    paymentMethod === "card"
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <CreditCard className="h-5 w-5" />
                  Card
                </button>
                <button
                  onClick={() => setPaymentMethod("paypal")}
                  className={`flex items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all ${
                    paymentMethod === "paypal"
                      ? "border-[#0070BA] bg-[#0070BA]/5"
                      : "border-border hover:border-[#0070BA]/50"
                  }`}
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="#0070BA">
                    <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106z"/>
                  </svg>
                  PayPal
                </button>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start gap-3 mb-6 p-3 bg-muted/50 rounded-lg">
              <Checkbox
                id="terms"
                checked={termsAccepted}
                onCheckedChange={(checked) => setTermsAccepted(checked === true)}
                className="mt-0.5"
              />
              <label htmlFor="terms" className="text-sm text-muted-foreground cursor-pointer">
                I agree to the{" "}
                <Link to="/terms-of-service" className="text-primary hover:underline">
                  Terms and Conditions
                </Link>{" "}
                and{" "}
                <Link to="/refund-policy" className="text-primary hover:underline">
                  Refund Policy
                </Link>
              </label>
            </div>

            {/* Buy Now Button */}
            {paymentMethod === "paypal" ? (
              <Button
                onClick={handleBuyNow}
                disabled={isCheckingOut || !termsAccepted}
                size="lg"
                className="w-full bg-[#0070BA] hover:bg-[#005ea6] text-white"
              >
                {isCheckingOut ? (
                  "Processing..."
                ) : (
                  <>
                    <svg viewBox="0 0 24 24" className="h-5 w-5 mr-2" fill="currentColor">
                      <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106z"/>
                    </svg>
                    Pay with PayPal
                  </>
                )}
              </Button>
            ) : (
              <Button onClick={handleBuyNow} disabled={isCheckingOut || !termsAccepted} size="lg" className="w-full">
                {isCheckingOut ? "Processing..." : "Buy Now"}
              </Button>
            )}

            {!termsAccepted && (
              <p className="text-xs text-muted-foreground text-center mt-3">
                Please accept the Terms and Conditions to proceed
              </p>
            )}

            <p className="text-xs text-muted-foreground text-center mt-4">
              Secure checkout powered by Shopify
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
