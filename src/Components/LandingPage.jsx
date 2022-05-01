import React from 'react'
import logo from '../static/images/resume.png'
import '../static/css/getting-started.css'
import { Link } from 'react-router-dom';
function LandingPage() {
  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <div>       
          <div>
              <h1>Get started with your career profile</h1>
              <p>Create a Resume that perfectly describes your skils and match job profile.</p>
          </div>
          <div style={{display:'flex',alignItems:'center'}}>
              <div>
                <Link to='gettingStarted'>
                <button className='getting-started-btn'>Get Started</button>
                </Link>
              </div>
              <div>
                <img src={logo} className='lp-img' style={{paddingLeft:'3rem'}}/>
              </div>
          </div>   
        </div>        
    </div>
  )
}

export default LandingPage