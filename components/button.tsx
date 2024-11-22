
import React from 'react';


// Simple Button component
import { ReactNode } from 'react';

interface SimpleButtonProps {
  children: ReactNode;
  onClick: () => void;
}

export const SimpleButton: React.FC<SimpleButtonProps> = ({ children, onClick }) => {

  return (
    <button
      onClick={onClick}
      className="bg-tansparent hover:underline"
    >
      {children}
    </button>
  );
};

export default SimpleButton;