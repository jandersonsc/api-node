import User from "../../models/User";

type Data = {
  name?: string;
  email?: string;
  phoneNumber?: string;
  active?: boolean;
}

export const FindUserRepository = async (payload: Data) => {
  return await User.findAll({
    where: payload
  })
}