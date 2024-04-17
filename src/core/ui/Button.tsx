import React, { MouseEventHandler } from 'react';

interface buttonProps {
  children?: React.ReactNode;
  onClick?: MouseEventHandler;
  className?: string;
  type?: 'submit' | 'reset' | 'button';
  disabled?: boolean;
}

const Button: React.FC<buttonProps> = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};
export default Button;
