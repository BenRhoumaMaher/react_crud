import React from 'react'
import Layout from './components/Layout'
import UserList from './components/UserList'
import AddUserForm from './components/AddUserForm'

function App () {
  return (
    <Layout>
      <h1>React CRUD App</h1>
      <AddUserForm />
      <UserList />
    </Layout>
  )
}

export default App
