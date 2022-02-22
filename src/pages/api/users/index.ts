import { NextApiRequest, NextApiResponse } from "next";
import { sampleUserData } from "../../../utils/sample-data";
import crypto from "crypto";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    return await getAllUsersResolver(res);
  }

  if (req.method === "POST") {
    return await createUserResolver(req,res);
  }
  return res.status(405).json({ message: "HTTP method not allowed" });
};

const getAllUsersResolver = async (res: NextApiResponse) => {
  try {
    if (!Array.isArray(sampleUserData)) {
      throw new Error("Cannot find user data");
    }
    res.status(200).json(sampleUserData);
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

const createUserResolver = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name } = req.body;
  try {
    const user = {
      id: crypto.randomUUID(),
      name: name
    };
    sampleUserData.push(user);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }

};
