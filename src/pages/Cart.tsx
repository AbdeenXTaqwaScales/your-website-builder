import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const Cart = () => {
  const { items, updateQuantity, removeFromCart, totalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <Layout>
        <PageHero
          title="Your Cart"
          description="Review your items before checkout"
          showStudentCounter={false}
        />
        <section className="py-16 md:py-24">
          <div className="container max-w-2xl text-center">
            <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-10 h-10 text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6">
              Browse our library to find resources for your learning journey.
            </p>
            <Button asChild>
              <Link to="/library">Browse Library</Link>
            </Button>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <PageHero
        title="Your Cart"
        description="Review your items before checkout"
        showStudentCounter={false}
      />
      
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <div className="space-y-4">
            {items.map((item) => (
              <Card key={item.product.id}>
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="w-16 h-16 bg-secondary/50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📚</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold truncate">{item.product.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      €{item.product.priceRange.minVariantPrice.amount}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-destructive"
                    onClick={() => removeFromCart(item.product.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 p-6 bg-secondary/30 rounded-xl">
            <div className="flex items-center justify-between mb-6">
              <span className="text-lg font-semibold">Total</span>
              <span className="text-2xl font-bold text-primary">€{totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" onClick={clearCart}>
                Clear Cart
              </Button>
              <Button className="flex-1">
                Proceed to Checkout
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Cart;
