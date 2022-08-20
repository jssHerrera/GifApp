const Search = ({ form, handleChange, handleSubmit }) => {
const{texto} =form

  return (
    <form className=" flex gap-3 mb-5" onSubmit={handleSubmit}>
      <input
        type="text"
        name="texto"
        value={texto}
        placeholder="Search.."
        className="w-full block focus:outline-none text-gray-900 text-lg rounded-lg lowercase pl-2"
        autoComplete="off"
        onChange={handleChange}
      />
      <input
        type="submit"
        className="text-white bg-sky-500 hover:bg-sky-600 hover:cursor-pointer focus:outline-non font-medium rounded-lg text-sm px-4 py-2 "
      />
    </form>
  );
};

export default Search;
