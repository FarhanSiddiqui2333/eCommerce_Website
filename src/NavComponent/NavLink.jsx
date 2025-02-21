import React from 'react'
import { Link } from 'react-router-dom'

const NavLink = () => {
    return (
        <div className='navLink' style={{ display: 'flex', gap: '5px', fontSize: '14px', alignItems: 'center', padding: '0px 70px', color: '#0f172a', marginTop: '10px' }}>
            <span style={{ backgroundColor: '#8d99a6', color: 'white', padding: '10px 25px', borderRadius: '5px', fontWeight: 'bolder' }}><Link to='/'><i class="fa-solid fa-house"></i> Home</Link></span>
            <span style={{ padding: '10px 20px', borderRadius: '5px', fontWeight: 'bolder' }}><Link to="/product"><i class="fa-solid fa-shirt"></i> Product</Link></span>
            <span style={{ padding: '10px 20px', borderRadius: '5px', fontWeight: 'bolder' }}><Link to="/about"><i class="fa-solid fa-address-card"></i> About</Link></span>
            <span style={{ padding: '10px 20px', borderRadius: '5px', fontWeight: 'bolder' }}><Link to='/help&services'><i class="fa-solid fa-handshake-angle"></i> Help</Link></span>
            <span style={{ padding: '10px 20px', borderRadius: '5px', fontWeight: 'bolder' }}><Link to='/help&services'><i class="fa-brands fa-servicestack"></i> Services</Link></span>
            <span style={{ padding: '10px 20px', borderRadius: '5px', fontWeight: 'bolder' }}><Link to="/login"><i class="fa-solid fa-user"></i> Login</Link></span>
        </div>
    )
}

export default NavLink