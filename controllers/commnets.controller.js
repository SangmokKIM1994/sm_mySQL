const CommentsService = require('../services/comments.service');

class CommentsController {
    commentsService = new CommentsService()

    createComments = async(req, res, next) => {
        const {userId} = res.locals.user;
        const {postId} = req.params;
        const {comment} = req.body;

        const createCommentData = await this.commentsService.createComments(userId,postId,comment);

        res.status(201).json({data : createCommentData})
    }

    getComments = async(req, res, next) => {
        const {postId} = req.params

        const comments = await this.commentsService.getComments(postId)
        
        res.status(200).json({comments:comments})
    }

    editComment = async(req,res,next) => {
        const {userId} = res.locals.user;
        const {commentsId,postId} = req.params;
        const {comment} = req.body

        await this.commentsService.editComment(userId,postId,comment,commentsId);

        res.status(200).json({message:"댓글이 수정되었습니다."})
    }

    deleteComment = async(req,res,next) => {
        const {userId} = res.locals.user;
        const {commentsId,postId} = req.params;

        await this.commentsService.deleteComment(userId,postId,commentsId)

        res.status(200).json({message:"댓글이 삭제되었습니다."})
    }
}

module.exports = CommentsController