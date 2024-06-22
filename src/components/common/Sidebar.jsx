const Sidebar = ({ setLimit }) => {
    // const categories = ["", "electronics", "fashion", "home"];
    // const priceRanges = ["", "0-50", "50-100", "100-200"];

    return (
        <aside className="bg-slate-200 shadow-md pt-4 pb-4 mb-6 h-full">
            <h3 className="text-xl font-semibold text-slate-800 mb-4 px-4">Filters</h3>
            <div className="flex flex-col items-start gap-3 mb-4 border-t-2 p-4 border-slate-100">
                <h1 className="text-base font-medium">Limits</h1>
                <ul>
                    {[10, 20, 30].map(limit => (
                        <li
                            key={limit}
                            className="text-sm text-slate-600 font-medium cursor-pointer mb-2"
                            onClick={() => setLimit(limit)}
                        >
                            {limit} products
                        </li>
                    ))}
                </ul>
            </div>
            {/* <div className="mb-4 px-4">
                <label className="block mb-2 text-sm font-medium">Category</label>
                <select
                    onChange={(e) => setCategory(e.target.value)}
                    className="border border-gray-300 rounded-md p-2 w-full"
                    aria-label="Select category"
                >
                    {categories.map(category => (
                        <option key={category} value={category}>
                            {category ? category.charAt(0).toUpperCase() + category.slice(1) : "All Categories"}
                        </option>
                    ))}
                </select>
            </div>
            <div className="mb-4 px-4">
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
