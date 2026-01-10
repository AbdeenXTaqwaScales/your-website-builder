import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/PageHero";
import { FAQ } from "@/components/FAQ";

const faqItems = [
  {
    question: "How do I enroll in a program?",
    answer: "Simply navigate to our Programs page, select the program you're interested in, and click 'Enroll Now'. You'll be guided through the registration process. If you have questions, our team is happy to help.",
  },
  {
    question: "Are the classes live or pre-recorded?",
    answer: "We offer both! Our main sessions are live and interactive, allowing direct communication with teachers. However, recordings are provided for review, and some supplementary content is pre-recorded.",
  },
  {
    question: "What if I miss a class?",
    answer: "Don't worry! All live sessions are recorded and made available within 24 hours. You can catch up at your own pace and reach out to your teacher with any questions.",
  },
  {
    question: "Do I need any prior knowledge to join?",
    answer: "No prior knowledge is required for most of our programs. We have beginner-friendly tracks as well as advanced options. Our placement assessment helps determine the right level for you.",
  },
  {
    question: "What technology do I need?",
    answer: "You'll need a stable internet connection, a computer or tablet with a webcam and microphone, and Zoom installed. That's it! We provide all learning materials digitally.",
  },
  {
    question: "Can I switch programs after enrolling?",
    answer: "Yes, you can switch programs within the first 14 days of enrollment. Contact our support team and we'll help you make the transition smoothly.",
  },
  {
    question: "How long are the programs?",
    answer: "Program duration varies. Hifdh is self-paced based on your memorization goals. Arabic and Tafsir programs run in semesters of 3-4 months each, with multiple levels available.",
  },
  {
    question: "Do you offer group discounts?",
    answer: "Yes! We offer family discounts and group rates for communities or organizations. Contact us directly to discuss custom arrangements.",
  },
];

const FAQPage = () => {
  return (
    <Layout>
      <PageHero
        title="Frequently Asked Questions"
        description="Find answers to common questions about our programs and services"
        showStudentCounter={false}
      />
      <FAQ items={faqItems} title="" />
    </Layout>
  );
};

export default FAQPage;
