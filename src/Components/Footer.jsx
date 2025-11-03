import React from 'react'
import {footerLogo} from '../assets/images/index.js'
import {facebook,instagram,twitter,copyrightSign} from '../assets/icons/index.js'

function Footer() {
    const socialMedia = [facebook,,twitter,instagram]
    const products = ["Air Force 1","Air Max 1","Air Jordan 1","Air Force 2","Nike Waffle Racer","Nike Cortez"]
    const help = ["About us","FAQs","How it works","Privacy Policy","Payment Policy"]
    const getintouch = ["customer@nike.com","+92554862354"]
    
  return (

    <footer className='w-full flex flex-col '>

        <div className='flex flex-col lg:flex-row justify-center lg:justify-around mt-8 ps-7 pb-7 lg:items-center items-start'>
            <h1 className='text-4xl text-left lg:w-[40%] w-[60%] leading-normal ps-3 mb-6 font-bold poppins'>Sign Up for <span className='text-[var(--nike-color)] '>Updates </span>& Newsletter</h1>
            <div className='flex flex-col w-[80%] lg:w-[50%] md:w-[70%] md:p-2 md:border-gray-500 md:rounded-4xl justify-center md:justify-between md:border items-center md:flex-row'>
                <input type="email" className='border p-3 ps-4 pe-4 rounded-3xl md:rounded-4xl md:w-[70%] md:ps-9 w-[85%] md:border-0 mb-4 md:mb-0' placeholder='subscribe@nike.com' />
                <button className='bg-[var(--nike-color)] hidden w-[85%] md:w-[25%] md:inline p-3 cursor-pointer text-[#d4d1d1] justify-center items-center ps-4 pe-4 rounded-3xl'>Sign Up</button>

                <button className='bg-[var(--nike-color)] w-[85%] md:hidden p-3 cursor-pointer flex text-[#d4d1d1] justify-center items-center ps-4 pe-4 rounded-3xl'>Sign Up</button>
            </div>
        </div>

        <div className='bg-black lg:mb-0 lg:mt-[10%] lg:h-[70vh] lg:flex pt-8 lg:p-0'>
            <div className='flex flex-col  lg:w-[35%] lg:justify-start lg:pt-[5%] justify-center items-start ps-6'>
                <img src={footerLogo} alt="nike logo" className='object-contain mb-6 lg:mb-[15%] w-[30%] lg:w-[50%]' />
                <p className='text-gray-400 mb-6 lg:w-[75%] lg:text-lg md:w-[50%] w-[80%]'>Get shoes ready for the new term at your nearest Nike store. Find your perfect size in store. Get Rewards.</p>
                <div className='flex w-[70%] '>
                    {socialMedia.map((item,index)=>(
                        <div key={index} className='w-[40px] h-[40px] rounded-full  flex justify-center items-center ml-2 mr-2 bg-white'><img src={item} alt="" /></div>
                    ))}
                </div>
            </div>

            <div className='flex flex-wrap lg:h-full lg:w-[65%] lg:m-0 mt-6 lg:pt-[5%] ps-6'>
                <div className='w-[50%] md:w-[30%] '>
                    <h2 className='text-white text-xl lg:text-2xl lg:mb-[25%] mb-2'>Products</h2>
                    {
                        products.map((item,index)=>(
                            <li key={index} className='mb-2 lg:text-lg text-sm text-gray-400'>{item}</li>
                        ))
                    }

                </div>
                <div className='w-[50%] md:w-[30%]'>
                    <h2 className='text-white text-xl lg:text-2xl lg:mb-[25%] mb-2'>Help</h2>
                    {
                        help.map((item,index)=>(
                            <li key={index} className='mb-2 lg:text-lg text-sm text-gray-400'>{item}</li>
                        ))
                    }
                </div>
                <div className='w-[50%] mt-3 md:w-[30%] md:mt-0'>
                    <h2 className='text-white text-xl lg:text-2xl lg:mb-[25%] mb-2'>Get in touch</h2>
                    {
                        getintouch.map((item,index)=>(
                            <li key={index} className='mb-2 lg:text-lg text-sm text-gray-400'>{item}</li>
                        ))
                    }
                </div>
            </div>

            <div className='w-full flex items-center lg:hidden justify-between p-3 md:ps-6 md:pe-6 mt-6 lg:m-0 mb-6'>
                <p className='text-gray-400 text-sm  flex'><img className='mr-2 w-[18px]' src={copyrightSign} alt="copyright sign" />Copyright.All right reserved.</p>
                <p className='text-gray-400 text-sm '>Terms & Conditions</p>
            </div>

        </div>

        <div className='bg-black lg:mt-0 w-full hidden lg:flex lg:justify-between p-5 lg:items-start h-[70px]'>
                <p className='text-gray-400 text-sm  flex'><img className='mr-2 w-[18px]' src={copyrightSign} alt="copyright sign" />Copyright.All right reserved.</p>
                <p className='text-gray-400 text-sm '>Terms & Conditions</p>

        </div>
            
    </footer>
  )
}

export default Footer
