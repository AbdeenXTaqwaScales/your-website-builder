import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/sections/PageHero";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <PageHero
        title="Privacy Policy"
        description="How we collect, use, and protect your personal information."
        showStudentCounter={false}
      />

      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-sm text-muted-foreground mb-8">Last updated: October 23, 2025</p>

            <p className="text-muted-foreground mb-6">
              Abdeens Academy operates this website, including all related information, content, features, tools,
              products and services, in order to provide you, the customer, with a curated learning experience (the
              "Services"). This Privacy Policy describes how we collect, use, and disclose your personal information
              when you visit, use, or make a purchase or other transaction using the Services or otherwise communicate
              with us.
            </p>

            <p className="text-muted-foreground mb-8">
              Please read this Privacy Policy carefully. By using and accessing any of the Services, you acknowledge
              that you have read this Privacy Policy and understand the collection, use, and disclosure of your
              information as described in this Privacy Policy.
            </p>

            <h2 className="text-2xl font-display font-semibold text-foreground mt-8 mb-4">
              Personal Information We Collect or Process
            </h2>
            <p className="text-muted-foreground mb-4">
              When we use the term "personal information," we are referring to information that identifies or can
              reasonably be linked to you or another person. We may collect or process the following categories of
              personal information:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
              <li>
                <strong>Contact details</strong> including your name, address, phone number, and email address.
              </li>
              <li>
                <strong>Financial information</strong> including payment card information, transaction details, and
                payment confirmation.
              </li>
              <li>
                <strong>Account information</strong> including your username, password, preferences and settings.
              </li>
              <li>
                <strong>Transaction information</strong> including the courses you view, enroll in, or purchase.
              </li>
              <li>
                <strong>Communications with us</strong> including the information you include in communications with us.
              </li>
              <li>
                <strong>Device information</strong> including information about your device, browser, IP address, and
                other unique identifiers.
              </li>
              <li>
                <strong>Usage information</strong> including information regarding your interaction with the Services.
              </li>
            </ul>

            <h2 className="text-2xl font-display font-semibold text-foreground mt-8 mb-4">
              Personal Information Sources
            </h2>
            <p className="text-muted-foreground mb-2">
              We may collect personal information from the following sources:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-1">
              <li>Directly from you when you create an account, visit or use the Services, or communicate with us</li>
              <li>Automatically through the Services including through the use of cookies and similar technologies</li>
              <li>From our service providers when they collect or process your personal information on our behalf</li>
            </ul>

            <h2 className="text-2xl font-display font-semibold text-foreground mt-8 mb-4">
              How We Use Your Personal Information
            </h2>
            <p className="text-muted-foreground mb-2">We may use personal information for the following purposes:</p>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
              <li>
                <strong>Provide and Improve Services:</strong> To process your payments, fulfill your orders, remember
                your preferences, manage your account, and create a customized learning experience.
              </li>
              <li>
                <strong>Marketing:</strong> To send marketing and promotional communications by email (with your
                consent).
              </li>
              <li>
                <strong>Security:</strong> To authenticate your account, detect fraud, and secure our services.
              </li>
              <li>
                <strong>Communication:</strong> To provide you with customer support and maintain our business
                relationship.
              </li>
              <li>
                <strong>Legal Reasons:</strong> To comply with applicable law or respond to valid legal process.
              </li>
            </ul>

            <h2 className="text-2xl font-display font-semibold text-foreground mt-8 mb-4">
              How We Disclose Personal Information
            </h2>
            <p className="text-muted-foreground mb-2">
              We may disclose your personal information to third parties in certain circumstances:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-1">
              <li>
                With vendors and third parties who perform services on our behalf (e.g., payment processing, data
                analytics, customer support)
              </li>
              <li>When you direct or consent to our disclosure</li>
              <li>With our affiliates or within our corporate group</li>
              <li>In connection with a business transaction or to comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-display font-semibold text-foreground mt-8 mb-4">
              Third Party Websites and Links
            </h2>
            <p className="text-muted-foreground mb-6">
              The Services may provide links to websites or other online platforms operated by third parties. If you
              follow links to sites not affiliated or controlled by us, you should review their privacy and security
              policies. We are not responsible for the privacy or security of such sites.
            </p>

            <h2 className="text-2xl font-display font-semibold text-foreground mt-8 mb-4">Children's Data</h2>
            <p className="text-muted-foreground mb-6">
              For students under the age of 18, enrollment requires explicit parental or guardian consent. Parents or
              guardians are responsible for providing information on behalf of minor children and for complying with
              this Privacy Policy.
            </p>

            <h2 className="text-2xl font-display font-semibold text-foreground mt-8 mb-4">Security and Retention</h2>
            <p className="text-muted-foreground mb-6">
              Please be aware that no security measures are perfect or impenetrable. How long we retain your personal
              information depends on different factors, such as whether we need the information to maintain your
              account, provide Services, comply with legal obligations, or resolve disputes.
            </p>

            <h2 className="text-2xl font-display font-semibold text-foreground mt-8 mb-4">Your Rights and Choices</h2>
            <p className="text-muted-foreground mb-2">
              Depending on where you live, you may have some or all of the following rights:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-1">
              <li>
                <strong>Right to Access:</strong> Request access to personal information we hold about you.
              </li>
              <li>
                <strong>Right to Delete:</strong> Request that we delete personal information we maintain about you.
              </li>
              <li>
                <strong>Right to Correct:</strong> Request that we correct inaccurate personal information.
              </li>
              <li>
                <strong>Right of Portability:</strong> Receive a copy of the personal information we hold about you.
              </li>
              <li>
                <strong>Managing Communication Preferences:</strong> Opt out of promotional emails at any time.
              </li>
            </ul>

            <h2 className="text-2xl font-display font-semibold text-foreground mt-8 mb-4">International Transfers</h2>
            <p className="text-muted-foreground mb-6">
              We may transfer, store and process your personal information outside the country you live in. If we
              transfer your personal information out of the European Economic Area or the United Kingdom, we will rely
              on recognized transfer mechanisms.
            </p>

            <h2 className="text-2xl font-display font-semibold text-foreground mt-8 mb-4">
              Changes to This Privacy Policy
            </h2>
            <p className="text-muted-foreground mb-8">
              We may update this Privacy Policy from time to time. We will post the revised Privacy Policy on this
              website and update the "Last updated" date.
            </p>

            <div className="bg-secondary/50 p-6 rounded-lg">
              <h3 className="text-xl font-display font-semibold text-foreground mb-4">Company Information</h3>
              <div className="text-muted-foreground space-y-1">
                <p>
                  <strong>Abdeens Academy</strong>
                </p>
                <p>KVK-nummer: 95364218</p>
                <p>Omzetbelastingnummer: 251522763B02</p>
                <p>BTW-identificatienummer: NL005147640B65</p>
                <p>Email: info@abdeensacademy.com</p>
                <p>Registered in the Netherlands</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
