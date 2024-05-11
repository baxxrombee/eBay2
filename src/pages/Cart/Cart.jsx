import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { unCartProduct } from "../../redux/cartSlice";
import { MdDelete } from "react-icons/md";

import "./Cart.css";

const Cart = () => {
  const cartedProducts = useSelector((state) => state.cart.cartedProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedCartedProducts = localStorage.getItem("cartedProducts");
    if (storedCartedProducts) {
      dispatch(unCartProduct(JSON.parse(storedCartedProducts)));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("cartedProducts", JSON.stringify(cartedProducts));
  }, [cartedProducts]);

  const handleDisCart = (productId) => {
    dispatch(unCartProduct({ id: productId }));
  };

  return (
    <div className="like-page">
      <h2>CART LIST</h2>
      {cartedProducts.length === 0 ? (
        <p>No products have been added to the cart yet.</p>
      ) : (
        <div className="liked-products">
          {cartedProducts.map((product) => (
            <div className="like-card" key={product.id}>
              <Link to={`/singleProducts/${product.id}`}>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="like-image"
                />
                <div className="like-info">
                  <h4>{product.title}</h4>
                  <p>{product.description}</p>
                  <p>
                    <b>Price: </b>${product.price}
                  </p>
                </div>
              </Link>
              <div
                className="like-icon"
                onClick={() => handleDisCart(product.id)}
              >
                <MdDelete />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
