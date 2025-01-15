import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Layout from './components/Layout'
import UserList from './components/UserList'
import AddUserForm from './components/AddUserForm'
import Home from './components/Home'

function App () {
  return (
    <Router>
      <Layout>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/users'>User List</Link>
            </li>
            <li>
              <Link to='/add-user'>Add User</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/users' element={<UserList />} />
          <Route path='/add-user' element={<AddUserForm />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
