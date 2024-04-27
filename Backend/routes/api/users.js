const express = require("express");
const bcryptjs = require("bcryptjs");
const userRouter = express.Router();
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");
const User = require("../../models/User");
const bodyParser = require("body-parser");

module.exports = userRouter;

userRouter.post("/signup", bodyParser.json(), async (req, res) => {
  try {
    const { email, password, confirmPassword } = req.body;
    if (!email || !password || !confirmPassword) {
      return res.status(400).json({ msg: "Please enter all the fields" });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ msg: "Password should be atleast 6 characters" });
    }
    if (confirmPassword !== password) {
      return res.status(400).json({ msg: "Both the passwords don't match" });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ msg: "User with the same email already exists" });
    }
    const hashedPassword = await bcryptjs.hash(password, 8);

    const newUser = new User({
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    res.json({
      id: savedUser.id,
      email: savedUser.email,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

userRouter.post("/login", bodyParser.json(), async (req, res) => {
  console.log(process.env.JWT_SECRET);
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ msg: "Please enter all the fields" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .send({ msg: "User with this email does not exist" });
    }

    const isMatch = await bcryptjs.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).send({ msg: "Incorrect password." });
    }

    const token = jwt.sign(user.id, process.env.JWT_SECRET);

    res.json({ token, user: { id: user.id, email: user.email } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// TO CHeck IF TOKEN IS VALID
userRouter.get("/tokenInfo", async (req, res) => {
  try {
    const tokenHeader = req.header("Authorization");
    if (!tokenHeader) return res.json({valid: false});

    const tokenSplit = tokenHeader.split(" ")
    if (tokenSplit.length === 1) return res.json({valid: false})

    const verified = jwt.verify(tokenSplit[1], process.env.JWT_SECRET)

    if (!verified) return res.json({valid: false});
    const user = await User.findById(verified);
    if (!user) return res.json({valid: false});

    console.log(user)
    delete user._id
    delete user.__v
    return res.json({valid: true, id: user._id, email: user.email, songs: user.songs});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

userRouter.delete("/:id", auth, (req, res) => {
  Item.findByIdAndRemove(req.params.id, req.body)
    .then((item) => res.json({ msg: "Item entry deleted successfully" }))
    .catch((err) => res.status(404).json({ error: "No such a item" }));
});
