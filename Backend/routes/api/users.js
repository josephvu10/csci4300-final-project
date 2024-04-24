const express = require("express");
const bcryptjs = require("bcryptjs");
const userRouter = express.Router();
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");
const User = require('../../models/User');
const Item = require("../../models/Item");

userRouter.post("/signup", async (req, res) => {
    try {
        const { email, password, confirmPassword } = req.body; // Remove username
        if (!email || !password || !confirmPassword) {
            return res.status(400).json({ msg: "Please enter all the fields" });
        }
        if (password.length < 6) {
            return res
            .status(400)
            .json({ msg: "Password should be at least 6 characters" });
        }
        if (confirmPassword !== password) {
            return res.status(400).json({ msg: "Both passwords don't match" });
        }
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res
            .status(400)
            .json({ msg: "User with the same email already exists" });
        }
        const hashedPassword = await bcryptjs.hash(password, 8);
        const newUser = new User ({ email, password: hashedPassword }); // Remove username

        const savedUser = await newUser.save();
        console.log(savedUser.username);
        res.json(savedUser.username);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});


userRouter.post("/login", async (req, res) => {
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
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        res.json({ token, user: { id: user._id, username: user.username } });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// TO CHeck IF TOKEN IS VALID
userRouter.post("/tokenIsValid", async (req, res) => {
    try {
        const token = req.header("Authorization");
        if(!token) return res.jspm(false);
        const verified = jwt.verify(tokenParts[1], process.env.JWT_SECRET);
        if (!verified) return res.jsom(false);
        const user = await User.findById(verified.id);
        if (!user) return res.json(false);
        return res.json(true);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.delete('/:id', auth, (req, res) => {
    Item.findByIdAndRemove(req.params.id, req.body)
        .then((item) => res.json({ msg: 'Item entry deleted successfully' }))
        .catch((err) => res.status(404).json({ error: 'No such a item' }));
});
