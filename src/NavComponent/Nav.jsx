import React from 'react'
import flag from '../assets/flag.png'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <>
            <div className='topsec' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '3px 50px', fontSize: '12px', backgroundColor: "#e2e6e9", color: '#0f172a' }}>
                <span>Use the cupon code to get best Deals and Discount</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><img src={flag} alt="country" height="18px" />Pakistan<i class="fa-solid fa-caret-down"></i></span>
            </div>
            <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px 50px' }}>
                    <div className="logo">
                        <Link to='/'>
                            <img src={logo} alt="logo" height="80px" />
                        </Link>
                    </div>
                    <div id='searchbar' style={{
                        display: 'flex', alignItems: 'center', gap: '20px',
                        '@media (max-width: 480px)': {
                            display: 'none'
                        }
                    }}>
                        <label htmlFor='search' style={{ backgroundColor: 'whitesmoke', border: '1px solid whitesmoke', height: '45px', width: '450px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRadius: '5px', overflow: 'hidden', boxShadow: '0px 5px 10px #e2e6e9' }}>
                            <input type="text" placeholder='Search Products' style={{ background: 'transparent', outline: 'none', border: 'none', height: '100%', padding: '0px 20px' }} />
                            <i class="fa-solid fa-magnifying-glass" id='search' style={{ backgroundColor: 'slategrey', color: 'white', height: '100%', width: '45px', placeContent: 'center', textAlign: 'center' }}></i>
                        </label>
                        <span style={{ height: '45px', width: 'max-content', padding: '0px 20px', placeContent: 'center', backgroundColor: 'whitesmoke', color: 'slategrey', borderRadius: '5px', boxShadow: '0px 0px 5px #c6ccd3' }}><i class="fa-solid fa-location-dot"></i> Location</span>
                    </div>
                    <div style={{ color: 'slategrey' }}>
                        <Link to='/cart-item' style={{ color: 'slategrey' }}><i class="fa-solid fa-cart-shopping" style={{ marginRight: '10px' }}></i></Link>
                        <Link to='/cart-item' style={{ color: 'slategrey' }}><i class="fa-solid fa-heart"></i></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav