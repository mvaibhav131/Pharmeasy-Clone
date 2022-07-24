import styles from "../../Styles/home/dealsOfDay.module.css";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { DayCard } from "./DayCard";

const db = [
  {
    img:
      "https://cdn01.pharmeasy.in/dam/products_otc/I48459/sirona-feminine-cramp-relief-patch-packet-of-5-s-2-1641788205.jpg?dim=224x0&dpr=1&q=100",
    title: "Sirona Feminine Cramp Relief Patch Packet Of 5 's",
    discount: "10% OFF",
    strike: "₹249",
    price: "₹224.1"
  },
  {
    img:
      "https://cdn01.pharmeasy.in/dam/products_otc/105920/himalaya-liv52-tablets-100s-2-1654078567.jpg?dim=224x0&dpr=1&q=100",
    title: "Himalaya Liv.52 Tablets - 100's",
    discount: "20% OFF",
    strike: "₹130",
    price: "₹104"
  },
  {
    img:
      "https://cdn01.pharmeasy.in/dam/products_otc/J51815/liveasy-wellness-apple-cider-vinegar-with-mother-improves-metabolism-500ml-bottle-2-1654165611.jpg?dim=224x0&dpr=1&q=100",
    title: "Liveasy Wellness Apple Cider Vinegar With Mother -...",
    discount: "33% OFF",
    strike: "₹649",
    price: "₹434.83"
  },
  {
    img:
      "https://cdn01.pharmeasy.in/dam/products_otc/I00596/revital-h-women-multivitamin-with-calcium-zinc-ginseng-for-immunity-strong-bones-energy-30-tablets-1-1654168794.jpg?dim=224x0&dpr=1&q=100",
    title: "Revital H Women Multivitamin With Calcium,...",
    discount: "15% OFF",
    strike: "₹345",
    price: "₹293.25"
  },
  {
    img:
      "https://cdn01.pharmeasy.in/dam/products_otc/183157/volini-pain-relief-gel-tube-of-75-g-1-1654078754.jpg?dim=224x0&dpr=1&q=100",
    title: "Volini Pain Relief Gel Tube Of 75 G",
    discount: "15% OFF",
    strike: "₹245",
    price: "₹208.25"
  },
  {
    img:
      "https://cdn01.pharmeasy.in/dam/products_otc/071710/evion-400mg-strip-of-10-capsules-2-1656662057.jpg?dim=224x0&dpr=1&q=100",
    title: "Evion 400mg Strip Of 10 Capsules",
    discount: "10% OFF",
    strike: "₹35.9",
    price: "₹32.31"
  },
  {
    img:
      "https://cdn01.pharmeasy.in/dam/products_otc/I32380/livogen-z-captab-15s-2-1656662098.jpg?dim=224x0&dpr=1&q=100",
    title: "Livogen Z Captab 15's",
    discount: "10% OFF",
    strike: "₹79.4",
    price: "₹71.46"
  },
  {
    img:
      "https://cdn01.pharmeasy.in/dam/products_otc/N15573/pharmeasy-diabetic-orthopedic-men-sandals-fahion-range-3-brown-color-size-10-1-1647418991.jpg?dim=224x0&dpr=1&q=100",
    title: "Pharmeasy Diabetic & Orthopedic Men Sandals...",
    discount: "25% OFF",
    strike: "₹1399",
    price: "₹1049.25"
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

const DealsOfDay = () => {
  var settings = {
    dots: false,
    speed: 500,
    infinite: true,
    slidesToShow: 5.5,
    slidesToScroll: 1,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        {/* left */}
        <div>
          <div>
            <img
              src="https://assets.pharmeasy.in/web-assets/dist/cc9b301d.svg"
              alt=""
            />
          </div>
          <div
            style={{
              paddingRight: "25px",
              color: "#55585e"
            }}
          >
            Deals of the Day
          </div>
        </div>
        {/* right */}
        <div>
          <div style={{ fontSize: "20px", color: "#158783" }}>View All</div>
        </div>
      </div>

      <div className={styles.slider}>
        <Slider {...settings}>
          {db.map((el) => {
            return <DayCard props={el} />;
          })}
        </Slider>
      </div>
    </div>
  );
};

export { DealsOfDay };
