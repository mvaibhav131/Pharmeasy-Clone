import styles from "../../Styles/home/healthArticles.module.css";
import Slider from "react-slick";
import { HealthCard } from "./HealthCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Heading } from "@chakra-ui/layout";

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
      "https://blog-images.pharmeasy.in/2022/07/18013014/18.jpg?dim=0x230&dpr=1&q=100",
    title: "Best Home Remedies For Thick Eyebrows",
    para:
      "Table of Contents Introduction: What Causes Thin Eyebrows?Symptoms of Thin Eyebrows:Home Remedies for Thick...",
    link: "https://pharmeasy.in/blog/?p=161295"
  },
  {
    img:
      "https://blog-images.pharmeasy.in/2022/07/18011028/6.jpg?dim=0x230&dpr=1&q=100",
    title: "Natural Home Remedies To Reduce Belly Fat",
    para:
      "Table of Contents Introduction What Causes Belly Fat?Symptoms of Belly Fat:Home Remedies for Belly Fat:When to Seek Medical...",
    link: "https://pharmeasy.in/blog/?p=161298"
  },
  {
    img:
      "https://blog-images.pharmeasy.in/2022/07/18005945/7.jpg?dim=0x230&dpr=1&q=100",
    title: "Best Home Remedies for Oily Scalp and Hair",
    para:
      "Table of Contents Introduction: What Causes Oily Scalp and Hair?Symptoms of Oily Scalp and Hair:Home Remedies for Oily Scalp...",
    link: "https://pharmeasy.in/blog/?p=161318"
  },
  {
    img:
      "https://blog-images.pharmeasy.in/2022/07/21185347/Blog-Image-21-july.jpg?dim=0x230&dpr=1&q=100",
    title: "Everything You Need To Know About Male Reproductiv...",
    para:
      "Table of Contents Internal and external aspects of the male reproductive systemHow the male reproductive system",
    link: "https://pharmeasy.in/blog/?p=161682"
  },
  {
    img:
      "https://blog-images.pharmeasy.in/2022/07/18132435/Blog-Image-18-july-01.jpg?dim=0x230&dpr=1&q=100",
    title: "What Is Syphilis? Read This Blog To Know More",
    para:
      "Table of Contents Stages of SyphilisWhat causes Syphilis?Risk factors of SyphilisWhat signs do you have of Syphilis?How does...",
    link:
      "https://blog-images.pharmeasy.in/2022/07/18132435/Blog-Image-18-july-01.jpg?dim=0x230&dpr=1&q=100"
  },
  {
    img:
      "https://blog-images.pharmeasy.in/2022/07/18143950/Blog-Image-18-july-02.jpg?dim=0x230&dpr=1&q=100",
    title: "All You Need To Know About Common Sexually Trans...",
    para:
      "Table of Contents What causes sexually transmitted diseases?Common STD symptomsHIV/AIDSGenital...",
    link: "https://pharmeasy.in/blog/?p=161507"
  }
];

const HealthArticles = () => {
  var settings = {
    dots: false,
    speed: 500,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <Heading size="md" m="1rem" style={{ color: "#55585e" }}>
          Health Articles
        </Heading>

        <Heading
          size="md"
          m="1rem"
          style={{ color: "teal", fontWeight: "normal" }}
        >
          See Also
        </Heading>
      </div>
      <div>
        <Slider {...settings}>
          {db.map((el, idx) => (
            <HealthCard key={idx} props={el} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export { HealthArticles };
