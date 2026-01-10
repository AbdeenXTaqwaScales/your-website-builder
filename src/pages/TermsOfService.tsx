import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/PageHero";

const TermsOfService = () => {
  return (
    <Layout>
      <PageHero
        title="Terms of Service"
        description="Please read these terms carefully before using our services"
        showStudentCounter={false}
      />
      
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <div className="prose prose-lg mx-auto">
            <h2>Acceptance of Terms</h2>
            <p>
              By accessing and using Abdeens Academy's services, you agree to be 
              bound by these Terms of Service and all applicable laws and regulations.
            </p>
            
            <h2>Use of Services</h2>
            <p>
              Our services are intended for personal, non-commercial use. You agree 
              not to reproduce, distribute, or create derivative works from our 
              content without permission.
            </p>
            
            <h2>Account Responsibilities</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account 
              credentials and for all activities that occur under your account.
            </p>
            
            <h2>Payment Terms</h2>
            <p>
              Subscription fees are billed according to your chosen plan. You agree 
              to provide accurate payment information and authorize us to charge 
              your payment method.
            </p>
            
            <h2>Intellectual Property</h2>
            <p>
              All content, including but not limited to lessons, materials, and 
              recordings, is the property of Abdeens Academy and protected by 
              copyright laws.
            </p>
            
            <h2>Limitation of Liability</h2>
            <p>
              Abdeens Academy shall not be liable for any indirect, incidental, or 
              consequential damages arising from your use of our services.
            </p>
            
            <h2>Modifications</h2>
            <p>
              We reserve the right to modify these terms at any time. Continued use 
              of our services constitutes acceptance of any changes.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TermsOfService;
