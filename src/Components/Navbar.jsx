import React from 'react'

function Navbar({menu}) {

  return (
    <nav className={`absolute top-0 w-[100vw] right-[-100%] flex flex-col justify-center items-center`}
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
  )
}

export default Navbar