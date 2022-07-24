import React from "react";
import "./Healthcare.css";
import { useState } from "react";
import { SliderData } from "./SliderData";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import {
  Box,
  Grid,
  Heading,
  Image,
  Text,
  ListItem,
  UnorderedList,
  Divider,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

const Healthcare = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const navigate = useNavigate();

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  

  return (
    <>
      <div className="heading">
        Home &gt; <span style={{ color: "gray" }}>Healthcare</span>
      </div>
      <div className="slider">
        <AiFillLeftCircle className="left-arrow" onClick={prevSlide} />
        <AiFillRightCircle className="right-arrow" onClick={nextSlide} />
        {SliderData.map((img, ind) => {
          return (
            <div key={ind}>
              {ind === current && (
                <img src={img.image} alt="images" className="sliderimage" />
              )}
            </div>
          );
        })}
      </div>
      <Box w="80%" m="auto">
        <Grid templateColumns="repeat(3, 1fr)" gap={9}>
          <Box
            w="100%"
            h="105%"
            bg="white"
            display="flex"
            justifyContent="center"
            padding="10px"
            border="1px"
            borderRadius="11"
            boxShadow="md"
            _hover={{ borderColor: "skyblue", borderWidth: "5px" }}
            onClick={() => navigate("/products/Covid Essentials")}
          >
            <Image
              src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/6d462f424a43372ea8b7b6f8ca13e052.png"
              w="20%"
              h="80%"
              mr="11px"
              alt="Dan Abramov"
            />
            <Text fontSize={"lg"} mr="1rem" mt="21px">
              Covid Essentials
            </Text>
            <Text color={"green"} mt="11px">
              Upto <br /> 77% off
            </Text>
          </Box>
          <Box
            w="100%"
            h="105%"
            bg="white"
            display="flex"
            justifyContent="center"
            padding="10px"
            border="1px"
            borderRadius="11"
            boxShadow="md"
            onClick={() => navigate("/products/Personal Care")}
            _hover={{ borderColor: "skyblue", borderWidth: "5px" }}
          >
            <Image
              src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/b4a3a67a59783e0ca738884c9acc8e7b.png"
              w="20%"
              h="80%"
              mr="11px"
              alt="Dan Abramov"
            />
            <Text fontSize={"lg"} mr="1rem" mt="21px">
              Personal Care
            </Text>
            <Text color={"green"} mt="11px">
              Upto <br /> 80% off
            </Text>
          </Box>
          <Box
            w="100%"
            h="105%"
            bg="white"
            display="flex"
            justifyContent="center"
            padding="10px"
            border="1px"
            borderRadius="11"
            boxShadow="md"
            _hover={{ borderColor: "skyblue", borderWidth: "5px" }}
            onClick={() => navigate("/products/Health Food and Drinks")}
          >
            <Image
              src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/62e6d7551ecf3a5da1d2336c41cc0549.png"
              w="20%"
              h="80%"
              mr="11px"
              alt="Dan Abramov"
            />
            <Text fontSize={"lg"} mr="1rem" mt="21px">
              Health Food & Drinks
            </Text>
            <Text color={"green"} mt="11px">
              Upto <br /> 57% off
            </Text>
          </Box>
          <Box
            w="100%"
            h="105%"
            bg="white"
            display="flex"
            justifyContent="center"
            padding="10px"
            border="1px"
            borderRadius="11"
            boxShadow="md"
            _hover={{ borderColor: "skyblue", borderWidth: "5px" }}
            onClick={() => navigate("/products/Beauty")}
          >
            <Image
              src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/8a45f5baa68e3b72ae631003faa97bdb.png"
              w="20%"
              h="80%"
              mr="11px"
              alt="Dan Abramov"
            />
            <Text fontSize={"lg"} mr="1rem" mt="21px">
              Beauty
            </Text>
            <Text color={"green"} mt="11px">
              Upto <br /> 35% off
            </Text>
          </Box>
          <Box
            w="100%"
            h="105%"
            bg="white"
            display="flex"
            justifyContent="center"
            padding="10px"
            border="1px"
            borderRadius="11"
            boxShadow="md"
            _hover={{ borderColor: "skyblue", borderWidth: "5px" }}
            onClick={() => navigate("/products/Skin Care")}
          >
            <Image
              src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/ff5aaa03881e3016bf409f85b4e328aa.png"
              w="20%"
              h="80%"
              mr="11px"
              alt="Dan Abramov"
            />
            <Text fontSize={"lg"} mr="1rem" mt="21px">
              Skin Care & Creams
            </Text>
            <Text color={"green"} mt="11px">
              Upto <br /> 50% off
            </Text>
          </Box>
          <Box
            w="100%"
            h="105%"
            bg="white"
            display="flex"
            justifyContent="center"
            padding="10px"
            border="1px"
            borderRadius="11"
            boxShadow="md"
            _hover={{ borderColor: "skyblue", borderWidth: "5px" }}
            onClick={() => navigate("/products/Home Care")}
          >
            <Image
              src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/68ae87e29f4a3abbb8ed69fe7ecf057c.png"
              w="20%"
              h="80%"
              mr="11px"
              alt="Dan Abramov"
            />
            <Text fontSize={"lg"} mr="1rem" mt="21px">
              Home Care
            </Text>
            <Text color={"green"} mt="11px">
              Upto <br /> 35% off
            </Text>
          </Box>
          <Box
            w="100%"
            h="105%"
            bg="white"
            display="flex"
            justifyContent="center"
            padding="10px"
            border="1px"
            borderRadius="11"
            boxShadow="md"
            _hover={{ borderColor: "skyblue", borderWidth: "5px" }}
            onClick={() => navigate("/products/Ayurvedic Care")}
          >
            <Image
              src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/4209e1d247cd30fca1f619786fa3e9c1.png"
              w="20%"
              h="80%"
              mr="11px"
              alt="Dan Abramov"
            />
            <Text fontSize={"lg"} mr="1rem" mt="21px">
              Ayurvedic Care
            </Text>
            <Text color={"green"} mt="11px">
              Upto <br /> 70% off
            </Text>
          </Box>
          <Box
            w="100%"
            h="105%"
            bg="white"
            display="flex"
            justifyContent="center"
            padding="10px"
            border="1px"
            borderRadius="11"
            boxShadow="md"
            _hover={{ borderColor: "skyblue", borderWidth: "5px" }}
            onClick={() => navigate("/products/Sexual Wellness")}
          >
            <Image
              src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/7e509ee2f5413b0483d00c0b30067ee0.png"
              w="20%"
              h="80%"
              mr="11px"
              alt="Dan Abramov"
            />
            <Text fontSize={"lg"} mr="1rem" mt="21px">
              Sexual Wellness
            </Text>
            <Text color={"green"} mt="11px">
              Upto <br /> 53% off
            </Text>
          </Box>
          <Box
            w="100%"
            h="105%"
            bg="white"
            display="flex"
            justifyContent="center"
            padding="10px"
            border="1px"
            borderRadius="11"
            boxShadow="md"
            _hover={{ borderColor: "skyblue", borderWidth: "5px" }}
            onClick={() => navigate("/products/Fitness & Supplements")}
          >
            <Image
              src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/0e9613b95131376b95bcbf92c48149b5.png"
              w="20%"
              h="80%"
              mr="11px"
              alt="Dan Abramov"
            />
            <Text fontSize={"lg"} mr="1rem" mt="21px">
              Fitness & Supplements
            </Text>
            <Text color={"green"} mt="11px">
              Upto <br /> 80% off
            </Text>
          </Box>
          <Box
            w="100%"
            h="105%"
            bg="white"
            display="flex"
            justifyContent="center"
            padding="10px"
            border="1px"
            borderRadius="11"
            boxShadow="md"
            _hover={{ borderColor: "skyblue", borderWidth: "5px" }}
            onClick={() => navigate("/products/Mother and Baby Care")}
          >
            <Image
              src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/af8d32e30757338787ca3e9267865d4f.png"
              w="20%"
              h="80%"
              mr="11px"
              alt="Dan Abramov"
            />
            <Text fontSize={"lg"} mr="1rem" mt="21px">
              Mother and Baby Care
            </Text>
            <Text color={"green"} mt="11px">
              Upto <br /> 50% off
            </Text>
          </Box>
          <Box
            w="100%"
            h="105%"
            bg="white"
            display="flex"
            justifyContent="center"
            padding="10px"
            border="1px"
            borderRadius="11"
            boxShadow="md"
            _hover={{ borderColor: "skyblue", borderWidth: "5px" }}
            onClick={() => navigate("/products/Health Food and Drinks")}
          >
            <Image
              src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/e17c6d96de443b65988f5b2366b6ebb1.png"
              w="20%"
              h="80%"
              mr="11px"
              alt="Dan Abramov"
            />
            <Text fontSize={"lg"} mr="1rem" mt="21px">
              Healthcare Devices
            </Text>
            <Text color={"green"} mt="11px">
              Upto <br /> 65% off
            </Text>
          </Box>
          <Box
            w="100%"
            h="105%"
            bg="white"
            display="flex"
            justifyContent="center"
            padding="10px"
            border="1px"
            borderRadius="11"
            boxShadow="md"
            _hover={{ borderColor: "skyblue", borderWidth: "5px" }}
            onClick={() => navigate("/products/Covid Essentials")}
          >
            <Image
              src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/14bac4e33b11338299d8d6c1d905ca8f.png"
              w="20%"
              h="80%"
              mr="11px"
              alt="Dan Abramov"
            />
            <Text fontSize={"lg"} mr="1rem" mt="21px">
              Health Condition
            </Text>
            <Text color={"green"} mt="11px">
              Upto <br /> 65% off
            </Text>
          </Box>
          <Box
            w="100%"
            h="105%"
            bg="white"
            display="flex"
            justifyContent="center"
            padding="10px"
            border="1px"
            borderRadius="11"
            boxShadow="md"
            _hover={{ borderColor: "skyblue", borderWidth: "5px" }}
            onClick={() => navigate("/products/Health Food and Drinks")}
          >
            <Image
              src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/ec716b08ac643f88971944792e2c5549.png"
              w="20%"
              h="80%"
              mr="11px"
              alt="Dan Abramov"
            />
            <Text fontSize={"lg"} mr="1rem" mt="21px">
              Diabetic Care
            </Text>
            <Text color={"green"} mt="11px">
              Upto <br /> 65% off
            </Text>
          </Box>
          <Box
            w="100%"
            h="105%"
            bg="white"
            display="flex"
            justifyContent="center"
            padding="10px"
            border="1px"
            borderRadius="11"
            boxShadow="md"
            _hover={{ borderColor: "skyblue", borderWidth: "5px" }}
            onClick={() => navigate("/products/Skin Care")}
          >
            <Image
              src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/292b08b6deab3ba9bd76d3a6ed4d71e0.png"
              w="20%"
              h="80%"
              mr="11px"
              alt="Dan Abramov"
            />
            <Text fontSize={"lg"} mr="1rem" mt="21px">
              Elderly Care
            </Text>
            <Text color={"green"} mt="11px">
              Upto <br /> 45% off
            </Text>
          </Box>
          <Box
            w="100%"
            h="105%"
            bg="white"
            display="flex"
            justifyContent="center"
            padding="10px"
            border="1px"
            borderRadius="11"
            boxShadow="md"
            _hover={{ borderColor: "skyblue", borderWidth: "5px" }}
            onClick={() => navigate("/products/Ayurvedic Care")}
          >
            <Image
              src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/236fc993bd00381fb7061ee2333ad0e3.png"
              w="20%"
              h="80%"
              mr="11px"
              alt="Dan Abramov"
            />
            <Text fontSize={"lg"} mr="1rem" mt="21px">
              Accessories And Weareables
            </Text>
            <Text color={"green"} mt="11px">
              Upto <br /> 35% off
            </Text>
          </Box>
          <Box
            w="100%"
            h="125%"
            bg="white"
            display="flex"
            justifyContent="center"
            padding="10px"
            border="1px"
            borderRadius="11"
            boxShadow="md"
            _hover={{ borderColor: "skyblue", borderWidth: "5px" }}
            onClick={() => navigate("/products/Beauty")}
          >
            <Image
              src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/7967589fcc513f348de4c1069c04ea38.png"
              w="20%"
              h="80%"
              mr="11px"
              alt="Dan Abramov"
            />
            <Text fontSize={"lg"} mr="1rem" mt="21px">
              Value Store
            </Text>
            <Text color={"green"} mt="11px">
              Upto <br /> 47% off
            </Text>
          </Box>
        </Grid>
      </Box>

      <Heading as="h4" size="sm" ml={"7rem"} mt="3rem">
        {" "}
        Shop Safely And Worry-Free On PharmEasy
      </Heading>
      <Text justifyContent={"center"} textAlign="left" m="1rem 7rem 1rem 7rem">
        PharmEasy is a renowned name in the online shopping of Over The Counter
        or healthcare products and other daily essentials. Ordering online on
        PharmEasy is convenient, fast and hassle-free; you can avoid the
        annoyance of queuing up at your local pharmacy and also avail of huge
        discounts of up to 80% OFF. Purchasing the healthcare requirements such
        as medical devices and nutritional supplements that you need will no
        longer burn a hole in your pocket. At PharmEasy, you are sure to find
        everything that you need because we have products across all healthcare
        categories.
      </Text>

      <Heading as="h4" size="sm" ml={"7rem"} mt="1rem">
        Why choose PharmEasy?
      </Heading>
      <UnorderedList m={"0.5rem 9rem 0rem 8rem"}>
        <ListItem>8400+ Brands</ListItem>
        <ListItem>35K products in our stock</ListItem>
        <ListItem>Delivery to 22000+ pin codes</ListItem>
        <ListItem>Delivered to 50 lakh+ families</ListItem>
        <ListItem>Over 2M customers served</ListItem>
      </UnorderedList>

      <Heading as="h4" size="sm" ml={"7rem"} mt="1rem">
        Our most popular categories:
      </Heading>
      <Text
        justifyContent={"center"}
        textAlign="left"
        m="0.5rem 7rem 1rem 7rem"
      >
        We have a range of categories and products, some which are:
      </Text>

      <Heading as="h4" size="sm" ml={"7rem"} mt="1.0rem">
        Devices
      </Heading>
      <Text
        justifyContent={"center"}
        textAlign="left"
        m="0.5rem 7rem 1rem 7rem"
      >
        With the pandemic upending our lives, we have all realized that there
        are some medical devices that we need to keep in our homes such as
        Oximeter, Thermometer, Inhaler, Blood pressure monitor, Glucometer.
      </Text>

      <Heading as="h4" size="sm" ml={"7rem"} mt="1rem">
        Personal care
      </Heading>
      <Text
        justifyContent={"center"}
        textAlign="left"
        m="0.5rem 7rem 1rem 7rem"
      >
        Personal care products can include a wide range of products such as Bath
        products, , Skincare essentials, Razor blades, Toothpaste and
        toothbrush, Wet wipes, Lip balm, Face masks, Hand sanitizer, etc.
      </Text>

      <Heading as="h4" size="sm" ml={"7rem"} mt="1rem">
        Nutrition and fitness supplements
      </Heading>
      <Text
        justifyContent={"center"}
        textAlign="left"
        m="0.5rem 7rem 1rem 7rem"
      >
        To give your health a helping hand, you can order a wide variety of
        health supplements including Health drinks, Nutritional powder,
        Nutrition tablets/capsules.
      </Text>

      <Heading as="h4" size="sm" ml={"7rem"} mt="1.0rem">
        Ayurvedic care
      </Heading>
      <Text
        justifyContent={"center"}
        textAlign="left"
        m="0.5rem 7rem 1rem 7rem"
      >
        Place your trust in the goodness of natural and organic ayurvedic
        products for an all-around healthy mind and body. There’s plenty to
        choose from such as Aloe vera juice, Moringa capsules, Garlic capsules.
      </Text>

      <Heading as="h4" size="sm" ml={"7rem"} mt="1rem">
        Home care
      </Heading>
      <Text
        justifyContent={"center"}
        textAlign="left"
        m="0.5rem 7rem 1rem 7rem"
      >
        Home care products are things you need every day such as disinfectant
        spray, phenyl, dishwashing liquid, etc. Get them all at spectacular
        discounts on PharmEasy.
      </Text>

      <Heading as="h4" size="sm" ml={"7rem"} mt="1rem">
        Baby and mom care
      </Heading>
      <Text
        justifyContent={"center"}
        textAlign="left"
        m="0.5rem 7rem 1rem 7rem"
      >
        PharmEasy also has an impressive range of baby and mom care products
        including Diapers, Baby bath products, Infant formula food, Mother’s
        health drinks, Diaper rash creams, Baby wipes.
      </Text>

      <Heading as="h4" size="sm" ml={"7rem"} mt="1.0rem">
        Our top brands:
      </Heading>
      <Text
        justifyContent={"center"}
        textAlign="left"
        m="0.5rem 7rem 1rem 7rem"
      >
        Get products from the most famous and trusted brands including
        Accu-chek, Dettol, Horlicks, Baidyanath, Sebamed.
      </Text>

      <Heading as="h4" size="sm" ml={"7rem"} mt="1rem">
        You are safe with PharmEasy:
      </Heading>
      <Text
        justifyContent={"center"}
        textAlign="left"
        m="0.5rem 7rem 1rem 7rem"
      >
        Given the times, we are taking all precautions to ensure that we keep
        everyone safe - our customers and the people we work with.
      </Text>

      <Heading as="h4" size="sm" ml={"7rem"} mt="1rem">
        We ensure
      </Heading>
      <UnorderedList m={"0.5rem 9rem 0rem 8rem"}>
        <ListItem>Regular sanitization of our premises and warehouses</ListItem>
        <ListItem>
          Temperature checks of our employees and delivery partners
        </ListItem>
        <ListItem>No-contact door-step delivery</ListItem>
        <ListItem>Sanitized packaging</ListItem>
      </UnorderedList>

      <Heading as="h4" size="sm" ml={"7rem"} mt="1rem">
        Youe safety is our priority
      </Heading>
      <Text
        justifyContent={"center"}
        textAlign="left"
        m="0.5rem 7rem 7rem 7rem"
      >
        Stay safe at home and shop at your convenience from PharmEasy. All you
        have to do is place your order and we will try to deliver it at the
        earliest.
      </Text>

      <Divider mb={"2rem"} />

      <Box w={"60%"} m="auto" mb={"2rem"}>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <Box w="100%" h="16rem" bg="white">
            <Image
              src="https://uploads-ssl.webflow.com/598435743262c800013158eb/5fccdb2bbb42677c2f3efa4e_moneyback-icon-green.svg"
              w="20%"
              h="20%"
              alt="Dan Abramov"
            />
            <Heading as="h4" size="md" mt="1rem">
              1 Lakh+ Products
            </Heading>
            <Text fontSize={"lg"} textAlign="left" mt="1rem" color={"gray"}>
              We maintain strict quality controls on all our partner retailers,
              so that you always get standard quality products.
            </Text>
          </Box>
          <Box w="100%" h="16rem" bg="white">
            <Image
              borderRadius={"21rem"}
              src="https://www.datocms-assets.com/22250/1583380060-shield-lock-2x.png?auto=format&dpr=0.8&w=244"
              w="20%"
              h="15%"
              mt={"0.5rem"}
              alt="Dan Abramov"
            />
            <Heading as="h4" size="md" mt="1rem">
              Secure Payment
            </Heading>
            <Text fontSize={"lg"} textAlign="left" mt="1rem" color={"gray"}>
              100% secure and trusted payment protection.
            </Text>
          </Box>
          <Box w="100%" h="16rem" bg="white">
            <Image
              borderRadius={"21rem"}
              src="https://i.pinimg.com/564x/31/55/64/315564aece0f76bde01696ce11b8f47f.jpg"
              w="20%"
              h="15%"
              mt={"0.5rem"}
              alt="Dan Abramov"
            />
            <Heading as="h4" size="md" mt="1rem">
              Easy Return{" "}
            </Heading>
            <Text fontSize={"lg"} textAlign="left" mt="1rem" color={"gray"}>
              We have a new and dynamic return window policy for medicines and
              healthcare items. Refer FAQs section for more details.
            </Text>
          </Box>
        </Grid>
      </Box>

      <Divider mb={"5rem"} />

      <Box w={"80%"} m="auto">
        <Grid templateColumns="repeat(3, 1fr)" gap={8}>
          <Box w="90%" h="33rem" ml="1rem" bg="white">
            {" "}
            <Image
              w="100%"
              h="100%"
              src="https://assets.pharmeasy.in/web-assets/_next/icons/footerMobile.jpg"
            />
          </Box>
          <Box w="100%" h="22rem" bg="white">
            <Text fontSize={"xl"} textAlign="left" mt="1rem" ml={"1rem"}>
              Download the App for Free
            </Text>
            <a href="https://play.google.com/store/apps/details?id=com.phonegap.rxpal&hl=en_IN&gl=US&utm_source=web&utm_medium=footer">
              <Image src="https://www.idfcfirstbank.com/content/dam/IDFCFirstBank/android-store-icon.svg" />
            </a>
            <a href="https://apps.apple.com/in/app/pharmeasy-healthcare-app/id982432643">
              <Image src="https://www.idfcfirstbank.com/content/dam/IDFCFirstBank/apple-store-icon.svg" />
            </a>
          </Box>
        </Grid>
      </Box>

      <Divider mb={"2rem"} />
    </>
  );
};

export default Healthcare;
