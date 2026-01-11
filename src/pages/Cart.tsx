import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/sections/PageHero";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { redirectToCheckout } from "@/lib/shopify";
import { useState } from "react";
import { toast } from "sonner";

const Cart = () => {
  const { items, updateQuantity, removeFromCart, clearCart, totalPrice } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const currency = items[0]?.product.priceRange.minVariantPrice.currencyCode || "USD";

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
    }).format(amount);
  };

  const handleCheckout = async () => {
    if (items.length === 0) return;

    if (!termsAccepted) {
      toast.error("Please accept the Terms and Conditions to proceed with checkout.");
      return;
    }

    setIsCheckingOut(true);
    try {
      // For now, checkout with the first item - in a full implementation,
      // you'd create a cart with all items
      const firstItem = items[0];
      await redirectToCheckout(firstItem.product.handle);
    } catch (error) {
      console.error("Checkout error:", error);
      toast.error("Failed to proceed to checkout. Please try again.");
    } finally {
      setIsCheckingOut(false);
    }
  };

  return (
    <Layout>
      <PageHero
        title="Your Cart"
        description="Review your selected eBooks before checkout"
        showStudentCounter={false}
      />

      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          {items.length === 0 ? (
            <div className="text-center py-16 max-w-md mx-auto">
              <div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
                <ShoppingBag className="h-10 w-10 text-muted-foreground" />
              </div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-3">Your cart is empty</h2>
              <p className="text-muted-foreground mb-6">
                Browse our library to find eBooks that will support your learning journey.
              </p>
              <Button asChild size="lg">
                <Link to="/library">
                  Browse Library
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-display text-xl font-semibold text-foreground">
                    {items.length} {items.length === 1 ? "Item" : "Items"}
                  </h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearCart}
                    className="text-muted-foreground hover:text-destructive"
                  >
                    Clear All
                  </Button>
                </div>

                {items.map((item) => {
                  const image = item.product.images.edges[0]?.node;
                  const price = parseFloat(item.product.priceRange.minVariantPrice.amount);

                  return (
                    <Card key={item.product.id} className="overflow-hidden">
                      <CardContent className="p-4">
                        <div className="flex gap-4">
                          {/* Product Image */}
                          <div className="w-20 h-28 sm:w-24 sm:h-32 flex-shrink-0 rounded-lg overflow-hidden bg-muted">
                            {image ? (
                              <img
                                src={image.url}
                                alt={image.altText || item.product.title}
                                className="h-full w-full object-cover"
                              />
                            ) : (
                              <div className="h-full w-full flex items-center justify-center text-muted-foreground text-xs">
                                No image
                              </div>
                            )}
                          </div>

                          {/* Product Details */}
                          <div className="flex-1 min-w-0">
                            <h3 className="font-medium text-foreground line-clamp-2 mb-1">{item.product.title}</h3>
                            <p className="text-sm text-muted-foreground mb-3">eBook</p>
                            <p className="font-semibold text-foreground">{formatPrice(price)}</p>
                          </div>

                          {/* Quantity & Remove - Stack on mobile */}
                          <div className="flex flex-col items-end justify-between">
                            <button
                              onClick={() => removeFromCart(item.product.id)}
                              className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                              aria-label="Remove item"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>

                            <div className="flex items-center gap-2 bg-muted rounded-lg p-1">
                              <button
                                onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                className="p-1.5 rounded hover:bg-background transition-colors"
                                aria-label="Decrease quantity"
                              >
                                <Minus className="h-3.5 w-3.5" />
                              </button>
                              <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                className="p-1.5 rounded hover:bg-background transition-colors"
                                aria-label="Increase quantity"
                              >
                                <Plus className="h-3.5 w-3.5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card className="sticky top-24">
                  <CardContent className="p-6">
                    <h3 className="font-display text-lg font-semibold text-foreground mb-4">Order Summary</h3>

                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span className="text-foreground">{formatPrice(totalPrice)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Tax</span>
                        <span className="text-muted-foreground">Calculated at checkout</span>
                      </div>
                      <div className="border-t border-border pt-3">
                        <div className="flex justify-between">
                          <span className="font-medium text-foreground">Total</span>
                          <span className="font-semibold text-lg text-foreground">{formatPrice(totalPrice)}</span>
                        </div>
                      </div>
                    </div>

                    {/* Terms and Conditions */}
                    <div className="flex items-start space-x-3 mb-6 p-3 rounded-lg bg-muted/50 border border-border">
                      <Checkbox
                        id="terms"
                        checked={termsAccepted}
                        onCheckedChange={(checked) => setTermsAccepted(checked === true)}
                        className="mt-0.5"
                      />
                      <label htmlFor="terms" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                        I agree to the{" "}
                        <Link
                          to="/terms-of-service"
                          className="text-primary underline underline-offset-2 hover:text-primary/80"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Terms and Conditions
                        </Link>{" "}
                        and{" "}
                        <Link
                          to="/refund-policy"
                          className="text-primary underline underline-offset-2 hover:text-primary/80"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Refund Policy
                        </Link>
                      </label>
                    </div>

                    <Button
                      className="w-full"
                      size="lg"
                      onClick={handleCheckout}
                      disabled={isCheckingOut || !termsAccepted}
                    >
                      {isCheckingOut ? "Processing..." : "Proceed to Checkout"}
                    </Button>

                    {!termsAccepted && (
                      <p className="text-xs text-amber-600 dark:text-amber-400 text-center mt-3">
                        Please accept the Terms and Conditions to proceed
                      </p>
                    )}

                    <p className="text-xs text-muted-foreground text-center mt-4">Secure checkout powered by Shopify</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Cart;
