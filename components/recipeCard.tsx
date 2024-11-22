
interface SearchItemProps {
  title: string;
  image: string;
}

export const RecipeCard: React.FC<SearchItemProps> = ({title, image }) => {

  return (

  <div className="relative size-full overflow-hidden ">
      <div className="hover:text-selected">
        <a className="group" href='/'>
          <div className="absolute left-5 bottom-5 z-10 font-bebas white text-white group-hover:text-selected text-4xl">{title}</div>
          <img className="z-0 size-full relative object-fill brightness-50" src={image} />
        </a>
      </div>
  </div>
  );
}