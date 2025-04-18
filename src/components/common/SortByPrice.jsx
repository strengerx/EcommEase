export default function SortByPrice({ value, setFunction }) {
    return (
        <div className="max-w-xs">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sort">
                Sort by Price
            </label>
            <select
                id="sort"
                value={value}
                onChange={e => setFunction(e.target.value)}
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-5 py-2 pr-5 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-sm"
            >
                <option value="default">Default</option>
                <option value="toHigh">Price: Low to High</option>
                <option value="toLow">Price: High to Low</option>
            </select>
        </div>
    );
}
