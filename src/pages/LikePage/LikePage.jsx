import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { RiDislikeLine } from "react-icons/ri";
import { unlikeProduct } from "../../redux/SliceReducer"; 
import "./LikePage.css";

const LikePage = () => {
  const likedProducts = useSelector((state) => state.like.likedProducts);
  const dispatch = useDispatch(); 

  useEffect(() => {
    const savedLikedProducts = JSON.parse(localStorage.getItem("likedProducts"));
    if (savedLikedProducts) {
      dispatch(unlikeProduct(savedLikedProducts)); 
    }
  }, [dispatch]);

  const handleDislike = (productId) => {
    dispatch(unlikeProduct({ id: productId }));

    const updatedLikedProducts = likedProducts.filter(product => product.id !== productId);
    localStorage.setItem("likedProducts", JSON.stringify(updatedLikedProducts));
  };

  return (
    <div className="like-page">
      <h2>Liked Products</h2>
      {likedProducts.length === 0 ? (
        <p>No products have been liked yet.</p>
      ) : (
        <div className="liked-products">
          {likedProducts.map((product) => (
            <div className="like-card" key={product.id}>
              <Link to={`/singleProducts/${product.id}`}>
                <img src={product.thumbnail} alt={product.title} className="like-image" />
                <div className="like-info">
                  <h4>{product.title}</h4>
                  <p>{product.description}</p>
                  <p><b>Price: </b>${product.price}</p>
                </div>
              </Link>
              <div
                className="like-icon"
                onClick={() => handleDislike(product.id)} 
              >
                <RiDislikeLine />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LikePage;
