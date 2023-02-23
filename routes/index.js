const express = require("express");
const router = express.Router();

const signupRouter = require("./signup.route");
const loginRouter = require("./login.route")
const postsRouter = require("./posts.route");


router.use("/signup", signupRouter);
router.use("/login", loginRouter);
// router.use("/posts/:postId", );
router.use("/posts", postsRouter);



module.exports = router;