import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <IoIosArrowForward
      className={className}
      style={{
        ...style,
        display: "block",
        color: "white",
        height: "2rem",
        marginRight: "1rem",
        background: "none",
        width: "2rem",
        zIndex: 50,
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <IoIosArrowBack
      className={className}
      style={{
        ...style,
        display: "block",
        marginLeft: "1rem",
        background: "none",
        color: "white",
        height: "2rem",
        width: "2rem",
        zIndex: 50,
      }}
      onClick={onClick}
    />
  );
}
const TopSlider = () => {
  var settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div style={{ backgroundColor: "teal", height: "230px" }}>
      <div
        style={{
          // backgroundColor: "whitesmoke",
          paddingBottom: "30px",
          width: "98%",
          margin: "auto",
        }}
      >
        <Slider {...settings}>
          <div>
            <img
              style={{ width: "100%" }}
              src="https://cms-contents.pharmeasy.in/banner/c414a98e027-dwebjpg.jpg?dim=1440x0&dpr=1&q=100"
              alt=""
            />
          </div>
          <div>
            <img
              style={{ width: "100%" }}
              src="https://cms-contents.pharmeasy.in/banner/3f636edf697-GRAND1000_Dweb.jpg?dim=1440x0&dpr=1&q=100"
              alt=""
            />
          </div>
          <div>
            <img
              style={{ width: "100%" }}
              src="https://cms-contents.pharmeasy.in/banner/4a92d1f76bf-Get_end_to_end.jpg?dim=1440x0&dpr=1&q=100"
              alt=""
            />
          </div>
          <div>
            <img
              style={{ width: "100%" }}
              src="https://cms-contents.pharmeasy.in/banner/31e6940d27f-WP.jpg?dim=1440x0&dpr=1&q=100"
              alt=""
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export { TopSlider };
