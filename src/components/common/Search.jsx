import { IoIosSearch } from "react-icons/io";

const Search = ({
    handleFormSubmit,
    searchQuery,
    handleInputChange,
    isNavOpen,
}) => {
    return (
        <form
            onSubmit={handleFormSubmit}
            className="flex bg-slate-100 rounded-md overflow-hidden w-full lg:w-1/2"
            action=""
        >
            <input
                value={searchQuery}
                onChange={handleInputChange}
                className="px-4 py-2 outline-none border-none w-full"
                type="search"
                placeholder="Search products"
            />
            <button
                className="px-6 text-2xl py-2 bg-slate-300 text-slate-700 md:font-medium"
                type="submit"
            >
                {isNavOpen ? <IoIosSearch /> : "Search"}
            </button>
        </form>
    );
};

export default Search;
