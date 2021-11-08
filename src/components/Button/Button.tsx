import React from 'react';
import styles from './button.module.css';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Button disabled
   */
  isDisabled: boolean;
  /**
   * Full width button
   */
  shouldFullWidth: boolean;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  isDisabled = false,
  shouldFullWidth = false,
  onClick,
  ...props
}: ButtonProps) => {
  const mode = primary ? styles.primary : styles.secondary;
  const fullWidth = shouldFullWidth ? styles.fullWidth : '';
  return (
    <button
      type='button'
      className={[styles.button, styles[size], mode, fullWidth]
        .join(' ')
        .trim()}
      style={{ backgroundColor }}
      disabled={isDisabled}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};
