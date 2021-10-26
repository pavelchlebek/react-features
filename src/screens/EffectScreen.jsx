import * as React from 'react';

export const EffectScreen = () => {
  const [resourceType, setResourceType] = React.useState("posts")
  const [items, setItems] = React.useState([])

  // console.log("render")

  React.useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json))
  }, [resourceType])

  // using cleanup function
  // React.useEffect(() => {
  //   console.log("resource changed")

  //   return console.log("return from resource changed")
  // }, [resourceType])

  return (
    <div style={{ margin: "120px" }}>
      <div>
        <button onClick={() => setResourceType("posts")}>Post</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map((item, index) => {
        return <pre key={index}>{JSON.stringify(item)}</pre>
      })}
    </div>
  )
}
