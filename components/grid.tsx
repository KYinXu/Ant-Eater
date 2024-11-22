import React, { useState } from 'react';

interface SearchItemProps {
    title: string;
    image: string;
    onClick: () => void;
}

interface GridProps {
    showGrid: boolean;
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
    //   style={{
    //     width: '100%',
    //     height: '100px',
    //     backgroundColor: '#f0f0f0',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     border: '1px solid #ccc',
    //   }}
    <div className="relative size-full overflow-hidden ">
        <p className="hover:text-selected">
        <a className="group" href="/">
            <span className="absolute left-5 bottom-5 z-10 font-bebas white text-white group-hover:text-selected text-lg">{title}</span>
            <img className="z-0 size-full relative object-fill brightness-50" src={image} />
        </a>
        </p>
    </div>
    );
}


const GridComponent: React.FC<GridProps> = ({showGrid, titles, images}) => {
  // State to store the grid, which is an array of numbers
  const [grid, setGrid] = useState<number[]>([]);
  const [shown, setShown] = useState<boolean>(false);


  const generateGrid = (): void => {
    // For example, generate a grid of 4 rows and 4 columns (16 cells total)
    const gridSize = 16;
    const newGrid = Array.from({ length: gridSize }, (_, index) => index + 1);
    setGrid(newGrid);
  };

  if (showGrid && !shown) {
    generateGrid();
    setShown((prev) => !prev);
  }
  return (
    <div>
      {/* <button onClick={generateGrid}>Generate Grid</button> */}

      <div
        className="grid grid-cols-3 gap-2 mt-3"
        // style={{
        //     display: 'grid',
        //     gridTemplateColumns: 'repeat(4, 25%)',
        //     gap: '1%',
        //     marginTop: '20px',
        // }}
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