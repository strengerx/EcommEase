import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useCallback } from "react";
import useFetch from "../../hooks/useFetch";
import { IoMdClose } from "react-icons/io";

export default function Sidebar({ setLimit, isFilterOpen, handleFilterOpen }) {
    const { data: categories } = useFetch("/categories", []);
    const topCategories = categories && categories.length > 0 ? categories.slice(0, 6) : [];

    const toLowerEmptySpace = useCallback((str) => {
        return str.toLowerCase().replace(/\s+/g, "");
    }, []);

    const capitalizeWords = useCallback((str) => {
        if (!str) return "";
        return str
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    }, []);

    return (
        <aside
            className={`bg-slate-200 shadow-md pt-4 pb-4 mb-6 h-full w-[70%] md:w-full fixed top-0 ${isFilterOpen ? "left-0" : "-left-full"} md:static z-50`}
            role="complementary"
        >
            <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-slate-800 px-6">Filters</h3>
                <button
                    onClick={handleFilterOpen}
                    aria-label="Close filters"
                    className="text-gray-700 text-2xl font-bold mr-6 md:hidden"
                >
                    <IoMdClose />
                </button>
            </div>
            <div className="flex flex-col items-start gap-3 mb-4 border-t-2 py-4 px-6 mt-4 border-slate-100">
                <h1 className="text-base font-medium">Limits</h1>
                <ul>
                    {[10, 20, 30].map((limit) => (
                        <li
                            key={limit}
                            className="text-sm text-slate-600 font-medium cursor-pointer mb-2"
                            onClick={() => {
                                setLimit(limit);
                                handleFilterOpen();
                            }}
                        >
                            {limit} Products
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex flex-col items-start gap-3 mb-4 px-6">
                <h1 className="text-base font-medium">Categories</h1>
                <ul>
                    <li
                        onClick={handleFilterOpen}
                        className="text-sm text-slate-600 font-medium cursor-pointer mb-2"
                    >
                        <Link to={`/shop`}>All Categories</Link>
                    </li>
                    {topCategories.map((category) => (
                        <li
                            key={category.id}
                            className="text-sm text-slate-600 font-medium cursor-pointer mb-2"
                        >
                            <Link
                                onClick={handleFilterOpen}
                                to={`/shop/${category.id}/${toLowerEmptySpace(
                                    category.name
                                )}`}
                            >
                                {capitalizeWords(category.name)}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
}

Sidebar.propTypes = {
    setLimit: PropTypes.func.isRequired,
    isFilterOpen: PropTypes.bool.isRequired,
    handleFilterOpen: PropTypes.func.isRequired,
};
