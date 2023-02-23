const PostsService = require('../services/posts.service');

class PostsController {
    postsService = new PostsService();

    createPosts = async(req, res, next) => {
        const {userId} = res.locals.user
        const {title, content} = req.body;

        const createPostData = await this.postsService.createPosts(userId, title, content);

        res.status(201).json({data : createPostData})
    };

    getPosts = async(req,res,next) => {
        const allPostsData = await this.postsService.getPosts();
        
        res.status(200).json({ posts : allPostsData})
    }

    findOnePost = async(req, res, next) => {
        const {postId} = req.params
        try {
        const findOneData = await this.postsService.findOnePost(postId);
        res.status(200).json({posts : findOneData})
        } catch(error){
            next(error)
        }
        
    }

    editPost = async(req, res, next) => {
        const {userId} = res.locals.user
        const {postId} = req.params
        const {title, content} = req.body
        await this.postsService.editPost(postId,userId,title, content);

        res.status(200).json({message : "게시글 수정이 완료 되었습니다."})
    }

    deletePost = async(req, res, next) => {
        const {userId} = res.locals.user
        const {postId} = req.params

        await this.postsService.deletePost(userId,postId)
        res.status(200).json({message : "게시글 삭제가 완료 되었습니다."})
    }



};

module.exports = PostsController