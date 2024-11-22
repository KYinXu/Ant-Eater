import React from 'react';
//individual card

interface SearchItemProps {
    text: string;
    onClick: () => void;
}

export const SearchItem: React.FC<SearchItemProps> = ({text, onClick}) => {
    return (
      <div>
        <button className="btn bg-selected text-white font-bold py-2 px-4 rounded-full">
            {text}
        </button>
      </div>  
    );
}