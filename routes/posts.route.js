const express = require("express");
const router = express.Router();

const PostsController = require("../controllers/posts.controller");
const postsController = new PostsController();

router.post("/", postsController.createPosts);
router.get("/", postsController.getPosts);
router.get("/:postId", postsController.findOnePosts)
router.put("/:postId", postsController.editPosts)
router.delete("/:postId", postsController.deletePosts)


module.exports = router;