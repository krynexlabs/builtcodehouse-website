import React from 'react';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'nav';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  className = '',
  disabled,
  style,
  ...props
}) => {
  const getVariantStyles = (): React.CSSProperties => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: 'var(--brand-accent)',
          color: '#080808',
          border: '1px solid var(--brand-accent)',
          fontWeight: 600,
          boxShadow: '0 0 24px rgba(214, 255, 63, 0.16)',
        };
      case 'secondary':
        return {
          backgroundColor: 'var(--surface-tertiary)',
          color: 'var(--text-primary)',
          border: '1px solid var(--border-subtle)',
          fontWeight: 500,
        };
      case 'nav':
        return {
          backgroundColor: 'var(--surface-tertiary)',
          color: 'var(--text-primary)',
          border: '1px solid var(--border-subtle)',
          fontWeight: 500,
          fontSize: '13px',
          height: '42px',
          padding: '0 20px',
        };
      case 'ghost':
        return {
          backgroundColor: 'transparent',
          color: 'var(--text-secondary)',
          border: '1px solid transparent',
        };
    }
  };

  const getSizeStyles = (): React.CSSProperties => {
    switch (size) {
      case 'sm':
        return { height: '36px', padding: '0 16px', fontSize: '13px' };
      case 'md':
        return { height: '48px', padding: '0 24px', fontSize: '14px' };
      case 'lg':
        return { height: '54px', padding: '0 32px', fontSize: '15px' };
    }
  };

  return (
    <button
      className={`btn-${variant} ${className}`}
      disabled={disabled || isLoading}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        borderRadius: '6px',
        fontFamily: 'var(--font-sans)',
        letterSpacing: '-0.01em',
        cursor: disabled || isLoading ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        transition: 'all var(--transition-fast)',
        position: 'relative',
        ...getVariantStyles(),
        ...getSizeStyles(),
        ...style,
      }}
      {...props}
    >
      {isLoading ? (
        <Loader2 size={16} className="animate-spin" />
      ) : (
        <>
          {leftIcon}
          <span>{children}</span>
          {rightIcon}
        </>
      )}
    </button>
  );
};
