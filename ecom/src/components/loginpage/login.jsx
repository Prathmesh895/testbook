import React from 'react'
import '../loginpage/login.css'
import {Link} from 'react-router-dom'

function login() {
  return (
    <div className='Login-page'>
      <div className="login-page-cont-1">
        <div className='login-flex'>
          <h1 className='login-flex1'>Login</h1>
          <span className='login-flex2'>Get access to your Orders, Wishlist and Recommendations</span>
        </div>
      </div>
      <div className="login-page-cont-2">
        <form action="" autoComplete='off' className='form-login'>
          <label htmlFor="input" >Enter Mobile Number</label>
          <input type="text" className='Login-Mo' maxLength={10}/>
          <h5 className='h5'>By continuing,you agree to Flipkart's <span style={{color:'#2874f0'}}>Terms of Use  </span>
          and <span style={{color:'#2874f0'}}>Privacy Policy</span>
          </h5>
          <button className='Request-btn'>Request OTP</button>
        </form>
        <div>

        </div>
        <h5 style={{textAlign:'center',color:'#2874f0',textDecoration:'none'}}><Link to="/">New to Flipkart?create an Account</Link></h5>
      </div>
    </div>
  )
}
export default login