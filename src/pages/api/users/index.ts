import { NextApiRequest, NextApiResponse } from "next";
import { IUser } from "../../../interfaces";
import { supabase } from "../../../utils/supabaseClient";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    return await getAllUsersResolver(res);
  }

  if (req.method === "POST") {
    return await createUserResolver(req, res);
  }
  return res.status(405).json({ message: "HTTP method not allowed" });
};

const getAllUsersResolver = async (res: NextApiResponse) => {
  try {
    const allUsers = await supabase
      .from<IUser[]>("users")
      .select("*");
    if (allUsers) res.status(allUsers.status).json(allUsers.data);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

const createUserResolver = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name } = req.body;
  const { data, error } = await supabase
    .from<IUser>("users")
    .insert([{
      name: name
    }]);
  if (data) res.status(201).json(data);
  res.status(500).json({ message: error.message });
};
