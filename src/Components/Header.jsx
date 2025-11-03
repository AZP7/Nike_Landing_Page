import React,{useState} from 'react'
import nikeIcon from '../assets/favicon.ico'
import hamburgur from '../assets/icons/hamburger.svg'
import Navbar from './Navbar'
import {headerLogo} from '../assets/images/index.js'

function Header() {

  const [menu, setMenu] = useState(false);


  return (
    <header className='w-full relative h-[50px] lg:fixed z-100 backdrop-blur-md bg-white/30 lg:h-auto overflow-hidden  flex flex-row justify-between p-3 items-center'>

      <div className='flex justify-center items-center'>
        <img src={headerLogo} className='w-[150px] h-[60px] object-contain ' alt="" />
      </div>

      <img src={hamburgur} onClick={() => setMenu(!menu)} className='w-[20px] lg:hidden object-contain cursor-pointer' alt="" />

      <Navbar menu={menu} />

    </header>
  )
}

export default Header