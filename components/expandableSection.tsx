import React, { useState } from 'react';

interface ExpandableSectionProps {
  title: string;
  children: React.ReactNode;
}

const ExpandableSection: React.FC<ExpandableSectionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border rounded shadow-md">
      <div
        className="cursor-pointer bg-gray-200 p-4 flex justify-center items-center"
        onClick={toggleSection}
      >
        <span>{isOpen ? 'v ' : '> '} </span>
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
      {isOpen && (
        <div className="p-4">
          {children}
        </div>
      )}
    </div>
  );
};

export default ExpandableSection;