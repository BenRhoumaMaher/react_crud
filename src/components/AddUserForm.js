import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'

function AddUserForm () {
  const { addUser } = useContext(UserContext)
  const [newUser, setNewUser] = useState({ name: '', email: '' })

  const handleInputChange = e => {
    const { name, value } = e.target
    setNewUser({ ...newUser, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (newUser.name.trim() === '' || newUser.email.trim() === '') {
      alert('Please fill in all fields')
      return
    }

    const userToAdd = {
      id: Date.now(), // Generate a unique ID
      ...newUser
    }

    addUser(userToAdd)
    setNewUser({ name: '', email: '' })
  }

  return (
    <form onSubmit={handleSubmit}>
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
  )
}

export default AddUserForm
