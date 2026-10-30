'use client';

import { FC } from 'react';

export const Button: FC<{
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}> = ({ onClick, className, children, type = 'button', disabled }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`inline-flex items-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ${className}`}
    >
      {children}
    </button>
  );
};
