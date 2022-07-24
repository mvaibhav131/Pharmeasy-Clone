import React from "react";
import { Box, Grid, Heading, Image, Text, Divider } from "@chakra-ui/react";

const Myrefills = () => {
  return (
    <Box>
      <Box w={"92%"} m="6rem auto auto auto" display={"flex"}>
        <Box
          w={"60%"}
          mr="2rem"
          border="0.5px"
          boxShadow="2xl"
          p="6"
          rounded="md"
          bg="white"
        >
          <Box p={"1rem"}>
            <Text fontSize={"2xl"} fontWeight="bold">
              {" "}
              BENEFITS OF REFILL
            </Text>
            <Divider m={"2rem"} />
            <Box display="flex" w={"100%"} h="11rem">
              <Box w={"50%"} h="11rem">
                <Image src="https://assets.pharmeasy.in/web-assets/mailer/easy-return.png" />
                <Heading as={"h6"} size="sm" m={"-2rem 0rem 0rem 7rem"}>
                  Easy Returns
                </Heading>
                <Text size="sm" m={"0.5rem 0rem 0rem 7rem"}>
                  Return your medicine within 30 days and healthcare products
                  within 2 days
                </Text>
              </Box>
              <Box w={"50%"} h="11rem">
                <Image src="https://assets.pharmeasy.in/web-assets/mailer/auto-reminder.png" />
                <Heading as={"h6"} size="sm" m={"-2rem 0rem 0rem 7rem"}>
                  Auto reminders
                </Heading>
                <Text size="sm" m={"0.5rem 0rem 0rem 7rem"}>
                  We remind you before your items get over
                </Text>
              </Box>
            </Box>
            <Box display="flex" w={"100%"} h="11rem">
              <Box w={"50%"} h="11rem">
                <Image src="https://assets.pharmeasy.in/web-assets/mailer/easy-cancel.png" />
                <Heading as={"h6"} size="sm" m={"-2rem 0rem 0rem 7rem"}>
                  Easy cancellation
                </Heading>
                <Text size="sm" m={"0.5rem 0rem 0rem 7rem"}>
                  You can cancel or skip any of your refill order
                </Text>
              </Box>
              <Box w={"50%"} h="11rem">
                <Image src="https://assets.pharmeasy.in/web-assets/mailer/schedule-delivery.png" />
                <Heading as={"h6"} size="sm" m={"-2rem 0rem 0rem 7rem"}>
                  Scheduled deliveries
                </Heading>
                <Text size="sm" m={"0.5rem 0rem 0rem 7rem"}>
                  We deliver as per your requested date
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box w={"33%"} h="11rem" boxShadow="2xl" p="6" rounded="md" bg="white">
          <Box w={"100%"} h="4rem" m="0.2rem auto auto auto" display={"flex"}>
            <Text fontSize={"1xl"} fontWeight="bold" justifySelf={"left"}>
              A HASSLE FREE EXPERIENCE
            </Text>
            <Text size="md" m="4rem 0rem 0rem -8rem">
              This feature has been disabled. We will be back with a new and
              improved feature soon!
            </Text>
          </Box>
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
};

export default Myrefills;
