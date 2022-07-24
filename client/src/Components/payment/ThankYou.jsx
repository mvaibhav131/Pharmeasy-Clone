import { Heading } from "@chakra-ui/layout";
import axios from "axios";
import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import styles from "./Thankyou.module.css";

const ThankYou = () => {
  const [isHide, setIsHide] = useState(true);

  useEffect(() => {
    const moveToOrder = async () => {
      const user_id = localStorage.getItem("user_id");
      await axios.get(
        `https://pharmeasylion.herokuapp.com/api/cart/payment/${user_id}`
      );
    };
    moveToOrder();
  }, []);

  const navigate = useNavigate();

  setTimeout(() => setIsHide(false), 5000);

  return (
    <div className={styles.div}>
      {!isHide ? (
        <div className={styles.paymentdiv}>
          <img
            style={{ width: "80px", margin: "auto" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYfD7SshGzpdEJQU6y9ViAWpuHHXI97tTNEQ&usqp=CAU"
            alt=""
          />
          <Heading as="h1">Thank You!</Heading>
          <Heading as="h4" fontSize={"md"}>
            You have Placed the Order {"\n"} Successfully
          </Heading>
          <p>
            Your order has been proccessed and {"\n"}
            will be Delivery soon
          </p>

          <Heading as="h4" fontSize={"md"}>
            Happy Shopping
          </Heading>
          <button className={styles.button} onClick={() => navigate("/")}>
            Home
          </button>
        </div>
      ) : (
        <div>
          <div className={styles.loader}></div>
        </div>
      )}
    </div>
  );
};

export default ThankYou;
