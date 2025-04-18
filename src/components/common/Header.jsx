import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(window.innerWidth <= 768);

    const handleResize = () => {
        setIsNavOpen(window.innerWidth <= 768);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleNav = () => {
        setIsNavOpen((prev) => !prev);
    };

    return (
        <header className="w-full px-4 py-3 flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-[50px] bg-slate-200">
            <div className="flex justify-between items-center">
                <Link className="text-3xl font-bold text-blue-800" to="/">
                    Ecomm<span className="text-yellow-500">Ease</span>
                </Link>
                <button
                    className="lg:hidden block text-slate-700 font-semibold"
                    onClick={toggleNav}
                    aria-label="Toggle navigation"
                >
                    Menu
                </button>
            </div>
            <nav className="flex lg:justify-between justify-end items-center w-full">
                <Search />
                <ul className={`lg:flex gap-5 hidden`}>
                    <li>
                        <Link className="text-slate-700 font-semibold" to="/shop">
                            Shop
                        </Link>
                    </li>
                    <li>
                        <Link className="text-slate-700 font-semibold" to="/about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link className="text-slate-700 font-semibold" to="/">
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link className="text-slate-700 font-semibold" to="/">
                            Cart
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
