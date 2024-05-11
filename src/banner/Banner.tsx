import "./Banner.css"
import eBayBanner from "../images/bannerEBayImage.png"
import { WiDirectionRight } from "react-icons/wi";
import bannerImage from "../images/bannerImage.png"
import bannerImageRight from "../images/bannerImageRight.png"

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__wrapper">
        <div className="banner__left">
          <div className="banner__title">
            <p>Featured</p>
            <img src={eBayBanner} alt="eBay" />
            <h4>Deals made easy all year long.</h4>
            <h6>Free shipping. Best prices.</h6>
            <button>Get your thing<WiDirectionRight style={{ width: "30px", height: "30px", }} /></button>
          </div>
          <div className="banner__left__right">
            <img src={bannerImage} alt="bannerImage" />
          </div>
        </div>
        <div className="banner__right">
          <img src={bannerImageRight} alt="bannerImageRight" />
        </div>
      </div>
    </div>
  )
}

export default Banner