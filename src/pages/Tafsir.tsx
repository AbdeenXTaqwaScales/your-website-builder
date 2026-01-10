import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Globe, Award, ArrowDown, Book, UserCheck, BookOpen, CheckCircle, Star, AlertTriangle, User, ArrowRight, Phone, GraduationCap, Plane, Info, Clock, TrendingUp, Calendar, Loader2 } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { redirectToCheckout } from "@/lib/shopify";
import { toast } from "sonner";

const TAFSIR_PRODUCT_HANDLE = "tafsir-program-monthly";

const PricingWithToggle = () => {
  const [billingPeriod, setBillingPeriod] = useState<"quarterly" | "yearly">("quarterly");
  const [isCheckoutLoading, setIsCheckoutLoading] = useState(false);

  const handleCheckout = async () => {
    setIsCheckoutLoading(true);
    try {
      await redirectToCheckout(TAFSIR_PRODUCT_HANDLE);
    } catch (error) {
      console.error("Checkout error:", error);
      toast.error(error instanceof Error ? error.message : "Failed to start checkout");
    } finally {
      setIsCheckoutLoading(false);
    }
  };

  const privatePricing = {
    quarterly: 400,
    yearly: 1400,
    yearlySavings: 200
  };

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            1-on-1 Lessons
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Personalized Tafsir Study
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Private sessions with qualified scholars tailored to your learning goals.
          </p>
        </div>

        {/* Billing Period Toggle */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center p-1 bg-muted rounded-lg">
            <button onClick={() => setBillingPeriod("quarterly")} className={`px-6 py-2.5 rounded-md text-sm font-medium transition-all ${billingPeriod === "quarterly" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}>
              Quarterly
            </button>
            <button onClick={() => setBillingPeriod("yearly")} className={`px-6 py-2.5 rounded-md text-sm font-medium transition-all flex items-center gap-2 ${billingPeriod === "yearly" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}>
              Annually
              <span className="bg-accent text-accent-foreground text-xs px-2 py-0.5 rounded-full">
                Save €{privatePricing.yearlySavings}
              </span>
            </button>
          </div>
        </div>

        <div className="max-w-md mx-auto">
          {/* 1-on-1 Lessons */}
          <Card className="relative overflow-hidden border-2 border-primary shadow-xl">
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-medium rounded-bl-lg">
              Most Personalized
            </div>
            
            <CardContent className="p-8 pt-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <User className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">1-on-1 Lessons</h3>
                  <p className="text-sm text-muted-foreground">Personalized attention</p>
                </div>
              </div>

              <div className="mb-6">
                {billingPeriod === "quarterly" ? (
                  <>
                    <span className="text-4xl font-bold text-foreground">€{privatePricing.quarterly}</span>
                    <span className="text-muted-foreground">/quarter</span>
                  </>
                ) : (
                  <>
                    <span className="text-4xl font-bold text-foreground">€{privatePricing.yearly}</span>
                    <span className="text-muted-foreground">/year</span>
                    <p className="text-sm text-accent mt-1">
                      Save €{privatePricing.yearlySavings} compared to quarterly
                    </p>
                  </>
                )}
              </div>
            
              <div className="space-y-6">
                <ul className="space-y-3">
                  {["2 private sessions per week", "Choose male or female scholar", "Customized study plan", "Flexible scheduling", "Available in English, Arabic, French & Dutch", "Personalized reading guidance"].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Umrah Benefit for Annual */}
                {billingPeriod === "yearly" && (
                  <div className="bg-accent/10 border border-accent/20 rounded-xl p-4">
                    <div className="flex items-center gap-2 text-accent font-semibold mb-2">
                      <Plane className="w-5 h-5" />
                      Free Umrah Opportunity
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Annual subscribers get entered into our Umrah draw for a chance to perform Umrah with the academy!
                    </p>
                  </div>
                )}

                {/* Important - Info Box (not red) */}
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                    <Info className="w-5 h-5" />
                    Introduction Call Required
                  </div>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>• Choose male or female scholar</p>
                    <p>• Discuss your availability</p>
                    <p>• Discuss your study goals</p>
                    <p>• Get matched with perfect teacher</p>
                  </div>
                </div>

                <Button onClick={handleCheckout} disabled={isCheckoutLoading} className="w-full h-14 text-lg font-semibold" size="lg">
                  {isCheckoutLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Redirecting...
                    </>
                  ) : (
                    <>
                      Apply for 1-on-1 Tafsir
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

const Tafsir = () => {
  return (
    <Layout>
      {/* 1. Dark Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-foreground">
        <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground to-primary/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
        <div className="absolute inset-0 islamic-pattern opacity-5" />

        {/* Decorative wave at bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))" />
          </svg>
        </div>

        <div className="container relative z-10 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              Tafsir Program
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Study the Meanings
              <br />& Context of the Qur'an
            </h1>
            
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Deepen your understanding through structured Tafsir lessons with qualified scholars.
            </p>

            {/* Trust indicators */}
            <div className="flex items-center justify-center gap-2 text-primary-foreground/70 mb-8">
              <Award className="w-5 h-5" />
              <Users className="w-5 h-5" />
              <span className="text-sm"> Qualified scholars</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="text-lg px-8 h-14">
                <a href="#pricing">
                  Join Now!
                  <ArrowDown className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Is This For You + What You'll Achieve */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Decorative gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Is This You?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              We Understand Your Struggles
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Is This You */}
            <Card className="bg-destructive/5 border-destructive/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <AlertTriangle className="w-6 h-6 text-destructive" />
                  <h3 className="text-xl font-semibold text-foreground">You might be struggling with...</h3>
                </div>
                <ul className="space-y-4">
                  {["Feeling disconnected from the Qur'an despite reading it regularly", "Reading translations that don't capture the full meaning and depth", "Spiritual emptiness from mechanical reading without understanding", "Unable to answer questions about Qur'an when others ask", "Confusion about verses without proper scholarly interpretation", "Missing the historical context and reasons behind revelation"].map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-destructive mt-2 shrink-0" />
                      <p className="text-muted-foreground">{point}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* What You'll Achieve */}
            <Card className="bg-accent/5 border-accent/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Star className="w-6 h-6 text-accent" />
                  <h3 className="text-xl font-semibold text-foreground">What you'll achieve...</h3>
                </div>
                <ul className="space-y-4">
                  {["Transform recitation from routine to conversation with Allah", "Understand the TRUE meaning behind every verse you read", "Apply Qur'anic teachings practically in your daily life", "Confidently explain Qur'an to family and answer questions", "Connect all aspects of Islamic knowledge together", "Experience spiritual enlightenment and inner peace"].map((outcome, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <p className="text-muted-foreground">{outcome}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What You Get With Us - Accordion Style */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              What's Included
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What You Get With Us
            </h2>
            <p className="text-lg text-muted-foreground">
              Transform your Qur'an recitation from mechanical reading to life-changing conversation with Allah.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {[{
                feature: "2 Custom Weekly Sessions",
                description: "Personalized Tafsir lessons tailored to your learning pace. Study verses in-depth with context, reasons of revelation, and practical applications.",
                icon: BookOpen
              }, {
                feature: "24/7 Support & Learning Materials",
                description: "Access our Tafsir library and resources anytime. Get help when you need it through our dedicated support channels.",
                icon: Clock
              }, {
                feature: "Personal Progress Tracking",
                description: "Monitor your journey through the Qur'an with detailed progress. Know exactly which surahs you've covered and what's coming next.",
                icon: TrendingUp
              }, {
                feature: "Beginner-Friendly Approach",
                description: "Start from zero prerequisites. Our scholars explain everything in English with Arabic terms introduced gradually.",
                icon: GraduationCap
              }, {
                feature: "Male & Female Scholar Option",
                description: "Choose your preferred scholar gender for a comfortable and focused learning experience.",
                icon: UserCheck
              }, {
                feature: "Qualified Scholars",
                description: "Learn from experts trained in classical Tafsir methodologies who can connect ancient wisdom to modern life.",
                icon: Award
              }, {
                feature: "Flexible Scheduling",
                description: "Life happens. We offer flexible scheduling that fits around your work, family, and commitments.",
                icon: Calendar
              }, {
                feature: "Free Umrah Opportunity",
                description: "Annual subscribers get entered into our Umrah draw for a chance to perform Umrah with the academy!",
                icon: Plane
              }].map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-background rounded-xl border px-6">
                  <AccordionTrigger className="hover:no-underline py-6">
                    <div className="flex items-center gap-4 text-left">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-semibold text-foreground">{item.feature}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 pl-14">
                    {item.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <PricingWithToggle />

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Tafsir Journey?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join Abdeens Academy today and take the first step towards understanding the Qur'an deeply.
          </p>
          <Button asChild variant="secondary" size="lg" className="text-lg px-8 h-14">
            <a href="#pricing">Choose Your Path</a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Tafsir;
