
import { use, useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length,setLength]=useState(8)
  const [password,setPAssword]=useState("")
  const [isAvlableChar,setIsAvlableChar]=useState(false)
  const [isAvlableNumber,setIsAvlableNumber]=useState(false)
  const [clicked,setClicked]=useState(false)
  //useref 
  const passwordRef=useRef(null)


  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghihklmnopqrstuvwxyz"
    if(isAvlableNumber){
      str+="0123456789"
    }
    if(isAvlableChar){
      str+="!@#$%^&*()[]{}`"
    }

    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1)
      console.log(char)
      
      pass+=str.charAt(char)
    }

    setPAssword(pass)
    console.log(pass)

  },[setPAssword,isAvlableChar,isAvlableNumber,length])

  const copyPasswordOnClipBord=useCallback(()=>{
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,3);//only 3-0 char select 0-> intial point and 3-> uoto but not 3
    window.navigator.clipboard.writeText(password)

  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,isAvlableChar,isAvlableNumber,passwordGenerator])

  
  return (
    <>
      <div className='w-full max-w-md max-auto shadow-auto rounded-2xl m-4 bg-gray-600 px-4 py-2'>
        <h1 className='text-white text-center p-5 text-3xl'>Password Generater</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
            type="text" 
            value={password}
            className='outline-non w-full py-2 px-3 bg-gray-100'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={()=>{
              copyPasswordOnClipBord();
              setClicked(true)
              setTimeout(()=>{
                setClicked(false)
              },150)
            }}
            
            className={`bg-blue-500 p-2 px-3 shrink-0 outline-none text-white 
              ${clicked ? 'bg-green-600' : 'bg-blue-500'}
            `}
          >Copy</button>
        </div>
        <div className='flex text-sm gap-x-5 '>
          <div className='flex flex-center text-sm gap-x-2'>
            <input 
              type="range"
              min={6}
              max={50}
              value={length}
              className='cursor-pointer'
              onChange={(e)=>{setLength(e.target.value)}}
            />
            <label className='text-blue-100 font-bold'>
              length:{length}
            </label>
          </div>
          <div className='flex flex-center text-sm gap-x-1'>
            <input 
              type="checkbox"
              defaultChecked={isAvlableNumber}
              id='numberInput'
              onChange={()=>{
                setIsAvlableNumber((prev)=>!prev);
              }}
            />
            <label className='text-blue-100 font-bold'>
              Number
            </label>
          </div>
          <div className='flex flex-center text-sm gap-x-1'>
            <input 
              type="checkbox"
              defaultChecked={isAvlableChar}
              id='charInput'
              onChange={()=>{
                setIsAvlableChar((prev)=>!prev);
              }}
            />
            <label className='text-blue-100 font-bold'>
              Charechtor
            </label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
