import { useEffect, useState } from 'react';
import axios from 'axios';
import '../Category.css';
import skincareBanner from '../../images/skincareBanner.jpeg';
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { likeProduct, unlikeProduct } from '../../redux/SliceReducer';
import { cartProduct, unCartProduct } from '../../redux/cartSlice';

interface CategoryType {
  id: number;
  thumbnail: string;
  title: string;
  description: string;
  price: string;
}

const Category = () => {
  const [products, setProducts] = useState<CategoryType[]>([]);
  const dispatch = useDispatch();

  const likedProducts = useSelector((state) => state.like.likedProducts);
  const cartedProducts = useSelector((state) => state.cart.cartedProducts);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          'https://dummyjson.com/products/category/skincare'
        );
        const fetchedProducts = response.data.products;

        localStorage.setItem('skincareProducts', JSON.stringify(fetchedProducts));

        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Error fetching Category:', error);
      }
    };

    const localProducts = localStorage.getItem('skincareProducts');
    if (localProducts) {
      setProducts(JSON.parse(localProducts));
    } else {
      fetchProducts(); // Fetch products from API if not in local storage
    }
  }, []);

  const handleLike = (product: CategoryType, event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation(); 

    const isLiked = likedProducts.some(p => p.id === product.id); 
    if (isLiked) {
      dispatch(unlikeProduct(product)); 
    } else {
      dispatch(likeProduct(product)); 
    }
  };

  const handleCart = (product: CategoryType, event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation(); 
    const isCarted = cartedProducts.some(p => p.id === product.id); 
    if (isCarted) {
      dispatch(unCartProduct(product)); 
    } else {
      dispatch(cartProduct(product)); 
    }
  };

  return (
    <div className="Category__container">
      <div className="Category__wrapper">
        <div className="Category__title">
          <h3>Featured Event</h3>
        </div>
        <div className="Category__banner">
          <img src={skincareBanner} alt="CategoryBanner" />
          <div className="Category__banner__title">
            <h4>Up to 60% off Apple tech</h4>
            <p>Save on AirPods, iPhones, and more.</p>
          </div>
        </div>
        <div className="Category__line"></div>
        <div className="Category__products">
          {products.map((product) => {
            const isLiked = likedProducts.some(p => p.id === product.id); // Check if the product is liked
            const isCarted = cartedProducts.some(p => p.id === product.id); // Check if the product is liked
            return (
              <div className="Category__product-card" key={product.id}>
                <Link
                  to={`/singleProducts/${product.id}`}
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="Category__product-image"
                  />
                  <div className="Category__product-info">
                    <div className="Category__title__bottom">
                      <h4>{product.title}</h4>
                      <p>{product.description}</p>
                      <p>Price: ${product.price}</p>
                    </div>
                  </div>
                </Link>
                <div className="cart__bottom__wrapper">
                  <div
                    className="Category__heart"
                    onClick={(e) => handleLike(product, e)}
                  >
                    <div
                      className="heart_wrapper"
                      style={{ backgroundColor: isLiked ? 'red' : 'dodgerblue' }}
                    >
                      <CiHeart />
                    </div>
                  </div>
                  <div
                    className="Category__heart"
                    onClick={(e) => handleCart(product, e)}
                  >
                    <div
                      className="heart_wrapper  "
                      style={{ backgroundColor: isCarted ? 'red' : 'dodgerblue' }}
                    >
                      <IoCartOutline />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Category;
