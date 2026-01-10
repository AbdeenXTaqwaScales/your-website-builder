import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { Mail, Lock, User, Loader2, CheckCircle } from "lucide-react";
import { z } from "zod";

const emailSchema = z.string().email("Please enter a valid email address");
const passwordSchema = z.string().min(6, "Password must be at least 6 characters");

const Auth = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [isResetMode, setIsResetMode] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [isResetSubmitting, setIsResetSubmitting] = useState(false);
  const [showVerificationMessage, setShowVerificationMessage] = useState(false);
  const [verificationEmail, setVerificationEmail] = useState("");
  const [isResending, setIsResending] = useState(false);
  const [resendCooldown, setResendCooldown] = useState(0);
  
  // Form state
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpName, setSignUpName] = useState("");
  const [keepLoggedIn, setKeepLoggedIn] = useState(true);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateField = (field: string, value: string, schema: z.ZodString) => {
    const result = schema.safeParse(value);
    if (!result.success) {
      setErrors(prev => ({ ...prev, [field]: result.error.errors[0].message }));
      return false;
    }
    setErrors(prev => { const { [field]: _, ...rest } = prev; return rest; });
    return true;
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    const emailValid = validateField("signInEmail", signInEmail, emailSchema);
    const passwordValid = validateField("signInPassword", signInPassword, passwordSchema);
    
    if (!emailValid || !passwordValid) return;

    setIsSubmitting(true);
    // Simulate sign in - replace with actual auth
    setTimeout(() => {
      toast({
        title: "Sign in",
        description: "Authentication will be enabled when Lovable Cloud is connected.",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    const emailValid = validateField("signUpEmail", signUpEmail, emailSchema);
    const passwordValid = validateField("signUpPassword", signUpPassword, passwordSchema);
    
    if (!emailValid || !passwordValid) return;

    setIsSubmitting(true);
    // Simulate sign up - replace with actual auth
    setTimeout(() => {
      setVerificationEmail(signUpEmail);
      setShowVerificationMessage(true);
      setIsSubmitting(false);
    }, 1000);
  };

  const handleGoogleSignIn = async () => {
    setIsGoogleLoading(true);
    setTimeout(() => {
      toast({
        title: "Google Sign In",
        description: "Google authentication will be enabled when Lovable Cloud is connected.",
      });
      setIsGoogleLoading(false);
    }, 1000);
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    const emailValid = validateField("resetEmail", resetEmail, emailSchema);
    if (!emailValid) return;

    setIsResetSubmitting(true);
    setTimeout(() => {
      toast({
        title: "Check your email",
        description: "We've sent you a password reset link.",
      });
      setIsResetMode(false);
      setResetEmail("");
      setIsResetSubmitting(false);
    }, 1000);
  };

  const handleResendVerification = async () => {
    if (resendCooldown > 0) return;
    
    setIsResending(true);
    setTimeout(() => {
      toast({
        title: "Email sent!",
        description: "We've sent another verification email.",
      });
      setResendCooldown(60);
      const interval = setInterval(() => {
        setResendCooldown((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      setIsResending(false);
    }, 1000);
  };

  if (showVerificationMessage) {
    return (
      <Layout>
        <div className="min-h-[80vh] flex items-center justify-center py-12">
          <div className="container max-w-md">
            <Card>
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Check Your Email</CardTitle>
                <CardDescription>
                  We've sent a verification link to:
                </CardDescription>
                <p className="font-medium text-foreground">{verificationEmail}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-secondary/50 rounded-lg">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      Click the link in the email to verify your account and complete your registration.
                    </p>
                  </div>
                </div>
                
                <p className="text-sm text-center text-muted-foreground">
                  Didn't receive the email? Check your spam folder.
                </p>
                
                <Button 
                  variant="outline" 
                  className="w-full" 
                  onClick={handleResendVerification}
                  disabled={isResending || resendCooldown > 0}
                >
                  {isResending ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : resendCooldown > 0 ? (
                    `Resend in ${resendCooldown}s`
                  ) : (
                    "Resend Verification Email"
                  )}
                </Button>
                
                <Button 
                  variant="ghost" 
                  className="w-full" 
                  onClick={() => setShowVerificationMessage(false)}
                >
                  Back to Login
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-[80vh] flex items-center justify-center py-12">
        <div className="container max-w-md">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Welcome to Abdeens Academy</CardTitle>
              <CardDescription>
                Sign in to access your programs and track your progress
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isResetMode ? (
                <div className="space-y-4">
                  <form onSubmit={handleResetPassword} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="reset-email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="reset-email"
                          type="email"
                          placeholder="your@email.com"
                          className="pl-10"
                          value={resetEmail}
                          onChange={(e) => setResetEmail(e.target.value)}
                        />
                      </div>
                      {errors.resetEmail && (
                        <p className="text-sm text-destructive">{errors.resetEmail}</p>
                      )}
                    </div>
                    
                    <Button type="submit" className="w-full" disabled={isResetSubmitting}>
                      {isResetSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Sending reset link...
                        </>
                      ) : (
                        "Send Reset Link"
                      )}
                    </Button>
                  </form>
                  
                  <button
                    type="button"
                    onClick={() => setIsResetMode(false)}
                    className="w-full text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Back to login
                  </button>
                </div>
              ) : (
                <>
                  {/* Google Sign In Button */}
                  <Button 
                    variant="outline" 
                    className="w-full mb-4" 
                    onClick={handleGoogleSignIn}
                    disabled={isGoogleLoading}
                  >
                    {isGoogleLoading ? (
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    ) : (
                      <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                    )}
                    Continue with Google
                  </Button>

                  <div className="relative my-6">
                    <Separator />
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-2 text-xs text-muted-foreground">
                      or continue with email
                    </span>
                  </div>

                  <Tabs defaultValue="signin" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-6">
                      <TabsTrigger value="signin">Log In</TabsTrigger>
                      <TabsTrigger value="signup">Sign Up</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="signin">
                      <form onSubmit={handleSignIn} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input
                              id="email"
                              type="email"
                              placeholder="your@email.com"
                              className="pl-10"
                              value={signInEmail}
                              onChange={(e) => setSignInEmail(e.target.value)}
                            />
                          </div>
                          {errors.signInEmail && (
                            <p className="text-sm text-destructive">{errors.signInEmail}</p>
                          )}
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="password">Password</Label>
                          <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input
                              id="password"
                              type="password"
                              className="pl-10"
                              value={signInPassword}
                              onChange={(e) => setSignInPassword(e.target.value)}
                            />
                          </div>
                          {errors.signInPassword && (
                            <p className="text-sm text-destructive">{errors.signInPassword}</p>
                          )}
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="keepLoggedIn"
                            checked={keepLoggedIn}
                            onCheckedChange={(checked) => setKeepLoggedIn(checked === true)}
                          />
                          <Label htmlFor="keepLoggedIn" className="text-sm text-muted-foreground">
                            Keep me logged in
                          </Label>
                        </div>

                        <Button type="submit" className="w-full" disabled={isSubmitting}>
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                              Logging in...
                            </>
                          ) : (
                            "Log In"
                          )}
                        </Button>

                        <button
                          type="button"
                          onClick={() => setIsResetMode(true)}
                          className="w-full text-sm text-muted-foreground hover:text-primary transition-colors mt-2"
                        >
                          Forgot your password?
                        </button>
                      </form>
                    </TabsContent>
                    
                    <TabsContent value="signup">
                      <form onSubmit={handleSignUp} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input
                              id="name"
                              placeholder="Your name"
                              className="pl-10"
                              value={signUpName}
                              onChange={(e) => setSignUpName(e.target.value)}
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="signup-email">Email</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input
                              id="signup-email"
                              type="email"
                              placeholder="your@email.com"
                              className="pl-10"
                              value={signUpEmail}
                              onChange={(e) => setSignUpEmail(e.target.value)}
                            />
                          </div>
                          {errors.signUpEmail && (
                            <p className="text-sm text-destructive">{errors.signUpEmail}</p>
                          )}
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="signup-password">Password</Label>
                          <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input
                              id="signup-password"
                              type="password"
                              className="pl-10"
                              value={signUpPassword}
                              onChange={(e) => setSignUpPassword(e.target.value)}
                            />
                          </div>
                          {errors.signUpPassword && (
                            <p className="text-sm text-destructive">{errors.signUpPassword}</p>
                          )}
                        </div>
                        
                        <Button type="submit" className="w-full" disabled={isSubmitting}>
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                              Creating account...
                            </>
                          ) : (
                            "Create Account"
                          )}
                        </Button>
                      </form>
                    </TabsContent>
                  </Tabs>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Auth;
