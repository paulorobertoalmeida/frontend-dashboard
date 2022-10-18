import React from "react";
import {Link} from 'react-router-dom';

function Button({text, bg, padding}) {
  return (
    <div>
      <button
        className={`
          ${padding || 'px-6 py-2'} text-sm 
          rounded-lg text-white transition ${bg}`}
      >
        <span>{text}</span>
      </button>
    </div>
  );
}

function Navbar() {
  return (
    <div className="fixed left-0 right-0 top-0 h-16 shadow-md bg-green-900">
      <nav className="flex items-center container mx-auto h-full justify-between">
        <h1 className="font-semibold uppercase text-lg text-gray-200">
          Stunning Green
        </h1>
        <div>
          <ul className="flex items-center space-x-10 text-sm">
            <li><Link to="/" className="text-gray-400 hover:text-gray-100">Home</Link></li>
            <li><Link to="/about" className="text-gray-400 hover:text-gray-100">Dashboard</Link></li>
            
          </ul>
        </div>
        <div>
          <Button text="Launch App" bg="bg-gradient-to-r rounded from-purple-500 to-blue-500"/>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
