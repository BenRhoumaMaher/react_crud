import React, { createContext, useState } from 'react'

// Create a context for users
export const UserContext = createContext()

// Create a provider component
export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([])

  // Function to add a new user
  const addUser = user => {
    setUsers([...users, user])
  }

  // Function to delete a user
  const deleteUser = userId => {
    setUsers(users.filter(user => user.id !== userId))
  }

  return (
    <UserContext.Provider value={{ users, addUser, deleteUser }}>
      {children}
    </UserContext.Provider>
  )
}
