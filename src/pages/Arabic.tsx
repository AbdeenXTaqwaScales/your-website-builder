import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  Globe,
  Award,
  ArrowDown,
  Book,
  UserCheck,
  BookOpen,
  CheckCircle,
  Star,
  AlertTriangle,
  User,
  ArrowRight,
  Phone,
  GraduationCap,
  Plane,
  Info,
  Clock,
  TrendingUp,
  Calendar,
  Loader2,
} from "lucide-react";
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
    yearlySavings: 200,
  };
  return (
    <section id="choose-path" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
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
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-muted p-1 rounded-lg">
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
              <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">
                Save €{privatePricing.yearlySavings}
              </span>
            </button>
          </div>
        </div>

        <div className="max-w-lg mx-auto">
          {/* 1-on-1 Lessons */}
          <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-b from-indigo-50 dark:from-indigo-950/50 to-background overflow-hidden relative">
            <div className="absolute top-2 right-2 md:top-4 md:right-4 z-10">
              <span className="px-2 py-0.5 md:px-3 md:py-1 bg-indigo-600 text-white text-[10px] md:text-xs font-bold rounded-full whitespace-nowrap">
                Most Personalized
              </span>
            </div>

            <div className="bg-indigo-500 text-white p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
                  <User className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold">1-on-1 Lessons</h3>
                  <p className="text-indigo-100">Personalized attention</p>
                </div>
              </div>
              <div className="mt-4">
                {billingPeriod === "quarterly" ? (
                  <>
                    <span className="text-4xl font-bold">€{privatePricing.quarterly}</span>
                    <span className="text-indigo-100">/quarter</span>
                  </>
                ) : (
                  <>
                    <span className="text-4xl font-bold">€{privatePricing.yearly}</span>
                    <span className="text-indigo-100">/year</span>
                    <p className="text-sm text-indigo-200 mt-1">
                      Save €{privatePricing.yearlySavings} compared to quarterly
                    </p>
                  </>
                )}
              </div>
            </div>

            <CardContent className="p-6 space-y-6">
              <ul className="space-y-2 text-sm">
                {[
                  "2 private sessions per week",
                  "Choose male or female teacher",
                  "Customized curriculum pace",
                  "Flexible scheduling",
                  "Direct support with your teacher",
                  "Extra practice sessions available",
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-indigo-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Umrah Benefit for Annual */}
              {billingPeriod === "yearly" && (
                <div className="bg-amber-50 dark:bg-amber-950/50 border-2 border-amber-200 dark:border-amber-800 rounded-xl p-4">
                  <h5 className="font-bold text-amber-800 dark:text-amber-300 flex items-center gap-2 mb-2">
                    <Plane className="h-4 w-4" />
                    Free Umrah Opportunity
                  </h5>
                  <p className="text-sm text-amber-700 dark:text-amber-400">
                    Annual subscribers get entered into our Umrah draw for a chance to perform Umrah with the academy!
                  </p>
                </div>
              )}

              {/* Important - Info Box (not red) */}
              <div className="bg-sky-50 dark:bg-sky-950/50 border-2 border-sky-200 dark:border-sky-800 rounded-xl p-4">
                <h5 className="font-bold text-sky-800 dark:text-sky-300 flex items-center gap-2 mb-2">
                  <Info className="h-4 w-4" />
                  Introduction Call Required
                </h5>
                <ul className="text-sm text-sky-700 dark:text-sky-400 space-y-1">
                  <li>• Choose male or female teacher</li>
                  <li>• Discuss your availability</li>
                  <li>• Quick Arabic level assessment</li>
                  <li>• Get matched with perfect teacher</li>
                </ul>
              </div>

              <Button
                className="w-full bg-indigo-600 hover:bg-indigo-700"
                size="lg"
                onClick={handleCheckout}
                disabled={isCheckoutLoading}
              >
                {isCheckoutLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Redirecting...
                  </>
                ) : (
                  <>
                    Apply for 1-on-1 Arabic
                    <ArrowRight className="h-4 w-4 ml-2" />
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
      <section id="hero" className="relative min-h-[70vh] overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-slate-900 z-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/70 to-slate-900 z-10" />
        <div className="absolute inset-0 islamic-pattern opacity-5 z-10" />

        {/* Floating Arabic Letters - Decorative */}
        <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
          <span
            className="absolute top-[15%] left-[8%] font-arabic text-6xl md:text-8xl text-blue-400/10 animate-float"
            style={{ animationDelay: "0s" }}
          >
            ا
          </span>
          <span
            className="absolute top-[25%] right-[10%] font-arabic text-5xl md:text-7xl text-blue-300/10 animate-float"
            style={{ animationDelay: "1s" }}
          >
            ب
          </span>
          <span
            className="absolute top-[45%] left-[5%] font-arabic text-4xl md:text-6xl text-sky-400/10 animate-float"
            style={{ animationDelay: "2s" }}
          >
            ت
          </span>
          <span
            className="absolute top-[55%] right-[8%] font-arabic text-5xl md:text-7xl text-blue-400/10 animate-float"
            style={{ animationDelay: "0.5s" }}
          >
            ث
          </span>
          <span
            className="absolute top-[70%] left-[12%] font-arabic text-4xl md:text-5xl text-sky-300/10 animate-float"
            style={{ animationDelay: "1.5s" }}
          >
            ج
          </span>
          <span
            className="absolute top-[20%] left-[45%] font-arabic text-3xl md:text-5xl text-blue-300/10 animate-float"
            style={{ animationDelay: "2.5s" }}
          >
            ح
          </span>
          <span
            className="absolute top-[65%] right-[15%] font-arabic text-4xl md:text-6xl text-sky-400/10 animate-float"
            style={{ animationDelay: "3s" }}
          >
            خ
          </span>
        </div>

        {/* Decorative wave at bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full">
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="hsl(var(--background))"
            />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-20 pt-24 pb-32 min-h-[70vh] flex items-center justify-center">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-full mb-6">
              <Book className="h-5 w-5 text-blue-400" />
              <span className="text-blue-300 font-medium">Arabic Program</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Understand Qur'anic Arabic
              <span className="block text-blue-400">As You Recite</span>
            </h1>

            <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
              Learn the language of the Qur'an through structured lessons and finally understand what you're reciting.
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-6 mb-10 text-white/70 text-sm">
              <span className="flex items-center gap-2">
                <Award className="h-4 w-4" /> Qualified teachers
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600" asChild>
                <a href="#choose-path">
                  Join Now!
                  <ArrowDown className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Is This For You + What You'll Achieve */}
      <section id="is-this-you" className="py-20 bg-secondary/20 relative overflow-hidden">
        {/* Decorative gradient orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 dark:bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-200/20 dark:bg-sky-500/10 rounded-full blur-3xl" />

        {/* Decorative Arabic letters */}
        <span className="absolute top-10 right-[5%] font-arabic text-8xl text-blue-500/5 dark:text-blue-400/5 pointer-events-none">
          ع
        </span>
        <span className="absolute bottom-10 left-[5%] font-arabic text-9xl text-sky-500/5 dark:text-sky-400/5 pointer-events-none">
          ق
        </span>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
              Is This You?
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              We Understand Your Struggles
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Is This You */}
            <div>
              <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-blue-500" />
                You might be struggling with...
              </h3>
              <div className="space-y-3">
                {[
                  "The right-to-left script feels unnatural and letters changing shape is confusing",
                  "Sounds like ع, ق, ح, خ don't exist in English — hard to pronounce",
                  "Complex grammar with root systems, verb conjugations, and case endings",
                  "Confusion about MSA vs dialects — which Arabic should you even learn?",
                  "Slow progress and lack of quick results compared to other languages",
                  "Fear of making mistakes when speaking or reading aloud",
                ].map((point, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50"
                  >
                    <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <p className="text-foreground">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* What You'll Achieve */}
            <div>
              <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Star className="h-5 w-5 text-blue-500" />
                What you'll achieve...
              </h3>
              <div className="space-y-3">
                {[
                  "Understand the Qur'an in its original language without translations",
                  "Comprehend your prayers and du'as with deep meaning",
                  "Access Islamic texts (Hadith, Tafsir, Fiqh) directly in Arabic",
                  "Read the Qur'an as Allah revealed it — not filtered through translation",
                  "Build confidence speaking and reading without hesitation",
                  "Connect with 26 countries' cultures through one beautiful language",
                ].map((outcome, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-gradient-to-r from-blue-50 to-sky-50 dark:from-blue-950/30 dark:to-sky-950/30 rounded-xl border border-blue-200 dark:border-blue-800"
                  >
                    <Star className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <p className="text-foreground font-medium">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get With Us - Accordion Style */}
      <section id="features" className="py-20 bg-background relative overflow-hidden">
        {/* Decorative Arabic letters */}
        <span className="absolute top-20 left-[3%] font-arabic text-[10rem] text-blue-500/[0.03] dark:text-blue-400/[0.03] pointer-events-none select-none">
          د
        </span>
        <span className="absolute bottom-20 right-[3%] font-arabic text-[12rem] text-sky-500/[0.03] dark:text-sky-400/[0.03] pointer-events-none select-none">
          ر
        </span>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
              What's Included
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">What You Get With Us</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Learn Qur'anic Arabic the right way — without overwhelm. Build your foundation first, then understand
              directly.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  feature: "2 Custom Weekly Sessions",
                  description:
                    "Personalized Arabic lessons at your pace. Focus on vocabulary, grammar, and practical reading skills tailored to your current level.",
                  icon: BookOpen,
                },
                {
                  feature: "24/7 Support & Learning Materials",
                  description:
                    "Access vocabulary lists, grammar guides, and practice exercises anytime. Get help when you need it.",
                  icon: Clock,
                },
                {
                  feature: "Personal Progress Tracking",
                  description:
                    "See your Arabic journey unfold with clear milestones. Track vocabulary learned, grammar covered, and reading fluency.",
                  icon: TrendingUp,
                },
                {
                  feature: "Step-by-Step Curriculum",
                  description:
                    "No overwhelm. We build your foundation first, then gradually introduce more complex grammar and vocabulary — at your pace.",
                  icon: GraduationCap,
                },
                {
                  feature: "Pronunciation Guidance",
                  description:
                    "Master difficult sounds like ع, ق, ح, خ with patient, expert correction. Get the pronunciation right from the start.",
                  icon: BookOpen,
                },
                {
                  feature: "Male & Female Teacher Option",
                  description:
                    "Choose your preferred teacher gender for a comfortable and focused learning experience.",
                  icon: UserCheck,
                },
                {
                  feature: "Qualified Native Teachers",
                  description:
                    "Learn from native Arabic speakers who specialize in teaching Qur'anic Arabic to non-native students.",
                  icon: Award,
                },
                {
                  feature: "Flexible Scheduling",
                  description:
                    "Life happens. We offer flexible scheduling that fits around your work, family, and commitments.",
                  icon: Calendar,
                },
                {
                  feature: "Free Umrah Opportunity",
                  description:
                    "Annual subscribers get entered into our Umrah draw for a chance to perform Umrah with the academy!",
                  icon: Plane,
                },
              ].map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-xl border shadow-sm px-6 data-[state=open]:ring-2 data-[state=open]:ring-blue-500/20"
                >
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="flex items-center gap-4 text-left">
                      <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-5 w-5 text-white" />
                      </div>
                      <span className="font-semibold text-foreground">{item.feature}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 pl-14 text-muted-foreground">{item.description}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <PricingWithToggle />

      {/* Final CTA */}
      {/* Final CTA */}
      <section
        id="final-cta"
        className="py-16 bg-gradient-to-br from-blue-600 to-indigo-800 text-white relative overflow-hidden"
      >
        {/* Decorative Arabic letters */}
        <span className="absolute top-1/2 -translate-y-1/2 left-[5%] font-arabic text-[8rem] text-white/5 pointer-events-none">
          س
        </span>
        <span className="absolute top-1/2 -translate-y-1/2 right-[5%] font-arabic text-[8rem] text-white/5 pointer-events-none">
          ش
        </span>

        <div className="container mx-auto px-4 text-center relative z-10">
          {/* Arabic phrase */}
          <p className="font-arabic text-xl md:text-2xl text-blue-200/80 mb-4">اِقْرَأْ بِاسْمِ رَبِّكَ</p>

          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Arabic Journey?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Join Abdeens Academy today and take the first step towards understanding Qur'anic Arabic.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <a href="#choose-path">Choose Your Path</a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};
export default Arabic;
