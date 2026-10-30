import { FC } from 'react';

export const Button: FC<{
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
}> = ({ onClick, className, children }) => {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ${className}`
    }>
      {children}
    </button>
  );
};

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

export const Grid: FC<{
  columns: number;
  className?: string;
  children: React.ReactNode;
}> = ({ columns, className, children }) => {
  const colClass = columns === 2 ? 'grid-cols-2' : columns === 3 ? 'grid-cols-3' : 'grid-cols-1';
  return <div className={`grid ${colClass} gap-4 ${className}`}>{children}</div>;
};