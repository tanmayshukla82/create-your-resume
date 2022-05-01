import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../static/images/logo.png";
function Header() {
  return (
    <header className="header">
    <nav className="nav">
            <div style={{display:'flex',alignItems:'center'}}>
            <Link to='/'><h1>CREATE-RESUME</h1></Link> 
            </div>
            <div className="header-links full-height">
            <ul>
                <li className="signin ">
                <Link className="  " to="/login">
                    Login
                </Link>
                </li>
                <li className="signin"> 
                <Link to='/register'>
                    Register
                </Link>        
                </li>
            </ul> 
        </div>   
        </nav>
  </header>
  )
}

export default Header