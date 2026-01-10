import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/PageHero";

const RefundPolicy = () => {
  return (
    <Layout>
      <PageHero
        title="Refund Policy"
        description="Our commitment to your satisfaction"
        showStudentCounter={false}
      />
      
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <div className="prose prose-lg mx-auto">
            <h2>Overview</h2>
            <p>
              At Abdeens Academy, we are committed to providing quality education. 
              If you are not satisfied with our services, we offer refunds under the 
              following conditions.
            </p>
            
            <h2>Eligibility</h2>
            <p>
              Refund requests must be made within 14 days of enrollment. After this 
              period, refunds are evaluated on a case-by-case basis.
            </p>
            
            <h2>Process</h2>
            <p>
              To request a refund, please contact our support team at 
              admin@abdeenacademy.com with your enrollment details and reason for 
              the refund request.
            </p>
            
            <h2>Timeline</h2>
            <p>
              Approved refunds are processed within 5-10 business days. The refund 
              will be credited to the original payment method.
            </p>
            
            <h2>Exceptions</h2>
            <p>
              Digital products and completed courses are generally non-refundable. 
              Special circumstances may be considered at our discretion.
            </p>
            
            <h2>Contact</h2>
            <p>
              For any questions about our refund policy, please reach out to us at 
              admin@abdeenacademy.com.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RefundPolicy;
