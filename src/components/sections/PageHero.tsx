import { Users } from "lucide-react";

interface PageHeroProps {
  title: string;
  description: string;
  showStudentCounter?: boolean;
}

export const PageHero = ({ title, description, showStudentCounter = true }: PageHeroProps) => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-slate-900">
      {/* Background gradient - matching Start page */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-slate-900 z-0" />
      
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/70 to-slate-900 z-10" />
      
      {/* Islamic pattern overlay */}
      <div className="absolute inset-0 islamic-pattern opacity-5 z-10" />

      <div className="container relative z-20">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            {description}
          </p>
          
          {showStudentCounter && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white">
              <Users className="h-4 w-4" />
              <span className="font-semibold">500+</span>
              <span className="text-sm text-white/80">Students</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
