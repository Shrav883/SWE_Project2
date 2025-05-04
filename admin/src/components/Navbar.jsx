import React from 'react'
import {assets} from '../assets/assets'

const Navbar = ({setToken}) => {
    return (
    <div className='flex items-center py-2 px-[4%] justify between'>
        <img className='w-[max(10%,80px)]' src={assets.logo} alt="" />
        <button onClick={()=>setToken('')} className='bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full text-xs sm:text-sm transition-colors duration-200'>
            Logout
        </button>
    </div>
    )
}

export default Navbar