import { Link } from "wouter";
import { SiGiphy } from "react-icons/si";
const ListCategori = ({ init }) => {
  return (
    <>
      {init.map((elem) => (
        <Link key={elem} href={`/search/${elem}`}>
          <li
            className="
              border-transparent
              flex
              items-center
              p-2
              font-normal
              text-gray-900
              rounded-lg
              transition
              duration-300
              ease-in-out
              capitalize
              hover:cursor-pointer
              hover:scale-105 hover:bg-gray-100
              "
          >
            <SiGiphy />
            <span className=" text-center ml-3 transition ease-in-out duration-300 font-semibold">
              {elem}
            </span>
          </li>
        </Link>
      ))}
    </>
  );
};

export default ListCategori;
