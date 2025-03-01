import React, { useState } from 'react'
import { navLinks } from '../constants'
import  brainLogo  from '../assets/brainLogo.png'
import { Bars3Icon,XCircleIcon } from '@heroicons/react/24/outline'


const Navbar = () => {
  
  const [toggle,setToggle] = useState(false)

  return (
    <nav className='w-full flex  justify-between items-center navbar'>
      <img src={brainLogo} alt='Brain Logo' className='w-[150px] h-[150px]' />

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav,index)=>(
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-primary ${index===navLinks.length-1 ? "mr-0" : "mr-10"}`}>
            
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}

      </ul>
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        { toggle ?  <XCircleIcon  className='w-[50px] text-primary object-contain' onClick={() => setToggle((prev)=> !prev)}/> : <Bars3Icon className='w-[50px] text-primary object-contain' onClick={() => setToggle((prev)=> !prev)} /> }
        
        <div className={`${toggle ? "flex" : "hidden"} p-6 bg-white-gradient shadow-glow-inset absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav,index)=>(
              <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-primary ${index===navLinks.length-1 ? "mb-0" : "mb-4"}`}>
                
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}

          </ul>
        </div>
      
      </div>
      
    

    </nav>
  )
}

export default Navbar
