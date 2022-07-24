import styles from "../../Styles/home/justOffer.module.css";
import Slider from "react-slick";
import { OfferBox } from "./OfferBox";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const db = [
  {
    img:
      "https://cms-contents.pharmeasy.in/offer/2846076d5d2-Diagnostics-10-min.png?dim=60x0&dpr=1&q=100",
    title: "Order medicines and get FLAT 400 OFF on...",
    code: "CARE4U"
  },
  {
    img:
      "https://cms-contents.pharmeasy.in/offer/37c262d84a5-25.jpg?dim=60x0&dpr=1&q=100",
    title: "Flat 25% OFF",
    code: "GIFT25"
  },
  {
    img:
      "https://cms-contents.pharmeasy.in/offer/40ef59a3196-Diagnostics-11-min.png?dim=60x0&dpr=1&q=100",
    title: "Order medicines worth Rs.1000 and get FLAT...",
    code: "GET1000"
  },
  {
    img:
      "https://cms-contents.pharmeasy.in/offer/b964e016470-Diagnostics-09-min.png?dim=60x0&dpr=1&q=100",
    title: "Get FLAT Rs.400 OFF on orders above Rs 1499.",
    code: "LABTEST400"
  },
  {
    img:
      "https://cms-contents.pharmeasy.in/offer/beff77d2d65-Diagnostics-11-min.png?dim=60x0&dpr=1&q=100",
    title: "Get FLAT Rs.1000 OFF on booking 2 Comprehensiv...",
    code: "GRAND1000"
  },
  {
    img:
      "https://cms-contents.pharmeasy.in/offer/6b979e67782-Diagnostics-02-min.png?dim=60x0&dpr=1&q=100",
    title: "Get FLAT Rs.300 cashback on PharmEasy Labtests...",
    code: "FIT300"
  }
];

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <IoIosArrowForward
      className={className}
      style={{
        ...style,
        display: "block",
        color: "black",
        height: "2rem",
        marginRight: "1rem",
        background: "none",
        width: "2rem",
        zIndex: 50
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
        color: "black",
        height: "2rem",
        width: "2rem",
        zIndex: 50
      }}
      onClick={onClick}
    />
  );
}

const JustOffer = () => {
  var settings = {
    dots: false,
    speed: 500,
    infinite: true,
    slidesToShow: 4.5,
    slidesToScroll: 1,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  return (
    <div className={styles.container}>
      <div className={styles.first}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div>
            <img
              width="80%"
              src="https://assets.pharmeasy.in/web-assets/dist/67890676.svg"
              alt=""
            />
          </div>
          <div
            style={{ fontWeight: "bold", color: "#55585e", fontSize: "20px" }}
          >
            Offers Just For You
          </div>
        </div>
        <div style={{ color: "teal", fontSize: "19px" }}>See All Offers</div>
      </div>
      <div className={styles.second}>
        <Slider {...settings}>
          {db.map((el, idx) => {
            return <OfferBox key={idx} props={el} />;
          })}
        </Slider>
      </div>
    </div>
  );
};

export { JustOffer };
