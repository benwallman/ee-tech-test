
import React from "react"

const GroceryTile = ({
  name,
  inBasket,
  onClick,
}) => (
  <div style={{
    flex: "0 1 320px",
    padding: "12px",
    margin: "0 12px",
    outline: "1px solid silver",

  }}>
    <h2>{name}</h2>
    <button onClick={onClick}>
      {inBasket ? "Remove from basket" : "Add to basket"}
    </button>
  </div>
)

export default GroceryTile
