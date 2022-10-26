import React from "react";
import {Link} from 'react-router-dom';
import NavbarButtonWallet from '../components/NavbarButtonWallet'
import AddButton from '../components/AddButton'
import ProjectInfo from '../pages/Profile'
import ProjectList from './ProjectList'
import Home from '../pages/Home'

function Navbar() {
  
  function walletButton() {
    console.log('Your wallet was connected')
  }

  return (
    <main class="min-h-screen w-full bg-gray-100 text-gray-700" x-data="layout">
    <div className="flex">
      <aside className=" h-screen flex w-72 flex-col space-y-2 border-r-2 border-gray-200 text-gray-700 bg-gray-100 p-2" >
      <span className="font-bold text-xl text-center text-green-700">Stunning Green</span>
        <a href="#" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-300 hover:px-5 hover:text-black ">
          <span class="text-2xl"><i className="bx bx-home"></i></span>
          <span className="text-bold">Home</span>
        </a>
        <a href="#" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-300 hover:px-5 hover:text-black">
          <span className="text-2xl"><i className="bx bx-cart"></i></span>
          <Link to="/profile"><span>Profile</span></Link>
        </a>

        <a href="#" class="flex items-center space-x-1 rounded-md px-3 py-3 hover:bg-gray-300 hover:px-5 hover:text-black">
          <span className="text-2xl"><i class="bx bx-shopping-bag"></i></span>
         <Link to="/project-list"> <span>Project List</span></Link>
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

       <AddButton />

      </aside>
      <div class="w-full p-4">
        <Home />
      </div>
    </div>
  </main>
  );
}

export default Navbar;




// import React from "react";
// import {Link} from 'react-router-dom';

// function Button({text, bg, padding}) {
//   return (
//     <div>
//       <button
//         className={`
//           ${padding || 'px-6 py-2'} text-sm 
//           rounded-lg text-white transition ${bg}`}
//       >
//         <span>{text}</span>
//       </button>
//     </div>
//   );
// }

// function Navbar() {
//   return (
//     <div className="fixed left-0 right-0 top-0 h-16 shadow-md bg-green-900">
//       <nav className="flex items-center container mx-auto h-full justify-between">
//         <h1 className="font-semibold uppercase text-lg text-gray-200">
//           Stunning Green
//         </h1>
//         <div>
//           <ul className="flex items-center space-x-10 text-sm">
//             <li><Link to="/" className="text-gray-400 hover:text-gray-100">Home</Link></li>
//             <li><Link to="/about" className="text-gray-400 hover:text-gray-100">Dashboard</Link></li>
            
//           </ul>
//         </div>
//         <div>
//           <Button text="Launch App" bg="bg-gradient-to-r rounded from-purple-500 to-blue-500"/>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;