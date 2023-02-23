const PostsRepository = require('../repositories/posts.repository');

class PostsService {
    postsRepository = new PostsRepository();

    createPosts = async(userId, title, content) => {
        const createPostData = await this.postsRepository.createPosts(userId, title, content);

        return createPostData
    };

    getPosts = async() => {
        const allPostsData = await this.postsRepository.getPosts();

        const all = allPostsData.map( post =>{
            return{
                postId : post.postId,
                userId : post.userId,
                nickname: post.nickname,
                title:post.title,
                createdAt:post.createdAt,
                updatedAt:post.updatedAt
            }
        })

        return all
    }

    findOnePost = async(postId) => {
        const findPostsData = await this.postsRepository.findOnePost(postId);

        if(!findPostsData){
            const err = new Error("게시글 조회에 실패하였습니다.")
            err.name = "4"
            throw err;
        }

        
        return{
            postId : findPostsData.postId,
            userId : findPostsData.userId,
            nickname: findPostsData.nickname,
            title:findPostsData.title,
            content:findPostsData.content,
            createdAt:findPostsData.createdAt,
            updatedAt:findPostsData.updatedAt
        }
        
    }

    editPost = async(postId,userId,title, content) =>{
        const editPostData = await this.postsRepository.editPost(postId,userId,title, content);

        return editPostData
    }

    deletePost = async(userId,postId) => {

       const deletepost =  await this.postsRepository.deletePost(userId,postId)
       
       return deletepost
    }
};

module.exports = PostsService;