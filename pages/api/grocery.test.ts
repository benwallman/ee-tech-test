import { v4 as uuidv4 } from "uuid";
import type { NextApiRequest, NextApiResponse } from "next";
import * as groceryMethods from "./grocery";

it("Get grocery list", async () => {
  const spy = jest.fn()
  const request = {} as NextApiRequest;
  const response = {
    status: () => ({
      json: spy
    }),
  } as unknown as NextApiResponse;
  await groceryMethods.get(request, response);
  const itemsReturned = spy.mock.calls[0][0];
  expect(Array.isArray(itemsReturned)).toBe(true);
});

describe("Creating a shopping list", () => {
  it("Should be able to add an item to a grocery list", async () => {
    const id = uuidv4();
    const postSpy = jest.fn()
    const postRequest = {
      body: [{
        id,
        inBasket: "foo",
        name: id
      }]
    } as NextApiRequest;
    const postResponse = {
      send: postSpy,
    } as unknown as NextApiResponse;
    await groceryMethods.post(postRequest, postResponse);

    const getSpy = jest.fn();
    const getRequest = {} as NextApiRequest;
    const getResponse = {
      status: () => ({
        json: getSpy,
      }),
    } as unknown as NextApiResponse;

    await groceryMethods.get(getRequest, getResponse);
    const itemsReturned = getSpy.mock.calls[0][0];
    const groceryIds = itemsReturned.map(({ id }) => id);
    expect(groceryIds.includes(id)).toBe(true);
  })
})
