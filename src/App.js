import React, { Suspense, useContext } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import { UserContext } from './context/UserContext'

// Lazy load components
const UserList = React.lazy(() => import('./components/UserList'))
const AddUserForm = React.lazy(() => import('./components/AddUserForm'))

function App () {
  const { users, deleteUser } = useContext(UserContext)

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

        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route
              path='/users'
              element={<UserList users={users} deleteUser={deleteUser} />}
            />
            <Route path='/add-user' element={<AddUserForm />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  )
}

export default App
