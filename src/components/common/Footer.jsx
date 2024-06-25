const Footer = () => {
    return (
        <footer className="w-full px-14 py-3 flex items-center justify-center flex-col gap-2 bg-slate-200">
            <p className=" text-base text-center text-slate-700 font-medium">
                EcommEase | &copy; 2024
            </p>
            <nav>
                <a href="/" className="text-slate-600 mx-2">
                    Privacy Policy
                </a>
                <a href="/" className="text-slate-600 mx-2">
                    Terms of Service
                </a>
            </nav>
        </footer>
    );
};

export default Footer;
