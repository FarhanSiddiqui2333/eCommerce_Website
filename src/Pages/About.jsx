import React from 'react'
import DesignerLogo from '../assets/designer.png'
import DeveloperLogo from '../assets/developer.avif'
import AboutLogo from '../assets/about.png'
import Nav from '../NavComponent/Nav'
import NavLink from '../NavComponent/NavLink'
import FeedBack from '../FeedComponent/FeedBack'
import Footer from '../FooterComponent/Footer'

const About = () => {
    return (
        <>
            <Nav />
            <NavLink />
            <div style={{ color: '#0f172a', display: 'flex', gap: '40px', padding: '40px', justifyContent: 'space-around', textAlign: 'center' }}>
                <div style={{ width: '40%', height: 'auto', boxSizing: 'border-box', padding: '20px 40px', borderRight: '1px solid #e2e6e9', borderBottom: '1px solid #e2e6e9', boxShadow: '5px 5px 10px #e2e6e9 ,-5px -5px 80px #e2e6e9 inset, 0px -5px 10px #e2e6e9', backgroundColor: 'white', borderRadius: '12px' }}>
                    <img src={DesignerLogo} alt="logo" style={{ borderRadius: '50%', height: '100px', width: '100px', aspectRatio: '3/4', objectFit: 'cover' }} />
                    <h4 style={{ fontSize: '25px', fontWeight: '800' }}>Designer</h4>
                    <p style={{ fontSize: '16px', lineHeight: '30px', textAlign: 'justify', marginTop: '20px' }}>A great designer blends creativity with functionality, crafting visually stunning and user-friendly solutions. They understand the importance of design in communication, whether through web design, branding, or product aesthetics. A top designer is not just skilled in design tools but also possesses a deep understanding of human behavior, trends, and problem-solving. Their ability to translate ideas into engaging experiences is what sets them apart.</p>
                </div>
                <div style={{ width: '40%', height: 'auto', boxSizing: 'border-box', padding: '20px 40px', borderLeft: '1px solid #e2e6e9', borderBottom: '1px solid #e2e6e9', boxShadow: '-5px 5px 10px #e2e6e9 ,5px 5px 80px #e2e6e9 inset, 0px -5px 10px #e2e6e9', backgroundColor: 'white', borderRadius: '12px' }}>
                    <img src={DeveloperLogo} alt="logo" style={{ borderRadius: '50%', height: '100px', width: '100px', aspectRatio: '3/4', objectFit: 'cover' }} />
                    <h4 style={{ fontSize: '25px', fontWeight: '800' }}>Developer</h4>
                    <p style={{ fontSize: '16px', lineHeight: '30px', textAlign: 'justify', marginTop: '20px' }}>A great developer is a problem solver at heart, turning complex ideas into functional, efficient, and scalable software. They are proficient in multiple programming languages and tools, always staying up-to-date with the latest technologies. Beyond technical skills, a top developer excels at collaboration, communication, and understanding user needs. They focus on clean, maintainable code while ensuring the final product performs optimally.
                    </p>
                </div>
            </div>
            <div style={{ color: '#0f172a', width: '80%', height: 'auto', padding: '25px 40px', borderTop: '1px solid #e2e6e9', boxShadow: '0px 5px 10px #e2e6e9, 0px 5px 50px #e2e6e9 inset, 0px -5px 20px #e2e6e9', borderRadius: '12px', textAlign: 'center', placeSelf: 'center', margin: '40px 0px' }}>
                <img src={AboutLogo} alt="img" style={{ height: '150px', width: '150px', borderRadius: '50%' }} />
                <h4 style={{ fontSize: '25px', fontWeight: '800' }}>About Us</h4>
                <p style={{ lineHeight: '30px', textAlign: 'justify' }}>Hello, and welcome!

                    We are a team of passionate individuals dedicated to creating beautiful and functional web experiences. As a frontend developer with a growing passion for design, we specialize in building websites that are not only visually appealing but also user-friendly. Our goal is to bridge the gap between design and development to ensure that each project is crafted to meet the needs of users while maintaining high standards of aesthetics and performance.

                    With an eye for detail and a focus on clean, responsive code, we strive to bring ideas to life, whether you're looking for a simple landing page or a more complex web application. Although we have a strong foundation in frontend development, we continually explore new design trends and tools to improve the overall user experience.

                    Thank you for taking the time to learn a little about us. We look forward to collaborating and creating something amazing together!

                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', padding: '20px 20px 0px 20px', color: '#3d3d3d' }}>
                    <span><i class="fa-solid fa-address-card"></i>  Contact no. : 03473824314</span>
                    <span><i class="fa-brands fa-whatsapp"></i>  Whatsapp : 03473824314</span>
                    <span><i class="fa-solid fa-envelope"></i> Email : farhansiddiqui2333@gmail.com</span>
                    <span><i class="fa-brands fa-linkedin"></i>  Linkedin : FarhanSiddiqui2333</span>
                </div>
            </div>
            <FeedBack />
            <Footer />
        </>
    )
}

export default About