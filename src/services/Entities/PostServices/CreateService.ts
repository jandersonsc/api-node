import { Post } from "../../../models/Mongo/Posts";
import { CreatePostRepository } from "../../../repositories/PostRepositories/CreateRepository";

type CreateData = {
  userId: number;
  type: 'text' | 'media' | 'url';
  content: string;
}

export const CreateService = async (request: CreateData) => {

  try {
    // Create data in MongoDB
    const postCreated = await Post.create({
      type: request.type,
      content: request.content,
      likes: [],
      comments: [],
      shares: []
    })

    const post = await CreatePostRepository({
      postId: postCreated._id.toString(),
      userId: request.userId
    })

    return {
      success: true,
      data: {
        post,
        postCreated
      }
    }
  } catch (err) {
    return {
      success: false,
      message: 'Fail to create post'
    }
  }
}