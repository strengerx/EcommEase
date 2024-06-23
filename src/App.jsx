import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import About from './pages/About'
import Home from './pages/Home'
import Products from './pages/Products'
import SingleProduct from './components/product/SingleProduct'
import './App.css'

const App = () => {

    return (<>
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='products'>
                    <Route index element={<Products />} />
                    <Route path=':categoryID/:categoryName' element={<Products />} />
                    <Route path=':productID' element={<SingleProduct />} />
                </Route>
            </Routes>
            <Footer />
        </Router>
    </>)
}

export default App
