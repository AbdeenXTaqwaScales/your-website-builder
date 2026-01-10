import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/PageHero";
import { Testimonials } from "@/components/Testimonials";

const testimonials = [
  {
    name: "Ahmed K.",
    location: "United Kingdom",
    quote: "The Hifdh program completely transformed my memorization journey. The teachers are incredibly supportive and the methodology is proven.",
    rating: 5,
  },
  {
    name: "Fatima M.",
    location: "United States",
    quote: "I never thought I could understand Arabic so well. This program made it accessible, enjoyable, and practical for everyday life.",
    rating: 5,
  },
  {
    name: "Omar S.",
    location: "Canada",
    quote: "The Tafsir classes opened my eyes to the deeper meanings of the Qur'an. Truly life-changing experience.",
    rating: 5,
  },
  {
    name: "Aisha R.",
    location: "Australia",
    quote: "I've tried many online programs but Abdeens Academy stands out. The personal attention and flexible scheduling are unmatched.",
    rating: 5,
  },
  {
    name: "Yusuf H.",
    location: "Germany",
    quote: "My children love their Hifdh classes. The teachers know how to keep them engaged while maintaining high standards.",
    rating: 5,
  },
  {
    name: "Mariam T.",
    location: "Netherlands",
    quote: "The Full Package was the best investment I made. Having access to all programs helped me create a comprehensive learning routine.",
    rating: 5,
  },
];

const Results = () => {
  return (
    <Layout>
      <PageHero
        title="Student Results"
        description="See what our students have achieved and hear their stories"
      />
      <Testimonials testimonials={testimonials} title="Success Stories" />
    </Layout>
  );
};

export default Results;
