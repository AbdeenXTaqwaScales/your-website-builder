import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { useAuth } from "@/hooks/useAuth";
import { useUserPurchases } from "@/hooks/useUserPurchases";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { User, ShoppingBag, Calendar, DollarSign, Loader2, BookOpen, GraduationCap } from "lucide-react";
import { format } from "date-fns";

const Profile = () => {
  const navigate = useNavigate();
  const { user, loading: authLoading, signOut } = useAuth();
  const { data: purchases, isLoading: purchasesLoading } = useUserPurchases();

  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/auth");
    }
  }, [user, authLoading, navigate]);

  if (authLoading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </Layout>
    );
  }

  if (!user) {
    return null;
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "cancelled":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const isEbook = (program: string) => {
    const lower = program.toLowerCase();
    return (
      lower.includes("ebook") ||
      lower.includes("e-book") ||
      lower.includes("book") ||
      lower.includes("pdf") ||
      lower.includes("digital")
    );
  };

  const getProgramLabel = (program: string) => {
    // Check for known program types first
    const labels: Record<string, string> = {
      hifdh: "Hifdh Program",
      arabic: "Arabic Program",
      tafsir: "Tafsir Program",
      "full-package": "Full Package",
    };

    if (labels[program]) {
      return labels[program];
    }

    // For ebooks and other items, format the title nicely
    // Remove common prefixes and clean up the name
    let cleanName = program
      .replace(/^ebook[:\-\s]*/i, "")
      .replace(/^e-book[:\-\s]*/i, "")
      .replace(/^book[:\-\s]*/i, "")
      .trim();

    // If it's an ebook, add prefix
    if (isEbook(program)) {
      return cleanName || "eBook";
    }

    return program;
  };

  const getPurchaseIcon = (program: string) => {
    if (isEbook(program)) {
      return <BookOpen className="h-4 w-4 text-primary" />;
    }
    return <GraduationCap className="h-4 w-4 text-primary" />;
  };

  const getPurchaseType = (program: string) => {
    if (isEbook(program)) {
      return "eBook";
    }
    return "Program";
  };

  return (
    <Layout>
      <div className="min-h-screen bg-background py-8 sm:py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Profile Header */}
          <Card className="mb-6 sm:mb-8">
            <CardHeader className="pb-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl sm:text-2xl mb-1">My Profile</CardTitle>
                  <p className="text-muted-foreground text-sm sm:text-base break-all">{user.email}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Member since {user.created_at ? format(new Date(user.created_at), "MMMM yyyy") : "N/A"}
                  </p>
                </div>
                <Button variant="outline" size="sm" onClick={() => signOut()} className="w-full sm:w-auto">
                  Sign Out
                </Button>
              </div>
            </CardHeader>
          </Card>

          {/* Purchase History */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <ShoppingBag className="h-5 w-5" />
                Purchase History
              </CardTitle>
            </CardHeader>
            <CardContent>
              {purchasesLoading ? (
                <div className="flex items-center justify-center py-8">
                  <Loader2 className="h-6 w-6 animate-spin text-primary" />
                </div>
              ) : purchases && purchases.length > 0 ? (
                <div className="space-y-4">
                  {purchases.map((purchase) => (
                    <div
                      key={purchase.id}
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg border bg-card gap-3 sm:gap-4"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <div className="flex items-center gap-2">
                            {getPurchaseIcon(purchase.program)}
                            <h4 className="font-medium text-sm sm:text-base">{getProgramLabel(purchase.program)}</h4>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {getPurchaseType(purchase.program)}
                          </Badge>
                          <Badge className={getStatusColor(purchase.status)} variant="secondary">
                            {purchase.status}
                          </Badge>
                        </div>
                        <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5" />
                            {format(new Date(purchase.created_at), "MMM d, yyyy")}
                          </span>
                          <span className="flex items-center gap-1">
                            <DollarSign className="h-3.5 w-3.5" />€{purchase.amount}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 sm:py-12">
                  <ShoppingBag className="h-10 w-10 sm:h-12 sm:w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="font-medium text-base sm:text-lg mb-2">No purchases yet</h3>
                  <p className="text-muted-foreground text-sm mb-4">Start your Quran learning journey today!</p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button asChild>
                      <a href="/start">Browse Programs</a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href="/library">Browse eBooks</a>
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
