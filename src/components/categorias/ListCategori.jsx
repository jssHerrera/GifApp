import { Link } from "wouter";
import { SiGiphy } from "react-icons/si";
const ListCategori = ({ lista }) => {
  return (
    <>
      {lista.map((elem) => (
        <Link key={elem} href={`/search/${elem}`}>
          <li
            className="
              border-transparent
              flex
              gap-2
              items-center
              p-2
              font-normal
              text-gray-900
              rounded-lg
              transition
              duration-500
              ease-in-out
              capitalize
              hover:text-white
              hover:bg-black
              hover:cursor-pointer
              hover:scale-105
            "
          >
            <span>
              <SiGiphy />
            </span>
            <span className=" md:whitespace-nowrap md:overflow-ellipsis md:overflow-hidden ">
              {elem}
            </span>
          </li>
        </Link>
      ))}
    </>
  );
};

export default ListCategori;
