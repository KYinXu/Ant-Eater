import React, { useRef } from 'react';

interface CVButtonProps {
  onFileUpload: (file: File) => void;
  children: React.ReactNode;
}

const CVButton: React.FC<CVButtonProps> = ({ onFileUpload, children}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      onFileUpload(file);
    }
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className="bg-tansparent hover:underline"
      >
        {children}
      </button>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
    </div>
  );
};

export default CVButton;