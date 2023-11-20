// const mongoose = require("mongoose");

// const Schema = mongoose.Schema;

// const FoodSchema = new Schema(
//   // {
//   //   title: {
//   //     type: String,
//   //     required: true,
//   //   },
//   //   description: {
//   //     type: String,
//   //     required: true,
//   //   },
//   //   image: {
//   //     type: String,
//   //     required: true,
//   //   },
//   //   category: {
//   //     type: String,
//   //     required: true,
//   //   },
//   //   star: {
//   //     type: Number,
//   //     required: true,
//   //   },
//   //   location: {
//   //     type: String,
//   //     required: true,
//   //   },
//   // },
//   {
//     status: {
//       type: String,
//     },
//     food: {
//       type: Array,
//       required: true,
//     },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Food", FoodSchema);

// models/Food.js
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FoodSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    star: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Food", FoodSchema);
