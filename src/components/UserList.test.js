import React from 'react'
import { render, screen } from '@testing-library/react'
import UserList from './UserList'

describe('UserList Component', () => {
  it('renders the user list', () => {
    const users = [
      { id: 1, name: 'Alice', email: 'alice@example.com' },
      { id: 2, name: 'Bob', email: 'bob@example.com' }
    ]

    render(<UserList users={users} />)

    // Check if user names are rendered
    expect(screen.getByText('Alice')).toBeInTheDocument()
    expect(screen.getByText('Bob')).toBeInTheDocument()
  })
})
