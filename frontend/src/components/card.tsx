import { FC } from 'react';

export const Card: FC<{
  className?: string;
  children: React.ReactNode;
}> = ({ className, children }) => {
  return (
    <div className={`rounded-lg border border-white/20 bg-navy/80 p-6 transition-colors hover:bg-navy/90 ${className}`}>
      {children}
    </div>
  );
};
