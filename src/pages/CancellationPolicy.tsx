import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/sections/PageHero";

const CancellationPolicy = () => {
  return (
    <Layout>
      <PageHero
        title="Cancellation & Commitment Policy"
        description="Important information about course subscriptions and cancellations."
        showStudentCounter={false}
      />

      <section className="py-16 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-muted-foreground mb-8">
              This policy explains the conditions that apply to course subscriptions at Abdeens Academy.
            </p>

            <h2 className="text-2xl font-display font-semibold text-foreground mt-8 mb-4">
              Course Subscriptions (One-Year Commitment – No Cancellation)
            </h2>
            <p className="text-muted-foreground mb-4">
              When you enroll in a course subscription, you are entering into a minimum one-year commitment. During this
              period:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
              <li>Cancellations are not permitted once the subscription has been purchased.</li>
              <li>
                You will receive access to classes based on the subscription duration and schedule selected at
                enrollment.
              </li>
              <li>
                Your payment details will be stored securely, and payments will be charged automatically for each
                billing cycle, unless paid in full upfront.
              </li>
              <li>
                Subscriptions may auto-renew after the initial one-year term unless canceled before the renewal date.
              </li>
              <li>
                Changes or cancellations are only possible after the initial one-year commitment has been completed.
              </li>
            </ul>

            <h2 className="text-2xl font-display font-semibold text-foreground mt-8 mb-4">Exceptional Circumstances</h2>
            <p className="text-muted-foreground mb-4">
              We understand that life may present serious and unforeseen challenges. Cancellation requests will only be
              considered in exceptional cases, such as:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-1">
              <li>Major medical emergencies</li>
              <li>Severe family circumstances</li>
              <li>Life-changing events (e.g., relocation under duress)</li>
            </ul>

            <h2 className="text-2xl font-display font-semibold text-foreground mt-8 mb-4">
              How to Request a Cancellation
            </h2>
            <p className="text-muted-foreground mb-2">To request a cancellation under exceptional circumstances:</p>
            <ol className="list-decimal list-inside text-muted-foreground mb-6 space-y-1">
              <li>Contact Abdeens Academy in writing via email at info@abdeensacademy.com</li>
              <li>Clearly explain the situation and provide any relevant documentation if requested.</li>
              <li>
                Wait for written confirmation from the Abdeens Academy team. Approval is not automatic and will be
                granted at the team's discretion.
              </li>
            </ol>

            <h2 className="text-2xl font-display font-semibold text-foreground mt-8 mb-4">Important Notes</h2>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
              <li>
                Verbal notices, silent withdrawals, or ceasing payment without contact will not be considered valid
                forms of cancellation.
              </li>
              <li>
                Unless a cancellation is approved in writing, the student remains financially responsible for completing
                the full 12-month term.
              </li>
              <li>
                Failure to make timely payments may result in restricted access to course materials, but does not
                release the student from payment obligations.
              </li>
            </ul>

            <div className="bg-secondary/50 p-6 rounded-lg">
              <p className="text-muted-foreground">
                If you have any questions about our cancellation policy, please contact us at{" "}
                <a href="mailto:info@abdeensacademy.com" className="text-primary hover:underline">
                  info@abdeensacademy.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CancellationPolicy;
