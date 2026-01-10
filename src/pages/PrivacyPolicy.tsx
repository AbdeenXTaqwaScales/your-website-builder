import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/PageHero";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <PageHero
        title="Privacy Policy"
        description="How we protect and use your information"
        showStudentCounter={false}
      />
      
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <div className="prose prose-lg mx-auto">
            <h2>Information We Collect</h2>
            <p>
              We collect information you provide directly, such as your name, email 
              address, and payment information when you enroll in our programs.
            </p>
            
            <h2>How We Use Your Information</h2>
            <p>
              Your information is used to provide our educational services, process 
              payments, communicate with you about your enrollment, and improve our 
              services.
            </p>
            
            <h2>Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal 
              information from unauthorized access, alteration, or disclosure.
            </p>
            
            <h2>Third-Party Services</h2>
            <p>
              We may use third-party services for payment processing and analytics. 
              These services have their own privacy policies governing the use of 
              your information.
            </p>
            
            <h2>Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal 
              information. Contact us at admin@abdeenacademy.com to exercise these 
              rights.
            </p>
            
            <h2>Updates to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify 
              you of any significant changes via email or through our website.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
