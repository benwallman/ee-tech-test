import React from "react"
import GroceryTile from "../components/GroceryTile"

export interface Grocery {
  name: string;
  id: string;
  inBasket: boolean;
}

export default function Home() {
  const [groceries, setGroceries] = React.useState<Grocery[]>([])
  const getGroceries = async () => {
    fetch("/api/grocery")
      .then(res => res.json())
      .then((res) => {
        const newGroceries = res as Grocery[];
        setGroceries(newGroceries);
      })
  }
  React.useEffect(() => {
    getGroceries();
  }, [])
  const updateGroceries = async (id: string, inBasket: boolean) => {
    const updatedGroceries = groceries.map(grocery => ({
      ...grocery,
      inBasket: grocery.id === id ? inBasket : grocery.inBasket,
    }))
    await fetch("api/grocery", {
      method: "POST",
      body: JSON.stringify(updatedGroceries),
    })
    await getGroceries()
  }
  return (
    <div >
      <main>
        <h1>
          Welcome to EqualExperts shopping!
        </h1>
        <section style={{ display: "flex" }}>
          {groceries.map(({
            name,
            id,
            inBasket,
          }) => (
            <GroceryTile
              key={id}
              name={name}
              inBasket={inBasket}
              onClick={() => {
                updateGroceries(id, !inBasket)
              }}
            />
          ))}
        </section>
      </main>
    </div>
  )
}
