import { Link } from "wouter";
import { GiPhrygianCap } from "react-icons/gi";
const GifTitle = ({ texto = "" }) => {
  return (
    <div className=" flex capitalize justify-center md:justify-start items-center pl-2.5 mb-5 text-xl ">
      <GiPhrygianCap className="mr-3" />
      <Link href="/" className="self-center font-semibold whitespace-nowrap">
        {texto}
      </Link>
    </div>
  );
};

export default GifTitle;
