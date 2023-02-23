const express = require("express");
const router = express.Router();
const loginmiddleware = require('../middlewares/login.middleware')
const PostsController = require("../controllers/posts.controller");
const postsController = new PostsController();

router.post("/",loginmiddleware, postsController.createPosts);
router.get("/", postsController.getPosts);
router.get("/:postId", postsController.findOnePost)
router.put("/:postId",loginmiddleware, postsController.editPost)
router.delete("/:postId",loginmiddleware, postsController.deletePost)


module.exports = router;