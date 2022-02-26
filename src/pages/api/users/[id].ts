import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@Pages/api/users/index";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    return await getSingleUserResolver(req, res);
  }
  if (req.method === "PATCH") {
    return await updateUserResolver(req, res);
  }
  if (req.method === "DELETE") {
    return await deleteUserResolver(req, res);
  }
  return res.status(405).json({ message: "HTTP method not allowed" });
}

const getSingleUserResolver = async (req: NextApiRequest, res: NextApiResponse) => {
  const id = req.query.id.toString();
  try {
    const user = await supabase
      .from("users")
      .select("*")
      .match({ id: id });
    if (user) res.status(user.status).json(user.data.flat(1)); //TODO need to return only JSON not array
    throw new Error(`Could not find user with id: ${id}`);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateUserResolver = async (req: NextApiRequest, res: NextApiResponse) => {
  const id = req.query.id.toString();
  const { name } = req.body;
  try {
    const user = await supabase
      .from("users")
      .update({ name: name })
      .match({ id: id });
    if (user) res.status(user.status).json(user.data);
    throw new Error(`Could not find user with id: ${id}`);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteUserResolver = async (req: NextApiRequest, res: NextApiResponse) => {
  const id = req.query.id.toString();
  const { data, error } = await supabase
    .from("users")
    .delete()
    .match({ id: id });
  if (data) res.status(200).json(data);
  if (error) res.status(500).json({ message: error.message });
};
