import React,{useState} from 'react'
import nikeIcon from '../assets/favicon.ico'
import hamburgur from '../assets/icons/hamburger.svg'
import Navbar from './Navbar'

function Header() {

  const [menu, setMenu] = useState(false);


  return (
    <header className='w-full relative h-[50px] flex flex-row justify-between p-3 items-center border-black '>

      <div className='flex justify-center items-center'>
        <img src={nikeIcon} className='w-[50px] h-[40px]  object-contain ' alt="" />
        <h1 className='text-2xl font-semibold text-[var(--nike-color)] '>Nike</h1>
      </div>

      <img src={hamburgur} onClick={() => setMenu(!menu)} className='w-[20px] object-contain cursor-pointer' alt="" />

      <Navbar menu={menu} />

    </header>
  )
}

export default Header