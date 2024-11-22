import React, { useState, useEffect } from 'react';
import { RecipeCard } from './recipeCard';

interface GridProps {
  images: string[];
  titles: string[];
  rids: string[];
}

const Grid: React.FC<GridProps> = ({ titles, images, rids }) => {
  // State to store the grid as a 2D list
  const [grid, setGrid] = useState<{ image: string; title: string; rid: string}[][]>([]);

  useEffect(() => {
    // Initialize the grid based on the length of images and titles
    const rows = Math.ceil(images.length / 3); // Assuming 3 columns
    const newGrid: { image: string; title: string; rid: string}[][] = [];

    for (let i = 0; i < rows; i++) {
      const row: { image: string; title: string; rid: string}[] = [];
      for (let j = 0; j < 3; j++) {
        const index = i * 3 + j;
        if (index < images.length) {
          row.push({ image: images[index], title: titles[index], rid: rids[index] });
        }
      }
      newGrid.push(row);
    }

    setGrid(newGrid);
  }, [images, titles]);

  return (
    <div>
      <div className="grid grid-cols-3">
        {grid.map((row, rowIndex) => (
          <React.Fragment key={rowIndex}>
            {row.map((item, colIndex) => (
              <RecipeCard key={colIndex} image={item.image} title={item.title} rid={item.rid} />
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Grid;