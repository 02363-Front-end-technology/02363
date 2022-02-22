import { NextApiRequest, NextApiResponse } from "next";
import { sampleUserData } from "../../../utils/sample-data";

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
    const user = sampleUserData.find((u) => u.id === id); //TODO Not working with generated UUID
    if (user) res.status(200).json(user);
    throw new Error(`Could not find user with id: ${id}`);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateUserResolver = async (req: NextApiRequest, res: NextApiResponse) => {
  const id = req.query.id.toString();
  const { name } = req.body;
  try {
    const user = sampleUserData.find((u) => u.id === id);
    if (user) {
      user.name = name;
      res.status(200).json(user);
    }
    throw new Error(`Could not find user with id: ${id}`);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteUserResolver = async (req: NextApiRequest, res: NextApiResponse) => {
  const id = req.query.id.toString();
  try {
    const user = sampleUserData.find((u) => u.id === id);
    const index = sampleUserData.findIndex((u) => u.id === id);
    sampleUserData.splice(index,1);
    res.status(200).json(user);
    throw new Error(`Could not find user with id: ${id}`);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
