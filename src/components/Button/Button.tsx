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
  ...props
}: ButtonProps) => {
  const mode = primary ? styles.primary : styles.secondary;
  return (
    <button
      type='button'
      className={[styles.button, styles[size], mode].join(' ')}
      style={{ backgroundColor }}
      disabled={isDisabled}
      {...props}
    >
      {label}
    </button>
  );
};
