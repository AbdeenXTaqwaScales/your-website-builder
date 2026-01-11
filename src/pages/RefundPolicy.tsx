import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/sections/PageHero";

const RefundPolicy = () => {
  return (
    <Layout>
      <PageHero
        title="Refund & Cancellation Policy"
        description="Please read our refund and cancellation terms carefully before enrolling."
        showStudentCounter={false}
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-muted-foreground mb-8">
              Our programs are carefully designed to provide long-term, consistent learning and spiritual development.
              To ensure the integrity and sustainability of our offerings, we require all students to agree to the
              following Refund & Cancellation Policy upon enrollment.
            </p>

            <h2 className="text-2xl font-display font-semibold text-foreground mt-8 mb-4">1. One-Year Commitment</h2>
            <p className="text-muted-foreground mb-4">
              By registering for any course at Abdeens Academy, you agree to a minimum commitment of one full year. This
              structure supports the educational journey of each student and ensures that our instructors and team can
              plan effectively for the long term.
            </p>
            <p className="text-muted-foreground mb-6">
              Enrollment includes a 12-month automatic monthly billing cycle, beginning from the date of registration.
              This commitment is binding and expected to be fulfilled in full.
            </p>

            <h2 className="text-2xl font-display font-semibold text-foreground mt-8 mb-4">2. No Refund Policy</h2>
            <p className="text-muted-foreground mb-4">
              All payments made to Abdeens Academy—whether as a registration fee or part of the monthly billing
              cycle—are non-refundable.
            </p>
            <p className="text-muted-foreground mb-2">This includes, but is not limited to, refunds due to:</p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-1">
              <li>Missed classes</li>
              <li>Changes in personal schedule</li>
              <li>Relocation or travel</li>
              <li>Illness or emergencies</li>
              <li>Dissatisfaction with content or teaching style</li>
              <li>Voluntary withdrawal before the end of the program</li>
            </ul>
            <p className="text-muted-foreground mb-6">
              We do not offer refunds for any reason once payment has been processed. This policy ensures that we can
              continue offering high-quality instruction and resources without disruption.
            </p>

            <h2 className="text-2xl font-display font-semibold text-foreground mt-8 mb-4">
              3. Exceptional Circumstances Cancellation Policy
            </h2>
            <p className="text-muted-foreground mb-4">
              We understand that life may present serious and unforeseen challenges. Therefore, cancellation before the
              one-year term ends will only be considered in exceptional cases, such as:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-1">
              <li>Major medical emergencies</li>
              <li>Severe family circumstances</li>
              <li>Life-changing events (e.g., relocation under duress)</li>
            </ul>
            <p className="text-muted-foreground mb-2">
              To request a cancellation under exceptional circumstances, students must:
            </p>
            <ol className="list-decimal list-inside text-muted-foreground mb-4 space-y-1">
              <li>Contact Abdeens Academy in writing via email or official messaging.</li>
              <li>Clearly explain the situation and provide any relevant documentation if requested.</li>
              <li>
                Wait for written confirmation from the Abdeens Academy team. Approval is not automatic and will be
                granted at the team's discretion.
              </li>
            </ol>
            <p className="text-muted-foreground mb-6">
              Verbal notices, silent withdrawals, or ceasing payment without contact will not be considered valid forms
              of cancellation and may result in administrative action.
            </p>

            <h2 className="text-2xl font-display font-semibold text-foreground mt-8 mb-4">
              4. Financial Responsibility
            </h2>
            <p className="text-muted-foreground mb-6">
              Unless a cancellation is approved in writing by Abdeens Academy, the student remains financially
              responsible for completing the full 12-month term. Failure to make timely payments may result in
              restricted access to course materials, but does not release the student from payment obligations.
            </p>

            <h2 className="text-2xl font-display font-semibold text-foreground mt-8 mb-4">5. Agreement</h2>
            <p className="text-muted-foreground mb-2">By enrolling in any course at Abdeens Academy, I confirm that:</p>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-1">
              <li>I understand and accept the one-year financial commitment.</li>
              <li>I agree that payments are non-refundable.</li>
              <li>
                I understand that cancellation is only possible under exceptional circumstances, with written approval
                from Abdeens Academy's team.
              </li>
              <li>
                I agree to contact the team directly if I face any issues and will not dispute charges without
                attempting resolution.
              </li>
            </ul>

            <div className="bg-secondary/50 p-6 rounded-lg mt-8">
              <p className="text-muted-foreground">
                We appreciate your trust in Abdeens Academy. Our policies are in place to protect the learning
                environment, respect our instructors' efforts, and ensure fairness to all students.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RefundPolicy;
