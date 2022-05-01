import React from 'react'
import '../static/scss/form.scss'
import '../static/scss/common.scss'
import '../static/scss/button.scss'
function PersonalDetails() {
  return (
    <div style={{height:'100vh',width:'100vw',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <div className="form-card">
                <h2 className="form-heading center">Personal Details</h2>
                <div className="form-section">
                    <div className="input-group"><label>First Name</label>
                        <div className="effect"><input type="text"/><span></span>
                        </div>
                        <div className="error"></div>
                    </div>

                    <div className="input-group"><label>Last Name</label>
                        <div className="effect"><input type="text" /><span></span>
                        </div>
                        <div className="error"></div>
                    </div>

                    <div className="input-group full"><label>Professional Summary</label>
                        <div className="effect"><input type="text"/><span></span>
                        </div>
                        <div className="error"></div>
                    </div>

                    <div className="input-group"><label>Email</label>
                        <div className="effect"><input type="text"/><span></span>
                        </div>
                        <div className="error"></div>
                    </div>

                    <div className="input-group"><label>Phone</label>
                        <div className="effect"><input type="text"/><span></span>
                        </div>
                        <div className="error"></div>
                    </div>

                    <div className="input-group"><label>Profession</label>
                        <div className="effect"><input type="text"/><span></span>
                        </div>
                        <div className="error"></div>
                    </div>
                    <div className="input-group"><label>Street</label>
                        <div className="effect"><input type="text"/><span></span>
                        </div>
                        <div className="error"></div>
                    </div>

                    <div className="input-group"><label>City</label>
                        <div className="effect"><input type="text"/><span></span>
                        </div>
                        <div className="error"></div>
                    </div>

                    <div className="input-group"><label>State</label>
                        <div className="effect"><input type="text" /><span></span>
                        </div>
                        <div className="error"></div>
                    </div>


                    <div className="input-group"><label>Country</label>
                        <div className="effect"><input type="text" /><span></span>
                        </div>
                        <div className="error"></div>
                    </div>
                    <div className="input-group"><label>Pin Code</label>
                        <div className="effect"><input type="text" /><span></span>
                        </div>
                        <div className="error"></div>
                    </div>
                    <div className="form-buttons">
                        <button className="btn hvr-float-shadow" type='button'>Next</button>
                        {/* <NavLink to='/getting-started'  className="center">Back</NavLink> */}
                    </div>
                </div>

            </div>
    </div>
  )
}

export default PersonalDetails