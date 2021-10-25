// @ts-nocheck
import * as React from 'react';

export const RefsScreen = () => {
  // const [enteredUserName, setEnteredUserName] = React.useState("")
  const [users, setUsers] = React.useState([])

  // const userNameChangeHandler = (e) => {
  //   setEnteredUserName(e.target.value)
  // }

  // const deleteInput = () => {
  //   console.log(nameInputRef.current.value)
  //   setEnteredUserName("")
  // }

  // const addUserToList = () => {
  //   const currentUsers = [...users]
  //   currentUsers.push(enteredUserName)
  //   setUsers(currentUsers)
  // }

  const addUserToListUsingRef = () => {
    const currentUsers = [...users]
    currentUsers.push(nameInputRef.current.value)
    setUsers(currentUsers)
    nameInputRef.current.value = ""
  }
  const nameInputRef = React.useRef()

  // focus the input element
  React.useEffect(() => {
    nameInputRef.current.focus()
  }, [users])

  const paraRef = React.useRef()

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "orangered",
      }}
    >
      <form>
        <input
          ref={nameInputRef}
          id="userName"
          type="text"
          // value={nameInputRef.current.value}
          // onChange={userNameChangeHandler}
        />
      </form>

      {/* <div>{nameInputRef.current.value && nameInputRef.current.value}</div> */}
      {/* <button onClick={deleteInput}>Delete</button> */}
      <button onClick={addUserToListUsingRef}>Add User</button>
      <ul
        style={{
          borderStyle: "solid",
          borderWidth: "1px",
          borderRadius: "5px",
          marginTop: "25px",
          padding: "30px",
        }}
      >
        {users.length > 0 && users.map((user, index) => <li key={index}>{user}</li>)}
      </ul>
      <p ref={paraRef}>Some paragraph</p>
      <button onClick={() => console.log(paraRef.current.innerHTML)}>Show attributes</button>
    </div>
  )
}
