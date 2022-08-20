import { Link } from "wouter";
import { GiPhrygianCap } from "react-icons/gi";
const GifTitle = ({ texto = "", color=" " }) => {
  return (
    <div className={`flex capitalize gap-2 justify-center md:justify-start items-center mb-5 text-xl ${color}`}>
      <span>
        <GiPhrygianCap/>
      </span>
      <Link href="/" className="self-center font-semibold text-sm  md:text-xl">
        {texto}
      </Link>
    </div>
  );
};

export default GifTitle;
