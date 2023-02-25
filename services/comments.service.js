const CommentsRepository = require('../repositories/commnets.repository');

class CommentsService {
    commentsRepository = new CommentsRepository();

    createComments = async(userId, postId, comment) => {
        const createCommentData = await this.commentsRepository.createComments(userId, postId, comment)

        return createCommentData;
    }

    getComments = async(postId) => {

        return await this.commentsRepository.getComments(postId)
        
    }

    editComment = async(userId,postId,comment,commentsId) => {
        return await this.commentsRepository.editComment(userId,postId,comment,commentsId)
    }

    deleteComment = async(userId,postId,commentsId) => {
        return await this.commentsRepository.deleteComment(userId,postId,commentsId)
    }

}

module.exports = CommentsService