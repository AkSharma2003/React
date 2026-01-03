import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub() {
    const data=useLoaderData()
    // const [data,setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])
  return (
    <div className='text-center bg-gray-700 text-amber-50  p-4 text-3xl'>
      Github followers: {data.followers}
      <img src={data.avatar_url} alt="gitHub pic" />
    </div>
  )
}

export default GitHub

export const gitHubinfoLoader=async()=>{
    const res= await fetch('https://api.github.com/users/hiteshchoudhary')
    return res.json()
}