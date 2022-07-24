import styles from "../../Styles/home/labTest.module.css";
import Slider from "react-slick";
import { LabTestInfo } from "./LabTestInfo";
import { LabTestCards } from "./LabTestCards";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const db = [
  {
    img: "https://assets.pharmeasy.in/web-assets/dist/51ffd21a.svg",
    title: "Comprehensive Full Body Chec...",
    price: "₹1,499"
  },
  {
    img: "https://assets.pharmeasy.in/web-assets/dist/909edb3f.svg",
    title: "Post Prandial Blood Sugar (PPBS)",
    price: "₹199"
  },
  {
    img: "https://assets.pharmeasy.in/web-assets/dist/51ffd21a.svg",
    title: "PSP-D",
    price: "₹499"
  },
  {
    img: "https://assets.pharmeasy.in/web-assets/dist/909edb3f.svg",
    title: "Random Blood Sugar (RBS)",
    price: "₹99"
  },
  {
    img: "https://assets.pharmeasy.in/web-assets/dist/909edb3f.svg",
    title: "Covid-19 RTPCR (Coronavirus S...",
    price: "₹700"
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
const LabTest = () => {
  var settings = {
    dots: false,
    speed: 500,
    infinite: false,
    slidesToShow: 4.5,
    slidesToScroll: 1,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div
        style={{
          color: "#4f585e",
          fontWeight: "bold",
          fontSize: "20px"
        }}
      >
        Frequently Booked Lab Tests
      </div>
      <div className={styles.second}>
        <Slider {...settings}>
          <LabTestInfo />
          {db.map((el) => {
            return <LabTestCards props={el} />;
          })}
        </Slider>
      </div>
    </div>
  );
};

export { LabTest };
