import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, ArrowDown, BookOpen, UserCheck, CheckCircle, Star, Info, Clock, TrendingUp, Calendar, Loader2, GraduationCap, Plane, ArrowRight, X } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { redirectToCheckout } from "@/lib/shopify";
import { toast } from "sonner";

const ARABIC_PRODUCT_HANDLE = "arabic-foundations-monthly";

const PricingWithToggle = () => {
  const [billingPeriod, setBillingPeriod] = useState<"quarterly" | "yearly">("quarterly");
  const [isCheckoutLoading, setIsCheckoutLoading] = useState(false);

  const handleCheckout = async () => {
    setIsCheckoutLoading(true);
    try {
      await redirectToCheckout(ARABIC_PRODUCT_HANDLE);
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
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
            1-on-1 Lessons
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Personalized Arabic Learning
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Private sessions with qualified teachers tailored to your learning pace.
          </p>
        </div>

        {/* Billing Period Toggle */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-muted rounded-lg">
            <button 
              onClick={() => setBillingPeriod("quarterly")} 
              className={`px-6 py-2.5 rounded-md text-sm font-medium transition-all ${billingPeriod === "quarterly" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
            >
              Quarterly
            </button>
            <button 
              onClick={() => setBillingPeriod("yearly")} 
              className={`px-6 py-2.5 rounded-md text-sm font-medium transition-all flex items-center gap-2 ${billingPeriod === "yearly" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
            >
              Annually
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                Save €{privatePricing.yearlySavings}
              </span>
            </button>
          </div>
        </div>

        <div className="max-w-lg mx-auto">
          <Card className="relative overflow-hidden border-2 border-blue-200">
            <div className="absolute top-0 right-0 px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-bl-lg">
              Most Personalized
            </div>
            
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center">
                  <Users className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold">1-on-1 Lessons</h3>
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
                    <p className="text-sm text-green-600 mt-1">
                      Save €{privatePricing.yearlySavings} compared to quarterly
                    </p>
                  </>
                )}
              </div>

              <ul className="space-y-3 mb-6">
                {["2 private sessions per week", "Choose male or female teacher", "Customized curriculum pace", "Flexible scheduling", "Direct support with your teacher", "Extra practice sessions available"].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {billingPeriod === "yearly" && (
                <div className="mb-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
                  <div className="flex items-center gap-2 text-amber-700 font-semibold mb-2">
                    <Plane className="w-5 h-5" />
                    Free Umrah Opportunity
                  </div>
                  <p className="text-sm text-amber-600">
                    Annual subscribers get entered into our Umrah draw for a chance to perform Umrah with the academy!
                  </p>
                </div>
              )}

              <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-center gap-2 text-blue-700 font-semibold mb-2">
                  <Info className="w-5 h-5" />
                  Introduction Call Required
                </div>
                <div className="text-sm text-blue-600 space-y-1">
                  <p>• Choose male or female teacher</p>
                  <p>• Discuss your availability</p>
                  <p>• Quick Arabic level assessment</p>
                  <p>• Get matched with perfect teacher</p>
                </div>
              </div>

              <Button 
                className="w-full" 
                size="lg" 
                onClick={handleCheckout}
                disabled={isCheckoutLoading}
              >
                {isCheckoutLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Redirecting...
                  </>
                ) : (
                  <>
                    Apply for 1-on-1 Arabic
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

const Arabic = () => {
  return (
    <Layout>
      {/* 1. Dark Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
        <div className="absolute inset-0 islamic-pattern opacity-10" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        {/* Floating Arabic Letters */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none font-arabic text-white/10 text-6xl md:text-8xl">
          <span className="absolute top-[10%] left-[5%] animate-float">ا</span>
          <span className="absolute top-[20%] right-[10%] animate-float" style={{ animationDelay: "0.5s" }}>ب</span>
          <span className="absolute top-[40%] left-[15%] animate-float" style={{ animationDelay: "1s" }}>ت</span>
          <span className="absolute top-[30%] right-[20%] animate-float" style={{ animationDelay: "1.5s" }}>ث</span>
          <span className="absolute bottom-[30%] left-[8%] animate-float" style={{ animationDelay: "0.3s" }}>ج</span>
          <span className="absolute bottom-[20%] right-[15%] animate-float" style={{ animationDelay: "0.8s" }}>ح</span>
          <span className="absolute bottom-[40%] right-[5%] animate-float" style={{ animationDelay: "1.2s" }}>خ</span>
        </div>

        {/* Wave at bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24">
            <path d="M0,0 C150,80 350,0 600,40 C850,80 1050,0 1200,40 L1200,120 L0,120 Z" fill="hsl(var(--background))" />
          </svg>
        </div>

        <div className="container relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium border border-blue-500/30">
              <BookOpen className="w-4 h-4" />
              Arabic Program
            </span>
            
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Understand Qur'anic Arabic
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">As You Recite</span>
            </h1>
            
            <p className="text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto">
              Learn the language of the Qur'an through structured lessons and finally understand what you're reciting.
            </p>

            {/* Trust indicators */}
            <div className="flex items-center justify-center gap-4 text-blue-200/70 text-sm">
              <Users className="w-4 h-4" />
              <Award className="w-4 h-4" />
              <span>Qualified teachers</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8">
                <a href="#pricing">
                  Join Now!
                  <ArrowDown className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Is This For You + What You'll Achieve */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-100 rounded-full blur-3xl opacity-50" />
        
        {/* Decorative Arabic letters */}
        <span className="absolute top-20 left-10 text-6xl text-blue-100 font-arabic opacity-30">ع</span>
        <span className="absolute bottom-20 right-10 text-6xl text-blue-100 font-arabic opacity-30">ق</span>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
              Is This You?
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              We Understand Your Struggles
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Is This You */}
            <Card className="border-2 border-red-200/50 bg-gradient-to-br from-red-50 to-background">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4 text-red-600">
                  <X className="w-5 h-5" />
                  <span className="font-semibold">You might be struggling with...</span>
                </div>
                <ul className="space-y-3">
                  {["The right-to-left script feels unnatural and letters changing shape is confusing", "Sounds like ع, ق, ح, خ don't exist in English — hard to pronounce", "Complex grammar with root systems, verb conjugations, and case endings", "Confusion about MSA vs dialects — which Arabic should you even learn?", "Slow progress and lack of quick results compared to other languages", "Fear of making mistakes when speaking or reading aloud"].map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <X className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">{point}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* What You'll Achieve */}
            <Card className="border-2 border-green-200/50 bg-gradient-to-br from-green-50 to-background">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4 text-green-600">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-semibold">What you'll achieve...</span>
                </div>
                <ul className="space-y-3">
                  {["Understand the Qur'an in its original language without translations", "Comprehend your prayers and du'as with deep meaning", "Access Islamic texts (Hadith, Tafsir, Fiqh) directly in Arabic", "Read the Qur'an as Allah revealed it — not filtered through translation", "Build confidence speaking and reading without hesitation", "Connect with 26 countries' cultures through one beautiful language"].map((outcome, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <p className="text-foreground">{outcome}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What You Get With Us - Accordion Style */}
      <section className="py-16 md:py-24 bg-secondary/30 relative overflow-hidden">
        <span className="absolute top-20 right-10 text-6xl text-blue-200/30 font-arabic">د</span>
        <span className="absolute bottom-20 left-10 text-6xl text-blue-200/30 font-arabic">ر</span>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
              What's Included
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              What You Get With Us
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Learn Qur'anic Arabic the right way — without overwhelm. Build your foundation first, then understand directly.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                { feature: "2 Custom Weekly Sessions", description: "Personalized Arabic lessons at your pace. Focus on vocabulary, grammar, and practical reading skills tailored to your current level.", icon: BookOpen },
                { feature: "24/7 Support & Learning Materials", description: "Access vocabulary lists, grammar guides, and practice exercises anytime. Get help when you need it.", icon: Clock },
                { feature: "Personal Progress Tracking", description: "See your Arabic journey unfold with clear milestones. Track vocabulary learned, grammar covered, and reading fluency.", icon: TrendingUp },
                { feature: "Step-by-Step Curriculum", description: "No overwhelm. We build your foundation first, then gradually introduce more complex grammar and vocabulary — at your pace.", icon: GraduationCap },
                { feature: "Pronunciation Guidance", description: "Master difficult sounds like ع, ق, ح, خ with patient, expert correction. Get the pronunciation right from the start.", icon: BookOpen },
                { feature: "Male & Female Teacher Option", description: "Choose your preferred teacher gender for a comfortable and focused learning experience.", icon: UserCheck },
                { feature: "Qualified Native Teachers", description: "Learn from native Arabic speakers who specialize in teaching Qur'anic Arabic to non-native students.", icon: Award },
                { feature: "Flexible Scheduling", description: "Life happens. We offer flexible scheduling that fits around your work, family, and commitments.", icon: Calendar },
                { feature: "Free Umrah Opportunity", description: "Annual subscribers get entered into our Umrah draw for a chance to perform Umrah with the academy!", icon: Plane },
              ].map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-background border rounded-xl px-6 shadow-sm">
                  <AccordionTrigger className="text-left hover:no-underline py-5">
                    <span className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      {item.feature}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 pl-13">
                    {item.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <div id="pricing">
        <PricingWithToggle />
      </div>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-900 to-slate-900 text-white relative overflow-hidden">
        <span className="absolute top-10 right-20 text-6xl text-white/10 font-arabic">س</span>
        <span className="absolute bottom-10 left-20 text-6xl text-white/10 font-arabic">ش</span>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <p className="text-2xl md:text-3xl font-arabic text-blue-200 mb-4">اِقْرَأْ بِاسْمِ رَبِّكَ</p>
          
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Arabic Journey?
          </h2>
          <p className="text-blue-100/80 mb-8 max-w-2xl mx-auto">
            Join Abdeens Academy today and take the first step towards understanding Qur'anic Arabic.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            <a href="#pricing">Choose Your Path</a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Arabic;
