import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import styles from './UserList.module.css'

const UserList = React.memo(() => {
  const { users, deleteUser } = useContext(UserContext)

  // Fallback if users is undefined or empty
  if (!users || users.length === 0) {
    return <p>No users found.</p>
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
})

export default UserList
