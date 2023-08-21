import React from 'react'

interface Props {
  primary?: boolean;
  size?: 'small' | 'large';
  label?: string;
  children?: React.ReactNode;
  onClick: () => void;
}

const Button = ({
  primary = false,
  label = 'Boop',
  size = 'small',
  children='Button',
  onClick
}: Props) => {
  return (
    <button
      onClick={onClick}
      className={`
        ${primary ? 'ui-bg-red-500' : 'ui-bg-blue-500'}
        ${size === 'large' ? 'text-lg' : 'text-base'}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
