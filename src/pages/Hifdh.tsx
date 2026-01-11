import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
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
  X,
  Loader2,
  Plane,
  Info,
  Clock,
  TrendingUp,
  GraduationCap,
  Calendar,
  Baby,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { redirectToCheckout } from "@/lib/shopify";
import { toast } from "sonner";
const HIFDH_1ON1_PRODUCT_HANDLE = "1-on-1-hifdh-program-quarterly";
const HIFDH_GROUP_PRODUCT_HANDLE = "hifdh-group-classes-monthly";
const PricingWithToggle = () => {
  const [billingPeriod, setBillingPeriod] = useState<"quarterly" | "yearly">("quarterly");
  const [isCheckoutLoading, setIsCheckoutLoading] = useState(false);
  const handleCheckout = async () => {
    setIsCheckoutLoading(true);
    try {
      await redirectToCheckout(HIFDH_1ON1_PRODUCT_HANDLE);
    } catch (error) {
      console.error("Checkout error:", error);
      const message = error instanceof Error ? error.message : "Failed to start checkout. Please try again.";
      toast.error(message);
    } finally {
      setIsCheckoutLoading(false);
    }
  };
  const groupPricing = {
    quarterly: 200,
    yearly: 700,
    yearlySavings: 100,
  };
  const privatePricing = {
    quarterly: 400,
    yearly: 1400,
    yearlySavings: 200,
  };
  const comparisonFeatures = [
    {
      feature: "Sessions per week",
      group: "1 group lesson",
      private: "2 private sessions",
    },
    {
      feature: "Class size",
      group: "Max 30 students",
      private: "Just you & teacher",
    },
    {
      feature: "Session duration",
      group: "60-80 minutes",
      private: "30-45 minutes",
    },
    {
      feature: "Teacher choice",
      group: "Assigned teacher",
      private: "Choose male/female",
    },
    {
      feature: "Schedule flexibility",
      group: "Fixed schedule",
      private: "Flexible scheduling",
    },
    {
      feature: "Personalized curriculum",
      group: false,
      private: true,
    },
    {
      feature: "Community Discord",
      group: true,
      private: false,
    },
    {
      feature: "Direct WhatsApp support",
      group: false,
      private: true,
    },
    {
      feature: "Umrah opportunity (Annual)",
      group: true,
      private: true,
    },
  ];
  return (
    <section id="choose-path" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4">
            Choose Your Path
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Select Your Learning Style
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Both options include qualified teachers and structured curriculum. Choose what fits your style.
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
              <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full">
                Save More
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Group Classes */}
          <Card className="border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-b from-emerald-50 dark:from-emerald-950/50 to-background overflow-hidden">
            <div className="bg-emerald-500 text-white p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold">Group Classes</h3>
                  <p className="text-emerald-100">Learn with community</p>
                </div>
              </div>
              <div className="mt-4">
                {billingPeriod === "quarterly" ? (
                  <>
                    <span className="text-4xl font-bold">€{groupPricing.quarterly}</span>
                    <span className="text-emerald-100">/quarter</span>
                  </>
                ) : (
                  <>
                    <span className="text-4xl font-bold">€{groupPricing.yearly}</span>
                    <span className="text-emerald-100">/year</span>
                    <p className="text-sm text-emerald-200 mt-1">
                      Save €{groupPricing.yearlySavings} compared to quarterly
                    </p>
                  </>
                )}
              </div>
            </div>

            <CardContent className="p-6 space-y-6">
              <ul className="space-y-2 text-sm">
                {[
                  "1 live group lesson per week",
                  "Maximum 30 students per class",
                  "60-80 minute sessions",
                  "Access to recordings",
                  "Community Discord support",
                  "Model reading practice",
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* How It Works Box */}
              <div className="bg-emerald-50 dark:bg-emerald-950/50 rounded-xl p-4 border border-emerald-200 dark:border-emerald-800">
                <h5 className="font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-2 mb-3 text-sm">
                  <Info className="h-4 w-4" />
                  How It Works
                </h5>
                <ol className="space-y-2 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="h-5 w-5 rounded-full bg-emerald-200 dark:bg-emerald-800 text-emerald-800 dark:text-emerald-200 flex items-center justify-center text-xs font-bold flex-shrink-0">
                      1
                    </span>
                    <span className="text-emerald-700 dark:text-emerald-300">Enroll and complete your signup</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-5 w-5 rounded-full bg-emerald-200 dark:bg-emerald-800 text-emerald-800 dark:text-emerald-200 flex items-center justify-center text-xs font-bold flex-shrink-0">
                      2
                    </span>
                    <span className="text-emerald-700 dark:text-emerald-300">
                      Receive welcome email with Discord link
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-5 w-5 rounded-full bg-emerald-200 dark:bg-emerald-800 text-emerald-800 dark:text-emerald-200 flex items-center justify-center text-xs font-bold flex-shrink-0">
                      3
                    </span>
                    <span className="text-emerald-700 dark:text-emerald-300">Join Discord and start learning!</span>
                  </li>
                </ol>
              </div>

              {/* Umrah Benefit for Annual */}
              {billingPeriod === "yearly" && (
                <div className="bg-amber-50 dark:bg-amber-950/50 border-2 border-amber-200 dark:border-amber-800 rounded-xl p-4">
                  <h5 className="font-bold text-amber-800 dark:text-amber-300 flex items-center gap-2 mb-2">
                    <Plane className="h-4 w-4" />
                    Free Umrah Opportunity
                  </h5>
                  <p className="text-sm text-amber-700 dark:text-amber-400">
                    Annual subscribers get entered into our Umrah draw!
                  </p>
                </div>
              )}

              <Button
                className="w-full bg-emerald-600 hover:bg-emerald-700"
                size="lg"
                onClick={async () => {
                  setIsCheckoutLoading(true);
                  try {
                    await redirectToCheckout(HIFDH_GROUP_PRODUCT_HANDLE);
                  } catch (error) {
                    console.error("Checkout error:", error);
                    toast.error(error instanceof Error ? error.message : "Failed to start checkout");
                  } finally {
                    setIsCheckoutLoading(false);
                  }
                }}
                disabled={isCheckoutLoading}
              >
                {isCheckoutLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Redirecting...
                  </>
                ) : (
                  <>
                    Enroll in Group Hifdh
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* 1-on-1 Lessons */}
          <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-b from-blue-50 dark:from-blue-950/50 to-background overflow-hidden relative">
            <div className="absolute top-2 right-2 md:top-4 md:right-4 z-10">
              <span className="px-2 py-0.5 md:px-3 md:py-1 bg-blue-600 text-white text-[10px] md:text-xs font-bold rounded-full whitespace-nowrap">
                Most Personalized
              </span>
            </div>

            <div className="bg-blue-500 text-white p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
                  <User className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold">1-on-1 Lessons</h3>
                  <p className="text-blue-100">Personalized attention</p>
                </div>
              </div>
              <div className="mt-4">
                {billingPeriod === "quarterly" ? (
                  <>
                    <span className="text-4xl font-bold">€{privatePricing.quarterly}</span>
                    <span className="text-blue-100">/quarter</span>
                  </>
                ) : (
                  <>
                    <span className="text-4xl font-bold">€{privatePricing.yearly}</span>
                    <span className="text-blue-100">/year</span>
                    <p className="text-sm text-blue-200 mt-1">
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
                  "Fully personalized curriculum",
                  "Flexible scheduling",
                  "Direct WhatsApp support",
                  "Arabic support included",
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-500" />
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
                    Annual subscribers get entered into our Umrah draw!
                  </p>
                </div>
              )}

              {/* Important - Blue Info Box */}
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
                className="w-full bg-blue-600 hover:bg-blue-700"
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
                    Apply for 1-on-1 Hifdh
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Comparison Table */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="font-display text-2xl font-bold text-foreground text-center mb-8">Compare Group vs 1-on-1</h3>

          <div className="bg-card rounded-2xl border shadow-sm overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-muted/50 border-b">
                  <th className="text-left p-4 font-display font-bold text-foreground">Feature</th>
                  <th className="text-center p-4 font-display font-bold text-emerald-600">
                    <div className="flex items-center justify-center gap-2">
                      <Users className="h-5 w-5" />
                      Group
                    </div>
                  </th>
                  <th className="text-center p-4 font-display font-bold text-blue-600">
                    <div className="flex items-center justify-center gap-2">
                      <User className="h-5 w-5" />
                      1-on-1
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((item, index) => (
                  <tr key={index} className="border-b last:border-b-0 hover:bg-muted/30 transition-colors">
                    <td className="p-4 font-medium text-foreground">{item.feature}</td>
                    <td className="p-4 text-center">
                      {typeof item.group === "boolean" ? (
                        item.group ? (
                          <CheckCircle className="h-5 w-5 text-emerald-500 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-muted-foreground/50 mx-auto" />
                        )
                      ) : (
                        <span className="text-sm text-muted-foreground">{item.group}</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {typeof item.private === "boolean" ? (
                        item.private ? (
                          <CheckCircle className="h-5 w-5 text-blue-500 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-muted-foreground/50 mx-auto" />
                        )
                      ) : (
                        <span className="text-sm text-muted-foreground">{item.private}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
const Hifdh = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section id="hero" className="relative min-h-[70vh] overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 to-slate-900 z-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/70 to-slate-900 z-10" />
        <div className="absolute inset-0 islamic-pattern opacity-5 z-10" />

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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 rounded-full mb-6">
              <Book className="h-5 w-5 text-emerald-400" />
              <span className="text-emerald-300 font-medium">Hifdh Program</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Memorize the Qur'an
              <span className="block text-emerald-400">With Expert Guidance</span>
            </h1>

            <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
              A proven system with dedicated teachers, weekly structure, and personalized support.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-10 text-white/70 text-sm">
              <span className="flex items-center gap-2">
                <Award className="h-4 w-4" /> Qualified teachers
              </span>
            </div>

            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600" asChild>
              <a href="#choose-path">
                Join Now!
                <ArrowDown className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Is This You Section */}
      <section id="is-this-you" className="py-20 bg-secondary/20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4">
              Is This You?
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              We Understand Your Struggles
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-amber-500" />
                You might be struggling with...
              </h3>
              <div className="space-y-3">
                {[
                  "Previously memorized verses keep fading without proper review",
                  "Life interruptions breaking your momentum — work, family, emergencies",
                  "Digital distractions destroying your focus and attention span",
                  "Fear of memorizing incorrectly without qualified teacher correction",
                  "Guilt and frustration when missing sessions or falling behind",
                  "Feeling overwhelmed by the magnitude of memorizing the whole Qur'an",
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-xl border shadow-sm">
                    <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <p className="text-foreground">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Star className="h-5 w-5 text-amber-500" />
                What you'll achieve...
              </h3>
              <div className="space-y-3">
                {[
                  "Build lasting retention with our spaced repetition system",
                  "Recite in daily prayers with confidence and proper tajweed",
                  "Create a sustainable, lifelong relationship with the Qur'an",
                  "Secure your rank in Jannah as a carrier of the Qur'an",
                  "Lead Taraweeh prayers and become a role model for your family",
                  "Celebrate small, achievable milestones with personalized support",
                ].map((outcome, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-gradient-to-r from-amber-50 dark:from-amber-950/50 to-orange-50 dark:to-orange-950/50 rounded-xl border border-amber-200 dark:border-amber-800"
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

      {/* What You Get Section - Accordion Style */}
      <section id="features" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4">
              What's Included
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">What You Get With Us</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Stop the frustration of forgetting. Our proven system combines understanding with memorization.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  feature: "2 Custom Weekly Sessions",
                  description:
                    "Personalized lessons tailored to your memorization pace and goals. Each session focuses on new hifdh and structured revision.",
                  icon: BookOpen,
                },
                {
                  feature: "24/7 Support & Learning Materials",
                  description:
                    "Access our library of resources anytime. Get help when you need it through our dedicated support channels.",
                  icon: Clock,
                },
                {
                  feature: "Personal Progress Tracking",
                  description:
                    "Monitor your journey with detailed progress reports. Celebrate milestones and stay motivated with visible achievements.",
                  icon: TrendingUp,
                },
                {
                  feature: "Tajweed Correction & Guidance",
                  description:
                    "Expert pronunciation correction to ensure you memorize correctly from the start. No ingrained mistakes.",
                  icon: BookOpen,
                },
                {
                  feature: "Proper Structured Curriculum",
                  description:
                    "A proven methodology that balances new memorization with systematic revision, so you retain what you learn.",
                  icon: GraduationCap,
                },
                {
                  feature: "Male & Female Teacher Option",
                  description:
                    "Choose your preferred teacher gender for a comfortable and focused learning experience.",
                  icon: UserCheck,
                },
                {
                  feature: "Qualified Teachers with Ijazah",
                  description:
                    "Learn from certified teachers who have an unbroken chain of transmission in Qur'an recitation.",
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
                {
                  feature: "Children Welcome (5+ Years)",
                  description:
                    "Children above the age of 5 may join our program with parental consent. We provide a nurturing, age-appropriate learning environment to help young learners begin their Qur'an memorization journey.",
                  icon: Baby,
                },
              ].map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-xl border shadow-sm px-6 data-[state=open]:ring-2 data-[state=open]:ring-emerald-500/20"
                >
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="flex items-center gap-4 text-left">
                      <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center flex-shrink-0">
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
      <section id="final-cta" className="py-16 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Hifdh Journey?</h2>
          <p className="text-emerald-100 mb-8 max-w-xl mx-auto">
            Join Abdeens Academy today and take the first step towards memorizing the Qur'an.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <a href="#choose-path">Choose Your Path</a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};
export default Hifdh;
