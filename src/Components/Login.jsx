import React from 'react'
import '../static/scss/form.scss'
import '../static/scss/common.scss'
import '../static/scss/button.scss'
export function Login() {
  return (
            <div style={{height:'100vh',width:'100vw',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <div className="form-card">
                    <div>
                        <h2 className="form-heading center">Enter Login details</h2>
                    </div>
                    <div className="form-section">
                        <div className="input-group full"><label>Email</label>
                            <div className="effect"><input type="text" name="email"/><span></span>
                            </div>
                        </div>

                        <div className="input-group full"><label>Password</label>
                            <div className="effect"><input  type="password" name="password" /><span></span>
                            </div>
                        </div>  
                        <div className="form-buttons">
                            <button className="btn hvr-float-shadow" type='button'>Login</button>
                        </div>
                    </div>
                </div>
                </div>
  )
}
