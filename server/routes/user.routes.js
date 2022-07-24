const { Router } = require("express");
const { userMail, userVerify } = require("../controllers/user");

const userRouter = Router();

userRouter.post("/mail", userMail);
userRouter.post("/verify/:id", userVerify);

module.exports = userRouter;
