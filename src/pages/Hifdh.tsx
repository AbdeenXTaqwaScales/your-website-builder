import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Users, Globe, Award, ArrowDown, Book, UserCheck, BookOpen, CheckCircle, Star, AlertTriangle, User, ArrowRight, Phone, X, Loader2, Plane, Info, Clock, TrendingUp, GraduationCap, Calendar } from "lucide-react";
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
    yearlySavings: 100
  };

  const privatePricing = {
    quarterly: 400,
    yearly: 1400,
    yearlySavings: 200
  };

  const comparisonFeatures = [
    { feature: "Sessions per week", group: "1 group lesson", private: "2 private sessions" },
    { feature: "Class size", group: "Max 30 students", private: "Just you & teacher" },
    { feature: "Session duration", group: "60-80 minutes", private: "30-45 minutes" },
    { feature: "Teacher choice", group: "Assigned teacher", private: "Choose male/female" },
    { feature: "Schedule flexibility", group: "Fixed schedule", private: "Flexible scheduling" },
    { feature: "Personalized curriculum", group: false, private: true },
    { feature: "Community Discord", group: true, private: false },
    { feature: "Direct WhatsApp support", group: false, private: true },
    { feature: "Umrah opportunity (Annual)", group: true, private: true }
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-gradient-to-b from-emerald-50/50 to-background dark:from-emerald-950/20">
      <div className="container max-w-5xl">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-primary font-medium mb-2">
            <Star className="h-4 w-4" />
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
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center bg-muted p-1 rounded-lg">
            <button onClick={() => setBillingPeriod("quarterly")} className={`px-6 py-2.5 rounded-md text-sm font-medium transition-all ${billingPeriod === "quarterly" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}>
              Quarterly
            </button>
            <button onClick={() => setBillingPeriod("yearly")} className={`px-6 py-2.5 rounded-md text-sm font-medium transition-all flex items-center gap-2 ${billingPeriod === "yearly" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}>
              Annually
              <span className="px-2 py-0.5 bg-emerald-500 text-white text-xs rounded-full">
                Save More
              </span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Group Classes */}
          <Card className="border-2 hover:border-primary/30 transition-all">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 border border-emerald-500/30 flex items-center justify-center">
                  <Users className="h-7 w-7 text-emerald-700 dark:text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground">Group Classes</h3>
                  <p className="text-muted-foreground text-sm">Learn with community</p>
                </div>
              </div>

              <div className="mb-6">
                {billingPeriod === "quarterly" ? (
                  <>
                    <span className="text-4xl font-bold text-foreground">€{groupPricing.quarterly}</span>
                    <span className="text-muted-foreground">/quarter</span>
                  </>
                ) : (
                  <>
                    <span className="text-4xl font-bold text-foreground">€{groupPricing.yearly}</span>
                    <span className="text-muted-foreground">/year</span>
                    <p className="text-sm text-emerald-600 dark:text-emerald-400 mt-1">
                      Save €{groupPricing.yearlySavings} compared to quarterly
                    </p>
                  </>
                )}
              </div>
            </CardContent>
            
            <CardContent className="p-8 pt-0">
              <ul className="space-y-3 mb-8">
                {["1 live group lesson per week", "Maximum 30 students per class", "60-80 minute sessions", "Access to recordings", "Community Discord support", "Model reading practice"].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* How It Works Box */}
              <div className="bg-emerald-50 dark:bg-emerald-950/30 rounded-xl p-4 mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Info className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  <span className="font-semibold text-foreground">How It Works</span>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="flex items-center gap-2 text-muted-foreground">
                    <span className="h-5 w-5 rounded-full bg-emerald-500 text-white text-xs flex items-center justify-center">1</span>
                    Enroll and complete your signup
                  </p>
                  <p className="flex items-center gap-2 text-muted-foreground">
                    <span className="h-5 w-5 rounded-full bg-emerald-500 text-white text-xs flex items-center justify-center">2</span>
                    Receive welcome email with Discord link
                  </p>
                  <p className="flex items-center gap-2 text-muted-foreground">
                    <span className="h-5 w-5 rounded-full bg-emerald-500 text-white text-xs flex items-center justify-center">3</span>
                    Join Discord and start learning!
                  </p>
                </div>
              </div>

              {/* Umrah Benefit for Annual */}
              {billingPeriod === "yearly" && (
                <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-4 mb-6">
                  <div className="flex items-center gap-2 mb-1">
                    <Plane className="h-5 w-5 text-amber-600" />
                    <span className="font-semibold text-foreground">Free Umrah Opportunity</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Annual subscribers get entered into our Umrah draw!
                  </p>
                </div>
              )}

              <Button 
                className="w-full bg-gradient-to-r from-emerald-700 to-emerald-800 hover:from-emerald-800 hover:to-emerald-900 text-emerald-50" 
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
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Redirecting...
                  </>
                ) : (
                  <>
                    Enroll in Group Hifdh
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* 1-on-1 Lessons */}
          <Card className="border-2 border-emerald-500/50 shadow-xl relative overflow-hidden">
            <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-emerald-600 to-emerald-700 text-emerald-50 text-xs font-medium rounded-full">
              Most Personalized
            </div>
            <div className="h-1 bg-gradient-to-r from-emerald-500 to-green-500" />
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 border border-emerald-500/30 flex items-center justify-center">
                  <User className="h-7 w-7 text-emerald-700 dark:text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground">1-on-1 Lessons</h3>
                  <p className="text-muted-foreground text-sm">Personalized attention</p>
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
                    <p className="text-sm text-emerald-600 dark:text-emerald-400 mt-1">
                      Save €{privatePricing.yearlySavings} compared to quarterly
                    </p>
                  </>
                )}
              </div>
            </CardContent>
            
            <CardContent className="p-8 pt-0">
              <ul className="space-y-3 mb-8">
                {["2 private sessions per week", "Choose male or female teacher", "Fully personalized curriculum", "Flexible scheduling", "Direct WhatsApp support", "Arabic support included"].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Umrah Benefit for Annual */}
              {billingPeriod === "yearly" && (
                <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-4 mb-6">
                  <div className="flex items-center gap-2 mb-1">
                    <Plane className="h-5 w-5 text-amber-600" />
                    <span className="font-semibold text-foreground">Free Umrah Opportunity</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Annual subscribers get entered into our Umrah draw!
                  </p>
                </div>
              )}

              {/* Important - Blue Info Box */}
              <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-xl p-4 mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <span className="font-semibold text-foreground">Introduction Call Required</span>
                </div>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>• Choose male or female teacher</p>
                  <p>• Discuss your availability</p>
                  <p>• Quick Arabic level assessment</p>
                  <p>• Get matched with perfect teacher</p>
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-emerald-700 to-emerald-800 hover:from-emerald-800 hover:to-emerald-900 text-emerald-50" size="lg" onClick={handleCheckout} disabled={isCheckoutLoading}>
                {isCheckoutLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Redirecting...
                  </>
                ) : (
                  <>
                    Apply for 1-on-1 Hifdh
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Comparison Table */}
        <div className="bg-background rounded-2xl border p-6 md:p-8">
          <h3 className="font-display text-xl font-bold text-center text-foreground mb-6">
            Compare Group vs 1-on-1
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Feature</th>
                  <th className="text-center py-3 px-4 font-medium text-muted-foreground">
                    <div className="flex items-center justify-center gap-2">
                      <Users className="h-4 w-4" />
                      Group
                    </div>
                  </th>
                  <th className="text-center py-3 px-4 font-medium text-muted-foreground">
                    <div className="flex items-center justify-center gap-2">
                      <User className="h-4 w-4" />
                      1-on-1
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((item, index) => (
                  <tr key={index} className="border-b last:border-0">
                    <td className="py-3 px-4 text-foreground">{item.feature}</td>
                    <td className="py-3 px-4 text-center">
                      {typeof item.group === "boolean" ? (
                        item.group ? <CheckCircle className="h-5 w-5 text-emerald-500 mx-auto" /> : <X className="h-5 w-5 text-muted-foreground/50 mx-auto" />
                      ) : (
                        <span className="text-muted-foreground">{item.group}</span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-center">
                      {typeof item.private === "boolean" ? (
                        item.private ? <CheckCircle className="h-5 w-5 text-emerald-500 mx-auto" /> : <X className="h-5 w-5 text-muted-foreground/50 mx-auto" />
                      ) : (
                        <span className="text-muted-foreground">{item.private}</span>
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
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-emerald-950 via-green-900 to-emerald-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(5,150,105,0.1),transparent_50%)]" />
        <div className="absolute inset-0 islamic-pattern opacity-5" />

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24">
            <path d="M0,0 C150,80 350,0 600,40 C850,80 1050,0 1200,40 L1200,120 L0,120 Z" fill="hsl(var(--background))" />
          </svg>
        </div>

        <div className="container relative z-10 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-300 text-sm font-medium mb-6">
              <Book className="h-4 w-4" />
              Hifdh Program
            </span>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Memorize the Qur'an
              <span className="block text-emerald-400">With Expert Guidance</span>
            </h1>
            
            <p className="text-lg md:text-xl text-emerald-100/80 mb-8 max-w-2xl mx-auto">
              A proven system with dedicated teachers, weekly structure, and personalized support.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 text-emerald-200/70 text-sm">
              <span className="flex items-center gap-2"><Users className="h-4 w-4" /></span>
              <span className="flex items-center gap-2"><Globe className="h-4 w-4" /></span>
              <span className="flex items-center gap-2"><Award className="h-4 w-4" /> Qualified teachers</span>
            </div>

            <div className="mt-10">
              <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white shadow-lg" asChild>
                <a href="#pricing">
                  Join Now!
                  <ArrowDown className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Is This You Section */}
      <section className="py-16 md:py-24 bg-secondary/30 relative overflow-hidden">
        <div className="container">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-primary font-medium mb-2">
              <Star className="h-4 w-4" />
              Is This You?
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              We Understand Your Struggles
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-background rounded-2xl p-8 border shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="h-6 w-6 text-amber-500" />
                <span className="font-semibold text-foreground">You might be struggling with...</span>
              </div>
              <ul className="space-y-4">
                {["Previously memorized verses keep fading without proper review", "Life interruptions breaking your momentum — work, family, emergencies", "Digital distractions destroying your focus and attention span", "Fear of memorizing incorrectly without qualified teacher correction", "Guilt and frustration when missing sessions or falling behind", "Feeling overwhelmed by the magnitude of memorizing the whole Qur'an"].map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">{point}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/30 dark:to-green-950/30 rounded-2xl p-8 border border-emerald-200/50 dark:border-emerald-800/50 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                <span className="font-semibold text-foreground">What you'll achieve...</span>
              </div>
              <ul className="space-y-4">
                {["Build lasting retention with our spaced repetition system", "Recite in daily prayers with confidence and proper tajweed", "Create a sustainable, lifelong relationship with the Qur'an", "Secure your rank in Jannah as a carrier of the Qur'an", "Lead Taraweeh prayers and become a role model for your family", "Celebrate small, achievable milestones with personalized support"].map((outcome, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                    <p className="text-foreground">{outcome}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section - Accordion Style */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-primary font-medium mb-2">
              <BookOpen className="h-4 w-4" />
              What's Included
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              What You Get With Us
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Stop the frustration of forgetting. Our proven system combines understanding with memorization.
            </p>
          </div>

          <div className="space-y-4">
            <Accordion type="single" collapsible className="w-full">
              {[
                { feature: "2 Custom Weekly Sessions", description: "Personalized lessons tailored to your memorization pace and goals. Each session focuses on new hifdh and structured revision.", icon: BookOpen },
                { feature: "24/7 Support & Learning Materials", description: "Access our library of resources anytime. Get help when you need it through our dedicated support channels.", icon: Clock },
                { feature: "Personal Progress Tracking", description: "Monitor your journey with detailed progress reports. Celebrate milestones and stay motivated with visible achievements.", icon: TrendingUp },
                { feature: "Tajweed Correction & Guidance", description: "Expert pronunciation correction to ensure you memorize correctly from the start. No ingrained mistakes.", icon: BookOpen },
                { feature: "Proper Structured Curriculum", description: "A proven methodology that balances new memorization with systematic revision, so you retain what you learn.", icon: GraduationCap },
                { feature: "Male & Female Teacher Option", description: "Choose your preferred teacher gender for a comfortable and focused learning experience.", icon: UserCheck },
                { feature: "Qualified Teachers with Ijazah", description: "Learn from certified teachers who have an unbroken chain of transmission in Qur'an recitation.", icon: Award },
                { feature: "Flexible Scheduling", description: "Life happens. We offer flexible scheduling that fits around your work, family, and commitments.", icon: Calendar },
                { feature: "Free Umrah Opportunity", description: "Annual subscribers get entered into our Umrah draw for a chance to perform Umrah with the academy!", icon: Plane }
              ].map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                        <item.icon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <span className="font-semibold text-left">{item.feature}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pl-14">
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
      <section className="py-16 md:py-24 bg-gradient-to-br from-emerald-500 to-green-600">
        <div className="container max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Hifdh Journey?
          </h2>
          <p className="text-emerald-100 text-lg mb-8 max-w-xl mx-auto">
            Join Abdeens Academy today and take the first step towards memorizing the Qur'an.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <a href="#pricing">Choose Your Path</a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Hifdh;
