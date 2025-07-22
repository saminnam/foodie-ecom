import React, { useState } from 'react';
import { Assets } from '../assets/Assets';

const LoginPopUp = ({setShowLogin}) => {
    const [currState,setCurrState] = useState("Login")
  return (
    <div className='login_popup'>
      <form className='login_popup_container'>
        <div className='login_popup_title'>
            <h2>{currState}</h2>
            <img onClick={() =>setShowLogin(false)} src={Assets.cross_icon} alt=''/>
        </div>
        <div className='login_popup_inputs'>
            {currState==="Login"?<></>:<input type='text' placeholder='Your name' required/>}
            <input type='email' placeholder='Your email' required/>
            <input type='password' placeholder='Password' required/>
        </div>
        <button>{currState==="Sign Up"?"Create account":"Login"}</button>
        <div className='login_popup_condition'>
            <input type='checkbox' required/>
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {
        currState==="Login"
        ?<p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
        :<p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
        }
      </form>
    </div>
  )
}

export default LoginPopUp
