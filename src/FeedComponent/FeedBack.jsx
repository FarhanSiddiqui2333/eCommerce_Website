import axios from 'axios'
import React, { useEffect, useState } from 'react'


const FeedBack = () => {
    const [usersProfile, setusersProfile] = useState([])
    const users = async () => {
        const API = await axios.get('https://api.escuelajs.co/api/v1/users')
        let res = API.data
        {/*for specifice user profile*/ }
        let filterUser = res.filter((user) => user.id <= 5)
        setusersProfile(filterUser)
    }
    useEffect(() => {
        users()
    }, [])


    return (
        <>
            <div style={{padding:'0px 40px' , borderTop:'1px solid lightgrey', paddingTop:'20px'}}>
                {
                    usersProfile.map((user, idx) => <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '20px', backgroundColor: "#f1f2f4", width: 'max-content', padding: '10px 20px', borderRadius: '10px', boxShadow: '0px 5px 10px #e2e6e9' }}>
                        <img src={user.avatar} alt="avatar" height='50px' style={{ borderRadius: '5px' }} />
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', lineHeight: '8px' }}>
                            <h4 style={{ fontSize: '12px' }}>{user.name}</h4>
                            <span style={{ fontSize: '10px' }}>{user.email}</span>
                            <p style={{ fontSize: '10px', marginTop: '5px' }}>There is a very good product great work keep it up.</p>
                        </div>
                    </div>)
                }
            </div>
            <div className='feedback' style={{display:'flex', placeContent:'center', padding:'50px 0px', gap:'10px'}}>
                <textarea placeholder='sent your greate feedback' style={{ backgroundColor:'white', borderRadius:'10px', minHeight:'280px', maxHeight:'280px', minWidth:'350px', maxWidth:'350px', padding:'15px', outline:'none', border:'lightgray', boxShadow:'0px 5px 10px lightgray'}}>

                </textarea>
                <button style={{backgroundColor:'slategrey', color:'white', height:'40px', width:'100px', fontSize:'16px', fontWeight:'900', border:'none', borderRadius:'8px', placeSelf:'flex-end', marginRight:'40px'}}>Sent</button>
                <h3 style={{fontSize:'70px', color:'#0f172a', fontWeight:'900', padding:'0px 50px', width:'50%'}}>
                    Sent Your Greate Feedback
                </h3>
            </div>
        </>
    )
}

export default FeedBack