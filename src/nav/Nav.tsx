import { useState, useEffect } from 'react';
import "./Nav.css";
import { IoCartOutline } from "react-icons/io5";
import Ebay from '../images/ebayHeadLogo.png'
import { CiHeart } from "react-icons/ci";
import { Link } from 'react-router-dom';

interface Product {
    title: string;
}

const Nav = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<Product[]>([]);
    const [selectedNavItem, setSelectedNavItem] = useState<string | null>(null);

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`https://dummyjson.com/products?q=${searchQuery}`);
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }
            const data = await response.json();
            setSearchResults(data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handleChange = (e) => {
        e.preventDefault();
        setSearchQuery(e.target.value);
    };

    const handleNavItemClick = (item: string) => {
        localStorage.setItem('selectedNavItem', item);
        setSelectedNavItem(item);
    };

    useEffect(() => {
        const storedNavItem = localStorage.getItem('selectedNavItem');
        setSelectedNavItem(storedNavItem);
    }, []);

    return (
        <div className="navbar">
            <div className="nav__top">
                <div className="nav__top__left">
                    <ul className="nav__top__left__items">
                        <li className={`nav__top__left__item ${selectedNavItem === "login" ? "active" : ""}`} onClick={() => handleNavItemClick("login")}>
                            <a href="/">Hi! <Link to="/login">Login</Link> in or <Link to="/register">register</Link></a>
                        </li>
                        <li className={`nav__top__left__item ${selectedNavItem === "dailyDeals" ? "active" : ""}`} onClick={() => handleNavItemClick("dailyDeals")}>
                            <a href="/">Daily Deals</a>
                        </li>
                        <li className={`nav__top__left__item ${selectedNavItem === "brandOutlet" ? "active" : ""}`} onClick={() => handleNavItemClick("brandOutlet")}>
                            <a href="/">Brand Outlet</a>
                        </li>
                        <li className={`nav__top__left__item ${selectedNavItem === "giftCards" ? "active" : ""}`} onClick={() => handleNavItemClick("giftCards")}>
                            <a href="/">Gift Cards</a>
                        </li>
                        <li className={`nav__top__left__item ${selectedNavItem === "helpContact" ? "active" : ""}`} onClick={() => handleNavItemClick("helpContact")}>
                            <a href="/">Help & Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="nav__top__right">
                    <ul className="nav__top__right__items">
                        <li className="nav__top__right__item"><Link to={"/cart"}>Sell</Link></li>
                        <li className="nav__top__right__item"><Link to={"/like"}>Watchlist</Link></li>
                        <li className="nav__top__right__item">
                            <select style={{ border: "none", width: "90px" }}>
                                <option>Summary</option>
                                <option>Recently Viewed</option>
                                <option>Bids/Offers</option>
                                <option>Watchlist</option>
                                <option>Purchase History</option>
                                <option>Buy Again</option>
                                <option>Selling</option>
                                <option>Saved Searcher</option>
                                <option>Saved Sallers</option>
                                <option>My Garage</option>
                                <option>Sized</option>
                                <option>Massages</option>
                                <option>Collection Beta</option>
                                <option>The eBay vault</option>
                            </select>
                        </li>
                        <li className="nav__top__right__item"><Link to="/like"><CiHeart style={{ width: "25px", height: "25px", cursor: "pointer" }} /></Link></li>
                        <li className="nav__top__right__item"><Link to="/cart"><IoCartOutline style={{ width: "25px", height: "25px", cursor: "pointer" }} /></Link></li>
                    </ul>
                </div>
            </div>
            <div className="nav__line"></div>
            <div className="nav__wrapper">
                <Link to={"/home"}><img src={Ebay} alt="logo image" /></Link>
                <form onSubmit={handleSearch}> 
                    <div className="search__wrapper">
                        <input type="text" placeholder="Search for anything" value={searchQuery} onChange={handleChange} />
                        <button onClick={handleSearch}>Search</button>
                    </div>
                </form>
                <p>Advanced</p>
            </div>
            <div className="nav__line"></div>
            {searchResults.length > 0 && (
                <div className="search-results">
                    <ul>
                        {searchResults.map((product, index) => (
                            <li key={index}>{product.title}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Nav;
