import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/sections/PageHero";

const TermsOfService = () => {
  return (
    <Layout>
      <PageHero
        title="Terms of Service"
        description="Please read these terms carefully before enrolling in our programs."
        showStudentCounter={false}
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-muted-foreground mb-8">
              Welcome to Abdeens Academy. These Terms of Service ("Terms") govern your enrollment, participation, and
              access to any of our courses, programs, platforms, and services. By registering for a course or engaging
              with Abdeens Academy, you agree to be bound by these Terms in full.
            </p>

            <p className="text-muted-foreground mb-8 font-medium">Please read them carefully before enrolling.</p>

            <h2 className="text-2xl font-display font-semibold text-foreground mt-8 mb-4">1. Eligibility</h2>
            <p className="text-muted-foreground mb-4">
              Abdeens Academy welcomes students of all ages, including young children.
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-1">
              <li>For students under the age of 18, enrollment requires explicit parental or guardian consent.</li>
              <li>
                Parents or guardians must agree to actively support and supervise younger students throughout the
                course.
              </li>
              <li>
                By enrolling a minor, the parent or guardian accepts full responsibility for complying with these Terms
                on behalf of the child.
              </li>
              <li>
                All other Terms, including commitment, payment, and conduct policies, apply equally regardless of age.
              </li>
            </ul>

            <h2 className="text-2xl font-display font-semibold text-foreground mt-8 mb-4">
              2. Course Enrollment & Commitment
            </h2>
            <p className="text-muted-foreground mb-6">
              By enrolling in a course at Abdeens Academy, you agree to a minimum commitment of twelve (12) months. This
              structure is designed to support consistency and depth in learning. Upon registration, your spot is
              reserved for the entire program, and resources are allocated accordingly.
            </p>

            <h2 className="text-2xl font-display font-semibold text-foreground mt-8 mb-4">3. Payment Terms</h2>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-1">
              <li>Course fees are billed on a monthly recurring basis for 12 months.</li>
              <li>Payments are processed automatically using the billing details provided at registration.</li>
              <li>You are responsible for ensuring your payment method remains valid and up to date.</li>
            </ul>
            <p className="text-muted-foreground mb-6">
              Failure to complete payment does not cancel your enrollment or obligation. You remain financially
              responsible for the full term.
            </p>

            <h2 className="text-2xl font-display font-semibold text-foreground mt-8 mb-4">
              4. Cancellation & Refund Policy
            </h2>
            <p className="text-muted-foreground mb-4">
              <strong>No Refunds:</strong> All payments are non-refundable, including registration fees and monthly
              charges, regardless of attendance or participation.
            </p>
            <p className="text-muted-foreground mb-2">
              <strong>Cancellations:</strong> Cancellation before the one-year term ends will only be considered in
              exceptional circumstances, such as:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-1">
              <li>Major medical emergencies</li>
              <li>Family crises</li>
              <li>Severe, unforeseen life changes</li>
            </ul>
            <p className="text-muted-foreground mb-2">To request cancellation:</p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-1">
              <li>Contact the Abdeens Academy team in writing with full details.</li>
              <li>Wait for written approval. Approval is at the sole discretion of the Academy.</li>
            </ul>
            <p className="text-muted-foreground mb-6">
              Verbal requests or silent withdrawal do not count as official cancellations. Unapproved cancellations will
              not release the student from financial obligation.
            </p>

            <h2 className="text-2xl font-display font-semibold text-foreground mt-8 mb-4">5. Code of Conduct</h2>
            <p className="text-muted-foreground mb-2">All students must:</p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-1">
              <li>Treat instructors and fellow participants with respect and professionalism.</li>
              <li>Maintain Islamic adab (etiquette) in communication, behavior, and online interaction.</li>
              <li>Avoid any disruptive, offensive, or inappropriate behavior in classes or groups.</li>
            </ul>
            <p className="text-muted-foreground mb-6">
              Violation of the Code of Conduct may result in removal from the course without refund and without release
              from the financial commitment.
            </p>

            <h2 className="text-2xl font-display font-semibold text-foreground mt-8 mb-4">
              6. Attendance & Participation
            </h2>
            <p className="text-muted-foreground mb-4">
              Students are expected to attend classes regularly and participate fully. While we understand occasional
              absences, long-term non-attendance without communication may result in administrative review.
            </p>
            <p className="text-muted-foreground mb-6">
              <strong>Note:</strong> Lack of participation does not exempt you from payment.
            </p>

            <h2 className="text-2xl font-display font-semibold text-foreground mt-8 mb-4">7. Intellectual Property</h2>
            <p className="text-muted-foreground mb-6">
              All course content—including videos, PDFs, recordings, worksheets, and live sessions—is the intellectual
              property of Abdeens Academy. You may not share, distribute, record, or reproduce any material without
              explicit written permission.
            </p>

            <h2 className="text-2xl font-display font-semibold text-foreground mt-8 mb-4">8. Privacy</h2>
            <p className="text-muted-foreground mb-6">
              Your personal data and contact information are handled with confidentiality and used only for
              course-related communication, billing, and administrative purposes. We do not sell or share your data with
              third parties.
            </p>

            <h2 className="text-2xl font-display font-semibold text-foreground mt-8 mb-4">
              9. Limitation of Liability
            </h2>
            <p className="text-muted-foreground mb-2">Abdeens Academy is not liable for:</p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-1">
              <li>Personal outcomes or results from the course</li>
              <li>Missed sessions or technical issues on the student's end</li>
              <li>Misuse or misinterpretation of educational content</li>
            </ul>
            <p className="text-muted-foreground mb-6">
              All educational services are provided in good faith and to the best of our ability.
            </p>

            <h2 className="text-2xl font-display font-semibold text-foreground mt-8 mb-4">
              10. Agreement and Acceptance
            </h2>
            <p className="text-muted-foreground mb-6">
              By registering for any Abdeens Academy course, you confirm that you have read, understood, and agree to
              all the above Terms of Service. You acknowledge the one-year commitment, non-refundable payment policy,
              and your responsibility to uphold respectful behavior and full engagement.
            </p>

            <div className="bg-secondary/50 p-6 rounded-lg">
              <p className="text-muted-foreground">
                If you have any questions, please contact our team at{" "}
                <a href="mailto:info@abdeensacademy.com" className="text-primary hover:underline">
                  info@abdeensacademy.com
                </a>{" "}
                before enrollment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TermsOfService;
