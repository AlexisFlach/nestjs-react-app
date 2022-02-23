import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div><ul>
    <li><Link to="/">HOME</Link></li>
    <li><Link to="/login">DOCS</Link></li>
 </ul>     </div>
  )
}

export default Header