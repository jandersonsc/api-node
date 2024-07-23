import { Request, Response } from "express";
import { FindPostsRepository } from "../../repositories/PostRepositories/ListRepository";

export const ListController = async (req: Request, res: Response) => {

  const posts = await FindPostsRepository()

  res.json({
    success: true,
    data: posts
  })
  return
  res.send({
    success: true,
    data: [
      {
        id: 1,
        date: '2024-07-03T01:45:46.863Z',
        user: {
          id: 1,
          name: 'Janderson Soares'
        },
        content: {
          type: 'text',
          value: 'João 3:16 Porque Deus amou o mundo de tal maneira que deu seu filho unigenito para que todo aquele que nele crê não pereça, mas tenha a vida eterna.'
        }
      },
      {
        id: 2,
        date: '2024-07-03T01:45:46.863Z',
        user: {
          id: 1,
          name: 'Janderson Soares'
        },
        content: {
          type: 'text',
          value: 'João 3:16 Porque Deus amou o mundo de tal maneira que deu seu filho unigenito para que todo aquele que nele crê não pereça, mas tenha a vida eterna.'
        }
      },
      {
        id: 3,
        date: '2024-07-03T01:45:46.863Z',
        user: {
          id: 1,
          name: 'Janderson Soares'
        },
        content: {
          type: 'text',
          value: 'João 3:16 Porque Deus amou o mundo de tal maneira que deu seu filho unigenito para que todo aquele que nele crê não pereça, mas tenha a vida eterna.'
        }
      },
      {
        id: 4,
        date: '2024-07-03T01:45:46.863Z',
        user: {
          id: 1,
          name: 'Janderson Soares'
        },
        content: {
          type: 'text',
          value: 'João 3:16 Porque Deus amou o mundo de tal maneira que deu seu filho unigenito para que todo aquele que nele crê não pereça, mas tenha a vida eterna.'
        }
      }
    ]
  })
}