import { ApiService } from "../util/api.service";


const PostsUrl = {
posts:'/posts'
}








const getPosts = async () => {
    const response = await ApiService.get(PostsUrl.posts)
    // console.log(response);
    return response; 
}



const PostService = {
    getPosts
}

export default PostService;