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
  ArrowRight,
  GraduationCap,
  Calendar,
  Loader2,
} from "lucide-react";
import { redirectToCheckout } from "@/lib/shopify";
import { toast } from "sonner";

const FULL_PACKAGE_HANDLE = "full-academy-package-monthly";

const FullPackagePricing = () => {
  const [isCheckoutLoading, setIsCheckoutLoading] = useState(false);

  const handleCheckout = async () => {
    setIsCheckoutLoading(true);
    try {
      await redirectToCheckout(FULL_PACKAGE_HANDLE);
    } catch (error) {
      console.error("Checkout error:", error);
      toast.error(error instanceof Error ? error.message : "Failed to start checkout");
    } finally {
      setIsCheckoutLoading(false);
    }
  };

  const features = [
    "Weekly 1-on-1 sessions covering all 3 subjects",
    "Structured curriculum",
    "Personalized pacing and goals",
    "Priority teacher access and support",
    "All materials, recordings, and resources",
    "Monthly progress reviews and adjustments",
    "Direct WhatsApp support with your teachers",
  ];

  const programComparison = [
    {
      feature: "All three subjects integrated",
      description: "Hifdh, Arabic, and Tafsir combined into one cohesive journey",
    },
    { feature: "Coordinated teaching team", description: "Your teachers work together on your progress" },
    { feature: "Unified curriculum", description: "Each subject reinforces the others" },
    { feature: "Priority support", description: "Direct access to your dedicated team" },
    { feature: "Monthly progress reviews", description: "Regular check-ins to adjust your path" },
    { feature: "Flexible scheduling", description: "Sessions arranged around your availability" },
  ];

  return (
    <section id="choose-path" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-4">
            ⭐ VIP Package
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Complete Qur'an Journey</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            One comprehensive program covering Hifdh, Arabic, and Tafsir with dedicated 1-on-1 instruction
          </p>
        </div>

        {/* Main Pricing Card */}
        <div className="max-w-lg mx-auto mb-16">
          <Card className="border-2 border-amber-300 dark:border-amber-600 bg-gradient-to-b from-amber-50/50 to-transparent dark:from-amber-950/30 dark:to-transparent overflow-hidden relative shadow-xl backdrop-blur-sm">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400" />

            <div className="bg-gradient-to-br from-amber-500 to-yellow-600 text-white p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-14 w-14 rounded-full bg-white/20 flex items-center justify-center">
                  <Book className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold">Full Package</h3>
                  <p className="text-amber-100">Hifdh + Arabic + Tafsir</p>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-amber-100 text-lg">Complete integrated program</p>
                <p className="text-white/90 mt-2 text-sm">Investment details discussed during application</p>
              </div>
            </div>

            <CardContent className="p-6 space-y-6">
              <ul className="space-y-3">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-amber-500 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-3">
                <Button
                  className="w-full bg-amber-500 hover:bg-amber-600"
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
                      Apply for Full Package
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </>
                  )}
                </Button>
              </div>

              <p className="text-xs text-muted-foreground text-center italic">
                Submitting an application does not obligate you to enroll. We'll review your goals and confirm if this
                program is the right fit.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Why Choose Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-display text-2xl font-bold text-foreground text-center mb-8">
            Why Choose the Full Package?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {programComparison.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950/30 dark:to-yellow-950/30 rounded-xl border border-amber-200 dark:border-amber-800"
              >
                <CheckCircle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">{item.feature}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const FullPackage = () => {
  return (
    <Layout>
      {/* 1. Dark Hero Section */}
      <section id="hero" className="relative min-h-[70vh] overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/40 to-slate-900 z-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/70 to-slate-900 z-10" />
        <div className="absolute inset-0 islamic-pattern opacity-5 z-10" />

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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 rounded-full mb-6">
              <Book className="h-5 w-5 text-amber-400" />
              <span className="text-amber-300 font-medium">Complete Package</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Hifdh, Arabic & Tafsir
              <span className="block text-amber-400">One Integrated Journey</span>
            </h1>

            <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
              A complete 1-on-1 program combining memorization, language, and understanding into one cohesive path.
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-6 mb-10 text-white/70 text-sm">
              <span className="flex items-center gap-2">
                <Users className="h-4 w-4" /> Limited 1-on-1 spots
              </span>
              <span className="flex items-center gap-2">
                <Globe className="h-4 w-4" /> International
              </span>
              <span className="flex items-center gap-2">
                <Award className="h-4 w-4" /> Qualified teachers
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600" asChild>
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
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200/20 dark:bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-200/20 dark:bg-yellow-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-4">
              Is This You?
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Connect With Your Goals</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Is This You */}
            <div>
              <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-amber-500" />
                You might be struggling with...
              </h3>
              <div className="space-y-3">
                {[
                  "Wanting to memorize Qur'an but struggling to stay consistent",
                  "Reading Arabic letters but not understanding what you recite",
                  "Feeling disconnected from the deeper meanings of the Qur'an",
                  "Juggling multiple programs with no cohesive learning path",
                  "Lacking accountability and personalized guidance",
                  "Starting and stopping your Islamic studies multiple times",
                ].map((point, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50"
                  >
                    <CheckCircle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <p className="text-foreground">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* What You'll Achieve */}
            <div>
              <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Star className="h-5 w-5 text-amber-500" />
                What you'll achieve...
              </h3>
              <div className="space-y-3">
                {[
                  "Memorize Qur'an with proper Tajweed and strong retention",
                  "Understand the Arabic language of the Qur'an directly",
                  "Know the meanings, context, and lessons behind every verse",
                  "Experience a complete transformation in your relationship with Allah's words",
                  "Have one coordinated team guiding your entire journey",
                ].map((outcome, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950/30 dark:to-yellow-950/30 rounded-xl border border-amber-200 dark:border-amber-800"
                  >
                    <Star className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <p className="text-foreground font-medium">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. What You Get With Us - Features Table */}
      <section id="features" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-4">
              Program Structure
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Your Roadmap</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              A balanced curriculum covering all three subjects each week
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Schedule Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="border-emerald-200 dark:border-emerald-800 bg-gradient-to-b from-emerald-50 dark:from-emerald-950/50 to-background">
                <CardContent className="p-6 text-center">
                  <div className="h-12 w-12 rounded-full bg-emerald-500 flex items-center justify-center mx-auto mb-4">
                    <Book className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-display font-bold text-foreground mb-2">Session 1</h4>
                  <p className="text-emerald-600 dark:text-emerald-400 font-medium mb-2">Hifdh Focus</p>
                  <p className="text-sm text-muted-foreground">New memorization + revision</p>
                </CardContent>
              </Card>

              <Card className="border-blue-200 dark:border-blue-800 bg-gradient-to-b from-blue-50 dark:from-blue-950/50 to-background">
                <CardContent className="p-6 text-center">
                  <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-display font-bold text-foreground mb-2">Session 2</h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">Arabic Focus</p>
                  <p className="text-sm text-muted-foreground">Grammar + vocabulary</p>
                </CardContent>
              </Card>

              <Card className="border-purple-200 dark:border-purple-800 bg-gradient-to-b from-purple-50 dark:from-purple-950/50 to-background">
                <CardContent className="p-6 text-center">
                  <div className="h-12 w-12 rounded-full bg-purple-500 flex items-center justify-center mx-auto mb-4">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-display font-bold text-foreground mb-2">Session 3</h4>
                  <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">Tafsir Focus</p>
                  <p className="text-sm text-muted-foreground">Meaning + context</p>
                </CardContent>
              </Card>
            </div>

            {/* Desktop Table View */}
            <div className="hidden md:block bg-card rounded-2xl border shadow-sm overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-amber-50 dark:bg-amber-950/30 border-b">
                    <th className="text-left p-4 font-display font-bold text-foreground">Feature</th>
                    <th className="text-left p-4 font-display font-bold text-foreground">Details</th>
                    <th className="text-center p-4 font-display font-bold text-foreground w-24">Included</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      feature: "Male & Female Teams",
                      description: "Choose your preferred teaching team",
                      icon: UserCheck,
                      gradient: "from-amber-500 to-yellow-600",
                    },
                    {
                      feature: "Structured Curriculum",
                      description: "Integrated learning path",
                      icon: Calendar,
                      gradient: "from-emerald-500 to-green-600",
                    },
                    {
                      feature: "Learn From Anywhere",
                      description: "100% online — study from home worldwide",
                      icon: Globe,
                      gradient: "from-blue-500 to-cyan-600",
                    },
                    {
                      feature: "Priority Support",
                      description: "Direct WhatsApp access to your teachers",
                      icon: Award,
                      gradient: "from-purple-500 to-violet-600",
                    },
                  ].map((item, index) => (
                    <tr key={index} className="border-b hover:bg-muted/30 transition-colors">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div
                            className={`h-10 w-10 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center`}
                          >
                            <item.icon className="h-5 w-5 text-white" />
                          </div>
                          <span className="font-semibold">{item.feature}</span>
                        </div>
                      </td>
                      <td className="p-4 text-muted-foreground">{item.description}</td>
                      <td className="p-4 text-center">
                        <CheckCircle className="h-6 w-6 text-amber-500 mx-auto" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden grid gap-4">
              {[
                {
                  feature: "Male & Female Teams",
                  description: "Choose your preferred teaching team",
                  icon: UserCheck,
                  gradient: "from-amber-500 to-yellow-600",
                },
                {
                  feature: "Structured Curriculum",
                  description: "Integrated learning path",
                  icon: Calendar,
                  gradient: "from-emerald-500 to-green-600",
                },
                {
                  feature: "Learn From Anywhere",
                  description: "100% online — study from home worldwide",
                  icon: Globe,
                  gradient: "from-blue-500 to-cyan-600",
                },
                {
                  feature: "Priority Support",
                  description: "Direct WhatsApp access to your teachers",
                  icon: Award,
                  gradient: "from-purple-500 to-violet-600",
                },
              ].map((item, index) => (
                <div key={index} className="bg-card rounded-xl border shadow-sm p-4 flex items-start gap-4">
                  <div
                    className={`h-12 w-12 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0`}
                  >
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-foreground">{item.feature}</span>
                      <CheckCircle className="h-5 w-5 text-amber-500 flex-shrink-0" />
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Pricing */}
      <FullPackagePricing />

      {/* 6. FAQ */}
      <section id="faq" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-4">
              Questions?
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "How much time do I need per week?",
                a: "Plan for 3-4 hours of live sessions plus 5-7 hours of independent study and practice per week for optimal results.",
              },
              {
                q: "Can I work around my job or studies?",
                a: "Absolutely! We offer flexible scheduling and work with students in all time zones. Sessions can be scheduled around your commitments.",
              },
              {
                q: "Is there any guarantee or trial?",
                a: "We review every application to ensure the program is the right fit. We want committed students who are ready for the journey.",
              },
              {
                q: "What's the difference between this and taking all 3 separate programs?",
                a: "The Full Package is integrated—your teachers coordinate, your curriculum is unified, and you save significantly. It's designed as one journey, not three separate ones.",
              },
              {
                q: "Can I choose a female teaching team?",
                a: "Yes! We have a complete female teaching team available. You'll discuss your preference after enrollment.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-background rounded-xl p-6 border hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted-foreground text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Final CTA */}
      <section id="final-cta" className="py-16 bg-gradient-to-br from-amber-500 to-yellow-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Ready for the Complete Journey?</h2>
          <p className="text-amber-100 mb-8 max-w-xl mx-auto">
            Apply for the Full Package and transform your relationship with the Qur'an.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <a href="#choose-path">Apply Now</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FullPackage;
