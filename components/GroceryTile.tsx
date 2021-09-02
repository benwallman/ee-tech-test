
import React from "react"

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

export default GroceryTile
