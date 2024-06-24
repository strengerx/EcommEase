import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { IoIosSearch } from "react-icons/io";

const Header = () => {

    const navigate = useNavigate()

    const [searchQuery, setSearchQuery] = useState("")
    const handleInputChange = (e) => {
        setSearchQuery(e.target.value)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        navigate(`/products/search?query=${searchQuery}`)
    }

    const [isNavOpen, setIsNavOpen] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsNavOpen(false)
            } else {
                setIsNavOpen(true)
            }
        }
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return (<header className="w-full px-4 py-3 flex items-center justify-between gap-[50px] bg-slate-200">
        <Link className="text-3xl font-bold text-blue-800" to={"/"}>Ecomm<span className="text-yellow-500">Ease</span></Link>
        <nav className={`flex lg:justify-between justify-end items-center w-full`}>
            <form onSubmit={handleFormSubmit} className="flex bg-slate-100 rounded-md overflow-hidden w-full lg:w-1/2" action="">
                <input value={searchQuery} onChange={handleInputChange} className="px-4 py-2 outline-none border-none w-full" type="search" placeholder="Search products" />
                <button className="md:px-6 px-3 text-lg py-2 bg-slate-300 text-slate-700 font-medium" type="submit">
                    {isNavOpen ? <IoIosSearch /> : "Search"}
                </button>
            </form>
            <ul className="lg:flex gap-5 hidden">
                <li><Link className="text-slate-700 font-semibold" to={"/"}>Home</Link></li>
                <li><Link className="text-slate-700 font-semibold" to={"/about"}>About</Link></li>
                <li><Link className="text-slate-700 font-semibold" to={"/products"}>Products</Link></li>
                <li><Link className="text-slate-700 font-semibold" to={"/"}>Profile</Link></li>
                <li><Link className="text-slate-700 font-semibold" to={"/"}>Cart</Link></li>
            </ul>
        </nav>
    </header>);
};

export default Header;
