import type { NextApiRequest, NextApiResponse } from "next";
import { promisify } from "util";
const sleep = promisify(setTimeout);
import { Grocery } from "../index"

const baseItems: Grocery[] = [{
  name: "Apple",
  id: "001"
}, {
  name: "Orange",
  id: "002"
}, {
  name: "Banana",
  id: "003"
}].map(item => ({
  ...item,
  inBasket: false,
  quantity: 0,
}))

let groceriesDataStore = [...baseItems];

const fakeDbPost = async (groceryItems) => {
  await sleep(500);
  groceriesDataStore = groceryItems;
};

const fakeDbGet = async () => sleep(200).then(() => groceriesDataStore);

export const get = async (_req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(await fakeDbGet());
};

export const post = async (req: NextApiRequest, res: NextApiResponse) => {
  const groceryItems = req.body as Grocery[];
  await fakeDbPost(groceryItems);
  res.send(200);
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    await post(req, res);
  } else if (req.method === "GET") {
    await get(req, res);
  } else {
    res.status(501);
  }
}

export default handler
