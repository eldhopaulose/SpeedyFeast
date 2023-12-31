const jwt = require("jsonwebtoken");

const User = require("../models/UserModel");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "10d" });
};

//login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    //create token
    const token = createToken(user._id);
    const { name } = user;
    res.status(200).json({ name, email, token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//signup user

const signupUser = async (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;

  try {
    const user = await User.signup(name, email, password);

    const token = createToken(user._id);

    res.status(200).json({ name, email, token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { signupUser, loginUser };
