import { useState, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/sections/PageHero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Shield, BarChart3, Megaphone, Cookie } from "lucide-react";

const COOKIE_CONSENT_KEY = "abdeens_academy_cookie_consent";

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookiePreferences = () => {
  const { toast } = useToast();
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false,
  });
  const [hasExistingConsent, setHasExistingConsent] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (parsed.preferences) {
          setPreferences(parsed.preferences);
          setHasExistingConsent(true);
        }
      } catch (e) {
        console.error("Failed to parse cookie preferences");
      }
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem(
      COOKIE_CONSENT_KEY,
      JSON.stringify({
        accepted: true,
        preferences,
        timestamp: new Date().toISOString(),
      }),
    );
    toast({
      title: "Preferences saved",
      description: "Your cookie preferences have been updated.",
    });
  };

  const handleAcceptAll = () => {
    const allAccepted = { essential: true, analytics: true, marketing: true };
    setPreferences(allAccepted);
    localStorage.setItem(
      COOKIE_CONSENT_KEY,
      JSON.stringify({
        accepted: true,
        preferences: allAccepted,
        timestamp: new Date().toISOString(),
      }),
    );
    toast({
      title: "All cookies accepted",
      description: "You have accepted all cookies.",
    });
  };

  const handleRejectNonEssential = () => {
    const essentialOnly = { essential: true, analytics: false, marketing: false };
    setPreferences(essentialOnly);
    localStorage.setItem(
      COOKIE_CONSENT_KEY,
      JSON.stringify({
        accepted: true,
        preferences: essentialOnly,
        timestamp: new Date().toISOString(),
      }),
    );
    toast({
      title: "Non-essential cookies rejected",
      description: "Only essential cookies will be used.",
    });
  };

  return (
    <Layout>
      <PageHero
        title="Cookie Preferences"
        description="Manage how we use cookies on our website."
        showStudentCounter={false}
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-8">
            <p className="text-muted-foreground">
              We use cookies to enhance your experience on our website. You can customize your preferences below.
              Essential cookies are always enabled as they are necessary for the website to function properly.
            </p>
          </div>

          <div className="space-y-4 mb-8">
            {/* Essential Cookies */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Shield className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Essential Cookies</CardTitle>
                      <CardDescription>Required for the website to function</CardDescription>
                    </div>
                  </div>
                  <Switch checked={true} disabled />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  These cookies are necessary for the website to function and cannot be disabled. They include cookies
                  for session management, security, and remembering your preferences.
                </p>
              </CardContent>
            </Card>

            {/* Analytics Cookies */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                      <BarChart3 className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Analytics Cookies</CardTitle>
                      <CardDescription>Help us improve our website</CardDescription>
                    </div>
                  </div>
                  <Switch
                    checked={preferences.analytics}
                    onCheckedChange={(checked) => setPreferences({ ...preferences, analytics: checked })}
                  />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  These cookies help us understand how visitors interact with our website by collecting and reporting
                  information anonymously. This helps us improve our content and user experience.
                </p>
              </CardContent>
            </Card>

            {/* Marketing Cookies */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-orange-500/10 flex items-center justify-center">
                      <Megaphone className="h-5 w-5 text-orange-500" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Marketing Cookies</CardTitle>
                      <CardDescription>Personalized advertisements</CardDescription>
                    </div>
                  </div>
                  <Switch
                    checked={preferences.marketing}
                    onCheckedChange={(checked) => setPreferences({ ...preferences, marketing: checked })}
                  />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  These cookies are used to track visitors across websites to display relevant advertisements. They help
                  us measure the effectiveness of our marketing campaigns.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button onClick={handleSave} className="flex-1">
              Save Preferences
            </Button>
            <Button onClick={handleAcceptAll} variant="outline" className="flex-1">
              Accept All
            </Button>
            <Button onClick={handleRejectNonEssential} variant="ghost" className="flex-1">
              Reject Non-Essential
            </Button>
          </div>

          {hasExistingConsent && (
            <div className="mt-8 p-4 bg-secondary/50 rounded-lg">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Cookie className="h-4 w-4" />
                <span>
                  You have previously set your cookie preferences. You can update them at any time using this page.
                </span>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default CookiePreferences;
