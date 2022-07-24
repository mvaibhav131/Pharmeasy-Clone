const { Router } = require("express");
const { getOrdered } = require("../controllers/ordered");

const orderedRouter = Router();

orderedRouter.get("/:id", getOrdered);

module.exports = orderedRouter;
