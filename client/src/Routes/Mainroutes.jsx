import React from "react";
import { Routes, Route } from "react-router-dom";
import Desc from "../Pages/Desc/Desc";
import LabDetails from "../Pages/Labdetails/LabDetails";
import { LabTest } from "../Pages/LabTest";
import OrderMedicines from "../Pages/OrderMedicines";
import { Rtcprtest } from "../Pages/RtpcrTest/Rtcprtest";
import Cart from "../Pages/Cart/Cart";
import { Navbar } from "../Components/navbar/Navbar";
import { Main } from "../Pages/home/Main";
import { Footer } from "../Components/Footer";
import Healthcare from "../Healthcare Page/Healthcare";
import { SliderData } from "../Healthcare Page/SliderData";
import Product from "../Healthcare Page/Product";
import Myorders from "../User/Myorders";
import Myrefills from "../User/Myrefills";
import Medicalrecord from "../User/Medicalrecord";
import Wallet from "../User/Wallet";
import Myprofile from "../User/Myprofile";
import Refer from "../User/Refer";
import Payment from "../Components/payment/Payment";
import ThankYou from "../Components/payment/ThankYou";

const Mainroutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/productdetails/:title" element={<Desc />} />
        <Route path="/orderMed" element={<OrderMedicines />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/healthcare"
          element={<Healthcare slides={SliderData} />}
        />
        <Route path="/labtest" element={<LabTest />} />
        <Route path="/rtpcr" element={<Rtcprtest />} />
        <Route path="/products/:str" element={<Product />} />
        <Route path="/labdetails" element={<LabDetails />} />
        <Route path="/myorders" element={<Myorders />} />
        <Route path="/myrefills" element={<Myrefills />} />
        <Route path="/medicalrecord" element={<Medicalrecord />} />
        <Route path="/myprofile" element={<Myprofile />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/refer" element={<Refer />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/thnx-you-paid" element={<ThankYou />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Mainroutes;
