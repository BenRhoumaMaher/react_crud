import React, { createContext, useState } from 'react'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]) // Initialize as an empty array

  const addUser = user => {
    setUsers([...users, user])
  }

  const deleteUser = userId => {
    setUsers(users.filter(user => user.id !== userId))
  }

  return (
    <UserContext.Provider value={{ users, addUser, deleteUser }}>
      {children}
    </UserContext.Provider>
  )
}
