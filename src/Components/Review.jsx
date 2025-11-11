import React from 'react'
import{customer1,customer2} from '../assets/images/index.js'
import {star} from "../assets/icons/index.js"


function Review() {

    const customerDetail = [
        {icon:customer1,
         message:"The attention to detail and quality of the product exceed my expectations. Highly recommended!",
         name:"Morich Brown"
        },
        {
            icon:customer2,
            message:"The product not only met but exceeded my expectations.I'll definitely be a returning customer!",
            name:"Lota Mongeskar"
        }
    ]

  return (
    <section className='bg-[var(--bg-color)] border-red-500 w-full lg:mt-[8%] md:pt-[8%] pb-10 lg:pb-[10%]'>

        <div className='w-full flex flex-col justify-center mb-6 items-center'>
            <h2 className='text-4xl w-[65%] text-center font-bold poppins'>What Our <span className='text-[var(--nike-color)]'>Customers </span>Say?</h2>
            <p className='w-[70%] text-center text-gray-600 mt-6 md:w-[50%] md:mt-3 '>Hear genuine from our satisfied customers about their exceptional experiences with us.</p>
        </div>

        <div className=' lg:flex lg:justify-around lg:items-center'>
            {customerDetail.map((item,index)=>(
                <div key={index} className='flex lg:w-[35%] flex-col lg:mt-0 mt-8 justify-center items-center'>
                    <img src={item.icon} alt="user profile" className='w-[20%] lg:w-[35%] md:w-[15%] mb-5 object-contain rounded-full ' />
                    <p className='w-[70%] text-center lg:w-full md:w-[55%] md:mb-2'>{item.message}</p>
                    <span className='flex'><img src={star} alt="star" className='w-[20px] mr-2' />(4.5)</span>
                    <h2 className='font-bold mt-4 text-2xl poppins'>{item.name}</h2>
                </div>
            ))}
        </div>
      
    </section>
  )
}

export default Review
