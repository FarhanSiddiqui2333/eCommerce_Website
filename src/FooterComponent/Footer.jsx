import React from 'react'

const Footer = () => {
    return (
        <>
            <div style={{ backgroundColor: '#0f172a', color: 'white', letterSpacing: '2px', fontSize: '12px', padding: '4px 0px', textAlign: 'center' }}>
                <p>We provides multiples type of services some of these are :</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', color: '#0f172a', padding: '40px', borderTop: '1px solid lightgrey' }}>
                <ul>
                    <li className='foothead'>Grocery</li>
                    <li>Masala</li>
                    <li>Vegetables</li>
                    <li>Fruits</li>
                    <li>Milk</li>
                    <li>Yougert</li>
                </ul>
                <ul>
                    <li className='foothead'>Clothing</li>
                    <li>T-Shirt</li>
                    <li>Cargo</li>
                    <li>DownShoulder</li>
                    <li>Maxi</li>
                </ul>
                <ul>
                    <li className='foothead'>Shoes</li>
                    <li>Footwaer</li>
                    <li>Nike Air</li>
                    <li>Adidas shoes</li>
                    <li>Bata services</li>
                </ul>
                <ul>
                    <li className='foothead'>Beauty</li>
                    <li>Blush</li>
                    <li>Lipsticks</li>
                    <li>Eyelinner</li>
                    <li>Nailpolish</li>
                </ul>
                <ul>
                    <li className='foothead'>Accesories</li>
                    <li>Watches</li>
                    <li>Braslate</li>
                    <li>Ring</li>
                    <li>EarRings</li>
                </ul>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 40px', paddingBottom: '8px', fontSize: '10px', color: 'white', backgroundColor: '#0f172a', alignItems: 'center' }}>
                <span>Copyright <i class="fa-solid fa-copyright"></i> by 2025</span>
                <span><i class="fa-solid fa-globe"></i> Region / Language</span>
                <span> Designed By Farhan Zakir</span>
            </div>
        </>
    )
}

export default Footer