
interface SearchItemProps {
  title: string;
  image: string;
  onClick: () => void;
}

export const RecipeCard: React.FC<SearchItemProps> = ({title, image, onClick}) => {
  return (

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