import { useState, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const COOKIE_CONSENT_KEY = "abdeens_academy_cookie_consent";

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookiePreferences = () => {
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const saved = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.preferences) {
        setPreferences(parsed.preferences);
      }
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify({
      accepted: true,
      preferences,
      timestamp: new Date().toISOString(),
    }));
    toast({ title: "Preferences saved", description: "Your cookie preferences have been updated." });
  };

  return (
    <Layout>
      <PageHero
        title="Cookie Preferences"
        description="Manage how we use cookies on our website"
        showStudentCounter={false}
      />
      
      <section className="py-16 md:py-24">
        <div className="container max-w-2xl">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Essential Cookies</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Required for the website to function. Cannot be disabled.
                  </p>
                </div>
                <Switch checked={true} disabled />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Analytics Cookies</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Help us understand how visitors interact with our website.
                  </p>
                </div>
                <Switch
                  checked={preferences.analytics}
                  onCheckedChange={(checked) => 
                    setPreferences((prev) => ({ ...prev, analytics: checked }))
                  }
                />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Marketing Cookies</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Used to deliver personalized advertisements.
                  </p>
                </div>
                <Switch
                  checked={preferences.marketing}
                  onCheckedChange={(checked) => 
                    setPreferences((prev) => ({ ...prev, marketing: checked }))
                  }
                />
              </CardContent>
            </Card>
            
            <Button onClick={handleSave} className="w-full">
              Save Preferences
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CookiePreferences;
