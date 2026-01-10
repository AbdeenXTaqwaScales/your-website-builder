import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/PageHero";

const CancellationPolicy = () => {
  return (
    <Layout>
      <PageHero
        title="Cancellation Policy"
        description="Understand our cancellation terms and procedures"
        showStudentCounter={false}
      />
      
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <div className="prose prose-lg mx-auto">
            <h2>Subscription Cancellation</h2>
            <p>
              You may cancel your subscription at any time. Your access will continue 
              until the end of your current billing period.
            </p>
            
            <h2>How to Cancel</h2>
            <p>
              To cancel your subscription, please email us at admin@abdeenacademy.com 
              or use the cancellation option in your account settings.
            </p>
            
            <h2>Refunds on Cancellation</h2>
            <p>
              Cancellations made within the first 14 days of enrollment may be 
              eligible for a full refund. After this period, no refunds are provided 
              for partial billing periods.
            </p>
            
            <h2>Session Cancellation</h2>
            <p>
              Individual sessions should be cancelled at least 24 hours in advance. 
              Late cancellations may result in the session being marked as attended.
            </p>
            
            <h2>Rescheduling</h2>
            <p>
              Sessions can be rescheduled with at least 24 hours notice, subject to 
              teacher availability. We aim to accommodate your scheduling needs.
            </p>
            
            <h2>Academy-Initiated Cancellations</h2>
            <p>
              If we need to cancel a session, you will be notified as soon as 
              possible and offered a rescheduled session or credit.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CancellationPolicy;
