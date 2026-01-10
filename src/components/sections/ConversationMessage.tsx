import React from 'react';
import { LucideIcon } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface ConversationMessageProps {
  type: 'question' | 'answer';
  icon?: LucideIcon;
  title?: string;
  content: string;
  delay?: number;
}

export const ConversationMessage: React.FC<ConversationMessageProps> = ({
  type,
  icon: Icon,
  title,
  content,
  delay = 0,
}) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  if (type === 'question') {
    return (
      <div
        ref={ref}
        className={`flex justify-end transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
        }`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        <div className="max-w-md bg-primary text-primary-foreground rounded-2xl rounded-br-sm px-5 py-3 shadow-lg">
          <p className="text-sm md:text-base">{content}</p>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={`flex gap-3 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {Icon && (
        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
          <Icon className="w-5 h-5 text-primary" />
        </div>
      )}
      <div className="max-w-md bg-card border rounded-2xl rounded-bl-sm px-5 py-3 shadow-sm">
        {title && (
          <p className="font-semibold text-foreground mb-1">{title}</p>
        )}
        <p className="text-sm md:text-base text-muted-foreground">{content}</p>
      </div>
    </div>
  );
};
