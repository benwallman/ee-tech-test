
import React from "react"

const GroceryTile = ({
  name,
  inBasket,
  onClick,
}) => (
  <div>
    <h2>{name}</h2>
    <button onClick={onClick}>
      {inBasket ? "Remove from basket" : "Add to basket"}
    </button>
  </div>
)

export default GroceryTile
