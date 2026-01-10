import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
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
        description="Resources to support your learning journey"
        showStudentCounter={false}
      />
      
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {placeholderProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden group">
                <div className="aspect-square bg-secondary/50 flex items-center justify-center">
                  <span className="text-6xl">📚</span>
                </div>
                <CardContent className="p-4 space-y-3">
                  <h3 className="font-semibold">{product.title}</h3>
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
