import React from 'react';
import '../nav/navbar.css'
import{Link} from 'react-router-dom';
import Login from '../loginpage/login.jsx'

function navbar() {
  
  return (
    <div>
      {/* nav bar  */}
      <div className="main">
        <ul className='Nav-content'>
          <li className='tag'><i><strong  className='tag'>Flipkart</strong> <br/> <span className='tag2' >explor</span>  <span className='tag2' style={{color:'gold'}}>plus</span></i></li>
        {/* Search bar on nav  */} 
          <li>
            <form action="">
              <input type="text" className='search-tab' placeholder='Search for Products,Brands and more' autoComplete='off' />
            </form>
          </li>
          
          <li className='Login'><Link className='Login-1' path="/Login" element={<Login/>}>Login</Link></li>         
          <li className='nav-txt'>Become a Seller</li>
          <li>
      <select className='dropdown'>
        <option className='li_drop-option'>More</option>
        <option value="#" className='li_drop-option'>Notification preferences</option>
        <option value="#" className='li_drop-option'>24x7 Customer care</option>
        <option value="#" className='li_drop-option'>Adverties</option>
        <option value="#" className='li_drop-option'>Download App</option>
      </select>
          </li>
          <li className='nav-txt'>Cart</li>
          
        </ul>
      
    </div>
    </div>
  )
}

export default navbar