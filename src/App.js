import React, { useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import UserList from './components/UserList'

function App () {
  // Define state for the list of users
  const [users, setUsers] = useState(['maher', 'Ali', 'Sami'])

  // Define state for the new user input
  const [newUser, setNewUser] = useState('')

  // Function to handle adding a new user
  const addUser = () => {
    if (newUser.trim() !== '') {
      setUsers([...users, newUser]) // Add the new user to the list
      setNewUser('') // Clear the input field
    }
  }

  return (
    <div class='App'>
    <Layout>
      <h1>React CRUD App</h1>

      {/* Pass the users array as a prop to UserList */}
      <UserList users={users} />

      {/* Form to add a new user */}
      <div>
        <input
          type='text'
          value={newUser}
          onChange={e => setNewUser(e.target.value)}
          placeholder='Enter a new user'
        />
        <button onClick={addUser}>Add User</button>
      </div>
    </Layout>
    </div>
  )
}

export default App
