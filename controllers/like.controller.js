const LikeService = require("../services/like.service")

class LikeController {
    likeService = new LikeService();
}

module.exports = LikeController;