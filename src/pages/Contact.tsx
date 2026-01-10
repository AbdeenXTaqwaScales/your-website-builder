import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/sections/PageHero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, ExternalLink } from "lucide-react";

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:admin@abdeenacademy.com";
  };

  return (
    <Layout>
      <PageHero title="Contact Us" description="Have questions? We're here to help. Reach out through email." />

      {/* Contact Methods */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center">
              {/* Email */}
              <Card
                className="group hover:shadow-lg transition-shadow cursor-pointer max-w-md w-full"
                onClick={handleEmailClick}
              >
                <CardContent className="pt-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Mail className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Email</h3>
                  <p className="text-muted-foreground text-sm mb-4">admin@abdeenacademy.com</p>
                  <Button variant="outline" size="sm" className="gap-2">
                    Send Email
                    <ExternalLink className="w-3 h-3" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Location Info */}
            <Card className="mt-12">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  About Our Operations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Abdeens Academy is a fully online platform, allowing us to serve students worldwide. Our team operates
                  across multiple time zones to ensure you receive support when you need it. We typically respond within
                  24 hours on business days.
                </p>
                <div className="mt-6 grid md:grid-cols-2 gap-4">
                  <div className="bg-secondary/30 p-4 rounded-lg">
                    <h4 className="font-semibold mb-1">Support Hours</h4>
                    <p className="text-sm text-muted-foreground">Monday - Friday: 9am - 9pm (GMT)</p>
                    <p className="text-sm text-muted-foreground">Saturday - Sunday: 10am - 6pm (GMT)</p>
                  </div>
                  <div className="bg-secondary/30 p-4 rounded-lg">
                    <h4 className="font-semibold mb-1">Response Time</h4>
                    <p className="text-sm text-muted-foreground">Email: Within 24 hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
