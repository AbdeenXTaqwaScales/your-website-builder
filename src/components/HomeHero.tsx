import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
export const HomeHero = () => {
  return <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Deep Blue Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0d2847] to-[#0a1628]" />

      {/* Decorative Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large circle - top right */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full border border-sky-500/10" />
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full border border-sky-400/15" />

        {/* Large circle - bottom left */}
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full border border-teal-500/10" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full border border-teal-400/15" />

        {/* Floating orbs with glow */}
        <div className="absolute top-20 left-[15%] w-4 h-4 rounded-full bg-sky-400/40 blur-sm animate-pulse" />
        <div className="absolute top-40 right-[20%] w-3 h-3 rounded-full bg-teal-400/50 blur-sm animate-pulse" style={{
        animationDelay: "0.5s"
      }} />
        <div className="absolute bottom-32 left-[25%] w-5 h-5 rounded-full bg-sky-300/30 blur-sm animate-pulse" style={{
        animationDelay: "1s"
      }} />
        <div className="absolute bottom-20 right-[30%] w-3 h-3 rounded-full bg-teal-300/40 blur-sm animate-pulse" style={{
        animationDelay: "1.5s"
      }} />

        {/* Subtle line accents */}
        <div className="absolute top-1/4 left-0 w-32 h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />
        <div className="absolute top-1/3 right-0 w-40 h-px bg-gradient-to-l from-transparent via-teal-500/20 to-transparent" />
        <div className="absolute bottom-1/3 left-0 w-48 h-px bg-gradient-to-r from-transparent via-sky-400/15 to-transparent" />

        {/* Soft gradient orbs */}
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl" />
      </div>

      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-transparent to-[#0a1628]/40" />

      {/* Decorative wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="hsl(var(--background))" />
        </svg>
      </div>

      {/* Content - Centered */}
      <div className="container relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Your Journey to Perfect Quran Recitation
            <span className="block bg-gradient-to-r from-sky-400 via-teal-400 to-sky-400 bg-clip-text text-transparent">Starts Here</span>
          </h1>

          <p className="text-lg md:text-xl text-sky-100/80 max-w-2xl mx-auto">
            Transform hesitant recitation into confident, beautiful Quranic fluency from your very first lesson.
          </p>

          {/* Find Your Course Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg px-8 bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-600 hover:to-teal-600 border-0">
              <Link to="/start">
                Find Your Course
                <span className="ml-2">→</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};