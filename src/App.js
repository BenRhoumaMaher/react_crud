import React, { useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import UserList from './components/UserList'

function App () {
  // State to control whether the user list is visible
  const [showUserList, setShowUserList] = useState(false)
  return (
    <div class='App'>
      <Layout>
        <h1>React CRUD App</h1>
        {/* Toggle button to show/hide the user list */}
        <button onClick={() => setShowUserList(!showUserList)}>
          {showUserList ? 'Hide Users' : 'Show Users'}
        </button>
        {/* Conditionally render the UserList component */}
        {showUserList && <UserList />}
      </Layout>
    </div>
  )
}

export default App
