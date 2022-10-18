import React from 'react'
import ProjectInfo from '../components/ProjectInfo'

function About() {
  return (
    <main class="min-h-screen w-full bg-gray-100 text-gray-700" x-data="layout">
      <div className="flex">
        <aside className=" h-screen flex w-72 flex-col space-y-2 border-r-2 border-gray-200 text-gray-700 bg-gray-100 p-2" >
        <span className="text-bold">Stunning Green</span>
          <a href="#" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-300 hover:px-5 hover:text-black ">
            <span class="text-2xl"><i className="bx bx-home"></i></span>
            <span className="text-bold">Home</span>
          </a>
          <a href="#" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-300 hover:px-5 hover:text-black">
            <span className="text-2xl"><i className="bx bx-cart"></i></span>
            <span>Profile</span>
          </a>

          <a href="#" class="flex items-center space-x-1 rounded-md px-3 py-3 hover:bg-gray-300 hover:px-5 hover:text-black">
            <span className="text-2xl"><i class="bx bx-shopping-bag"></i></span>
            <span>Project List</span>
          </a>

          <a href="#" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-300 hover:px-5 hover:text-black">
            <span class="text-2xl"><i class="bx bx-heart"></i></span>
            <span>New Project</span>
          </a>

          <a href="#" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-300 hover:px-5 hover:text-black">
            <span className="text-2xl"><i className="bx bx-user"></i></span>
            <span>Carbon Market</span>
          </a>

          <a href="#" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-300 hover:px-5 hover:text-black">
            <span className="text-2xl"><i className="bx bx-user"></i></span>
            <span>User Guide</span>
          </a>

          <button className="absolute bottom-0 left-2  text-center text-[#749F82] font-bold rounded  px-2 py-3 focus:outline-none bg-[#FFF8EA] border-white">
            Create A New Project
          </button>

        </aside>
        <div class="w-full p-4">
          <ProjectInfo />
        </div>
      </div>
    </main>
  )
}

export default About
