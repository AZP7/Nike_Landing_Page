import React from 'react'

function Navbar({menu}) {

  return (
    <>
    <nav className={`absolute top-0 w-[100vw] lg:hidden right-[-100%] flex flex-col justify-center items-center`}
      // style={{right: menu ? '0' : '-100%'}}
    >
      <ul className='nav_ul'>
        <li className='li'>Home</li>
        <li className='li'>About Us</li>
        <li className='li'>Products</li>
        <li className='li'>Contact Us</li>
      </ul>

      <ul className='nav_ul'>
        <li className='li'>Sigin in</li>
        <li className='li'>Explore now</li>
      </ul>

    </nav>
    <nav className='hidden lg:flex  justify-between items-center w-[80%] '>

      <ul className='flex w-[65%]  justify-around text-xl '>
        <li className='cursor-pointer '>Home</li>
        <li className='cursor-pointer '>About Us</li>
        <li className='cursor-pointer '>Products</li>
        <li className='cursor-pointer '>Contact Us</li>
      </ul>

      <ul className='flex w-[30%] justify-center items-center font-semibold text-xl poppins '>
        <span><a href="">Sign in</a> / <a href="">Explore now</a></span>
        {/* <li className='li'>Sigin in</li>
        <li className='li'>Explore now</li> */}
      </ul>

    </nav>

    </>

  )
}

export default Navbar