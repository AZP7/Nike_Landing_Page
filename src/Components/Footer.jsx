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
        <div className='flex flex-col justify-center mt-8 ps-7 pb-7 items-start'>
            <h1 className='text-4xl text-left w-[60%] leading-normal ps-3 mb-6 font-bold poppins'>Sign Up for <span className='text-[var(--nike-color)] '>Updates </span>& Newsletter</h1>
            <div className='flex flex-col w-[80%] justify-center items-center'>
                <input type="email" className='border p-3 ps-4 pe-4 rounded-3xl w-[85%] mb-4' placeholder='subscibe@nike.com' />
                <button className='bg-[var(--nike-color)] w-[85%] p-3 cursor-pointer flex text-[#d4d1d1] justify-center items-center ps-4 pe-4 rounded-3xl'>Sign Up</button>
            </div>
        </div>

        <div className='bg-black pt-8'>
            <div className='flex flex-col justify-center items-start ps-6'>
                <img src={footerLogo} alt="nike logo" className='object-contain mb-6 w-[30%]' />
                <p className='text-gray-400 mb-6'>Get shoes ready for the new term at your nearest Nike store. Find your perfect size in store. Get Rewards.</p>
                <div className='flex w-[70%] '>
                    {socialMedia.map((item,index)=>(
                        <div key={index} className='w-[40px] h-[40px] rounded-full  flex justify-center items-center ml-2 mr-2 bg-white'><img src={item} alt="" /></div>
                    ))}
                </div>
            </div>
            <div className='flex flex-wrap mt-6 ps-6'>
                <div className='w-[50%] '>
                    <h2 className='text-white text-xl mb-2'>Products</h2>
                    {
                        products.map((item,index)=>(
                            <li key={index} className='mb-2  text-sm text-gray-400'>{item}</li>
                        ))
                    }

                </div>
                <div className='w-[50%] '>
                    <h2 className='text-white text-xl mb-2'>Help</h2>
                    {
                        help.map((item,index)=>(
                            <li key={index} className='mb-2  text-sm text-gray-400'>{item}</li>
                        ))
                    }
                </div>
                <div className='w-[50%] mt-3'>
                    <h2 className='text-white text-xl mb-2'>Get in touch</h2>
                    {
                        getintouch.map((item,index)=>(
                            <li key={index} className='mb-2  text-sm text-gray-400'>{item}</li>
                        ))
                    }
                </div>
            </div>

            <div className='w-full flex items-center justify-between p-3 mt-6 mb-6'>
                <p className='text-gray-400 text-sm  flex'><img className='mr-2 w-[18px]' src={copyrightSign} alt="copyright sign" />Copyright.All right reserved.</p>
                <p className='text-gray-400 text-sm '>Terms & Conditions</p>
            </div>

        </div>

    </footer>
  )
}

export default Footer
