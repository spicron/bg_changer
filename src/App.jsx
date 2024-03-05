import { useState } from 'react'
import './App.css'

function App() {
  const [color, setcolor] = useState("olive")

 

  return (
 
     <div className='w-full h-screen mt-0' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-2 px-2'>
       <div className='flex flex-wrap justify-center bg-white px-4 py-2 rounded-xl gap-5'>
        <button className=' outline-none text-white px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:"red"}} onClick={()=>setcolor("red")}>Red</button>
        <button className=' outline-none text-white px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:"green"}} onClick={()=>setcolor("green")}>Green</button>
        <button className=' outline-none text-white px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:"blue"}} onClick={()=>setcolor("blue")}>Blue</button>
        <button className=' outline-none text-white px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:"Yellow"}} onClick={()=>setcolor("yellow")}>Yellow</button>
        <button className=' outline-none text-white px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:"black"}} onClick={()=>setcolor("black")}>Black</button>
        <button className=' outline-none text-white px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:"brown"}} onClick={()=>setcolor("brown")}>Brown</button>
        <button className=' outline-none text-white px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:"cyan"}} onClick={()=>setcolor("cyan")}>cyan</button>
        <button className=' outline-none text-white px-4 py-1 rounded-full shadow-lg ' style={{backgroundColor:"purple"}} onClick={()=>setcolor("purple")}>Purple</button>
       </div>
      </div>
     </div>


  )
}

export default App
