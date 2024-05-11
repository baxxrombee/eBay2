import './App.css';
import Home from './home/Home';
import { Routes, Route, useLocation } from 'react-router-dom';
import Laptops from './pages/laptops/Laptops';
import Fragrances from './pages/fragrances/Fragrances';
import Skincare from './pages/skincare/Skincare';
import Groceries from './pages/groceries/Groceries';
import HomeDecoration from './pages/home-decoration/HomeDecoration';
import Nav from './nav/Nav';
import Footer from './footer/Footer';
import Smartphones from './pages/smartphones/Smartphones';
import SingleProduct from './pages/singleProduct/SingleProduct';
import LikePage from './pages/LikePage/LikePage';
import Cart from './pages/Cart/Cart';
import Login from './auth/login/Login';
import Register from './auth/register/Register';

function App() {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <>
      {!isAuthPage && <Nav />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/laptops" element={<Laptops />} />
        <Route path="/smartphones" element={<Smartphones />} />
        <Route path="/fragrances" element={<Fragrances />} />
        <Route path="/skincare" element={<Skincare />} />
        <Route path="/groceries" element={<Groceries />} />
        <Route path="/home-decoration" element={<HomeDecoration />} />
        <Route path="/singleProducts/:id" element={<SingleProduct />} />
        <Route path="/like" element={<LikePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      {!isAuthPage && <Footer />}
    </>
  );
}

export default App;
