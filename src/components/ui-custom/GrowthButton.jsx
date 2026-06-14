import { useLanguage } from '@/hooks/useLanguage';

export default function GrowthButton({ children, primary = true, onClick, className = '', type = 'button' }) {
  const { isRTL } = useLanguage();

  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold transition-all duration-500 
        text-sm sm:text-base flex items-center gap-2 group
        focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-4
        active:scale-95
        ${primary
          ? 'bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-1'
          : 'border-2 border-foreground text-foreground hover:bg-foreground hover:text-background'}
        ${isRTL ? 'font-arabic' : ''}
        ${className}
      `}
    >
      {children}
      <div className="w-2 h-2 rounded-full bg-current group-hover:animate-ping" />
    </button>
  );
}
