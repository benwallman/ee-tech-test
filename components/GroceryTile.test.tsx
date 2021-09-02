/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";

const GroceryTile = ({
  name,
  inBasket,
}) => (
  <div>
    <h2>{name}</h2>
    <button>
      {inBasket ? "Remove from basket" : "Add to basket"}
    </button>
  </div>
)

describe("Grocery Tile", () => {
  it("Should display an add basket button if none are in basket", () => {
    const { getByRole } = render(
      <GroceryTile name="foo" inBasket={false} />,
    );
    const button = getByRole("button");
    expect(button.innerHTML).toContain("Add to basket");
  });

  it("Should display an remove from basket button if product is in basket", () => {
    const { getByRole } = render(
      <GroceryTile name="foo" inBasket />,
    );
    const button = getByRole("button");
    expect(button.innerHTML).not.toContain("Add to basket");
    expect(button.innerHTML).toContain("Remove from basket");
  });
});
