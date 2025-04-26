import React from 'react';
import styled from 'styled-components';

type IconVariant = 'outlined' | 'rounded' | 'sharp';
type IconSize = 'small' | 'medium' | 'large';
type IconWeight = 'light' | 'regular' | 'bold';
type IconFill = 'filled' | 'outlined';

interface IconProps {
  name: string;
  variant?: IconVariant;
  size?: IconSize;
  weight?: IconWeight;
  fill?: IconFill;
  className?: string;
}

const IconSpan = styled.span<{
  $size?: IconSize;
  $weight?: IconWeight;
  $fill?: IconFill;
}>`
  font-variation-settings: 
    'FILL' ${props => props.$fill === 'filled' ? 1 : 0},
    'wght' ${props => {
      switch (props.$weight) {
        case 'light': return 300;
        case 'bold': return 700;
        default: return 400;
      }
    }},
    'GRAD' 0,
    'opsz' ${props => {
      switch (props.$size) {
        case 'small': return 20;
        case 'large': return 40;
        default: return 24;
      }
    }};
  
  font-size: ${props => {
    switch (props.$size) {
      case 'small': return '1.25rem';
      case 'large': return '2.5rem';
      default: return '1.5rem';
    }
  }};
`;

const Icon: React.FC<IconProps> = ({
  name,
  variant = 'rounded',
  size = 'medium',
  weight = 'regular',
  fill = 'outlined',
  className,
}) => {
  const variantClass = `material-symbols-${variant}`;
  
  return (
    <IconSpan 
      className={`${variantClass} ${className || ''}`}
      $size={size}
      $weight={weight}
      $fill={fill}
    >
      {name}
    </IconSpan>
  );
};

export default Icon; 