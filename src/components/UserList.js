import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserContext'

function UserList () {
  const { users, addUser, deleteUser } = useContext(UserContext)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Only fetch users if the users array is empty
    if (users.length === 0) {
      const fetchUsers = async () => {
        try {
          const response = await fetch(
            'https://jsonplaceholder.typicode.com/users'
          )
          if (!response.ok) {
            throw new Error('Failed to fetch users')
          }
          const data = await response.json()
          // Add fetched users to the context
          data.forEach(user => addUser(user))
        } catch (error) {
          setError(error.message)
        } finally {
          setLoading(false)
        }
      }

      fetchUsers()
    } else {
      setLoading(false)
    }
  }, [users.length, addUser])

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
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserList
