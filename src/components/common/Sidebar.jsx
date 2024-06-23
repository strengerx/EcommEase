import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Sidebar = ({ setLimit }) => {

    // const priceRanges = ["", "0-50", "50-100", "100-200"];
    const { data: categories } = useFetch("/categories", [])
    const topCategories = categories && categories.length > 0 ? categories.slice(0, 6) : [];

    const toLowerEmptySpace = (str) => {
        return str.toLowerCase().replace(/\s+/g, '');
    }

    const capitalizeWords = (str) => {
        if (!str) return '';
        return str
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    return (
        <aside className="bg-slate-200 shadow-md pt-4 pb-4 mb-6 h-full">
            <h3 className="text-xl font-semibold text-slate-800 mb-4 px-6">Filters</h3>
            <div className="flex flex-col items-start gap-3 mb-4 border-t-2 py-4 px-6 border-slate-100">
                <h1 className="text-base font-medium">Limits</h1>
                <ul>
                    {[10, 20, 30].map(limit => (
                        <li
                            key={limit}
                            className="text-sm text-slate-600 font-medium cursor-pointer mb-2"
                            onClick={() => setLimit(limit)}
                        >
                            {limit} Products
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex flex-col items-start gap-3 mb-4 px-6">
                <h1 className="text-base font-medium">Categories</h1>
                <ul>
                    <li className="text-sm text-slate-600 font-medium cursor-pointer mb-2">
                        <Link to={`/products`}> All Categories</Link>
                    </li>
                    {topCategories && topCategories.length > 0 && topCategories.map(category => (
                        <li
                            key={category.id}
                            className="text-sm text-slate-600 font-medium cursor-pointer mb-2"
                        >
                            <Link to={`/products/${category.id}/${toLowerEmptySpace(category?.name)}`}>
                                {category ? capitalizeWords(category?.name) : "All Categories"}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            {/* <div className="mb-4 px-4">
                <label className="block mb-2 text-sm font-medium">Price Range</label>
                <select
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="border border-gray-300 rounded-md p-2 w-full"
                    aria-label="Select price range"
                >
                    {priceRanges.map(range => (
                        <option key={range} value={range}>
                            {range ? `$${range.replace("-", " - $")}` : "All Prices"}
                        </option>
                    ))}
                </select>
            </div> */}
        </aside>
    );
};

export default Sidebar;
