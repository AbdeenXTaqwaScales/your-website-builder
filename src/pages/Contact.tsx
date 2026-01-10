import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast({ title: "Message sent!", description: "We'll get back to you soon." });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <Layout>
      <PageHero
        title="Contact Us"
        description="Have questions? We'd love to hear from you"
        showStudentCounter={false}
      />
      
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-2xl font-bold mb-4">Get in Touch</h2>
                <p className="text-muted-foreground">
                  Whether you have questions about our programs, need assistance, or want to 
                  explore partnership opportunities, we're here to help.
                </p>
              </div>
              
              <div className="space-y-4">
                <Card>
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">admin@abdeenacademy.com</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-sm text-muted-foreground">Netherlands (Online Academy)</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help?" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Your message..." rows={5} required />
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
