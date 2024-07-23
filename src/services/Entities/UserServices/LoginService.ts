import { compare } from 'bcrypt'
import { FindUserRepository } from '../../../repositories/UserRepositories/FindRepository';
import * as jwt from 'jsonwebtoken'

type Data = {
  username: string;
  password: string;
}

export const LoginService = async (request: Data) => {

  try {
    const users = await FindUserRepository({ email: request.username })

    if (users.length == 0) {
      return {
        success: false,
        message: 'User not found'
      }
    }

    const user = users[0]
    const verifyPassword = await compare(request.password, user.password)

    if (!verifyPassword) {
      return {
        success: false,
        message: 'Invalid credentials'
      }
    }

    const token = jwt.sign(
      {
        id: user.id,
        name: user.name
      },
      'sflk;jsafljal;fjlafj',
      {
        expiresIn: '1d'
      }
    )

    return {
      success: true,
      data: { user, token }
    }
  } catch (err) {
    return {
      success: false,
      message: err?.message || ''
    }
  }
}