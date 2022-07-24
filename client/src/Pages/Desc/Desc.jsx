import React, { useState } from "react";
import { useEffect } from "react";
import styles from "../../Styles/Desc.module.css";
import axios from "axios";
import { Heading } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Stack, HStack, VStack } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Select } from "@chakra-ui/react";
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
        // marginRight: "1rem",
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
        // marginLeft: "1rem",
        background: "none",
        color: "black",
        height: "2rem",
        width: "2rem",
        zIndex: 50,
      }}
      onClick={onClick}
    />
  );
}

const Desc = () => {
  const [desData, setDesdata] = useState([]);
  const [slider, setSlider] = useState([]);
  const [qty, setQty] = useState(0);
  const [val, setVal] = useState("");
  const navigate = useNavigate();
  const [cartdata, setCartdata] = useState([]);
  const detail = JSON.parse(localStorage.getItem("productDetails"));
  const detail2 = JSON.parse(localStorage.getItem("frequently"));
  const { title } = useParams();

  useEffect(() => {
    getData();
    getData2();
  }, [title]);

  //slider req
  const getData2 = () => {
    axios
      .get(`https://pharmeasylion.herokuapp.com/api/product?q=${detail2}`)
      .then(({ data }) => {
        setSlider(data);
      });
  };

  //req for desc page
  const getData = () => {
    axios
      .get(`https://pharmeasylion.herokuapp.com/api/product/single/${title}`)
      .then(({ data }) => {
        setDesdata(data);
      });
  };

  const [state, setState] = useState(false);

  const handleClick1 = (e) => {};
  const handleClick2 = () => {};
  const handleClick3 = () => {};

  //main add to cart
  var product_id = desData._id;
  var Qty = val;
  var UserId = localStorage.getItem("user_id");

  const handleAddToCart = async () => {
    const res = await axios.post(
      "https://pharmeasylion.herokuapp.com/api/cart",
      {
        productId: product_id,
        qty: Number(val),
        user_id: UserId,
      }
    );
  };

  //slider add to cart
  const handleAddToCartS = async (el) => {};

  //view cart button
  const handleViewCart = () => {
    navigate("/cart");
  };

  //offer cal
  var offer = (
    100 -
    (Number(desData.mrp) / Number(desData.strike)) * 100
  ).toFixed(2);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  if (state === false) {
    return (
      <>
        <div className={styles.div}>
          <div>
            <p style={{ display: "flex" }}>
              Home{" "}
              <IoIosArrowForward
                style={{ width: "4vh", marginTop: "0.2rem" }}
              />{" "}
              {desData.title}
            </p>
          </div>
          <div className={styles.outer_div_1}>
            <div className={styles.main_div1}>
              <div className={styles.desc_img_div1}>
                <img src={desData.img1} alt="" />
              </div>
              <div className={styles.desc_img_div2}>
                <img onClick={handleClick1} src={desData.img1} alt="" />
                <img onClick={handleClick2} src={desData.img2} alt="" />
                <img onClick={handleClick3} src={desData.img3} alt="" />
              </div>
            </div>
            <div className={styles.main_div2}>
              <Heading as="h1" fontSize="20px">
                {desData.title}
              </Heading>

              <div style={{ display: "flex", gap: "20px" }}>
                <Heading as="h1" fontSize="20px">
                  {"\u20B9"}
                  {desData.mrp}
                </Heading>
                <p>MRP</p>
                <p
                  style={{
                    textDecorationLine: "line-through",
                    textDecorationStyle: "solid",
                  }}
                >
                  {"\u20B9"}
                  {desData.strike}
                </p>
                <p
                  style={{
                    backgroundImage:
                      "url(" +
                      "https://assets.pharmeasy.in/web-assets/_next/icons/pdp-discount.png" +
                      ")",
                    fontSize: "13px",
                    margin: "auto",
                    color: "white",
                    marginTop: "-1px",
                  }}
                >
                  {offer}%OFF
                </p>
              </div>

              <p style={{ fontSize: "12px" }}>Inclusive of all taxes</p>
              <p>Delivery by Tommorrow, before 10.00 pm</p>
            </div>
            <div className={styles.main_div3}>
              <Select
                onClick={handleAddToCart}
                placeholder="Add to Cart"
                color="white"
                w="9rem"
                backgroundColor="teal"
                onChange={(e) => setVal(e.target.value)}
              >
                <option style={{ color: "black" }} value="1">
                  1
                </option>
                <option style={{ color: "black" }} value="2">
                  2
                </option>
                <option style={{ color: "black" }} value="3">
                  3
                </option>
                <option style={{ color: "black" }} value="4">
                  4
                </option>
                <option style={{ color: "black" }} value="5">
                  5
                </option>
                <option style={{ color: "black" }} value="6">
                  6
                </option>
                <option style={{ color: "black" }} value="7">
                  7
                </option>
                <option style={{ color: "black" }} value="8">
                  8
                </option>
                <option style={{ color: "black" }} value="9">
                  9
                </option>
                <option style={{ color: "black" }} value="10">
                  10
                </option>
              </Select>
            </div>

            <div className={styles.main_div4}>
              <p style={{ fontWeight: "bold" }}>Items in Cart</p>

              <Stack
                spacing={4}
                direction="row"
                align="center"
                marginTop="1rem"
                marginBottom="4rem"
              >
                <Button
                  onClick={handleViewCart}
                  colorScheme="teal"
                  size="lg"
                  width="20rem"
                >
                  View Cart{" "}
                  <IoIosArrowForward
                    style={{ marginLeft: "1.5rem", width: "4vh" }}
                  />
                </Button>
              </Stack>

              <div className={styles.offerdiv}>
                <p style={{ fontWeight: "bold" }}>Offers just for you</p>
                <div
                  style={{ display: "flex", marginTop: "1rem", gap: "10px" }}
                >
                  <img
                    src="https://cms-contents.pharmeasy.in/offer/60165886431-ten_per.jpg"
                    alt=""
                  />
                  <p>
                    Get extra 10% Off on Everherb, Liveasy
                    <br />
                    PharmEasy products
                  </p>
                </div>
                <div
                  style={{ display: "flex", marginTop: "1rem", gap: "10px" }}
                >
                  <img
                    src="https://cms-contents.pharmeasy.in/offer/94fa2133c15-Plum_logo2.jpg"
                    alt=""
                  />
                  <p>Get Flat 50% off on Plum</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.slider_1}>
            <Heading as="h4" size="md">
              Frequently Bought Together
            </Heading>
            <Slider {...settings}>
              {slider.map((el) => {
                return (
                  <>
                    <div className={styles.slider_1_div}>
                      <div className={styles.slider_1_div_flex}>
                        <img className={styles.slider_img} src={el.img1} />
                        <p style={{ height: "7rem", fontSize: "13px" }}>
                          {el.title}
                        </p>
                        <p
                          style={{
                            fontSize: "13px",
                            textDecorationLine: "line-through",
                            textDecorationStyle: "solid",
                          }}
                        >
                          MRP {"\u20B9"}
                          {el.strike}
                        </p>
                        <p>
                          {"\u20B9"} {el.mrp}{" "}
                        </p>

                        <Select
                          onClick={handleAddToCartS(el)}
                          color="teal"
                          margin="auto"
                          width="25vh"
                          onChange={(e) => setVal(e.target.value)}
                          placeholder="Add to Cart"
                        >
                          <option style={{ color: "black" }} value="1">
                            1
                          </option>
                          <option style={{ color: "black" }} value="2">
                            2
                          </option>
                          <option style={{ color: "black" }} value="3">
                            3
                          </option>
                          <option style={{ color: "black" }} value="4">
                            4
                          </option>
                          <option style={{ color: "black" }} value="5">
                            5
                          </option>
                          <option style={{ color: "black" }} value="6">
                            6
                          </option>
                          <option style={{ color: "black" }} value="7">
                            7
                          </option>
                          <option style={{ color: "black" }} value="5">
                            8
                          </option>
                          <option style={{ color: "black" }} value="6">
                            9
                          </option>
                          <option style={{ color: "black" }} value="7">
                            10
                          </option>
                        </Select>
                      </div>
                    </div>
                  </>
                );
              })}
            </Slider>
          </div>

          <div className={styles.bottom_1}>
            <div>
              <img
                className={styles.bottom_1_img1}
                src="https://is5-ssl.mzstatic.com/image/thumb/Purple125/v4/25/e3/46/25e346ae-5ef1-7160-ce1b-b026792dae2d/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/230x0w.webp"
                alt=""
              />
              <Heading as="h4" size="md">
                1 Lakh+Products
              </Heading>
              <p>
                We maintain strict quality <br />
                controls on all our partner retailers,
                <br />
                so that you always get standard <br />
                quality products.
              </p>
            </div>
            <div>
              <img
                className={styles.bottom_1_img}
                src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRZTLyoLYiQZNQ0yg_oYch7AEptx8Xi2YCG0F03_mVIWomqypwq"
                alt=""
              />
              <Heading as="h4" size="md">
                Secure Payment
              </Heading>
              <p>
                100% secure and trusted <br />
                payment protection
              </p>
            </div>
            <div>
              <img
                className={styles.bottom_1_img}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShVaypOjjhUQzWBVQiYwSwhMn1QrUmGJ58I0bLJ6xTgLQMvflW"
                alt=""
              />
              <Heading as="h4" size="md">
                Easy Return
              </Heading>
              <p>
                We have a new and dynamic return window <br />
                policy for medicines and healthcare items. <br />
                Refer FAQs section for more details.
              </p>
            </div>
          </div>
          <div className={styles.bottom_2}>
            <div className={styles.bottom_21}>
              <img
                src="https://assets.pharmeasy.in/web-assets/_next/icons/footerMobile.jpg"
                alt=""
              />
            </div>
            <div className={styles.bottom_22}>
              <p>Download the App for Free</p>
              <div>
                <div>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.phonegap.rxpal&hl=en_IN&gl=US&utm_source=web&utm_medium=footer"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://www.idfcfirstbank.com/content/dam/IDFCFirstBank/apple-store-icon.svg"
                      alt=""
                    />
                  </a>
                </div>
                <div>
                  <a
                    href="https://apps.apple.com/in/app/pharmeasy-healthcare-app/id982432643"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://www.idfcfirstbank.com/content/dam/IDFCFirstBank/android-store-icon.svg"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Desc;
