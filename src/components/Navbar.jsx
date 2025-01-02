import React, { useContext, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { StateContext } from '../utils/AllContext';

const Navbar = () => {

    const {data , setData, count, wishCount} = useContext(StateContext)
    // for get location
    const location = useLocation();
    const isHome = [
        '/', '/card/All%20Product', '/card/Laptops', '/card/Phones', '/card/Accessories',
        '/card/Smart%20Watches', '/card/MacBook', '/card/iPhone'
      ].includes(location.pathname);

      // set title for each page based on the current location
      useEffect(() => {
        const pageTitles = {
          '/': 'Home | ElectroMart',
          '/statistics': 'Statistics | ElectroMart',
          '/dashboard': 'Dashboard | ElectroMart',
          '/news': 'News | ElectroMart'
        };
    
        document.title = pageTitles[location.pathname] || 'ElectroMart';
      }, [location]);
      
    return (
        //this div for all navbar container elements
        <div className={`navbar lg:px-20 md:px-10 pt-5 ${isHome ? 'absolute w-full  px-10 mx-auto text-white -mt-5': ''}`}
>
        <div className="navbar-start">
            <NavLink to="/" className="text-xl font-extrabold">ElectroMart</NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 space-x-7 text-xl">
            <NavLink className={({ isActive }) => isActive ? "border-b-2" : ''} 
             to="/">Home
             <title>nothing</title>
             </NavLink>
            <NavLink className={({ isActive }) => isActive ? "text-primary" : ''} to="/statistics">Statistics</NavLink>
            <NavLink className={({ isActive }) => isActive ? "text-primary" : ''} to="/dashboard">Dashboard</NavLink>
            <NavLink className={({ isActive }) => isActive ? "text-primary" : ''} to="/news">News</NavLink>
            </ul>
        </div>
        {/* <div className="navbar-end space-x-2">
            <CiHeart size={24}/>
            <IoCartOutline size={24}/>
            <p>Add{count}</p>
        </div> */}
        <div className="navbar-end space-x-2 ">
          <Link to="/dashboard">
          <div className=" relative">
            <IoCartOutline className="border rounded-full text-4xl p-2 " />
            {
              count > 0 && (
              <p className="absolute -top-[6px] -right-[7px] p-1 text-white flex items-center justify-center rounded-full h-5 w-5 bg-green-500 ">
                {count}
              </p>
            )}
          </div></Link>

          <div className=" relative">
            <CiHeart className="border rounded-full text-4xl p-2" />
            {wishCount > 0 && (
              <p className=" absolute -top-[6px] -right-[7px] p-1 text-white flex items-center justify-center  rounded-full h-5 w-5 bg-green-500 ">
                {wishCount}
              </p>
            )}
          </div>
        </div>
        </div>
    );
};

export default Navbar;