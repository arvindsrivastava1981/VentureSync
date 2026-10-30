import { FC } from 'react';

export const Card: FC<{
  className?: string;
  children: React.ReactNode;
}> = ({ className, children }) => {
  return (
    <div className={`rounded-xl border border-slate-700/50 bg-slate-800/50 backdrop-blur-sm p-6 transition-all duration-200 hover:border-slate-600/50 hover:shadow-lg hover:shadow-black/10 ${className}`}>
      {children}
    </div>
  );
};
