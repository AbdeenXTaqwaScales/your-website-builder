import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/sections/PageHero";

const CancellationPolicy = () => {
  return (
    <Layout>
      <PageHero title="Cancellation Policy" description="Terms for course subscriptions" />
      
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <div className="prose prose-lg mx-auto">
            <p className="text-muted-foreground text-lg leading-relaxed">
              This policy explains the conditions that apply to course subscriptions at Abdeens Academy.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Course Subscriptions (One-Year Commitment – No Cancellation)</h2>
            <p className="text-muted-foreground leading-relaxed">
              When you enroll in a course subscription, you are entering into a minimum one-year commitment. During this period:
            </p>
            <ul className="space-y-2 text-muted-foreground mt-4">
              <li className="flex items-start gap-2"><span className="text-primary">•</span>Cancellations are not permitted once the subscription has been purchased.</li>
              <li className="flex items-start gap-2"><span className="text-primary">•</span>You will receive access to classes based on the subscription duration and schedule selected at enrollment.</li>
              <li className="flex items-start gap-2"><span className="text-primary">•</span>Your payment details will be stored securely, and payments will be charged automatically for each billing cycle, unless paid in full upfront.</li>
              <li className="flex items-start gap-2"><span className="text-primary">•</span>Subscriptions may auto-renew after the initial one-year term unless canceled before the renewal date.</li>
              <li className="flex items-start gap-2"><span className="text-primary">•</span>Changes or cancellations are only possible after the initial one-year commitment has been completed.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Exceptional Circumstances</h2>
            <p className="text-muted-foreground leading-relaxed">
              We understand that life may present serious and unforeseen challenges. Cancellation requests will only be considered in exceptional cases, such as:
            </p>
            <ul className="space-y-2 text-muted-foreground mt-4">
              <li className="flex items-start gap-2"><span className="text-primary">•</span>Major medical emergencies</li>
              <li className="flex items-start gap-2"><span className="text-primary">•</span>Severe family circumstances</li>
              <li className="flex items-start gap-2"><span className="text-primary">•</span>Life-changing events (e.g., relocation under duress)</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">How to Request a Cancellation</h2>
            <p className="text-muted-foreground leading-relaxed">To request a cancellation under exceptional circumstances:</p>
            <ul className="space-y-2 text-muted-foreground mt-4">
              <li className="flex items-start gap-2"><span className="text-primary">1.</span>Contact Abdeens Academy in writing via email at info@abdeensacademy.com</li>
              <li className="flex items-start gap-2"><span className="text-primary">2.</span>Clearly explain the situation and provide any relevant documentation if requested.</li>
              <li className="flex items-start gap-2"><span className="text-primary">3.</span>Wait for written confirmation from the Abdeens Academy team. Approval is not automatic and will be granted at the team's discretion.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Important Notes</h2>
            <ul className="space-y-2 text-muted-foreground mt-4">
              <li className="flex items-start gap-2"><span className="text-primary">•</span>Verbal notices, silent withdrawals, or ceasing payment without contact will not be considered valid forms of cancellation.</li>
              <li className="flex items-start gap-2"><span className="text-primary">•</span>Unless a cancellation is approved in writing, the student remains financially responsible for completing the full 12-month term.</li>
              <li className="flex items-start gap-2"><span className="text-primary">•</span>Failure to make timely payments may result in restricted access to course materials, but does not release the student from payment obligations.</li>
            </ul>

            <div className="mt-12 p-6 bg-secondary/50 rounded-xl">
              <p className="text-muted-foreground">
                If you have any questions about our cancellation policy, please contact us at{" "}
                <a href="mailto:info@abdeensacademy.com" className="text-primary hover:underline">info@abdeensacademy.com</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CancellationPolicy;
