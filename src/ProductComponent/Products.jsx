import React, { useEffect, useState } from 'react'
import shoesImg from '../assets/shoes.png'
import headphoneImg from '../assets/headphone.png'
import hoodieImg from '../assets/hoodie.png'
import watchImg from '../assets/watch.png'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Products = () => {
  {/*For top img list*/ }
  let prodsliderJSON = [
    {
      "id": 1,
      "name": "Clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2025-02-12T17:30:09.000Z",
      "updatedAt": "2025-02-12T17:30:09.000Z"
    },
    {
      "id": 2,
      "name": "Electronics",
      "image": "https://i.imgur.com/ZANVnHE.jpeg",
      "creationAt": "2025-02-12T17:30:09.000Z",
      "updatedAt": "2025-02-12T17:30:09.000Z"
    },
    {
      "id": 3,
      "name": "Furniture",
      "image": "https://i.imgur.com/Qphac99.jpeg",
      "creationAt": "2025-02-12T17:30:09.000Z",
      "updatedAt": "2025-02-12T17:30:09.000Z"
    },
    {
      "id": 4,
      "name": "Shoes",
      "image": "https://i.imgur.com/qNOjJje.jpeg",
      "creationAt": "2025-02-12T17:30:09.000Z",
      "updatedAt": "2025-02-12T17:30:09.000Z"
    },
    {
      "id": 5,
      "name": "Miscellaneous",
      "image": "https://i.imgur.com/BG8J0Fj.jpg",
      "creationAt": "2025-02-12T17:30:09.000Z",
      "updatedAt": "2025-02-12T17:30:09.000Z"
    },
    {
      "id": 6,
      "name": "HeahPhones",
      "image": headphoneImg,
      "creationAt": "2025-02-12T17:30:09.000Z",
      "updatedAt": "2025-02-12T17:30:09.000Z"
    },
    {
      "id": 7,
      "name": "Shoes",
      "image": shoesImg,
      "creationAt": "2025-02-12T17:30:09.000Z",
      "updatedAt": "2025-02-12T17:30:09.000Z"
    },
    {
      "id": 8,
      "name": "Hoodie",
      "image": hoodieImg,
      "creationAt": "2025-02-12T17:30:09.000Z",
      "updatedAt": "2025-02-12T17:30:09.000Z"
    },
    {
      "id": 9,
      "name": "watch",
      "image": watchImg,
      "creationAt": "2025-02-12T17:30:09.000Z",
      "updatedAt": "2025-02-12T17:30:09.000Z"
    },

  ]
  const [slideImg, setslideImg] = useState([])
  const extractData = () => {
    try {
      setslideImg(prodsliderJSON)
    } catch (error) {
      console.log("Image Can't be Loaded!");
    }
  }
  useEffect(() => {
    extractData()
  }, [])

  {/*For Bottom Product*/ }
  const [fetchproduct, setFetchproduct] = useState([])
  const fetchData = async () => {
    try {
      let API = await axios.get("https://fakestoreapi.com/products")
      let res = API.data
      setFetchproduct(res)
    } catch (error) {
      console.log('The APi is not fetch properly');
    }
  }
  useEffect(() => {
    fetchData()
  }, [])
  console.log(fetchproduct);

  const print = (title) => {
    let storage = localStorage.setItem('data', title)
  }


  return (
    <>
      <div style={{ height: 'auto', margin: '50px 0px', padding: '20px 50px', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'center', border: "1px solid lightgrey", borderRight: 'none', borderLeft: 'none', flexWrap: 'wrap' }}>
        {
          slideImg.map((item) => <div key={item.id} style={{ height: '100%' }}>
            <img src={item.image} alt="img" style={{ height: "120px", backgroundColor: 'grey', borderRadius: '10px', boxShadow: '0px 5px 5px 2px lightgray, 0px -5px 5px gray inset' }} />
            <p>{item.name}</p>
          </div>)
        }
      </div>
      <div className="bottomProd" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', padding: '40px' }}>
        {
          fetchproduct.map((item) => (
            <div key={item.id} style={{ position: 'relative', height: '400px', width: '300px', borderRadius: '5px', backgroundColor: '#f1f2f4', overflow: 'hidden', boxSizing: 'border-box', padding: '10px', color: "white", boxShadow: '0px 5px 10px lightgrey, 0px 5px 10px lightgrey inset', marginBottom: '40px' }}>
              <p style={{ position: "absolute", top: '20px', left: '20px', backgroundColor: 'white', color: '#0f172a', padding: '2px 10px', borderRadius: '5px', fontWeight: '800' }}>{item.category.name}</p>
              <img src={item.image} alt="images" style={{ height: '80%', width: '100%', borderRadius: '5px', aspectRatio: '3/4', objectFit: 'contain', mixBlendMode: 'multiply' }} />
              <h4 className='title' style={{ marginTop: '5px', lineHeight: '17px', padding: "0px 10px", color: '#0f172a' }}>{item.title}</h4>
              <span style={{ padding: "0px 10px", position: 'absolute', bottom: '10px', color: '#0f172a', fontSize: '14px', fontWeight: '700' }}>{item.price + '$'}</span>
              <button onClick={() => print(item.title)} style={{ padding: '5px 15px', border: 'none', borderRadius: '4px', backgroundColor: '#0f172a', position: 'absolute', bottom: '10px', right: '15px', fontWeight: '800' }}><Link to='/cart' style={{color:'white'}}>Shop</Link></button>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Products