import React from 'react'

const Cards = () => {
  return (
    <div className='w-full h-screen bg-zinc-800 flex px-32 items-center gap-5'>
      <div className="cardcontainer h-[55vh] w-1/2">
<div className="card relative rounded-xl w-full h-full flex items-center justify-center bg-[#004D43]">
  <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
  <button className="absolute p-5 rounded-xl border-2 right-10 bottom-10">2022</button>
  <button className="absolute p-5 rounded-xl border-2 left-10 top-10">2019</button>
</div>
      </div>

      <div className="cardcontainer flex gap-5 h-[55vh] w-1/2">
      <div className="card rounded-xl w-1/2 h-full flex items-center justify-center bg-[#212121]">
      <img className = " object-cover" src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
      </div>
      <div className="card rounded-xl w-1/2 h-full flex items-center justify-center bg-[#212121]">
      <img className ="object-cover" src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" /></div>

      </div>
      
    </div>
  )
}

export default Cards
