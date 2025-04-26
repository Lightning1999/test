import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  style?: React.CSSProperties;
  whileHover?: any;
  whileTap?: any;
}

interface StyledButtonProps {
  variant: string;
  size: string;
  $fullWidth: boolean;
}

// Button styles
const buttonStyles = `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  border: none;
  
  /* Size variations */
  padding: ${({ size }: StyledButtonProps) => 
    size === 'small' ? '0.5rem 1rem' : 
    size === 'medium' ? '0.75rem 1.5rem' : 
    '1rem 2rem'};
  
  font-size: ${({ size }: StyledButtonProps) => 
    size === 'small' ? '0.875rem' : 
    size === 'medium' ? '1rem' : 
    '1.125rem'};
  
  /* Width */
  width: ${({ $fullWidth }: StyledButtonProps) => ($fullWidth ? '100%' : 'auto')};
  
  /* Variant styles */
  background: ${({ variant }: StyledButtonProps) => 
    variant === 'primary' ? 'var(--secondary-color)' : 
    variant === 'secondary' ? 'var(--accent-color)' : 
    'transparent'};
  
  color: ${({ variant }: StyledButtonProps) => 
    variant === 'primary' || variant === 'secondary' ? 'white' : 
    variant === 'outline' ? 'var(--secondary-color)' : 
    'var(--secondary-color)'};
  
  border: ${({ variant }: StyledButtonProps) => 
    variant === 'outline' ? '2px solid var(--secondary-color)' : 
    variant === 'text' ? 'none' : 
    'none'};
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    transition: all 0.4s ease;
  }
  
  &:hover:not(:disabled):before {
    left: 100%;
  }
`;

const StyledButton = styled(motion.button)<StyledButtonProps>`${buttonStyles}`;
const StyledLink = styled(motion(Link))<StyledButtonProps>`${buttonStyles}`;
const StyledAnchor = styled(motion.a)<StyledButtonProps>`${buttonStyles}`;

const Button: React.FC<ButtonProps> = ({
  children,
  to,
  href,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  onClick,
  disabled = false,
  className,
  type,
  style,
  whileHover,
  whileTap,
}) => {
  const buttonProps = {
    variant,
    size,
    $fullWidth: fullWidth,
    className,
    disabled,
    whileHover: !disabled ? whileHover : {},
    whileTap: !disabled ? whileTap : {},
    transition: { duration: 0.2 },
    type,
    style,
  };

  if (to) {
    return (
      <StyledLink to={to} {...buttonProps}>
        {children}
      </StyledLink>
    );
  }

  if (href) {
    return (
      <StyledAnchor href={href} target="_blank" rel="noopener noreferrer" {...buttonProps}>
        {children}
      </StyledAnchor>
    );
  }

  return (
    <StyledButton onClick={onClick} {...buttonProps}>
      {children}
    </StyledButton>
  );
};

export default Button; 