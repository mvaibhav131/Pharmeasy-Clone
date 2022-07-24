import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Heading,
  Image,
  Text,
  Select,
  Divider,
} from "@chakra-ui/react";
import axios from "axios";
import styles from "./Myorders.module.css";

const Myorders = () => {
  const [orderlist, setOrderlist] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const order = async () => {
      const user_id = localStorage.getItem("user_id");
      const res = await axios.get(
        `https://pharmeasylion.herokuapp.com/api/ordered/${user_id}`
      );
      // console.log(res.data);
      setOrderlist(res.data);
      let total = 0;

      for (let el of res.data.orderedProduct) {
        total += el.product.mrp * el.qty;
      }

      setTotal(total);
    };
    order();
  }, []);

  //date
  function timeSince(date) {
    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = seconds / 31536000;

    if (interval > 1) {
      return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  }

  // console.log(orderlist,"order")
  const list = orderlist.orderedProduct;
  const orderId = orderlist._id;
  const data = timeSince(new Date(orderlist.createdAt));
  // console.log(list,"list")
  // console.log(orderId)

  // var total = localStorage.getItem("total");

  if (list === undefined) {
    return (
      <Box>
        <Box w={"92%"} m="6rem auto auto auto" display={"flex"}>
          <Box
            w={"30%"}
            color="gray"
            border="0.5px"
            boxShadow="lg"
            p="6"
            rounded="md"
            bg="white"
          >
            <Box p={"1rem"}>
              <Image
                width={"90%"}
                height="6rem"
                borderRadius={"0.5rem"}
                src="http://www.dealnloot.com/wp-content/uploads/2021/03/pharmeasy-plus-768x161.jpg"
              />
              <Divider m={"2rem"} />
              <Heading display={"flex"} fontSize="lg" m={"1rem"}>
                <Image
                  mr="1rem"
                  src="https://assets.pharmeasy.in/web-assets/dist/6d757b2d.svg"
                />
                Your Orders
              </Heading>
              <Text
                m={"1rem 0rem 1rem 3rem"}
                fontSize="1xl"
                _hover={{ color: "green", cursor: "pointer" }}
              >
                Medicine / Healthcare
              </Text>
              <Text
                m={"1rem 0rem 1rem 3rem"}
                fontSize="1xl"
                _hover={{ color: "green", cursor: "pointer" }}
              >
                Lab Tests
              </Text>
              <Divider m="1rem" />
              <Heading display={"flex"} fontSize="lg" m={"1rem"}>
                <Image
                  mr="1rem"
                  src="https://assets.pharmeasy.in/web-assets/dist/6d757b2d.svg"
                />
                Refills
              </Heading>
              <Text
                m={"1rem 0rem 1rem 3rem"}
                fontSize="1xl"
                _hover={{ color: "green", cursor: "pointer" }}
              >
                Active
              </Text>
              <Text
                m={"1rem 0rem 1rem 3rem"}
                fontSize="1xl"
                _hover={{ color: "green", cursor: "pointer" }}
              >
                Inactive
              </Text>
              <Divider m="1rem" />
              <Heading display={"flex"} fontSize="lg" m={"1rem"}>
                <Image
                  mr="1rem"
                  src="https://assets.pharmeasy.in/web-assets/dist/6d757b2d.svg"
                />
                Medical Records
              </Heading>
              <Text
                m={"1rem 0rem 1rem 3rem"}
                fontSize="1xl"
                _hover={{ color: "green", cursor: "pointer" }}
              >
                All
              </Text>
              <Divider m="1rem" />
              <Heading display={"flex"} fontSize="lg" m={"1rem"}>
                <Image
                  mr="1rem"
                  src="https://assets.pharmeasy.in/web-assets/dist/a2995809.svg"
                />
                Profile Settings
              </Heading>
              <Text
                m={"1rem 0rem 1rem 3rem"}
                fontSize="1xl"
                _hover={{ color: "green", cursor: "pointer" }}
              >
                Edit Profile
              </Text>
              <Text
                m={"1rem 0rem 1rem 3rem"}
                fontSize="1xl"
                _hover={{ color: "green", cursor: "pointer" }}
              >
                Manage Address{" "}
              </Text>
              <Text
                m={"1rem 0rem 1rem 3rem"}
                fontSize="1xl"
                _hover={{ color: "green", cursor: "pointer" }}
              >
                Manage Refunds{" "}
              </Text>
              <Divider m="1rem" />
              <Heading display={"flex"} fontSize="lg" m={"1rem"}>
                <Image
                  mr="1rem"
                  src="https://assets.pharmeasy.in/web-assets/dist/ab7afe51.svg"
                />
                Wallet
              </Heading>
              <Divider m="1rem" />
              <Heading display={"flex"} fontSize="lg" m={"1rem"}>
                <Image
                  mr="1rem"
                  src="https://assets.pharmeasy.in/web-assets/dist/319c59f0.svg"
                />
                Refer and Earn
              </Heading>
              <Divider m="1rem" />
              <Heading display={"flex"} fontSize="lg" m={"1rem"}>
                <Image
                  mr="1rem"
                  src="https://assets.pharmeasy.in/web-assets/dist/9a22e94b.svg"
                />
                Logout
              </Heading>
            </Box>
          </Box>
          <Box w={"70%"} h="auto" boxShadow="lg" p="6" rounded="md" bg="white">
            <Box w={"100%"} h="4rem" m="0.2rem auto auto auto" display={"flex"}>
              <Text
                fontSize={"1xl"}
                mr={"2rem"}
                fontWeight="bold"
                justifySelf={"left"}
              >
                MY ORDERS - MEDICINE/HEALTHCARE
              </Text>
              <Text m="0.2rem 3rem 1rem 3rem"></Text>
              <Select borderColor="black" w={"20rem"} placeholder="All Orders">
                <option value="price-asc">Delivered Orders</option>
              </Select>
            </Box>
            <Image
              h={"40%"}
              w="30%"
              m="auto"
              src="https://assets.pharmeasy.in/web-assets/dist/fefded9b.svg"
            />
            <Text fontWeight={"bold"} fontSize="2xl" m="0rem 2rem 0rem 15rem">
              Unwell? Order medicines at home!
            </Text>
            <Text fontSize={"2xl"} m="0rem 2rem 0rem 12rem" color={"gray"}>
              Your medicine orders will be displayed here.
            </Text>
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
                We maintain strict quality controls on all our partner
                retailers, so that you always get standard quality products.
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
      </Box>
    );
  } else {
    return (
      <Box>
        <Box w={"92%"} m="6rem auto auto auto" display={"flex"}>
          <Box
            w={"30%"}
            color="gray"
            border="0.5px"
            boxShadow="lg"
            p="6"
            rounded="md"
            bg="white"
          >
            <Box p={"1rem"}>
              <Image
                width={"90%"}
                height="6rem"
                borderRadius={"0.5rem"}
                src="http://www.dealnloot.com/wp-content/uploads/2021/03/pharmeasy-plus-768x161.jpg"
              />
              <Divider m={"2rem"} />
              <Heading display={"flex"} fontSize="lg" m={"1rem"}>
                <Image
                  mr="1rem"
                  src="https://assets.pharmeasy.in/web-assets/dist/6d757b2d.svg"
                />
                Your Orders
              </Heading>
              <Text
                m={"1rem 0rem 1rem 3rem"}
                fontSize="1xl"
                _hover={{ color: "green", cursor: "pointer" }}
              >
                Medicine / Healthcare
              </Text>
              <Text
                m={"1rem 0rem 1rem 3rem"}
                fontSize="1xl"
                _hover={{ color: "green", cursor: "pointer" }}
              >
                Lab Tests
              </Text>
              <Divider m="1rem" />
              <Heading display={"flex"} fontSize="lg" m={"1rem"}>
                <Image
                  mr="1rem"
                  src="https://assets.pharmeasy.in/web-assets/dist/6d757b2d.svg"
                />
                Refills
              </Heading>
              <Text
                m={"1rem 0rem 1rem 3rem"}
                fontSize="1xl"
                _hover={{ color: "green", cursor: "pointer" }}
              >
                Active
              </Text>
              <Text
                m={"1rem 0rem 1rem 3rem"}
                fontSize="1xl"
                _hover={{ color: "green", cursor: "pointer" }}
              >
                Inactive
              </Text>
              <Divider m="1rem" />
              <Heading display={"flex"} fontSize="lg" m={"1rem"}>
                <Image
                  mr="1rem"
                  src="https://assets.pharmeasy.in/web-assets/dist/6d757b2d.svg"
                />
                Medical Records
              </Heading>
              <Text
                m={"1rem 0rem 1rem 3rem"}
                fontSize="1xl"
                _hover={{ color: "green", cursor: "pointer" }}
              >
                All
              </Text>
              <Divider m="1rem" />
              <Heading display={"flex"} fontSize="lg" m={"1rem"}>
                <Image
                  mr="1rem"
                  src="https://assets.pharmeasy.in/web-assets/dist/a2995809.svg"
                />
                Profile Settings
              </Heading>
              <Text
                m={"1rem 0rem 1rem 3rem"}
                fontSize="1xl"
                _hover={{ color: "green", cursor: "pointer" }}
              >
                Edit Profile
              </Text>
              <Text
                m={"1rem 0rem 1rem 3rem"}
                fontSize="1xl"
                _hover={{ color: "green", cursor: "pointer" }}
              >
                Manage Address{" "}
              </Text>
              <Text
                m={"1rem 0rem 1rem 3rem"}
                fontSize="1xl"
                _hover={{ color: "green", cursor: "pointer" }}
              >
                Manage Refunds{" "}
              </Text>
              <Divider m="1rem" />
              <Heading display={"flex"} fontSize="lg" m={"1rem"}>
                <Image
                  mr="1rem"
                  src="https://assets.pharmeasy.in/web-assets/dist/ab7afe51.svg"
                />
                Wallet
              </Heading>
              <Divider m="1rem" />
              <Heading display={"flex"} fontSize="lg" m={"1rem"}>
                <Image
                  mr="1rem"
                  src="https://assets.pharmeasy.in/web-assets/dist/319c59f0.svg"
                />
                Refer and Earn
              </Heading>
              <Divider m="1rem" />
              <Heading display={"flex"} fontSize="lg" m={"1rem"}>
                <Image
                  mr="1rem"
                  src="https://assets.pharmeasy.in/web-assets/dist/9a22e94b.svg"
                />
                Logout
              </Heading>
            </Box>
          </Box>
          <Box w={"70%"} h="auto" boxShadow="lg" p="6" rounded="md" bg="white">
            <Box w={"100%"} h="4rem" m="0.2rem auto auto auto" display={"flex"}>
              <Text
                fontSize={"1xl"}
                mr={"2rem"}
                fontWeight="bold"
                justifySelf={"left"}
              >
                MY ORDERS - MEDICINE/HEALTHCARE
              </Text>
              <Text m="0.2rem 3rem 1rem 3rem"></Text>
              <Select borderColor="black" w={"20rem"} placeholder="All Orders">
                <option value="price-asc">Delivered Orders</option>
              </Select>
            </Box>
            <div className={styles.orderList_div}>
              <div className={styles.orderList}>
                <div>
                  <p>Order ID </p>
                  <p>{orderId}</p>
                </div>
                <div>
                  <p>Placed on</p>
                  <p>{data} ago</p>
                </div>
              </div>
              <div>
                {list.map((el) => {
                  return (
                    <>
                      <div className={styles.orderListmap}>
                        <div>
                          <img src={el.product.img1} alt="" />
                        </div>
                        <div>
                          <p>{el.product.title}</p>
                        </div>
                        <div>
                          <p>Qty - {el.qty}</p>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
              <div className={styles.total}>
                <p>Shipment Total</p>
                <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                  {"\u20B9"}
                  {total}
                </p>
              </div>
            </div>
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
                We maintain strict quality controls on all our partner
                retailers, so that you always get standard quality products.
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
      </Box>
    );
  }
};

export default Myorders;
