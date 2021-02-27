import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  
  return (
    <nav>
      <header className="nav-header">Bigwasan.com</header>
      <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/blogs">Sabaw</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
