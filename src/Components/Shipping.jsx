import React from 'react'
import {truckFast,shieldTick,support,arrowRight} from "../assets/icons/index.js"
import {offer} from "../assets/images/index.js"


function Shipping() {

  const shipping = [
    {
      icon:truckFast,
      category:"Free Shipping",
      details:"Enjoy seamless shopping with our complimentray shipping service."
    },
    {
      icon:shieldTick,
      category:"Secure Payment",
      details:"Experience worry-free transactions with our secure payment options."
    },
    {
      icon:support,
      category:"Love to help you",
      details:"Our dedicated team is here to assist you every step of the"
    }
  ]

  return (
    <section className='flex flex-col justify-center items-center pb-4'>

      <div className='flex flex-col mt-4 justify-center items-center'>
        {shipping.map((item,index)=>(
          <div key={index} className='border border-gray-100 shadow-lg h-[30vh] p-8 flex flex-col justify-center items-start rounded-xl w-[75%] mb-2 mt-2 '>
            <div className='border border-red-500 flex justify-center p-0 items-center rounded-full h-[45px] bg-[var(--nike-color)] w-[45px] '>
                <img src={item.icon} alt="shoes photo" className=' object-contain' />
            </div>
            <h2 className=' text-2xl font-bold mt-6 mb-6' >{item.category}</h2>
            <p className='text-gray-500'>{item.details}</p>

          </div>

        ))}
      </div>    

      <div className='mt-4'>
        <div className='flex flex-col w-full ps-8'>
          <h1 className='text-4xl mb-3 font-bold'><span className='text-[var(--nike-color)] '>Special</span> Offer</h1>
          <p className='mb-3 mt-3 text-gray-400 w-[90%]'>Embark on shopping journey that redefines your experience with unbeatable deals.From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
          <p className='mb-3 mt-3 text-gray-400 w-[90%]'>Navigate a realm of possibilities desgined to fulfill your unique desires,surpassing the loftiest expextations. Your journey with us is nothing short of exceptional.</p>
        </div>
        <div className='flex w-[60%] mt-3 flex-wrap ps-8'>
          <button className='flex mb-3 bg-[var(--nike-color)] mr-4 pt-2 pb-2 ps-5 pe-5 rounded-4xl text-[#fff] font-semibold '>Shop now <img className='ml-1' src={arrowRight} alt="Right Arrow" /> </button>
          <button className='flex mb-3 border mr-4 pt-2 pb-2 ps-5 pe-5 rounded-4xl font-semibold '>Learn more</button>
        </div>

      </div>  
      <img src={offer} className='object-contain w-[85%]' alt="Offer Photo" />

    </section>
  )
}

export default Shipping
