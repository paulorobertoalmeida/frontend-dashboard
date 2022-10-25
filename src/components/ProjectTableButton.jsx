import React from 'react'

export default function ProjectListButton() {
    function AddProjectToList(){
        console.log('New Project Added to the list');
    }
  return (
    <div>
      <button onClick={AddProjectToList} class="bg-green-700 text-white active:bg-green-400 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">More</button>
    </div>
  )
}
