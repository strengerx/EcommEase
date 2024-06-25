import { memo, useState, useEffect, useMemo } from "react";

const Pagination = ({ totalData, limit, setOffset, offset, refElem }) => {

    const dataLength = totalData && totalData.length > 0 ? totalData.length : 0
    const pages = Math.ceil(dataLength / limit)

    const pagesCollection = useMemo(() => new Array(pages).fill(0), [pages]);
    const [active, setActive] = useState(1);

    useEffect(() => {
        refElem.scrollTop = 0
        setActive(Math.floor(offset / limit));
    }, [offset, limit, refElem]);

    const next = () => {
        if (active < pages - 1) {
            setOffset((prevOffset) => prevOffset + limit);
        }
    };

    const prev = () => {
        if (active > 0) {
            setOffset((prevOffset) => prevOffset - limit);
        }
    };

    const setPage = (index) => {
        setOffset(index * limit);
    };

    return (
        <div className="bg-inherit flex justify-center items-center gap-3 w-full">
            <button
                onClick={prev}
                disabled={active === 0}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-l disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Previous
            </button>
            {pagesCollection.map((_, index) => (
                <button
                    onClick={() => setPage(index)}
                    key={index}
                    className={`text-gray-800 font-semibold py-2 px-4 ${active === index ? "bg-blue-500 text-slate-100 hover:bg-blue-300" : "bg-gray-200 hover:bg-gray-300"}`}
                >
                    {index + 1}
                </button>
            ))}
            <button
                onClick={next}
                disabled={active === pages - 1}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-r disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Next
            </button>
        </div>
    );
};

export default memo(Pagination);
