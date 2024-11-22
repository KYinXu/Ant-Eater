import React from 'react';

interface SearchBarProps {
  onSearchChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearchChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(event.target.value);
  };

  return (
    <div className="mt-4 mb-4">
      <input
        type="text"
        placeholder="Search..."
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded-full bg-searchGray"
      />
    </div>
  );
};

export default SearchBar;