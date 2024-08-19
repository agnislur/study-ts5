import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-400 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Website To Do list Simple</div>
        <div>
          <Link to="/home" className="text-white px-3 py-2 rounded hover:bg-blue-700">Home</Link>
          <Link to="/about" className="text-white px-3 py-2 rounded hover:bg-blue-700">About</Link>
          <Link to="/profile" className="text-white px-3 py-2 rounded hover:bg-blue-700">Profile</Link>
          <Link to="/" className="text-white px-3 py-2 rounded hover:bg-red-500">LogOut</Link>
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
