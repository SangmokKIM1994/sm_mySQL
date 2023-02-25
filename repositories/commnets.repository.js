const {users,posts,comments,sequelize} = require('../models')

class CommentsRepository {
    createComments = async(userId, postId, comment) => {

        const userinfo = await users.findOne({where : {userId}})
        const postinfo = await posts.findOne({where : {postId}})

        const createCommentData = await comments.create({   userId: userinfo.userId,
                                                            postId: postinfo.postId,
                                                            nickname: userinfo.nickname,
                                                            comment
                                                        });
        return createCommentData
    }

    getComments = async(postId) => {
        const findComments = await comments.findAll({where:{postId}})
        console.log(findComments)

        return findComments
    }

    editComment = async(userId, postId,comment,commentsId) => {
        const findComment = await comments.findOne({where:{userId,postId,commentsId}})
        return await findComment.update({comment})
    }

    deleteComment = async(userId,postId,commentsId) => {
        return await comments.destroy({where:{userId,postId,commentsId}})
    }


}

module.exports = CommentsRepository