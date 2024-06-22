import { Link } from "react-router-dom";

const Header = () => {
    return (<header className="w-full px-16 py-3 flex items-center gap-[50px] bg-slate-200">
        <Link className="text-2xl font-bold text-blue-800" to={"/"}>Ecomm<span className="text-yellow-500">Ease</span></Link>
        <nav className="flex justify-between items-center w-full">
            <form className="flex bg-slate-100 rounded-md overflow-hidden w-1/2" action="">
                <input className="px-4 py-2 outline-none border-none w-full" type="search" placeholder="Search products" />
                <button className="px-6 py-2 bg-slate-300 text-slate-700 font-medium" type="submit">Search</button>
            </form>
            <ul className="flex gap-5">
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