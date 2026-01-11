import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { ComponentType } from "react";

interface ProgramCardProps {
  title: string;
  outcome: string;
  bestFor: string;
  priceTeaser: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
  badge?: string;
  featured?: boolean;
}

const colorSchemes = {
  hifdh: {
    bg: "from-emerald-50 via-green-50 to-emerald-100 dark:from-emerald-950 dark:via-emerald-900/50 dark:to-emerald-950",
    accent: "bg-emerald-500",
    icon: "from-emerald-500/20 to-emerald-600/20 border-emerald-500/30 text-emerald-700 dark:text-emerald-400",
    border: "border-emerald-600/30 dark:border-emerald-500/40",
    badge: "from-emerald-600 to-emerald-700 text-emerald-50",
    text: "text-emerald-900 dark:text-emerald-100",
    textMuted: "text-emerald-900/80 dark:text-emerald-200/80",
    button: "from-emerald-700 to-emerald-800 hover:from-emerald-800 hover:to-emerald-900 text-emerald-50",
  },
  arabic: {
    bg: "from-blue-50 via-sky-50 to-blue-100 dark:from-blue-950 dark:via-blue-900/50 dark:to-blue-950",
    accent: "bg-blue-500",
    icon: "from-blue-500/20 to-blue-600/20 border-blue-500/30 text-blue-700 dark:text-blue-400",
    border: "border-blue-600/30 dark:border-blue-500/40",
    badge: "from-blue-600 to-blue-700 text-blue-50",
    text: "text-blue-900 dark:text-blue-100",
    textMuted: "text-blue-900/80 dark:text-blue-200/80",
    button: "from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 text-blue-50",
  },
  tafsir: {
    bg: "from-purple-50 via-violet-50 to-purple-100 dark:from-purple-950 dark:via-purple-900/50 dark:to-purple-950",
    accent: "bg-purple-500",
    icon: "from-purple-500/20 to-purple-600/20 border-purple-500/30 text-purple-700 dark:text-purple-400",
    border: "border-purple-600/30 dark:border-purple-500/40",
    badge: "from-purple-600 to-purple-700 text-purple-50",
    text: "text-purple-900 dark:text-purple-100",
    textMuted: "text-purple-900/80 dark:text-purple-200/80",
    button: "from-purple-700 to-purple-800 hover:from-purple-800 hover:to-purple-900 text-purple-50",
  },
  full: {
    bg: "from-amber-50 via-yellow-50 to-amber-100 dark:from-amber-950 dark:via-amber-900/50 dark:to-amber-950",
    accent: "bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400",
    icon: "from-amber-500/20 to-yellow-600/20 border-amber-500/30 text-amber-700 dark:text-amber-400",
    border: "border-amber-500/50 dark:border-amber-400/50",
    badge: "from-amber-500 to-yellow-600 text-white",
    text: "text-amber-900 dark:text-amber-100",
    textMuted: "text-amber-900/80 dark:text-amber-200/80",
    button: "from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white",
  },
};

const getColorScheme = (title: string) => {
  if (title.toLowerCase().includes("hifdh")) return colorSchemes.hifdh;
  if (title.toLowerCase().includes("arabic")) return colorSchemes.arabic;
  if (title.toLowerCase().includes("tafsir")) return colorSchemes.tafsir;
  return colorSchemes.full;
};

export const ProgramCard = ({
  title,
  outcome,
  bestFor,
  priceTeaser,
  href,
  icon: Icon,
  badge,
  featured = false,
}: ProgramCardProps) => {
  const colors = getColorScheme(title);
  
  return (
    <Link
      to={href}
      className={`group relative block overflow-hidden rounded-2xl border-2 ${colors.border} bg-gradient-to-br ${colors.bg} transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
    >
      {featured && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400" />
      )}

      <div className={`absolute bottom-0 left-0 right-0 h-1 ${colors.accent} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />

      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/20 to-transparent rounded-bl-full" />

      <div className="relative p-8 md:p-12 min-h-[320px] md:min-h-[380px] flex flex-col">
        {badge && (
          <Badge className={`mb-5 bg-gradient-to-r ${colors.badge} border-0 text-sm px-3 py-1`}>
            {badge}
          </Badge>
        )}
        
        <div className={`w-18 h-18 md:w-24 md:h-24 rounded-xl bg-gradient-to-br ${colors.icon} border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-10 h-10 md:w-12 md:h-12" />
        </div>
        
        <h3 className={`font-display text-2xl md:text-3xl lg:text-4xl font-bold mb-4 ${colors.text}`}>{title}</h3>
        <p className={`text-base md:text-lg lg:text-xl mb-6 ${colors.textMuted}`}>{outcome}</p>
        
        <div className="mb-8 mt-auto">
          <span className={`text-sm md:text-base font-medium uppercase tracking-wider ${colors.textMuted}`}>
            Best for:{" "}
            <span className={colors.text}>{bestFor}</span>
          </span>
        </div>
        
        <div className={`inline-flex items-center gap-2 text-base md:text-lg font-semibold bg-gradient-to-r ${colors.button} px-6 py-3 rounded-lg group-hover:gap-3 transition-all`}>
          View Program
          <ArrowRight className="w-5 h-5" />
        </div>
      </div>
    </Link>
  );
};
