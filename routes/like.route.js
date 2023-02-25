const express = require('express');
const router = express.Router();

const loginmiddleware = require('../middlewares/login.middleware')
const LikeController = require('../controllers/like.controller');
const likeController = new LikeController();


// router.put('/:postId/like',loginmiddleware, likeController.like);

module.exports = router;