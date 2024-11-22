import React, { useState } from 'react';

interface CheckboxProps {
  label: string;
  isChecked: boolean;
  onToggle: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, isChecked, onToggle }) => {
  const handleToggle = () => {
    const newChecked = !isChecked;
    onToggle(newChecked);
  };

  return (
    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleToggle}
        className="form-checkbox h-4 w-4 accent-black"
      />
      <span className="font-ibarra">{label}</span>
    </label>
  );
};

export default Checkbox;