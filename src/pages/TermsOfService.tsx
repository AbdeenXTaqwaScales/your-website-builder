import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/sections/PageHero";

const TermsOfService = () => {
  return (
    <Layout>
      <PageHero title="Terms of Service" description="Please read these terms carefully before enrolling" />
      
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <div className="prose prose-lg mx-auto text-foreground">
            <p className="text-muted-foreground leading-relaxed">
              Welcome to Abdeens Academy. These Terms of Service ("Terms") govern your enrollment, participation, and access to any of our courses, programs, platforms, and services. By registering for a course or engaging with Abdeens Academy, you agree to be bound by these Terms in full.
            </p>

            <p className="text-muted-foreground font-medium">
              Please read them carefully before enrolling.
            </p>

            <h2 className="text-foreground">1. Eligibility</h2>
            <p className="text-muted-foreground">
              Abdeens Academy welcomes students of all ages, including young children.
            </p>
            <ul className="text-muted-foreground">
              <li>For students under the age of 18, enrollment requires explicit parental or guardian consent.</li>
              <li>Parents or guardians must agree to actively support and supervise younger students throughout the course.</li>
              <li>By enrolling a minor, the parent or guardian accepts full responsibility for complying with these Terms on behalf of the child.</li>
              <li>All other Terms, including commitment, payment, and conduct policies, apply equally regardless of age.</li>
            </ul>

            <h2 className="text-foreground">2. Course Enrollment & Commitment</h2>
            <p className="text-muted-foreground">
              By enrolling in a course at Abdeens Academy, you agree to a minimum commitment of twelve (12) months. This structure is designed to support consistency and depth in learning. Upon registration, your spot is reserved for the entire program, and resources are allocated accordingly.
            </p>

            <h2 className="text-foreground">3. Payment Terms</h2>
            <ul className="text-muted-foreground">
              <li>Course fees are billed on a monthly recurring basis for 12 months.</li>
              <li>Payments are processed automatically using the billing details provided at registration.</li>
              <li>You are responsible for ensuring your payment method remains valid and up to date.</li>
            </ul>
            <p className="text-muted-foreground">
              Failure to complete payment does not cancel your enrollment or obligation. You remain financially responsible for the full term.
            </p>

            <h2 className="text-foreground">4. Cancellation & Refund Policy</h2>
            <p className="text-muted-foreground">
              <strong>No Refunds:</strong> All payments are non-refundable, including registration fees and monthly charges, regardless of attendance or participation.
            </p>
            <p className="text-muted-foreground">
              <strong>Cancellations:</strong> Cancellation before the one-year term ends will only be considered in exceptional circumstances, such as:
            </p>
            <ul className="text-muted-foreground">
              <li>Major medical emergencies</li>
              <li>Family crises</li>
              <li>Severe, unforeseen life changes</li>
            </ul>
            <p className="text-muted-foreground">To request cancellation:</p>
            <ul className="text-muted-foreground">
              <li>Contact the Abdeens Academy team in writing with full details.</li>
              <li>Wait for written approval. Approval is at the sole discretion of the Academy.</li>
            </ul>
            <p className="text-muted-foreground">
              Verbal requests or silent withdrawal do not count as official cancellations. Unapproved cancellations will not release the student from financial obligation.
            </p>

            <h2 className="text-foreground">5. Code of Conduct</h2>
            <p className="text-muted-foreground">All students must:</p>
            <ul className="text-muted-foreground">
              <li>Treat instructors and fellow participants with respect and professionalism.</li>
              <li>Maintain Islamic adab (etiquette) in communication, behavior, and online interaction.</li>
              <li>Avoid any disruptive, offensive, or inappropriate behavior in classes or groups.</li>
            </ul>
            <p className="text-muted-foreground">
              Violation of the Code of Conduct may result in removal from the course without refund and without release from the financial commitment.
            </p>

            <h2 className="text-foreground">6. Attendance & Participation</h2>
            <p className="text-muted-foreground">
              Students are expected to attend classes regularly and participate fully. While we understand occasional absences, long-term non-attendance without communication may result in administrative review.
            </p>
            <p className="text-muted-foreground">
              <strong>Note:</strong> Lack of participation does not exempt you from payment.
            </p>

            <h2 className="text-foreground">7. Intellectual Property</h2>
            <p className="text-muted-foreground">
              All course content—including videos, PDFs, recordings, worksheets, and live sessions—is the intellectual property of Abdeens Academy. You may not share, distribute, record, or reproduce any material without explicit written permission.
            </p>

            <h2 className="text-foreground">8. Privacy</h2>
            <p className="text-muted-foreground">
              Your personal data and contact information are handled with confidentiality and used only for course-related communication, billing, and administrative purposes. We do not sell or share your data with third parties.
            </p>

            <h2 className="text-foreground">9. Limitation of Liability</h2>
            <p className="text-muted-foreground">Abdeens Academy is not liable for:</p>
            <ul className="text-muted-foreground">
              <li>Personal outcomes or results from the course</li>
              <li>Missed sessions or technical issues on the student's end</li>
              <li>Misuse or misinterpretation of educational content</li>
            </ul>
            <p className="text-muted-foreground">
              All educational services are provided in good faith and to the best of our ability.
            </p>

            <h2 className="text-foreground">10. Agreement and Acceptance</h2>
            <p className="text-muted-foreground">
              By registering for any Abdeens Academy course, you confirm that you have read, understood, and agree to all the above Terms of Service. You acknowledge the one-year commitment, non-refundable payment policy, and your responsibility to uphold respectful behavior and full engagement.
            </p>

            <div className="bg-muted/50 p-6 rounded-xl mt-8">
              <p className="text-muted-foreground m-0">
                If you have any questions, please contact our team at <a href="mailto:info@abdeensacademy.com" className="text-primary hover:underline">info@abdeensacademy.com</a> before enrollment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TermsOfService;
