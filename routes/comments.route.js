const express = require("express");
const router = express.Router();
const loginmiddleware = require('../middlewares/login.middleware')
const CommentsController = require("../controllers/commnets.controller");
const commentsController = new CommentsController();

router.post("/:postId/comments",loginmiddleware, commentsController.createComments);
router.get("/:postId/comments", commentsController.getComments);
router.put("/:postId/comments/:commentsId",loginmiddleware, commentsController.editComment)
router.delete("/:postId/comments/:commentsId",loginmiddleware, commentsController.deleteComment)


module.exports = router;