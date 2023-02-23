const {posts,users} = require('../models');

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

        const allPostsData = await posts.findAll()

        return allPostsData
    }

    findOnePost = async(postId) => {
        const findPost = await posts.findOne({where:{postId}})

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