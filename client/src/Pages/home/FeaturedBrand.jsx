import styles from "../../Styles/home/featuredBrand.module.css";
import Slider from "react-slick";
import { FeatureCards } from "./FeatureCards";
import { Heading } from "@chakra-ui/layout";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

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

const db = [
  {
    img:
      "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/6d462f424a43372ea8b7b6f8ca13e052.png",
    title: "Covid Essentials",
    link: "/products/Covid Essentials"
  },
  {
    img:
      "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/b4a3a67a59783e0ca738884c9acc8e7b.png",
    title: "Personal Care",
    link: "/products/Personal Care"
  },
  {
    img:
      "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/62e6d7551ecf3a5da1d2336c41cc0549.png",
    title: "Health Food and Drinks",
    link: "/products/Health Food and Drinks"
  },
  {
    img:
      "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/8a45f5baa68e3b72ae631003faa97bdb.png",
    title: "Beauty",
    link: "/products/Beauty"
  },
  {
    img:
      "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/ff5aaa03881e3016bf409f85b4e328aa.png",
    title: "Skin Care",
    link: "/products/Skin Care"
  },
  {
    img:
      "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/68ae87e29f4a3abbb8ed69fe7ecf057c.png",
    title: "Home Care",
    link: "/products/Home Care"
  },
  {
    img:
      "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/4209e1d247cd30fca1f619786fa3e9c1.png",
    title: "Ayurvedic Care",
    link: "/products/Ayurvedic Care"
  },
  {
    img:
      "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/7e509ee2f5413b0483d00c0b30067ee0.png",
    title: "Sexual Wellness",
    link: "/products/Sexual Wellness"
  },
  {
    img:
      "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/0e9613b95131376b95bcbf92c48149b5.png",
    title: "Fitness & Supplements",
    link: "/products/Fitness & Supplements"
  },
  {
    img:
      "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/af8d32e30757338787ca3e9267865d4f.png",
    title: "Mother and Baby Care",
    link: "/products/Mother and Baby Care"
  }
];

const FeaturedBrand = () => {
  var settings = {
    dots: false,
    speed: 500,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  return (
    <div className={styles.container}>
      <Heading size="md" m="1rem" style={{ color: "#55585e" }}>
        Featured Brands
      </Heading>
      <div>
        <Slider {...settings}>
          {db.map((el) => (
            <FeatureCards props={el} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export { FeaturedBrand };
