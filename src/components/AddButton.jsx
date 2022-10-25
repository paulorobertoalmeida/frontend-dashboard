import React from 'react'

export default function AddButton() {
function clickHandler(){
    console.log('button Clicked')
}
  return (
    <div>
         <button onClick={clickHandler} className="absolute bottom-0 left-2  text-center text-white font-bold rounded px-2 py-3 focus:outline-none bg-green-700 hover:bg-green-500">
            Create A New Project
          </button>
    </div>
  )
}
