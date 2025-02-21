import { Route, Routes } from 'react-router-dom'
import './App.css'
import FeedBack from './FeedComponent/FeedBack'
import Footer from './FooterComponent/Footer'
import Nav from './NavComponent/Nav'
import Products from './ProductComponent/Products'
import shoesImg from './assets/shoes.png'
import headphoneImg from './assets/headphone.png'
import hoodieImg from './assets/hoodie.png'
import watchImg from './assets/watch.png'
import ProductPage from './Pages/ProductPage'
import Link from './NavComponent/NavLink'
import About from './Pages/About'
import Help_Services from './Pages/Help_Services'
import LoginPage from './Pages/LoginPage'
import SignPage from './Pages/SignPage'
import Cart from './Cart/Cart'
import Cart_Wishlist from './Cart/Cart_Wishlist'

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/product' element={<ProductPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/help&services' element={<Help_Services />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/sign' element={<SignPage />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/cart-item' element={<Cart_Wishlist/>} />
      </Routes>

    </>
  )
}


const Home = () => {
  return (
    <>
      <Nav />
      <Link />
      <div className="hero" style={{ height: '70vh', width: '90%', backgroundColor: '#8d99a6', placeSelf: 'center', marginTop: '20px', borderRadius: '12px', overflow: 'hidden', position: 'relative' }}>
        <div className="content" style={{ color: '#0f172a', position: 'absolute', top: '50%', translate: '10% -50%', width: '50%' }}>
          <h4 style={{ fontWeight: '999' }}>Lets Join Us & Enjoy</h4>
          <h1 style={{ fontSize: '60px', fontWeight: '900', position: 'relative' }}>Best Store <span style={{ fontSize: '10px', position: 'absolute', marginRight: '10%', bottom: '0px' }}>to Buying & Selling Things</span></h1>
          <p style={{ fontSize: '12px', marginTop: '20px', fontWeight: 'bold' }}>
            "Shop Smart. Shop Secure. Shop with Us.
            Endless Choices, Unbeatable Prices, Fast Delivery.
            Bringing the World to Your Doorstep.
            Your One-Stop Destination for Quality and Convenience.
            Where Great Deals Meet Top-Notch Quality.
            Shop the Latest Trends at Your Fingertips.
            Browse, Click, and Get What You Love Delivered Fast.
            Discover Deals You Can’t Resist!
            Experience Shopping Like Never Before.
            Quality Products, Affordable Prices – All in One Place."
          </p>
          <button style={{ backgroundColor: 'white', padding: '10px 30px', position: 'relative', overflow: 'hidden', borderRadius: '12px', border: 'none', fontSize: '18px', fontWeight: '900', marginTop: '20px' }}>Shop Now!</button>
        </div>
        <div style={{ height: '200%', width: 'calc(200% - 115%)', borderRadius: '50%', position: 'relative', left: '60%', top: '12%', rotate: '0deg', animation: 'slider 12s linear infinite' }}>
          <img src={shoesImg} alt="" style={{ height: '400px', position: 'absolute', top: '0', left: '0' }} />
          <img src={headphoneImg} alt="" style={{ height: '400px', position: 'absolute', top: '0', right: '0', rotate: '90deg' }} />
          <img src={hoodieImg} alt="" style={{ height: '400px', position: 'absolute', bottom: '0', left: '0', rotate: '-90deg' }} />
          <img src={watchImg} alt="" style={{ height: '400px', position: 'absolute', bottom: '0', right: '0', rotate: '-180deg' }} />
        </div>
      </div>
      <Products />
      <FeedBack />
      <Footer />
    </>
  )
}

export default App
