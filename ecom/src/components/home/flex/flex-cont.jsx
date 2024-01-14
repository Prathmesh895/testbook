import React from 'react'
import '../flex/flex.css'
import { Link } from 'react-router-dom'

function flex_cont() {
  return (

    <div className='flex-content'>
      <ul className='flex-cont-1' >
        <li><Link className='flex-content-list'><img className='img-flex-1' src="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/790b539a57f7b8cd.png?q=100" alt="Top Offers" /><br/><span style={{textAlign:'center'}}>Top Offers</span></Link></li>
        <li><Link className='flex-content-list'><img className='img-flex-1' src="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/444802d58a814f57.png?q=100" alt="" /><br/><span style={{textAlign:'center'}}>Mobiles</span></Link></li>
        <li><Link className='flex-content-list'><img className='img-flex-1'src="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/5b8ad952a656b015.png?q=100" alt="" /><br/><span style={{textAlign:'center'}}>TVs</span></Link></li>
        <li><Link className='flex-content-list'><img className='img-flex-1' src="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/e4b01f3d783c49a1.png?q=100" alt="" /><br/><span style={{textAlign:'center'}}>Fasion</span></Link></li>
        <li><Link className='flex-content-list'><img className='img-flex-1' src="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/9e4acc1d8929bcc6.png?q=100" alt="" /><br/><span style={{textAlign:'center'}}>Beauty</span></Link></li>
        <li><Link className='flex-content-list'><img className='img-flex-1' src="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/ce3744f59fadb72e.png?q=100" alt="" /><br/><span style={{textAlign:'center'}}>Electronics</span></Link></li>
        <li><Link className='flex-content-list'><img className='img-flex-1' src="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/683d71deb68235d5.png?q=100" alt="" /><br/><span style={{textAlign:'center'}}>Flights</span></Link></li>
        <li><Link className='flex-content-list'><img className='img-flex-1' src="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/9ba7be5608413886.png?q=100" alt="" /><br/><span style={{textAlign:'center'}}>Home</span></Link></li>
        <li><Link className='flex-content-list'><img className='img-flex-1' src="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/280a9406b5a7fdc8.png?q=100" alt="" /><br/><span style={{textAlign:'center'}}>Grocery</span></Link></li>
        <li><Link className='flex-content-list'><img className='img-flex-1' src="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/dc9cb4d7bd005f70.png?q=100" alt="" /><br/><span style={{textAlign:'center'}}>Furniture</span></Link></li>

      </ul>
    </div>
  )
}
export default flex_cont