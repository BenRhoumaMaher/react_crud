import React from 'react'

function Home () {
  const styles = {
    container: {
      padding: '20px',
      textAlign: 'center'
    },
    title: {
      fontSize: '2rem',
      color: '#333'
    },
    paragraph: {
      fontSize: '1.2rem',
      color: '#666'
    }
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to the React CRUD App</h1>
      <p style={styles.paragraph}>
        This is the home page. Use the navigation links to explore the app.
      </p>
    </div>
  )
}

export default Home
