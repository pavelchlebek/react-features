// @ts-nocheck
import React from 'react';

const reducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)]
    case ACTIONS.TOGGLE_TODO:
      // return todos.map((todo) => {
      //   if (todo.id === action.payload.id) {
      //     return { ...todo, complete: !todo.complete }
      //   }
      //   return todo
      // })
      /* -----------------------------------------------check this out----spent hours to figure it out-------------------------------------------- */
      const newTodos = []
      for (let i = 0; i < todos.length; i++) {
        if (todos[i].id === action.payload.id) {
          newTodos.push({
            ...todos[i],
            complete: !todos[i].complete,
          })
        } else {
          newTodos.push(todos[i])
        }
      }
      return newTodos
    case ACTIONS.REMOVE_TODO:
      return todos.filter((item) => item.id !== action.payload.id)
    default:
      return todos
  }
}

const newTodo = (name) => {
  return { id: Date.now(), name: name, complete: false }
}

const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  REMOVE_TODO: "remove-todo",
}

export const TodosUseReducer = () => {
  const [todos, dispatch] = React.useReducer(reducer, [])
  const [name, setName] = React.useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } })
    setName("")
  }

  const toggleCompleteHandler = (id) => {
    dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: id } })
  }

  const removeHandler = (id) => {
    dispatch({ type: ACTIONS.REMOVE_TODO, payload: { id: id } })
  }

  console.table(todos)

  return (
    <div style={{ margin: "150px" }}>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </form>
      <div>
        {todos.length > 0 &&
          todos.map((item) => (
            <div
              style={{ color: item.complete ? "#aaa" : "black" }}
              onClick={() => toggleCompleteHandler(item.id)}
              key={item.id}
            >
              {`${item.name} completed: ${item.complete}`}
              <button onClick={() => removeHandler(item.id)}>Delete Task</button>
            </div>
          ))}
      </div>
    </div>
  )
}
