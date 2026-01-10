import { TestimonialCard } from "./TestimonialCard";

interface Testimonial {
  name: string;
  location?: string;
  quote: string;
  rating?: number;
}

interface TestimonialsProps {
  title?: string;
  testimonials: Testimonial[];
}

export const Testimonials = ({
  title = "What Our Students Say",
  testimonials,
}: TestimonialsProps) => {
  return (
    <section id="results" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};
