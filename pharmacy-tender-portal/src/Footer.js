import React from 'react'
import '/index.css'

const Footer = () => {
  const today= new Date();
         
  return (
    <footer style={{
    
      color: '#fff'
    }}>
      <p>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  )
}

export default Footer
