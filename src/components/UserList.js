import React, { useState, useEffect } from 'react'

function UserList () {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [newUser, setNewUser] = useState({ name: '', email: '' })

  // Fetch data from an API using useEffect
  useEffect(() => {
    // Define an async function to fetch data
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        )
        if (!response.ok) {
          throw new Error('Failed to fetch users')
        }
        const data = await response.json()
        setUsers(data) // Update the state with fetched data
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchUsers() // Call the function to fetch data
  }, []) // Empty dependency array means this runs only once

  // Function to handle deleting a user
  const handleDelete = userId => {
    setUsers(users.filter(user => user.id !== userId))
  }

  const handleInputChange = e => {
    const { name, value } = e.target
    setNewUser({ ...newUser, [name]: value })
  }

  const handleAddUser = e => {
    e.preventDefault()
    if (newUser.name.trim() === '' || newUser.email.trim() === '') {
      alert('Please fill in all fields')
      return
    }

    const userToAdd = {
      id: users.length + 1,
      ...newUser
    }

    setUsers([...users, userToAdd])
    setNewUser({ name: '', email: '' })
  }

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error: {error}</p>
  }

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleAddUser}>
        <h3>Add New User</h3>
        <div>
          <label>
            Name:
            <input
              type='text'
              name='name'
              value={newUser.name}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type='email'
              name='email'
              value={newUser.email}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <button type='submit'>Add User</button>
      </form>
    </div>
  )
}

export default UserList
