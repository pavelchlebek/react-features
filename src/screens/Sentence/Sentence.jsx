import './styles.css';

import React from 'react';

const sentence = "Palko je bůh!!!"

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

  console.log("mouseOver: ", boxVisible)

  return (
    <div className="content">
      <div
        onMouseOver={() => setBoxVisible(true)}
        onMouseLeave={() => setBoxVisible(false)}
        className="div"
      >
        {content}
      </div>
      <div className={`box ${boxVisible && "vis"}`}>Oh yeah, he really is!!!</div>
    </div>
  )
}
