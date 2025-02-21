import React from 'react'
import ShoppingImg from '../assets/shoping.avif'
import CartImg from '../assets/cart.avif'
import ConformImg from '../assets/conformation.webp'
import SecurityImg from '../assets/security.avif'
import HelpImg from '../assets/help.avif'
import ServicesImg from '../assets/service.avif'
import Nav from '../NavComponent/Nav'
import Navlink from '../NavComponent/NavLink'
import FeedBack from '../FeedComponent/FeedBack'
import Footer from '../FooterComponent/Footer'
import ServicesLogo from '../assets/serviceslogo.avif'

const Help_Services = () => {
    return (
        <>
            <Nav />
            <Navlink />
            <div style={{ padding: '50px', display: 'flex', justifyContent: "space-around", flexWrap: 'wrap', gap: '50px' }}>
                <div style={{ textAlign: 'center', width: '300px', height: 'auto', padding: '20px 25px', boxShadow: '5px 5px 10px #e2e6e9, 5px 5px 10px #e9e9e9 inset', border: '1px solid #e9e9e9', borderRadius: '10px' }}>
                    <img src={ShoppingImg} alt="img" style={{ height: '100px', width: '100px', borderRadius: '50%', objectFit: 'cover' }} />
                    <p className='helppara' style={{ fontSize: '12px', lineHeight: '18px', marginTop: '20px', textAlign: 'justify' }}>Shopping on an eCommerce website offers a convenient and efficient way to buy products from the comfort of your own home. When visiting an online store, you can easily browse through various categories of products, read detailed descriptions, check customer reviews, and view high-quality images of items. Many eCommerce websites also offer filtering options, allowing you to narrow down your search based on criteria like price, size, color, and brand, which helps you find exactly what you're looking for quickly.</p>
                    <button style={{ backgroundColor: '#0f172a', padding: '5px 10px', color: 'white', border: 'none', borderRadius: '5px', marginTop: '10px' }}>Check</button>
                </div>
                <div style={{ textAlign: 'center', width: '300px', height: 'auto', padding: '20px 25px', boxShadow: '0px 5px 10px #e2e6e9, 0px 5px 10px #e9e9e9 inset', border: '1px solid #e9e9e9', borderRadius: '10px' }}>
                    <img src={SecurityImg} alt="img" style={{ height: '100px', width: '100px', borderRadius: '50%', objectFit: 'cover' }} />
                    <p className='helppara' style={{ fontSize: '12px', lineHeight: '18px', marginTop: '20px', textAlign: 'justify' }}>Security is a top priority on eCommerce websites, so you can shop with peace of mind. Reputable sites use encryption technology to protect your personal and financial information, ensuring that your transactions are safe. It's also common for these websites to offer customer support channels, like live chat, email, or phone support, to help you with any questions or issues that arise during the shopping process. Whether you need help with placing an order, tracking a package, or handling a return, customer support is there to assist.</p>
                    <button style={{ backgroundColor: '#0f172a', padding: '5px 10px', color: 'white', border: 'none', borderRadius: '5px', marginTop: '10px' }}>Check</button>
                </div>
                <div style={{ textAlign: 'center', width: '300px', height: 'auto', padding: '20px 25px', boxShadow: '-5px 5px 10px #e2e6e9, -5px 5px 10px #e9e9e9 inset', border: '1px solid #e9e9e9', borderRadius: '10px' }}>
                    <img src={CartImg} alt="img" style={{ height: '100px', width: '100px', borderRadius: '50%', objectFit: 'cover' }} />
                    <p className='helppara' style={{ fontSize: '12px', lineHeight: '18px', marginTop: '20px', textAlign: 'justify' }}>Once you've selected an item, you can add it to your shopping cart. eCommerce websites typically make the process of reviewing and modifying your cart simple, allowing you to update quantities or remove items as needed before checking out. When you're ready to purchase, the website will direct you to the checkout page, where you can enter your shipping details and select your preferred payment method. Most sites support a range of secure payment options, such as credit or debit cards, digital wallets like PayPal, or even installment plans for larger purchases.</p>
                    <button style={{ backgroundColor: '#0f172a', padding: '5px 10px', color: 'white', border: 'none', borderRadius: '5px', marginTop: '10px' }}>Check</button>
                </div>
                <div style={{ textAlign: 'center', width: '300px', height: 'auto', padding: '20px 25px', boxShadow: '5px 5px 10px #e2e6e9, 5px 5px 10px #e9e9e9 inset', border: '1px solid #e9e9e9', borderRadius: '10px' }}>
                    <img src={ConformImg} alt="img" style={{ height: '100px', width: '100px', borderRadius: '50%', objectFit: 'cover' }} />
                    <p className='helppara' style={{ fontSize: '12px', lineHeight: '18px', marginTop: '20px', textAlign: 'justify' }}>When your purchase is complete, many eCommerce websites provide order tracking so you can follow the progress of your shipment. You will typically receive an email confirmation and a tracking number that allows you to monitor when your item will arrive. Additionally, returns and exchanges are often straightforward on these platforms, with clear instructions on how to send items back for a refund or replacement. Overall, eCommerce websites are designed to offer a hassle-free, flexible shopping experience for customers, making it easier than ever to find and buy the products you need.</p>
                    <button style={{ backgroundColor: '#0f172a', padding: '5px 10px', color: 'white', border: 'none', borderRadius: '5px', marginTop: '10px' }}>Check</button>
                </div>
                <div style={{ textAlign: 'center', width: '300px', height: 'auto', padding: '20px 25px', boxShadow: '0px 5px 10px #e2e6e9, 0px 5px 10px #e9e9e9 inset', border: '1px solid #e9e9e9', borderRadius: '10px' }}>
                    <img src={HelpImg} alt="img" style={{ height: '100px', width: '100px', borderRadius: '50%', objectFit: 'cover' }} />
                    <p className='helppara' style={{ fontSize: '12px', lineHeight: '18px', marginTop: '20px', textAlign: 'justify' }}>Shopping on an eCommerce website offers a convenient and efficient way to buy products from the comfort of your own home. When visiting an online store, you can easily browse through various categories of products, read detailed descriptions, check customer reviews, and view high-quality images of items. Many eCommerce websites also offer filtering options, allowing you to narrow down your search based on criteria like price, size, color, and brand, which helps you find exactly what you're looking for quickly.</p>
                    <button style={{ backgroundColor: '#0f172a', padding: '5px 10px', color: 'white', border: 'none', borderRadius: '5px', marginTop: '10px' }}>Check</button>
                </div>
                <div style={{ textAlign: 'center', width: '300px', height: 'auto', padding: '20px 25px', boxShadow: '-5px 5px 10px #e2e6e9, -5px 5px 10px #e9e9e9 inset', border: '1px solid #e9e9e9', borderRadius: '10px' }}>
                    <img src={ServicesImg} alt="img" style={{ height: '100px', width: '100px', borderRadius: '50%', objectFit: 'cover' }} />
                    <p className='helppara' style={{ fontSize: '12px', lineHeight: '18px', marginTop: '20px', textAlign: 'justify' }}>Security is a top priority on eCommerce websites, so you can shop with peace of mind. Reputable sites use encryption technology to protect your personal and financial information, ensuring that your transactions are safe. It's also common for these websites to offer customer support channels, like live chat, email, or phone support, to help you with any questions or issues that arise during the shopping process. Whether you need help with placing an order, tracking a package, or handling a return, customer support is there to assist.</p>
                    <button style={{ backgroundColor: '#0f172a', padding: '5px 10px', color: 'white', border: 'none', borderRadius: '5px', marginTop: '10px' }}>Check</button>
                </div>
            </div>
            <div style={{ color: '#0f172a', width: '80%', height: 'auto', padding: '25px 40px', borderTop: '1px solid #e2e6e9', boxShadow: '0px 5px 10px #e2e6e9, 0px 5px 50px #e2e6e9 inset, 0px -5px 20px #e2e6e9', borderRadius: '12px', textAlign: 'center', placeSelf: 'center', margin: '40px 0px' }}>
                <img src={ServicesLogo} alt="img" style={{ height: '150px', width: '150px', borderRadius: '50%', objectFit: 'cover' }} />
                <h4 style={{ fontSize: '25px', fontWeight: '800' }}>Our Services</h4>
                <p style={{ lineHeight: '30px', textAlign: 'justify' }}>At Our Ecommerce Store, we specialize in delivering a seamless and user-friendly eCommerce experience tailored to meet your business needs. Our platform offers a comprehensive range of features designed to enhance the online shopping journey for both customers and sellers. We provide fully customizable online stores that are easy to set up, manage, and scale as your business grows. Whether you're a small retailer or a large enterprise, we have the tools to help you succeed in the competitive eCommerce space.

                    Our services include secure and efficient payment gateway integration, allowing your customers to complete transactions smoothly with a variety of payment options. We ensure that every transaction is encrypted and protected, providing a secure shopping environment. In addition, our advanced inventory management system makes it easy for you to track stock levels, manage product listings, and streamline fulfillment processes. We also offer integrated shipping solutions to simplify logistics and delivery tracking, ensuring that your customers receive their orders on time.

                    We understand that customer engagement is key to business success, which is why we offer robust marketing and analytics tools to help you grow your online presence. From SEO optimization to email marketing campaigns, our platform allows you to reach and convert potential buyers effectively. With real-time analytics, you can track sales, customer behavior, and other valuable insights to make data-driven decisions and improve your marketing efforts.
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', padding: '20px 20px 0px 20px', color: '#3d3d3d' }}>
                    <span style={{ backgroundColor: 'whitesmoke', boxShadow: '0px 0px 5px #e2e6e9', border: '1px solid #e9e9e9', padding: '5px 10px', borderRadius: '5px' }}>Selling & Buying AnyThing</span>
                    <span style={{ backgroundColor: 'whitesmoke', boxShadow: '0px 0px 5px #e2e6e9', border: '1px solid #e9e9e9', padding: '5px 10px', borderRadius: '5px' }}>Best Deals And Prices</span>
                    <span style={{ backgroundColor: 'whitesmoke', boxShadow: '0px 0px 5px #e2e6e9', border: '1px solid #e9e9e9', padding: '5px 10px', borderRadius: '5px' }}>Easy Return</span>
                    <span style={{ backgroundColor: 'whitesmoke', boxShadow: '0px 0px 5px #e2e6e9', border: '1px solid #e9e9e9', padding: '5px 10px', borderRadius: '5px' }}>Easy Widrwal</span>
                    <span style={{ backgroundColor: 'whitesmoke', boxShadow: '0px 0px 5px #e2e6e9', border: '1px solid #e9e9e9', padding: '5px 10px', borderRadius: '5px' }}>Secure Transection</span>
                </div>
            </div>
            <FeedBack />
            <Footer />
        </>
    )
}

export default Help_Services