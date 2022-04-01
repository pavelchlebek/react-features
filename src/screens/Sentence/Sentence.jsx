import "./styles.css"

import React from "react"

const sentence = "Palko je bůh!!!"

const p = new Promise((resolve, reject) => {
  const a = Math.floor(Math.random() * 2)
  if (a === 1) {
    resolve(a)
  } else {
    reject(a)
  }
})

p.then((message) => {
  console.log("This is in the then " + message)
}).catch((message) => {
  console.log("This is in the catch " + message)
})

// for (let i = 0; i < 100; i++) {
//   const p = new Promise((resolve, reject) => {
//     const a = Math.floor(Math.random() * 10)
//     if (a == 3) {
//       resolve("success")
//     } else {
//       reject("failed")
//     }
//   })

//   p.then((message) => {
//     console.log(message)
//   }).catch((message) => {
//     console.log(message)
//   })
// }

export const Sentence = () => {
  const [content, setContent] = React.useState("")
  const [iteration, setIteration] = React.useState(0)
  const [boxVisible, setBoxVisible] = React.useState(false)
  React.useEffect(() => {
    setTimeout(() => {
      if (iteration < sentence.length) {
        setContent((prev) => prev + sentence[iteration])
        setIteration((prev) => prev + 1)
      } else {
        setContent("")
        setIteration(0)
      }
    }, 300)
  }, [iteration])

  // console.log("mouseOver: ", boxVisible)

  return (
    <div className="content">
      <div
      // onMouseOver={() => setBoxVisible(true)}
      // onMouseLeave={() => setBoxVisible(false)}
      // className="div"
      >
        {content}
      </div>
      <div className={`box ${boxVisible && "vis"}`}>Oh yeah, he really is!!!</div>
    </div>
  )
}
