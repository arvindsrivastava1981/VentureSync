import { FC } from 'react';

export const Grid: FC<{
  columns: number;
  className?: string;
  children: React.ReactNode;
}> = ({ columns, className, children }) => {
  const colClass = columns === 2 ? 'grid-cols-2' : columns === 3 ? 'grid-cols-3' : 'grid-cols-1';
  return <div className={`grid ${colClass} gap-4 ${className}`}>{children}</div>;
};
