import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Search from "./Search";

const Header = () => {
    const navigate = useNavigate();

    const [searchQuery, setSearchQuery] = useState("");
    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        navigate(`/products/search?query=${searchQuery}`);
    };

    const [isNavOpen, setIsNavOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsNavOpen(false);
            } else {
                setIsNavOpen(true);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <header className="w-full px-4 py-3 flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-[50px] bg-slate-200">
            <Link className="text-3xl font-bold text-blue-800" to={"/"}>
                Ecomm<span className="text-yellow-500">Ease</span>
            </Link>
            <nav
                className={`flex lg:justify-between justify-end items-center w-full`}
            >
                <Search
                    searchQuery={searchQuery}
                    isNavOpen={isNavOpen}
                    handleFormSubmit={handleFormSubmit}
                    handleInputChange={handleInputChange}
                />
                <ul className="lg:flex gap-5 hidden">
                    <li>
                        <Link className="text-slate-700 font-semibold" to={"/"}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className="text-slate-700 font-semibold" to={"/about"}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link className="text-slate-700 font-semibold" to={"/products"}>
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link className="text-slate-700 font-semibold" to={"/"}>
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link className="text-slate-700 font-semibold" to={"/"}>
                            Cart
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
