import { hash } from 'bcrypt'
import { CreateUserRepository } from "../../../repositories/UserRepositories/CreateRepository";

type CreateData = {
  name: string;
  email?: string;
  password: string;
  phoneNumber?: string;
  active?: boolean;
}

export const CreateService = async (request: CreateData) => {

  try {

    request.password = await hash(request.password, 8)

    const user = await CreateUserRepository(request)
    return {
      success: true,
      data: user
    }
  } catch (err) {
    return {
      success: false,
      message: err?.message || ''
    }
  }
}