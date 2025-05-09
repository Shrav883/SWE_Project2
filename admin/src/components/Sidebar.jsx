import React from 'react';
import { NavLink } from 'react-router-dom';
import { assets, icons } from '../assets/assets';

const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen border-r-2'>
      <div className='flex flex-col gap-4 pt-6 p1-[20%] text-[15px]'>
        <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-1' to="/add">
          <img className='w-5 h-5' src={icons.add_icon} alt="" />
          <p className="sm:block">Add Items</p>
        </NavLink>
        <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-1' to="/list">
          <img className='w-5 h-5' src={icons.order_icon} alt="" />
          <p className="sm:block">List Items</p>
        </NavLink>
        <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-1' to="/orders">
          <img className='w-5 h-5' src={icons.add_icon} alt="" />
          <p className="sm:block">Orders Items</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
