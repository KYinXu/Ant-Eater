import React from 'react';
//individual card

interface SearchItemProps {
    text: string;
    onClick: () => void;
}

export const RecipeCard: React.FC<SearchItemProps> = ({title, onClick}) => {
    return (
      <div>
        <button className="btn bg-selected text-white font-bold py-2 px-4 rounded-full">
            {title}
        </button>
      </div>  
    );
}