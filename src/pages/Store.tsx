import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/sections/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, BookOpen, Award, ShieldCheck } from "lucide-react";
import { useCart, ShopifyProduct } from "@/contexts/CartContext";
import { toast } from "@/hooks/use-toast";

// Placeholder products until Shopify is connected
const placeholderProducts: ShopifyProduct[] = [
  {
    id: "1",
    title: "Qur'an Memorization Journal",
    description: "A beautifully designed journal to track your Hifdh progress.",
    handle: "quran-memorization-journal",
    priceRange: { minVariantPrice: { amount: "24.99", currencyCode: "EUR" } },
    images: { edges: [] },
  },
  {
    id: "2",
    title: "Arabic Vocabulary Cards",
    description: "Flashcards to help you learn Qur'anic vocabulary.",
    handle: "arabic-vocabulary-cards",
    priceRange: { minVariantPrice: { amount: "19.99", currencyCode: "EUR" } },
    images: { edges: [] },
  },
  {
    id: "3",
    title: "Tafsir Study Guide",
    description: "Comprehensive study guide for understanding the Qur'an.",
    handle: "tafsir-study-guide",
    priceRange: { minVariantPrice: { amount: "34.99", currencyCode: "EUR" } },
    images: { edges: [] },
  },
];

const features = [
  {
    icon: BookOpen,
    title: "Digital eBooks",
    description: "Instant access to Islamic educational materials",
  },
  {
    icon: Award,
    title: "Quality Content",
    description: "Carefully curated learning resources",
  },
  {
    icon: ShieldCheck,
    title: "Secure Checkout",
    description: "Safe & encrypted payments",
  },
];

const Store = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (product: ShopifyProduct) => {
    addToCart(product);
    toast({ title: "Added to cart", description: product.title });
  };

  return (
    <Layout>
      <PageHero
        title="Library"
        description="Digital eBooks and resources to support your Qur'anic journey"
        showStudentCounter={false}
      />

      {/* Features Section */}
      <section className="py-12 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-primary/10 bg-card/50 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Browse Our eBooks
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover digital books and resources carefully selected to enhance your learning experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {placeholderProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-secondary/50 flex items-center justify-center">
                  <span className="text-6xl">📚</span>
                </div>
                <CardContent className="p-4 space-y-3">
                  <h3 className="font-semibold text-foreground">{product.title}</h3>
                  <p className="text-sm text-muted-foreground">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">
                      €{product.priceRange.minVariantPrice.amount}
                    </span>
                    <Button size="sm" onClick={() => handleAddToCart(product)}>
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Store;
