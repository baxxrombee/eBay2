import { useEffect, useState } from 'react';
import "./Collections2.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode } from 'swiper/modules';
import { WiDirectionRight } from "react-icons/wi";


interface Product {
  id: number;
  thumbnail: string;
  price: number;
  title: string
}

const Collections2 = () => {

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products/category/home-decoration');
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="collections2">
      <div className="collections2__title">
        <p>Score these trending home-decoration  </p>
      </div>
      <div className="collection2_title">
        <p>Today's Deals – All With Free Shipping</p>
        <button>See all<WiDirectionRight style={{ width: "60px", height: "60px", }} /></button>
      </div>
      <div className="collectons2__products">
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode]}
          className="mySwiper"
        >
          {
            products.map(product => (
              <SwiperSlide className='Swiper1' key={product.id}>
                <div className="collections2__product">
                  <img src={product.thumbnail}
                    className="collections2__product-image" />
                  <div className="collection2__title">
                    <p>{product.title}</p>
                    <p>{product.price}$</p>
                  </div>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </div>
  )
}

export default Collections2