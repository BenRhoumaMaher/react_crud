import React from 'react'
import Header from './Header'
import Footer from './Footer'

// The `children` prop is used to 
// render any content passed between the Layout tags
function Layout ({ children }) {
  return (
    <div>
      <Header />
      {/* Main content area where the children 
      (passed content) will be rendered */}
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
