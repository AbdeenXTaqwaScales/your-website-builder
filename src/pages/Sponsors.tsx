import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Heart, BookOpen, Users, Star, Award, Medal, Trophy } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/sections/PageHero";

const impactPoints = [
  {
    icon: BookOpen,
    title: "Enable Qur'an Memorization",
    description: "Your sponsorship gives someone the opportunity to memorize the entire Qur'an with expert guidance.",
  },
  {
    icon: Users,
    title: "Support a Student",
    description: "Cover tuition for a dedicated student who may not have the means to join our programs.",
  },
  {
    icon: Star,
    title: "Earn Continuous Reward",
    description: "The Prophet ﷺ said: 'Whoever guides someone to goodness will have a reward like the one who did it.'",
  },
  {
    icon: Heart,
    title: "Sadaqah Jariyah",
    description: "Your contribution becomes ongoing charity as students teach others and pass on their knowledge.",
  },
];

const sponsors = [
  {
    tier: "gold",
    name: "Abu Bakr",
    studentsSponsored: 30,
    contribution: "€9,000",
    icon: Trophy,
    bgClass: "bg-gradient-to-br from-yellow-500/20 to-amber-600/10",
    borderClass: "border-yellow-500/50",
    iconColor: "text-yellow-500",
    titleColor: "text-yellow-500",
  },
  {
    tier: "silver",
    name: "Rafeeq Haneef",
    studentsSponsored: 10,
    contribution: "€3,000",
    icon: Medal,
    bgClass: "bg-gradient-to-br from-slate-300/20 to-slate-400/10",
    borderClass: "border-slate-400/50",
    iconColor: "text-slate-300",
    titleColor: "text-slate-300",
  },
  {
    tier: "bronze",
    name: "Adel Baig",
    studentsSponsored: 8,
    contribution: "€1,800",
    icon: Award,
    bgClass: "bg-gradient-to-br from-amber-700/20 to-orange-800/10",
    borderClass: "border-amber-700/50",
    iconColor: "text-amber-600",
    titleColor: "text-amber-600",
  },
];

const donationAmounts = [25, 50, 100, 250];

const Sponsors = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState<string>("");

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount(null);
  };

  const handleSponsorClick = () => {
    const amount = customAmount || selectedAmount;
    if (amount) {
      window.open(`https://www.paypal.com/paypalme/abdeentube/${amount}`, "_blank");
    } else {
      window.open("https://www.paypal.com/paypalme/abdeentube", "_blank");
    }
  };

  const currentAmount = customAmount || selectedAmount;

  return (
    <Layout>
      <PageHero
        title="Sponsor a Student"
        description="Get the ajr of enabling someone to memorize the Qur'an"
        showStudentCounter={false}
      />

      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Many aspiring Huffadh have the dedication and drive to memorize the Qur'an but lack the financial means to
              access quality instruction. Your sponsorship can bridge that gap and help transform lives through the
              blessing of Qur'anic knowledge.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
            {impactPoints.map((point, index) => (
              <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <point.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{point.title}</h3>
                      <p className="text-sm text-muted-foreground">{point.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Sponsors Wall of Honor */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-display font-semibold text-foreground text-center mb-8">
              Sponsors Wall of Honor
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {sponsors.map((sponsor, index) => (
                <Card 
                  key={index} 
                  className={`${sponsor.bgClass} ${sponsor.borderClass} border-2 text-center`}
                >
                  <CardContent className="p-6">
                    <div className={`mx-auto h-16 w-16 rounded-full bg-background/50 flex items-center justify-center mb-4`}>
                      <sponsor.icon className={`h-8 w-8 ${sponsor.iconColor}`} />
                    </div>
                    <p className={`text-xs font-semibold uppercase tracking-wider ${sponsor.titleColor} mb-2`}>
                      {sponsor.tier} Tier
                    </p>
                    <h3 className="text-xl font-semibold text-foreground mb-4">{sponsor.name}</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>
                        <span className="font-medium text-foreground">{sponsor.studentsSponsored}</span> Students Sponsored
                      </p>
                      <p>
                        Contribution: <span className="font-medium text-foreground">{sponsor.contribution}</span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4 text-center">
                  Become a Sponsor Today
                </h2>
                <p className="text-muted-foreground mb-6 text-center">
                  Choose an amount or enter a custom donation. Every contribution makes a lasting impact.
                </p>

                {/* Preset Amounts */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                  {donationAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => handleAmountSelect(amount)}
                      className={`py-3 px-4 rounded-lg border-2 font-semibold transition-all ${
                        selectedAmount === amount
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-card hover:border-primary/50"
                      }`}
                    >
                      €{amount}
                    </button>
                  ))}
                </div>

                {/* Custom Amount */}
                <div className="mb-6">
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">€</span>
                    <Input
                      type="number"
                      placeholder="Enter custom amount"
                      value={customAmount}
                      onChange={(e) => handleCustomAmountChange(e.target.value)}
                      className="pl-8 text-center"
                      min="1"
                    />
                  </div>
                </div>

                <Button 
                  size="lg" 
                  onClick={handleSponsorClick} 
                  className="w-full gap-2"
                  disabled={!currentAmount}
                >
                  <Heart className="h-5 w-5" />
                  {currentAmount ? `Donate €${currentAmount}` : "Select an Amount"}
                </Button>
                
                <p className="text-xs text-muted-foreground mt-4 text-center">
                  You'll be redirected to PayPal to complete your donation securely
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sponsors;
