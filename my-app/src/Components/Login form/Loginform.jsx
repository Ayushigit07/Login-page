import React from 'react'
import './Loginform.css'
import { CiUser } from "react-icons/ci"
import { FaLock } from "react-icons/fa";

const Loginform = () => {
  return (
    <div className='wrapper'>
     <form action="">
<h1>Login</h1>
<div className='input-box'>
<input type = "text" placeholder = 'Username' required />
<CiUser className='icon' />

</div>
<div className='input-box'>
<input type = "password" placeholder = 'Password' required />
<FaLock className='icon'/>

</div>
<div className="remember-forgot">
    <label><input type="checkbox" />Remember me</label>
    <a href="#">forgot password</a>
</div>

<button type ="submit">Login</button>

<div className='register-link'>

<p>dont have an account? <a href ='#'>Register</a></p>

</div>

     </form>
    </div>
  )
}

export default Loginform

