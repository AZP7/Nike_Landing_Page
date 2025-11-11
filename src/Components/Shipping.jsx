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

      <div className='flex flex-col lg:flex-row lg:justify-evenly lg:h-[50vh] mt-4 md:w-full justify-center items-center'>
        {shipping.map((item,index)=>(
          <div key={index} className='border border-gray-100 shadow-lg h-[30vh] lg:h-full p-8 flex flex-col justify-center items-start rounded-xl w-[75%] lg:w-[30%] xl:w-[28%] md:w-[80%] mb-2 mt-2 '>
            <div className='border border-red-500 flex justify-center p-0 items-center rounded-full h-[45px] bg-[var(--nike-color)] w-[45px] '>
                <img src={item.icon} alt="shoes photo" className=' object-contain' />
            </div>
            <h2 className=' text-2xl font-bold mt-6 mb-6' >{item.category}</h2>
            <p className='text-gray-500'>{item.details}</p>

          </div>

        ))}
      </div>    

      <div className='lg:w-[100vw] lg:h-[100vh] '>
         
        <div className='mt-4 md:mt-[9%] lg:h-full flex'>

            <img src={offer} className='hidden lg:p-0 lg:h-full lg:block w-[50%] lg:ml-10 object-contain md:ps-[3%] md:mb-[7%]' alt="Offer Photo" />
          <div className=' lg:flex lg:flex-col lg:justify-center'>

            <div className='flex flex-col w-full ps-8 md:ps-[10%]'>
              <h1 className='text-4xl text-wrap h-[50px] mb-3 font-bold'><span className='text-[var(--nike-color)]'>Special</span> Offer</h1>
              <p className='mb-3 mt-3 text-gray-400 w-[90%]'>Embark on shopping journey that redefines your experience with unbeatable deals.From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
              <p className='mb-3 mt-3 text-gray-400 w-[90%]'>Navigate a realm of possibilities desgined to fulfill your unique desires,surpassing the loftiest expextations. Your journey with us is nothing short of exceptional.</p>
            </div>

            <div className='flex w-[60%] mt-3 flex-wrap md:ps-[10%] md:mt-[5%] md:mb-[5%] ps-8'>
              <button className='flex mb-3 bg-[var(--nike-color)] md:w-[150px] mr-4 pt-2 pb-2 ps-5 pe-5 rounded-4xl text-[#fff] font-semibold '>Shop now <img className='ml-1' src={arrowRight} alt="Right Arrow" /> </button>
              <button className='flex mb-3 border mr-4 pt-2 pb-2 ps-5 pe-5 rounded-4xl font-semibold '>Learn more</button>
            </div>

        </div>

        </div>  
      </div>

      <img src={offer} className='object-contain w-[85%] lg:hidden md:ps-[3%] md:mb-[7%]' alt="Offer Photo" />

    </section>
  )
}

export default Shipping
