import React from 'react'
import UserContext from '../context/UserContext'
import { useState,useContext } from 'react'


function Login() {
    const [userName,setUserName]=useState("")
    const [Password, setPassword]=useState("")

    const {setUser}=useContext(UserContext)

    const handalClick=(e)=>{
        e.preventDefault()
        setUser({userName,Password})
    }
    
  return (
    <div>
      <h2>Log in</h2>
      <input type="text"
        value={userName}
        onChange={(e)=>setUserName(e.target.value)}
        placeholder='user name' />

      <input type="text"
        value={Password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder='Password'/>
      <button onClick={handalClick}>Submit</button>
    </div>
  )
}

export default Login
