import React from 'react'
import Navbar from '../nav/navbar.jsx'
import Footer from '../footer/footer.jsx'
import Login from '../loginpage/login.jsx'
import Flex from './flex/flex-cont.jsx'
import Cont from './carousel/cont.jsx'

function home() {
  return (
    <>
      <div>
        <Navbar />
        

      </div>

      <div><Flex/></div>

      <div> <Cont/> </div>
 
      
      <div className="foot">
        <Footer />
      </div>
    </>
  )
}

export default home 