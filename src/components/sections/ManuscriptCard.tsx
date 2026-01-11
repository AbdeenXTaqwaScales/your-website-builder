import React, { useRef, useEffect, useState, ComponentType } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

type ColorScheme = 'emerald' | 'sapphire' | 'amber' | 'royal' | 'gold';

const colorSchemes = {
  emerald: {
    bg: 'bg-emerald-50 dark:bg-emerald-950/30',
    border: 'border-emerald-200 dark:border-emerald-800/50',
    icon: 'text-emerald-600 dark:text-emerald-400',
    iconBg: 'bg-emerald-100 dark:bg-emerald-900/50',
    title: 'text-emerald-900 dark:text-emerald-100',
    text: 'text-emerald-700 dark:text-emerald-300',
    accent: 'bg-emerald-600 dark:bg-emerald-500',
    hover: 'hover:border-emerald-400 dark:hover:border-emerald-600',
    badge: 'bg-emerald-600 text-white',
    glow: 'hover:shadow-emerald-200/50 dark:hover:shadow-emerald-900/50',
  },
  sapphire: {
    bg: 'bg-blue-50 dark:bg-blue-950/30',
    border: 'border-blue-200 dark:border-blue-800/50',
    icon: 'text-blue-600 dark:text-blue-400',
    iconBg: 'bg-blue-100 dark:bg-blue-900/50',
    title: 'text-blue-900 dark:text-blue-100',
    text: 'text-blue-700 dark:text-blue-300',
    accent: 'bg-blue-600 dark:bg-blue-500',
    hover: 'hover:border-blue-400 dark:hover:border-blue-600',
    badge: 'bg-blue-600 text-white',
    glow: 'hover:shadow-blue-200/50 dark:hover:shadow-blue-900/50',
  },
  amber: {
    bg: 'bg-amber-50 dark:bg-amber-950/30',
    border: 'border-amber-200 dark:border-amber-800/50',
    icon: 'text-amber-600 dark:text-amber-400',
    iconBg: 'bg-amber-100 dark:bg-amber-900/50',
    title: 'text-amber-900 dark:text-amber-100',
    text: 'text-amber-700 dark:text-amber-300',
    accent: 'bg-amber-600 dark:bg-amber-500',
    hover: 'hover:border-amber-400 dark:hover:border-amber-600',
    badge: 'bg-amber-600 text-white',
    glow: 'hover:shadow-amber-200/50 dark:hover:shadow-amber-900/50',
  },
  royal: {
    bg: 'bg-purple-50 dark:bg-purple-950/30',
    border: 'border-purple-200/60 dark:border-purple-800/50',
    icon: 'text-purple-600 dark:text-purple-400',
    iconBg: 'bg-purple-100 dark:bg-purple-900/50',
    title: 'text-purple-900 dark:text-purple-100',
    text: 'text-purple-700 dark:text-purple-300',
    accent: 'bg-purple-600 dark:bg-purple-500',
    hover: 'hover:border-purple-400 dark:hover:border-purple-600',
    badge: 'bg-purple-600 text-white',
    glow: 'hover:shadow-purple-300/60 dark:hover:shadow-purple-800/60',
  },
  gold: {
    bg: 'bg-yellow-50 dark:bg-yellow-950/40',
    border: 'border-yellow-300 dark:border-yellow-700/60',
    icon: 'text-yellow-600 dark:text-yellow-400',
    iconBg: 'bg-yellow-100 dark:bg-yellow-900/50',
    title: 'text-yellow-900 dark:text-yellow-100',
    text: 'text-yellow-700 dark:text-yellow-300',
    accent: 'bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-500',
    hover: 'hover:border-yellow-400 dark:hover:border-yellow-500',
    badge: 'bg-gradient-to-r from-yellow-500 to-amber-500 text-black',
    glow: 'hover:shadow-yellow-300/70 dark:hover:shadow-yellow-700/50',
  },
};

interface ManuscriptCardProps {
  title: string;
  description: string;
  introduction?: string;
  icon: ComponentType<{ className?: string }>;
  href: string;
  featured?: boolean;
  index: number;
  colorScheme?: ColorScheme;
}

export const ManuscriptCard: React.FC<ManuscriptCardProps> = ({
  title,
  description,
  icon: Icon,
  href,
  featured = false,
  index,
  colorScheme = 'amber',
}) => {
  const colors = colorSchemes[colorScheme];
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Link
      ref={cardRef}
      to={href}
      className={`
        group relative block p-5 md:p-6 rounded-2xl border-2 transition-all duration-500 h-full
        ${colors.bg} ${colors.border} ${colors.hover} ${colors.glow}
        hover:shadow-xl hover:-translate-y-1
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        ${featured ? 'ring-2 ring-yellow-400/50 dark:ring-yellow-500/30' : ''}
      `}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {featured && (
        <>
          <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-400 opacity-20 blur-sm" />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-100/50 to-transparent dark:from-yellow-900/20" />
          <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-400" />
        </>
      )}

      {featured && (
        <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold ${colors.badge} shadow-lg animate-float-subtle`}>
          ⭐ VIP Package
        </div>
      )}

      <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl ${colors.iconBg} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className={`w-6 h-6 md:w-7 md:h-7 ${colors.icon}`} />
      </div>

      <h3 className={`font-display text-lg md:text-xl font-bold mb-2 ${colors.title}`}>{title}</h3>
      <p className={`text-sm mb-3 ${colors.text} line-clamp-2`}>{description}</p>

      <div className={`inline-flex items-center gap-2 text-sm font-semibold ${colors.icon} group-hover:gap-3 transition-all`}>
        Explore program
        <ArrowRight className="w-5 h-5" />
      </div>

      <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl ${colors.accent} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />

      <style>{`
        @keyframes gold-shimmer { 0% { background-position: 0% 50%; } 100% { background-position: 100% 50%; } }
        @keyframes gold-pulse { 0%, 100% { opacity: 0.6; } 50% { opacity: 1; } }
        @keyframes float-subtle { 0%, 100% { transform: translateY(0) translateX(-50%); } 50% { transform: translateY(-4px) translateX(-50%); } }
        .animate-float-subtle { animation: float-subtle 3s ease-in-out infinite; }
      `}</style>
    </Link>
  );
};
