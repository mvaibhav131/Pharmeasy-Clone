const nodemailer = require("nodemailer");
const userModel = require("../models/user");
const hbs = require("handlebars");
require("dotenv").config();
const transport = nodemailer.createTransport({
  service: "gmail",
  secure: false,
  port: 465, //465:ssl , 587 :tsl
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
  host: "smtp.gmail.com",
});

const userMail = async (req, res) => {
  const oldUser = await userModel.findOne({ mail: req.body.mail });
  if (!oldUser) {
    const newUser = new userModel({ ...req.body });
    await newUser.save();

    const content = `<div>
                            <h1>hello</h1>
                            <p>thank you for signing up, here is your {{otp}}</p>
                              </div>`;

    const template = hbs.compile(content);

    const otp = Math.floor(1000 + Math.random() * 9000);
    const newOtp = await userModel.updateOne(
      { _id: newUser._id },
      { $push: { otp: otp } }
    );

    transport
      .sendMail({
        from: process.env.EMAIL,
        to: req.body.mail,
        subject: "here is your otp.",
        // text: "hellow world 1234 monodb is good",
        html: template({ otp: otp }),
      })
      .then((responce) => {
        return res.send({
          message: "user signup successfully",
          id: newUser._id,
        });
      });
  } else {
    const content = `<div>
                                  <h1>hello</h1>
                                  <p>thank you for signing up, here is your {{otp}}</p>
                              </div>`;

    const template = hbs.compile(content);

    const otp = Math.floor(1000 + Math.random() * 9000);
    const newOtp = await userModel.updateOne(
      { _id: oldUser._id },
      { $push: { otp: otp } }
    );

    transport
      .sendMail({
        from: "pharmeasy620@gmail.com",
        to: req.body.mail,
        subject: "here is your otp.",
        // text: "hellow world 1234 monodb is good",
        html: template({ otp: otp }),
      })
      .then((responce) => {
        return res.send({
          message: "user signup successfully",
          id: oldUser._id,
        });
      });
  }
};

async function userVerify(req, res) {
  try {
    const { id } = req.params;
    const { otp } = req.body;
    const otpObj = await userModel.findOne({ _id: id });
    const otpArr = otpObj.otp;
    if (otpArr[otpArr.length - 1] === otp) {
      return res.send("your otp has been verified!");
    } else {
      return res.status(404).send("otp is wrong");
    }
  } catch (err) {
    console.log("err:", err);
    return res.status(404).send("Something went wrong");
  }
}
//62d7ce9fc8c9b354e8c3705b
module.exports = { userMail, userVerify };

//pharmEasy956789
//jkoueclzmizdydcc
