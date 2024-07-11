import { IoIosSearch } from "react-icons/io";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
    const navigate = useNavigate();

    const [searchQuery, setSearchQuery] = useState("");

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        navigate(`/shop/search?query=${searchQuery}`);
    };

    const [deviceWidth, setDeviceWidth] = useState(window.innerWidth)
    const handleResize = () => {
        setDeviceWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleSearchIcon = () => deviceWidth <= 768;

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
                className="px-6 text-2xl py-2 md:text-lg bg-slate-300 text-slate-700 md:font-medium"
                type="submit"
            >
                {toggleSearchIcon() ? <IoIosSearch /> : "Search"}
            </button>
        </form>
    );
};

export default Search;
