import Post from "../../models/Posts";
import { Post as PostMongo } from "../../models/Mongo/Posts";
import User from "../../models/User";

export const FindPostsRepository = async () => {
  let posts = await Post.findAll({
    include: [
      {
        model: User,
        as: 'user',
        attributes: ['name']
      }
    ],
    order: [['createdAt', 'DESC']],
    attributes: ['id', 'createdAt']
  })

  posts.map(async (post) => {

    let content = await PostMongo.findById(post.postId)

    if (!content) {
      return
    }

    let temp = { ...post }
    return temp
  })

  return posts
}