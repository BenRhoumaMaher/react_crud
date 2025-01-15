import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'
import styled from 'styled-components'

const FormContainer = styled.form`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 20px;
`

const FormGroup = styled.div`
  margin-bottom: 15px;
`

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 3px;
`

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 3px;
  cursor: pointer;
`

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
      id: Date.now(),
      ...newUser
    }

    addUser(userToAdd)
    setNewUser({ name: '', email: '' })
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <h3>Add New User</h3>
      <FormGroup>
        <Label>
          Name:
          <Input
            type='text'
            name='name'
            value={newUser.name}
            onChange={handleInputChange}
          />
        </Label>
      </FormGroup>
      <FormGroup>
        <Label>
          Email:
          <Input
            type='email'
            name='email'
            value={newUser.email}
            onChange={handleInputChange}
          />
        </Label>
      </FormGroup>
      <Button type='submit'>Add User</Button>
    </FormContainer>
  )
}

export default AddUserForm
