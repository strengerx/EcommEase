import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import About from "./pages/About";
import Home from "./pages/Home";
import Products from "./pages/Products";
import SingleProduct from "./components/product/SingleProduct";
import PageNotFound from "./components/common/PageNotFound";
import "./App.css";

export default function App() {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="shop">
                        <Route index element={<Products />} />
                        <Route path=":categoryID/:categoryName" element={<Products />} />
                        <Route path=":productID" element={<SingleProduct />} />
                        <Route path="search" element={<Products />} />
                    </Route>
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
                <Footer />
            </Router>
        </>
    );
}
