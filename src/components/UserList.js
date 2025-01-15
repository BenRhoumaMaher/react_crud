import React, { useContext, useEffect, useState, useRef } from 'react'
import { UserContext } from '../context/UserContext'
import axios from 'axios'
import styles from './UserList.module.css'

function UserList () {
  const { users, addUser, deleteUser } = useContext(UserContext)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Create a ref to cache the fetched users
  const usersCache = useRef(null)

  useEffect(() => {
    // If users are already cached, skip fetching
    if (usersCache.current) {
      setLoading(false)
      return
    }

    // Fetch users from the API
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/users'
        )
        if (response.status !== 200) {
          throw new Error('Failed to fetch users')
        }

        // Cache the fetched users
        usersCache.current = response.data

        // Add fetched users to the context
        response.data.forEach(user => addUser(user))
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [addUser])

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error: {error}</p>
  }

  return (
    <div className={styles.userList}>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id} className={styles.userItem}>
            <strong>{user.name}</strong> - {user.email}
            <button
              className={styles.deleteButton}
              onClick={() => deleteUser(user.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserList
