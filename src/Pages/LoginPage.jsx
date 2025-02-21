import React, { useState } from 'react'
import Nav from '../NavComponent/Nav'
import Navlink from '../NavComponent/NavLink'
import Footer from '../FooterComponent/Footer'
import FeedBack from '../FeedComponent/FeedBack'
import { Link } from 'react-router-dom'

const LoginPage = () => {
    const [userName, setUserName] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")
    return (
        <>
            <Nav />
            <Navlink />
            <div style={{ placeContent: 'center', placeItems: 'center', height: '70vh', display: 'flex' }}>
                <div style={{ height: '400px', width: '300px', backgroundColor: '#8d99a6', boxShadow: '0px 5px 10px #0000006b, 0px 0px 5px #0000006b', borderRadius: '8px 0px 0px 8px', color: 'white', fontSize: '60px', fontWeight: '900', textAlign: 'center', placeContent: 'center' }}>
                    Hello Welcome back
                </div>
                <form className='form' onSubmit={(event) => {
                    event.preventDefault()
                    setUserName("")
                    setUserEmail("")
                    setUserPassword("")
                }}>
                    <input type="text" placeholder='Enter Your Name' value={userName} onChange={(name) => { setUserName(name.target.value) }} />
                    <input type="email" placeholder='Enter Your Email' value={userEmail} onChange={(email) => { setUserEmail(email.target.value) }} />
                    <input type="password" placeholder='Enter Your Password' value={userPassword} onChange={(password) => { setUserPassword(password.target.value) }} />
                    <label htmlFor="agree">
                        <input type="checkbox" id='agree' />
                        <p>I agree with this <span style={{ color: 'aqua' }}>Terms And Conditions</span> and join with this ecommerce website.</p>
                    </label>
                    <input type="submit" value="Login" className='submit' required />
                    <span style={{ placeSelf: 'center' }}><Link to='/sign' style={{ color: 'aqua', fontSize: '12px', fontWeight: '200' }}>I don't have a Account!</Link></span>
                </form>
            </div>
            <FeedBack />
            <Footer />
        </>
    )
}

export default LoginPage