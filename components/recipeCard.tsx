
import { getRecipeDetails } from '@/services/recipeService';
import { useState } from 'react';
interface SearchItemProps {
  title: string;
  image: string;
  rid: string;
}

export const RecipeCard: React.FC<SearchItemProps> = ({title, image, rid}) => {
  const [link, setLink] = useState<string>("");


  const handleClick = async () => {
    setLink(await getRecipeDetails(rid))
  };
  return (

  <div className="relative size-full overflow-hidden ">
      <div className="hover:text-selected z-10" onMouseEnter={handleClick} onMouseLeave={() => setLink("")}>
        <div className="group" onClick={handleClick}>
          <img className="z-0 size-full relative object-fill brightness-50" src={image} />
          <div className="absolute left-5 bottom-5 font-bebas white text-white group-hover:text-selected group-hover:cursor-pointer text-4xl">
            {title}
          </div>
          
          {link.length !== 0 && (
            <a
              href={link}
              className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold"
            >
            </a>
          )}
        </div>
      </div>
  </div>
  );
}