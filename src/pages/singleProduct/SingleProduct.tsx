import './SingleProduct.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

interface Product {
    images: string[];
    price: number;
    brand: string;
    title: string;
    description: string;
    rating: string;
    stock: string;
    category: string;
}

const SingleProduct: React.FC = () => {
    const { id } = useParams<string>();
    const [thumbsSwiper, setThumbsSwiper] = useState<Swiper | null>(null);
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [mainImageIndex, setMainImageIndex] = useState<number>(0);

    useEffect(() => {
        const fetchProduct = async (): Promise<void> => {
            try {
                const response = await fetch(`https://dummyjson.com/products/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch product');
                }
                const data = await response.json();
                setProduct(data);
                setLoading(false);

                // Save the viewed product details to local storage
                localStorage.setItem('viewedProduct', JSON.stringify(data));
            } catch (error) {
                console.error('Error fetching product:', error);
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!product) {
        return <div>No product found</div>;
    }

    const { title, description, price, images, rating, stock, category, brand } = product;

    const handleThumbnailClick = (index: number): void => {
        setMainImageIndex(index);
    };

    return (
        <div className="single__product">
            <div className="single__product__swiper">
                <Swiper
                    style={{
                        '--swiper-navigation-color': 'dodgerblue',
                        '--swiper-pagination-color': 'dodgerblue',
                    }}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper10"
                    initialSlide={mainImageIndex}
                >
                    <SwiperSlide className="SwiperSlidetop">
                        <img src={images[mainImageIndex]} alt={title} />
                    </SwiperSlide>
                </Swiper>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper11"
                >
                    {images.map((img, index) => (
                        <SwiperSlide
                            key={index}
                            className="SwiperSlidetop2"
                            onClick={() => handleThumbnailClick(index)}
                        >
                            <img src={img} alt={`Thumbnail ${index}`} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="product__description">
                <h2>{title}</h2>
                <div className="line_div"></div>
                <div className="title__product">
                    <div className='title__product__wrapper'><p>Description: </p><span>{description}</span></div>
                    <div className='title__product__wrapper'><p>Price: $ </p><span>{price}</span></div>
                    <div className='title__product__wrapper'><p>Rating: </p><span>{rating}</span></div>
                    <div className='title__product__wrapper'><p>Stock: </p><span>{stock}</span></div>
                    <div className='title__product__wrapper'><p>Category: </p><span>{category}</span></div>
                    <div className='title__product__wrapper'><p>Brand: </p><span>{brand}</span></div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
