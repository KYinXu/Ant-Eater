import React, { useState } from 'react';

const GridComponent: React.FC = () => {
  // State to store the grid, which is an array of numbers (or you can modify this for any type)
  const [grid, setGrid] = useState<number[]>([]);

  // Function to generate the grid when the button is clicked
  const generateGrid = (): void => {
    // For example, generate a grid of 4 rows and 4 columns (16 cells total)
    const gridSize = 16;
    const newGrid = Array.from({ length: gridSize }, (_, index) => index + 1);
    setGrid(newGrid);
  };

  return (
    <div>
      <button onClick={generateGrid}>Generate Grid</button>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 100px)', gap: '10px', marginTop: '20px' }}>
        {grid.map((item, index) => (
          <div 
            key={index} 
            style={{ 
              width: '100px', 
              height: '100px', 
              backgroundColor: '#f0f0f0', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              border: '1px solid #ccc' 
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridComponent;
