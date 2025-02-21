import React from 'react'
import Nav from '../NavComponent/Nav'
import Navlink from '../NavComponent/NavLink'
import FeedBack from '../FeedComponent/FeedBack'
import Footer from '../FooterComponent/Footer'
import EmptyBG from '../assets/empty.png'
import { Link } from 'react-router-dom'

const Cart_Wishlist = () => {
  return (
    <>
      <Nav />
      <Navlink />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '40px' }}>
        <span style={{ placeSelf: 'flex-start', marginLeft: '30px' }}>(0) item in Cart & Wishlist</span>
        <img src={EmptyBG} alt="" style={{ height: '350px' }} />
        <h4 style={{ color: '#0f172a', fontSize: '25px', fontWeight: '800' }}>Cart List Is Empty</h4>
        <Link to='/' style={{ color: 'grey', fontSize: '12px', marginTop: '50px' }}><span>Go Back To Home Page</span></Link>
      </div>
      <FeedBack />
      <Footer />
    </>
  )
}

export default Cart_Wishlist