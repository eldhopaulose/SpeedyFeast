const express = require("express");
const {
  getFood,
  getSingleFood,
  createFood,
  getCategory,
} = require("../controller/FoodController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

//auth check

router.use(requireAuth);

router.get("/:id", getSingleFood);
router.get("/category/:category", getCategory);
router.get("/", getFood);
router.post("/", createFood);

module.exports = router;
