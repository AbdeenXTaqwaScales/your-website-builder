import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/PageHero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, BookOpen, Settings } from "lucide-react";

const Profile = () => {
  return (
    <Layout>
      <PageHero
        title="My Profile"
        description="Manage your account and track your progress"
        showStudentCounter={false}
      />
      
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Account</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Manage your personal information and preferences.
                </p>
                <Button variant="outline" className="w-full">Edit Profile</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>My Courses</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  View your enrolled programs and progress.
                </p>
                <Button variant="outline" className="w-full">View Courses</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Settings className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Customize notifications and account settings.
                </p>
                <Button variant="outline" className="w-full">Open Settings</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Profile;
