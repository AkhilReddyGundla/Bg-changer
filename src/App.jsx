import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor] = useState('black')

  // function changeBgColor(color){
  //   setColor(color);
  // }
  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor : color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0'>
          <div className='flex flex-wrap justify-center shadow-lg bg-white px-3 py-2 rounded-3xl gap-3'>
            <button className='rounded-3xl px-4 py-2 shadow-lg text-black font-bold bg-white' style={{backgroundColor:"Red"}} onClick={()=>setColor("Red")}>Red</button>
            <button className='rounded-3xl px-4 py-2 shadow-lg text-black font-bold bg-white' style={{backgroundColor:"Green"}}onClick={()=>setColor("Green")}>Green</button>
            <button className='rounded-3xl px-4 py-2 shadow-lg text-black font-bold bg-white' style={{backgroundColor:"Yellow"}}onClick={()=>setColor("Yellow")}>Yellow</button>
            <button className='rounded-3xl px-4 py-2 shadow-lg text-black font-bold bg-white' style={{backgroundColor:"Blue"}}onClick={()=>setColor("Blue")}>Blue</button>
            <button className='rounded-3xl px-4 py-2 shadow-lg text-black font-bold bg-white' style={{backgroundColor:"Orange"}}onClick={()=>setColor("Orange")}>Orange</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App


//donot use onClick ={changeColor()} becz onCLick doen't need any return type it just need a function ie call back function onClick = {()=>changeBgColor('Red)}