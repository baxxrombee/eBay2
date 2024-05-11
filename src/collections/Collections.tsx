import { useEffect, useState } from 'react';
import "./Collections.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode } from 'swiper/modules';
import { WiDirectionRight } from "react-icons/wi";


interface Product {
  id: number;
  thumbnail: string;
  title: string;
}

const Collections = () => {

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products/?limit=15');
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="collections">
      <div className="collections__title">
        <p>Score these trending kicks</p>
      </div>
      <div className="collectons__products">
        <Swiper
          slidesPerView={7}
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
                <div className="collections__product">
                  <img src={product.thumbnail}
                    className="collections__product-image" />
                  <p>{product.title}</p>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
      <div className="collection_title">
        <p>Score these trending kicks</p>
        <button>See all<WiDirectionRight style={{ width: "60px", height: "60px",}} /></button>
      </div>
    </div>
  )
}

export default Collections