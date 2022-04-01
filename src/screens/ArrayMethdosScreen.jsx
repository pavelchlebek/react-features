import React from "react"

const items = [
  { name: "bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "album", price: 10 },
  { name: "book", price: 5 },
  { name: "phone", price: 500 },
  { name: "computer", price: 1000 },
  { name: "keyboard", price: 25 },
]

const itemsUnder100 = items.filter((item) => item.price <= 100)

const itemsName = items.map((item) => {
  return { name: item.name }
})

const foundItem = items.find((item) => item.name === "keyboard")

items.forEach((item) => {
  if (item.price > 100) {
    console.log(item)
  }
})

const hasInexpensiveItems = items.some((item) => item.price < 6)

const allItemsExpensive = items.every((item) => item.price > 100)

const totalPrice = items.reduce((currentTotal, item) => {
  return currentTotal + item.price
}, 0)

const numbers = [1, 2, 8]

const isThere = numbers.includes(3)

console.table(isThere)

/* ---------------------------------------- end of Array methods-------------------------------------*/

// function that runs callback function
const calculateControl = (a, b, callback) => {
  const res = a + b
  callback(res)
}

let state = 0

calculateControl(4, 7, (res) => console.log("result: ", res))
const result = calculateControl(10, 13, (res) => {
  state = res
})

console.log("it is here: ", state)

export const ArrayMethodsScreen = () => {
  return <div>Palko je nejvic!!!</div>
}
