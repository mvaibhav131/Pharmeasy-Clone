import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import {
  Box,
  Grid,
  Heading,
  Image,
  Text,
  Select,
  Stack,
  Checkbox,
  Divider,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";

const Product = () => {
  const [data, setData] = useState([]);
  const [type, setType] = useState([]);
  const { str } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      let res = await axios.get(
        `https://pharmeasylion.herokuapp.com/api/product?q=${str}`
      );
      setData(res.data);
    };
    getData();
  }, [str]);

  const handleFilter = async (val) => {
    if (val === "price-asc") {
      data.sort(function (a, b) {
        return a.mrp - b.mrp;
      });
      setType([...data]);
    } else if (val === "price-dsc") {
      data.sort(function (a, b) {
        return b.mrp - a.mrp;
      });
      setType([...data]);
    } else if (val === "atoz") {
      data.sort(function (a, b) {
        return a.title.localeCompare(b.title);
      });
      setType([...data]);
    } else if (val === "ztoa") {
      data.sort(function (a, b) {
        return b.title.localeCompare(a.title);
      });
      setType([...data]);
    } else if (val === "discount") {
      data.sort(function (a, b) {
        return b.discount - a.discount;
      });
      setType([...data]);
    } else if (val === "below99") {
      let d = data.filter((a) => (a.mrp < 99 ? a : ""));
      return setData([...d]);
    } else if (val === "100-199") {
      let d = data.filter((a) => (a.mrp > 99 && a.mrp < 200 ? a : ""));
      return setData([...d]);
    } else if (val === "200-299") {
      let d = data.filter((a) => (a.mrp > 199 && a.mrp < 300 ? a : ""));
      return setData([...d]);
    } else if (val === "300-399") {
      let d = data.filter((a) => (a.mrp > 299 && a.mrp < 400 ? a : ""));
      return setData([...d]);
    } else if (val === "400-499") {
      let d = data.filter((a) => (a.mrp > 399 && a.mrp < 500 ? a : ""));
      return setData([...d]);
    } else if (val === "above500") {
      let d = data.filter((a) => (a.mrp > 499 ? a : ""));
      return setData([...d]);
    } else if (val === "chiphands") {
      let d = data.filter((a) => (a.brand === "Chiphands" ? a : ""));
      return setData([...d]);
    } else if (val === "arachitol") {
      let d = data.filter((a) => (a.brand === "Arachitol" ? a : ""));
      return setData([...d]);
    } else if (val === "accusure") {
      let d = data.filter((a) => (a.brand === "Accusure" ? a : ""));
      return setData([...d]);
    } else if (val === "baidyanath") {
      let d = data.filter((a) => (a.brand === "Baidyanath" ? a : ""));
      return setData([...d]);
    } else if (val === "zandu") {
      let d = data.filter((a) => (a.brand === "Zandu" ? a : ""));
      return setData([...d]);
    } else if (val === "durex") {
      let d = data.filter((a) => (a.brand === "Durex" ? a : ""));
      return setData([...d]);
    } else if (val === "nivea") {
      let d = data.filter((a) => (a.brand === "Nivea" ? a : ""));
      return setData([...d]);
    } else if (val === "sugarpop") {
      let d = data.filter((a) => (a.brand === "Sugar Pop" ? a : ""));
      return setData([...d]);
    } else if (val === "wildstone") {
      let d = data.filter((a) => (a.brand === "Wild Stone" ? a : ""));
      return setData([...d]);
    } else if (val === "beauty") {
      let d = data.filter((a) => (a.ancestor[1] === "Beauty" ? a : ""));
      return setData([...d]);
    } else if (val === "ayurvediccare") {
      let d = data.filter((a) => (a.ancestor[1] === "Ayurvedic Care" ? a : ""));
      return setData([...d]);
    } else if (val === "sexualwellness") {
      let d = data.filter((a) =>
        a.ancestor[1] === "Sexual Wellness" ? a : ""
      );
      return setData([...d]);
    } else if (val === "homecare") {
      let d = data.filter((a) => (a.ancestor[1] === "Home Care" ? a : ""));
      return setData([...d]);
    } else if (val === "skincare") {
      let d = data.filter((a) => (a.ancestor[1] === "Skin Care" ? a : ""));
      return setData([...d]);
    } else if (val === "fitness") {
      let d = data.filter((a) =>
        a.ancestor[1] === "Health Food and Drinks" ? a : ""
      );
      return setData([...d]);
    }
  };

  return (
    <Box>
      <Box w={"92%"} m="6rem auto auto auto" display={"flex"}>
        <Box w={"30%"}>
          <Box p={"1rem"}>
            <Text
              fontSize={"4xl"}
              mr={"5rem"}
              as="h5"
              size="lg"
              m={"0rem 2rem 2rem 1rem"}
              justifySelf={"left"}
            >
              Filter
            </Text>
            <Heading fontSize="lg" m={"1rem"}>
              Category
            </Heading>
            <Stack spacing={5} direction="row">
              <Checkbox colorScheme="green" defaultChecked>
                {str}
              </Checkbox>
            </Stack>
            <Divider m={"2rem"} />
            <Heading fontSize="lg" m={"1rem"}>
              Sub Category
            </Heading>
            <Stack>
              <Checkbox
                colorScheme="green"
                m="0.5rem"
                value="ayurvediccare"
                onChange={(e) => {
                  handleFilter(e.target.value);
                }}
              >
                Ayurvedic Medicines
              </Checkbox>
            </Stack>
            <Stack>
              <Checkbox
                colorScheme="green"
                m="0.5rem"
                value="homecare"
                onChange={(e) => {
                  handleFilter(e.target.value);
                }}
              >
                Homeopathic Medicine
              </Checkbox>
            </Stack>
            <Stack>
              <Checkbox
                colorScheme="green"
                m="0.5rem"
                value="beauty"
                onChange={(e) => {
                  handleFilter(e.target.value);
                }}
              >
                Beauty
              </Checkbox>
            </Stack>
            <Stack>
              <Checkbox
                colorScheme="green"
                m="0.5rem"
                value="sexualwellness"
                onChange={(e) => {
                  handleFilter(e.target.value);
                }}
              >
                Sexuall Wellness
              </Checkbox>
            </Stack>
            <Stack>
              <Checkbox
                colorScheme="green"
                m="0.5rem"
                value="skincare"
                onChange={(e) => {
                  handleFilter(e.target.value);
                }}
              >
                Skin
              </Checkbox>
            </Stack>
            <Stack>
              <Checkbox
                colorScheme="green"
                m="0.5rem"
                value="fitness"
                onChange={(e) => {
                  handleFilter(e.target.value);
                }}
              >
                Fitness Medicines
              </Checkbox>
            </Stack>
            <Divider m="1rem" />
            <Heading fontSize="lg" m={"1rem"}>
              {" "}
              Brand
            </Heading>
            <Stack>
              <Checkbox
                colorScheme="green"
                m="0.5rem"
                value="arachitol"
                onChange={(e) => {
                  handleFilter(e.target.value);
                }}
              >
                Arachitol
              </Checkbox>
            </Stack>
            <Stack>
              <Checkbox
                colorScheme="green"
                m="0.5rem"
                value="chiphands"
                onChange={(e) => {
                  handleFilter(e.target.value);
                }}
              >
                Chiphands
              </Checkbox>
            </Stack>
            <Stack>
              <Checkbox
                colorScheme="green"
                m="0.5rem"
                value="baidyanath"
                onChange={(e) => {
                  handleFilter(e.target.value);
                }}
              >
                Baidyanath
              </Checkbox>
            </Stack>
            <Stack>
              <Checkbox
                colorScheme="green"
                m="0.5rem"
                value="zandu"
                onChange={(e) => {
                  handleFilter(e.target.value);
                }}
              >
                Zandu
              </Checkbox>
            </Stack>
            <Stack>
              <Checkbox
                colorScheme="green"
                m="0.5rem"
                value="durex"
                onChange={(e) => {
                  handleFilter(e.target.value);
                }}
              >
                Durex
              </Checkbox>
            </Stack>
            <Stack>
              <Checkbox
                colorScheme="green"
                m="0.5rem"
                value="nivea"
                onChange={(e) => {
                  handleFilter(e.target.value);
                }}
              >
                Nivea
              </Checkbox>
            </Stack>
            <Stack>
              <Checkbox
                colorScheme="green"
                m="0.5rem"
                value="accusure"
                onChange={(e) => {
                  handleFilter(e.target.value);
                }}
              >
                Accusure
              </Checkbox>
            </Stack>
            <Stack>
              <Checkbox
                colorScheme="green"
                m="0.5rem"
                value="sugarpop"
                onChange={(e) => {
                  handleFilter(e.target.value);
                }}
              >
                Sugar Pop
              </Checkbox>
            </Stack>
            <Stack>
              <Checkbox
                colorScheme="green"
                m="0.5rem"
                value="wildstone"
                onChange={(e) => {
                  handleFilter(e.target.value);
                }}
              >
                Wild Stone
              </Checkbox>
            </Stack>
            <Divider m={"2rem"} />
            <Heading fontSize="lg" m={"1rem"}>
              {" "}
              Price
            </Heading>
            <Stack>
              <Checkbox
                colorScheme="green"
                m="0.5rem"
                value="below99"
                onChange={(e) => {
                  handleFilter(e.target.value);
                }}
              >
                Below 99
              </Checkbox>
            </Stack>
            <Stack>
              <Checkbox
                colorScheme="green"
                m="0.5rem"
                value="100-199"
                onChange={(e) => {
                  handleFilter(e.target.value);
                }}
              >
                100 - 199
              </Checkbox>
            </Stack>
            <Stack>
              <Checkbox
                colorScheme="green"
                m="0.5rem"
                value="200-299"
                onChange={(e) => {
                  handleFilter(e.target.value);
                }}
              >
                200 - 299
              </Checkbox>
            </Stack>
            <Stack>
              <Checkbox
                colorScheme="green"
                m="0.5rem"
                value="300-399"
                onChange={(e) => {
                  handleFilter(e.target.value);
                }}
              >
                300 - 399
              </Checkbox>
            </Stack>
            <Stack>
              <Checkbox
                colorScheme="green"
                m="0.5rem"
                value="400-499"
                onChange={(e) => {
                  handleFilter(e.target.value);
                }}
              >
                400 - 499
              </Checkbox>
            </Stack>
            <Stack>
              <Checkbox
                colorScheme="green"
                m="0.5rem"
                value="above500"
                onChange={(e) => {
                  handleFilter(e.target.value);
                }}
              >
                Above 500
              </Checkbox>
            </Stack>
          </Box>
        </Box>
        <Box w={"70%"} h="auto">
          <Box w={"100%"} h="4rem" m="0.2rem auto auto auto" display={"flex"}>
            <Text
              fontSize={"2xl"}
              mr={"7rem"}
              as="h5"
              size="lg"
              w="60%"
              justifySelf={"left"}
            >
              {str}
            </Text>
            <Text m="0.2rem 0rem 1rem 0rem" w="10%">
              Sort By:{" "}
            </Text>
            <Select
              onChange={(e) => {
                handleFilter(e.target.value);
              }}
              borderColor="black"
              w={"20rem"}
              placeholder="Popularity"
            >
              <option value="discount">Discount</option>
              <option value="price-asc">Price low to high</option>
              <option value="price-dsc">Price High to low</option>
              <option value="atoz">Alphabetically A to Z</option>
              <option value="ztoa">Alphabetically Z to A</option>
            </Select>
          </Box>
          <Grid
            templateRows="repeat(4,1fr)"
            templateColumns="repeat(3, 1fr)"
            gap="6"
            padding={"1rem"}
          >
            {data.map((elem, ind) => (
              <Box
                key={elem._id}
                border="1px"
                boxShadow="md"
                p="2"
                rounded="md"
                bg="white"
                onClick={() => {
                  navigate(`/productdetails/${elem.title}`);
                  localStorage.setItem("frequently", JSON.stringify(str));
                }}
                borderColor={"gray"}
                _hover={{ borderColor: "gray", borderWidth: "2px" }}
              >
                <Image
                  m={"1rem auto 1rem auto"}
                  w="9rem"
                  h="9rem"
                  src={elem.img2}
                  alt=""
                />
                <Heading mb={"0.7rem"} noOfLines={2} as="h5" size="sm">
                  {elem.title}
                </Heading>
                <Box display={"flex"}>
                  <Text color={"gray"} mr="1.3rem" mt={"1px"} as="s">
                    MRP ₹ {elem.strike}
                  </Text>
                  <Box position={"relative"} textAlign="left">
                    <Image
                      h={"1.3rem"}
                      w="100%"
                      src="https://assets.pharmeasy.in/web-assets/_next/icons/pdp-discount.png"
                    />
                    <Box
                      color={"white"}
                      fontSize={"10.3px"}
                      position={"absolute"}
                      top="35%"
                      left={"35%"}
                      transform="translate(-50%,-50%)"
                    >
                      {elem.discount} % OFF
                    </Box>
                  </Box>
                </Box>
                <Heading fontSize="lg"> ₹ {elem.mrp}</Heading>
              </Box>
            ))}
          </Grid>
        </Box>
      </Box>
      <Divider m={"5rem"} />
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
    </Box>
  );
};

export default Product;
