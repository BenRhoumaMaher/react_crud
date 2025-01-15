import React from 'react'
import './App.css'
import Layout from './components/Layout'
import UserList from './components/UserList'

function App () {

  return (
    <div class='App'>
    <Layout>
      <h1>React CRUD App</h1>
      <UserList />
    </Layout>
    </div>
  )
}

export default App
