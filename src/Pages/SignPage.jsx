import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../NavComponent/Nav'
import Navlink from '../NavComponent/NavLink'
import FeedBack from '../FeedComponent/FeedBack'
import Footer from '../FooterComponent/Footer'

const SignPage = () => {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [verifyPassword, setVerifyPassword] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")

  return (
    <>
      <Nav />
      <Navlink />
      <div style={{ height: '80vh', placeContent: 'center', placeItems: 'center' }}>
        <form className='sign' style={{ display: 'flex', flexDirection: 'column', gap: '25px', width: '600px', height: 'auto', backgroundColor: '#0f172a', padding: '25px', borderRadius: '10px' }} onSubmit={(event) => {
          event.preventDefault()
          setFirstName("")
          setLastName("")
          setPassword("")
          setPhoneNumber("")
          setEmail("")
          setUserName("")
          setVerifyPassword("")
        }}>
          <label>
            <input type="text" placeholder='Enter First Name' value={firstName} onChange={(fname) => setFirstName(fname.target.value)} />
            <input type="text" placeholder='Enter Last Name' value={lastName} onChange={(lname) => setLastName(lname.target.value)} />
          </label>
          <label>
            <input type="email" placeholder='Enter Your Email' value={email} onChange={(gmail) => setEmail(gmail.target.value)} />
            <input type="text" placeholder='Enter UserName' value={userName} onChange={(user) => setUserName(user.target.value)} />
          </label>
          <label>
            <input type="password" placeholder='Create Strong Password' value={password} onChange={(pass) => setPassword(pass.target.value)} />
            <input type="password" placeholder='Verify Your Password' value={verifyPassword} onChange={(verify) => setVerifyPassword(verify.target.value)} />
          </label>
          <label>
            <input type="number" placeholder='Enter Phone Number' value={phoneNumber} onChange={(number) => setPhoneNumber(number.target.value)} />
            <select name="country">
              <option value="">Select Your Country</option>
              <option value="pakistan">Pakistan</option>
              <option value="india">India</option>
              <option value="newzeland">NewZeland</option>
              <option value="england">England</option>
              <option value="africa">Africa</option>
              <option value="us">United State</option>
              <option value="uk">united Kingdom</option>
              <option value="nepal">Nepal</option>
              <option value="afganistan">Afganistan</option>
            </select>
          </label>
          <label>
            <select name="day">
              <option value="">Date</option>
              <option value="1">01</option>
              <option value="2">02</option>
              <option value="3">03</option>
              <option value="4">04</option>
              <option value="5">05</option>
              <option value="6">06</option>
              <option value="7">07</option>
              <option value="8">08</option>
              <option value="9">09</option>
              <option value="10">10</option>
            </select>
            <select name="month">
              <option value="">Month</option>
              <option value="jan">January</option>
              <option value="feb">Feburary</option>
              <option value="mar">March</option>
              <option value="april">April</option>
              <option value="may">May</option>
              <option value="june">June</option>
              <option value="july">July</option>
              <option value="aug">August</option>
              <option value="sep">September</option>
              <option value="oct">October</option>
              <option value="nov">November</option>
              <option value="dec">December</option>
            </select>
            <select name="year">
              <option value="">Year</option>
              <option value="2010">2010</option>
              <option value="2011">2011</option>
              <option value="2012">2012</option>
              <option value="2013">2013</option>
              <option value="2014">2014</option>
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
            </select>
          </label>
          <label htmlFor="agree" className='agree'>
            <input type="checkbox" id='agree' />
            <p>I agree with this <span style={{ color: 'aqua' }}>Terms And Conditions</span> and join with this ecommerce website, & keep Enjoying.</p>
          </label>
          <input type="submit" value="Sign in" className='submit' required />
          <span style={{ placeSelf: 'center' }}><Link to='/login' style={{ color: 'aqua', fontSize: '12px', fontWeight: '200' }}>I already have an Account!</Link></span>
        </form>
      </div>
      <FeedBack />
      <Footer />
    </>
  )
}

export default SignPage