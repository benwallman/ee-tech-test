import type { NextApiRequest, NextApiResponse } from "next";
import { promisify } from "util";
const sleep = promisify(setTimeout);

const groceriesDataStore = [];

const fakeDbPost = async (groceryItem) => {
  await sleep(500);
  groceriesDataStore.push(groceryItem);
  return groceriesDataStore;
};

const fakeDbGet = async () => sleep(200).then(() => groceriesDataStore);

export const get = async (_req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(await fakeDbGet());
};

export const post = async (req: NextApiRequest, res: NextApiResponse) => {
  const groceryItem = req.body;
  await fakeDbPost(groceryItem);
  res.status(200);
};
