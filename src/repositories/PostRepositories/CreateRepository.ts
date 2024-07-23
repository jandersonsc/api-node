import Post from "../../models/Posts";

type CreateData = {
  userId: number;
  postId: string;
}

export const CreatePostRepository = async (payload: CreateData) => {
  return await Post.create(payload)
}