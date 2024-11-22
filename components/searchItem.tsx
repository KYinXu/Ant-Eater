import React from 'react';
//individual card

interface SearchItemProps {
    text: string;
    onClick: () => void;
}

export const SearchItem: React.FC<SearchItemProps> = ({text, onClick}) => {
    return (
        <div onClick={onClick} className="hover:cursor-pointer hover:brightness-90 mb-2 flex flex-row group w-fit mx-1 justify-center justify-start text-sm bg-selected text-white font-bold py-1 ps-3 pe-2 rounded-full group-hover:brightness-90">
            <div className="align-bottom">{text} </div> 
            <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-4 0 28 28" strokeWidth={2.5} stroke="currentColor" className="p-1 size-6 align-top">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>

        </div>  
    );
}