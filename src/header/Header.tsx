import './Header.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Parallax, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
  

const Header = () => {
  return (
    <div className='header-wrapper'>
      <div className="header-top">
        <ul className='header-top-items'>
          <li className='header-top-item'><Link to="/smartphones">Smartphones</Link></li>
          <li className='header-top-item'><Link to="/laptops">Laptops</Link></li>
          <li className='header-top-item'><Link to="/fragrances">Fragrances</Link></li>
          <li className='header-top-item'><Link to="/skincare">Skincare</Link></li>
          <li className='header-top-item'><Link to="/groceries">Groceries</Link></li>
          <li className='header-top-item'><Link to="/home-decoration">Home-decoration</Link></li>
        </ul>
      </div>
      <div className="header-corusel">
        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }}
          speed={400}
          parallax={false}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Parallax, Pagination, Navigation]}
          className="mySwiper"
        >
          <div
            slot="container-start"
            className="parallax-bg"
            data-swiper-parallax="-23%"
          ></div>
          <SwiperSlide className='SwiperSlide-1'>
            <div className='carusel-left'>
              <div className="title" data-swiper-parallax="-300">
                <h4 style={{ fontWeight: "600", color: "#003147", marginBottom: "18px" }}>15% off a spring refresh </h4>
              </div>
              <div className="subtitle" data-swiper-parallax="-200">
                <h5 style={{ fontWeight: "400", color: "#003147" }}>Join us for the 2023-24 Crown Royale basketball breaks.</h5>
              </div>
              <div className="text" data-swiper-parallax="-100">
                <button>
                  Tune in
                </button>
              </div>
            </div>
            <div className='carusel-right'>
              <img src="https://i.ebayimg.com/images/g/1mQAAOSwropmIxmj/s-l960.webp" alt="wasd" />
            </div>
          </SwiperSlide>
          <SwiperSlide className='SwiperSlide-1'>
            <div className='carusel-left'>
              <div className="title" data-swiper-parallax="-300">
                <h4 style={{ fontWeight: "600", color: "#003147", marginBottom: "18px" }}>Post up for this eBay Live</h4>
              </div>
              <div className="subtitle" data-swiper-parallax="-200">
                <h5 style={{ fontWeight: "400", color: "#003147" }}>Join us for the 2023-24 Crown Royale basketball breaks.</h5>
              </div>
              <div className="text" data-swiper-parallax="-100">
                <button>
                  Tune in
                </button>
              </div>
            </div>
            <div className='carusel-right'>
              <img src="https://i.ebayimg.com/images/g/UFUAAOSwuotmOs57/s-l960.png" alt="wasd" />
            </div>
          </SwiperSlide>
          <SwiperSlide className='SwiperSlide-1'>
            <div className='carusel-left'>
              <div className="title" data-swiper-parallax="-300">
                <h4 style={{ fontWeight: "600", color: "#003147", marginBottom: "18px" }}>Up to 50% off gaming gear</h4>
              </div>
              <div className="subtitle" data-swiper-parallax="-200">
                <h5 style={{ fontWeight: "400", color: "#003147" }}>Join us for the 2023-24 Crown Royale basketball breaks.</h5>
              </div>
              <div className="text" data-swiper-parallax="-100">
                <button>
                  Tune in
                </button>
              </div>
            </div>
            <div className='carusel-right'>
              <img src="https://i.ebayimg.com/images/g/QKgAAOSwXdRlII06/s-l960.webp" alt="wasd" />
            </div>
          </SwiperSlide>
          <SwiperSlide className='SwiperSlide-4'>
            <div className="title" data-swiper-parallax="-300">
              <h4 style={{ fontWeight: "600", color: "#003147", marginBottom: "18px" }}>PoExplore fashion's Eternal Eras</h4>
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
              <h5 style={{ fontWeight: "400", color: "#003147" }}>Join us for the 2023-24 Crown Royale basketball breaks.</h5>
            </div>
            <div className="text" data-swiper-parallax="-100">
              <button>
                Tune in
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Header