import User from "../../models/User";

type CreateData = {
  name: string;
  email?: string;
  password: string;
  phoneNumber?: string;
  active?: boolean;
}

export const CreateUserRepository = async (payload: CreateData) => {
  return await User.create(payload)
}