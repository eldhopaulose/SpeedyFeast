const Food = require("../models/FoodModels");
const mongoose = require("mongoose");

//get single food
const getSingleFood = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such food" });
  }
  const food = await Food.findById(id);

  if (!food) {
    return res.status(400).json({ error: "No such food" });
  }
  res.status(200).json(food);
};

//get find by category

const getCategory = async (req, res) => {
  const category = req.params.category;
  console.log(category);
  try {
    const data = await Food.find({ category });
    console.log(data);
    res.status(200).json({ data });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// get all food with pagination
const getFood = async (req, res) => {
  const { page = 1, pageSize = 10 } = req.query;
  const skip = (page - 1) * pageSize;

  try {
    const totalItems = await Food.countDocuments({});
    const totalPages = Math.ceil(totalItems / pageSize);

    const data = await Food.find({}).skip(skip).limit(Number(pageSize));

    res.status(200).json({
      pageInfo: {
        status: 200,
        isError: false,
        currentPage: Number(page),
        totalPages,
        pageSize: Number(pageSize),
        totalItems,
      },
      data,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//create new food
const createFood = async (req, res) => {
  const { title, description, image, category, star, location } = req.body;

  try {
    const data = await Food.create({
      title,
      description,
      image,
      category,
      star,
      location,
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getFood, getSingleFood, createFood, getCategory };
