const { Databaseerror } = require('../error');
const {posts,users,comments,sequelize} = require('../models');

class PostsRepository {
    createPosts = async(userId,title, content) =>{

        const userInfo = await users.findOne({where:{userId}})
        const createPostData = await posts.create({ userId: userInfo.userId, 
                                                    nickname: userInfo.nickname, 
                                                    title, 
                                                    content,
                                                    likecount: 0
                                                    });

        return createPostData
    }

    getPosts = async() => {

        const allPostsData = await posts.findAll({  
            attributes: [   
                "postId",
                "title",
                "content",
                "userId",
                "createdAt",
                "updatedAt",
                [sequelize.fn("COUNT", sequelize.col("comments.postId")),"commentsCount"]],
                include: [  { model:users,attributes: ["nickname"]},
                            { model:comments,attributes: []}],
                group: ["posts.postId"],
                order:[["createdAt","DESC"]],
})

        return allPostsData
    }

    findOnePost = async(postId) => {
        const findPost = await posts.findOne({where:{postId},  
            attributes: [   
                "postId",
                "title",
                "content",
                "UserId",
                "createdAt",
                "updatedAt",
                [sequelize.fn("COUNT", sequelize.col("comments.postId")),"commentsCount"]],
                include: [  { model:users,attributes: ["nickname"]},
                            { model:comments,attributes: []}],
                group: ["posts.postId"],
                order:[["createdAt","DESC"]],
                })

        if (!findPost){
            throw new Databaseerror({message:"null값이 없음.",code:401})
        }

        return findPost
    }

    editPost = async(postId,userId,title, content) =>{
        const editPostData = await posts.update({title,content},{where:{postId,userId}})


        return editPostData
    }

    deletePost = async(userId,postId) => {

        const deletepost =  await posts.destroy({where: {postId,userId}})
        
        return deletepost
     }
}

module.exports = PostsRepository