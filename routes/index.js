const express = require("express");
const router = express.Router();

const signupRouter = require("./signup.route");
const loginRouter = require("./login.route")
const postsRouter = require("./posts.route");
const commentsRouter = require('./comments.route')
const likeRouter = require("./like.route")


router.use("/signup", signupRouter);
router.use("/login", loginRouter);
// router.use("/posts/:postId", commentsRouter);
router.use("/posts",[likeRouter,commentsRouter,postsRouter]);



module.exports = router;