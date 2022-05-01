import React from 'react'
import {connect} from 'react-redux'
import {useNavigate} from 'react-router'
import '../static/scss/app.scss'
import {skinCodes} from '../Codes/codes'
import {setSkin,updateSkin} from '../Redux/Actions/documentAction';
function GettingStarted({document,setDocument,updateDocument}) {
  const navigate = useNavigate();
  const onChange = (val)=>{
      if(document.id)
      {
        updateDocument(val);
      }
      else{
        setDocument(val);
      }
      navigate('/personalDetail');
  }
  return (
    <div className="container med gettingStarted">
            <div className="section">
                <h1 className=" center">
                Select a resume template to get started</h1>
                <p className=" center">
                You’ll be able to edit and change this template later!
                </p>
                <div className="styleTemplate">
                  {
                      skinCodes.map((value,index) => {
                          return( <div key={index} className="template-card rounded-border">
                                <i className={(value == 'demo-value'? 'selected fa fa-check' :'hide') } ></i>
                              <img  className='' src={'../static/images/' + value + '.svg'}/>
                              <button type="button" onClick={()=>onChange(value)}  className='btn-select-theme'>USE TEMPLATE</button>
                          </div>);
  
                      })
                  }
                </div>
            
            </div>
    </div>
  )
}
const mapStateToProps = (state)=>{
  return{
    document : state.document,
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
    setDocument : (skinCd)=>{dispatch(setSkin(skinCd))},
    updateDocument : (skinCd)=>{dispatch(updateSkin(skinCd))}
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(GettingStarted);