
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
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
    >
      {children}
    </button>
  );
};

export default SimpleButton;