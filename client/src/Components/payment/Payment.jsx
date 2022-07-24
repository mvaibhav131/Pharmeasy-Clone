// import "./App.css";
import { useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../../Context/AuthContext";

function Payment() {
  const value = useContext(AuthContext);
  useEffect(() => {
    handlePayment();
  }, []);

  const initPayment = (data) => {
    const options = {
      key: "rzp_test_hWn45h7vbMk9ZG",
      amount: data.amount,
      currency: data.currency,
      name: value.formData.fname,
      description: "PharmEasy.in",
      image: "https://pharmeasy.in/pe_logo_2x.png",
      order_id: data.id,
      handler: async (response) => {
        try {
          const verifyUrl =
            "https://pharmeasylion.herokuapp.com/payment/verify";
          const { data } = await axios.post(verifyUrl, response);
          console.log(data);
        } catch (error) {
          console.log(error);
        }
        let redirect_url;
        if (
          typeof response.razorpay_payment_id == "undefined" ||
          response.razorpay_payment_id < 1
        ) {
          redirect_url = "/you-owe-money.html";
        } else {
          redirect_url = "/thnx-you-paid";
        }
        window.location.href = redirect_url;
      },
      theme: {
        color: "#5DC6AD",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const handlePayment = async () => {
    try {
      const orderUrl = "https://pharmeasylion.herokuapp.com/api/payment/orders";
      const { data } = await axios.post(orderUrl, { amount: value.total });
      console.log(data);
      initPayment(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  return <div className="App"></div>;
}

export default Payment;
