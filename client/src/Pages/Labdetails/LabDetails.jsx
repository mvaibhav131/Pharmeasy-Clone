import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./LabDetails.css";
import styles from "../../Styles/OrderMedicine.module.css";
import Services from "../CustomerService/Services";

const LabDetails = () => {
  return (
    <Box>
      <Box className="lab_details_box">
        <Box className="textname">Lab Details</Box>
        <Box className="all_detail_div">
          <Box className="box1">
            <Box className="covidrtpcr_box">
              <img
                src="https://assets.pharmeasy.in/web-assets/dist/f9973775.svg"
                alt="labs"
              />
              <Text className="rtpcr_text">PharmEasy Labs (Covid RTPCR)</Text>
            </Box>

            <Accordion
              border={"white"}
              mt={"2rem"}
              defaultIndex={[0]}
              allowMultiple
            >
              <AccordionItem>
                <h2>
                  <AccordionButton color={"#4f585e"}>
                    <Box className="discription" flex="1" textAlign="left">
                      Description
                    </Box>
                    <AccordionIcon color={"#10847e"} />
                  </AccordionButton>
                </h2>
                <AccordionPanel color={"#4f585e"} pb={4}>
                  Thyrocare Technologies Limited is a chain of diagnostic and
                  preventive care laboratories, based in Navi Mumbai. The
                  company has 1,122 outlets and collection centers across India.
                  Labs HQ Address : D=37/1, TTC INDUSTRIAL AREA, MIDC, TURBHE,
                  NAVI MUMBAI MH 400703 IN. Customer Support: 7022000900.
                  Grievance Officer - Name : Sameer Jha. Mobile : 9987573048.
                  Designation : Sr Manager
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

            <Box className="test_packeges_box">
              <Box className="populartest_box">
                Popular Tests
                <Box className="line"></Box>
              </Box>

              <Box className="affordable">Affordable Packages</Box>
            </Box>
            <Link to={""}>
              <Box className="select_test_div">
                <img
                  src="https://assets.pharmeasy.in/web-assets/dist/6b3d644c.svg"
                  alt="covid rtpcr"
                />
                <Box>
                  <h3>Covid-19 RTPCR (Coronavirus SARS - CoV2)</h3>
                  <p className="pricediv">₹700</p>
                </Box>
                <button className="selectbtn">Select</button>
              </Box>
            </Link>
          </Box>
          <Box className="box1">
            <Box className="selectyour">Please select a test to proceed</Box>
            <Box className="view_cart_box">
              <button className="view_cart_btn">View Cart</button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Services />
      <div className="appdiv">
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
    </Box>
  );
};

export default LabDetails;
