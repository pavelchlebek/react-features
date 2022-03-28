import React from "react"

export const ReducerScreen = () => {
  const onSubmit = async (e) => {
    e.preventDefault()

    alert("wow!!!")
  }

  return (
    <div className="app">
      <div className="login-container">
        <form className="form" onSubmit={onSubmit}>
          <p>Please login</p>
          <input type="text" placeholder="username" />
          <input type="text" placeholder="password" autoComplete="new-password" />
          <button className="submit" type="submit">
            Log In
          </button>
        </form>
      </div>
    </div>
  )
}
