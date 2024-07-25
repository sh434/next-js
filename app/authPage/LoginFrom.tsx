import React from 'react'
import './login.css'

const LoginFrom = () => {

  return (
    <div className="outer">
    <h1>Legend AmsR Form</h1>
    <p>Enter ID</p>
    <input className="in" type="text" placeholder="Enter ID" id="a" />
    <p>Enter Confirm Password</p>
    <input className="in" type="password" placeholder="Enter Password" id="b" />
    <br />
    <input
      type="submit"
      defaultValue="Submit"
      id="bt"
    />
  </div>
  )
}

export default LoginFrom