import React from 'react'

const CategoryBTN = ({ sortData }) => {
  return (
    <div className='category' style={{ display: 'flex', fontSize: '14px', alignItems: 'center', padding: '0px 70px', color: '#0f172a', marginTop: '10px' }}>
      <button style={{ backgroundColor: '#8d99a6', padding: '10px 25px', color: 'white', borderRadius: '5px', fontWeight: 'bolder', marginRight: '10px' }} onClick={() => sortData('All')} ><i class="fa-solid fa-bars-staggered"></i> All category</button>
      <button onClick={() => sortData('Electronics')}>Electronic</button>
      <button onClick={() => sortData("beauty")}>Cosmatic</button>
      <button onClick={() => sortData("tv")}>TV</button>
      <button onClick={() => sortData("Clothes")}>Clothing</button>
      <button onClick={() => sortData("groceries")}>Groceries</button>
      <button onClick={() => sortData("audio")}>Headset</button>
      <button onClick={() => sortData("furniture")}>Furniture</button>
      <button onClick={() => sortData("fragrances")}>Fragrances</button>
      <button onClick={() => sortData("gaming")}>Gaming</button>
      <button onClick={() => sortData("mobile")}>Mobile</button>
      <button onClick={() => sortData("jewelery")}>Jewelery</button>
    </div>
  )
}

export default CategoryBTN