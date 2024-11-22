
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
      className="bg-tansparent"
    >
      <div className="font-semibold text-sm text-zinc-500 hover:text-selected/80 font-sans">{children}</div>
    </button>
  );
};

export default SimpleButton;