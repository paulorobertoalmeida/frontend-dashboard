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

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  const handleCloseSideBar = () => {
    // if (activeMenu !== undefined && screenSize <= 900) {
    //   setActiveMenu(false);
    // }
    console.log('clicked')
  };

  return (
    <main className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
   
    <div className="flex justify-between items-center">
      <aside className=" h-screen flex w-72 flex-col space-y-2 border-r-2 border-gray-200 text-gray-700 bg-gray-100 p-2" >
      <a onClick={handleCloseSideBar} className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-green-900">Stunning Green</a>
        <a href="#"  className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-300 hover:px-5 hover:text-black ">
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
   
    )}
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