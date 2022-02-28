import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../../utils/supabaseClient";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
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
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .match({ id: id });
  if (data) return res.status(200).json(data.reduce((user) => user));
  return res.status(404).json({ message: error.message, code: error.code });
};

const updateUserResolver = async (req: NextApiRequest, res: NextApiResponse) => {
  const id = req.query.id.toString();
  const { name } = req.body;
  const { data, error } = await supabase
    .from("users")
    .update({ name: name })
    .match({ id: id });
  if (data) return res.status(200).json(data);
  return res.status(404).json({ message: error.message });
};

const deleteUserResolver = async (req: NextApiRequest, res: NextApiResponse) => {
  const id = req.query.id.toString();
  const { data, error } = await supabase
    .from("users")
    .delete()
    .match({ id: id });
  if (data) return res.status(200).json(data);
  return res.status(500).json({ message: error.message });
};
export default handler;
