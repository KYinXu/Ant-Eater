import React, { useState } from 'react';

interface SearchItemProps {
    title: string;
    image: string;
    onClick: () => void;
}

interface GridProps {
    titles: string[];
    images: string[];
}

export const RecipeCard: React.FC<SearchItemProps> = ({title, image, onClick}) => {
    return (
    //   <div>
    //     <button className="btn bg-selected text-white font-bold py-2 px-4 rounded-full">
    //         {title}
    //         {image}
    //     </button>
    //   </div>  
    <div
      style={{
        width: '100px',
        height: '100px',
        backgroundColor: '#f0f0f0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid #ccc',
      }}
    >
      {title}
      <img src={image} />
    </div>
    );
}


const GridComponent: React.FC<GridProps> = ({titles, images}) => {
  // State to store the grid, which is an array of numbers
  const [grid, setGrid] = useState<number[]>([]);


  const generateGrid = (): void => {
    // For example, generate a grid of 4 rows and 4 columns (16 cells total)
    const gridSize = 16;
    const newGrid = Array.from({ length: gridSize }, (_, index) => index + 1);
    setGrid(newGrid);
  };

  return (
    <div>
      <button onClick={generateGrid}>Generate Grid</button>

      <div
        style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 100px)',
            gap: '10px',
            marginTop: '20px',
        }}
      >
        {grid.map((item, index) => (
            
            // Render each GridItem component and pass the item value as a prop
            <RecipeCard key={index} image={images[index]} title={titles[index]} onClick={()=>{}}/>
        ))}
      </div>
    </div>
  );
};

export default GridComponent;