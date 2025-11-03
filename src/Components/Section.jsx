import React from 'react'
import arrow from '../assets/icons/arrow-right.svg'
import Hero from './Hero'

function Section() {

  const engament = [
    {
      category:"Brands",
      Numbers:"1k+"
    },
    {
      category:"Shops",
      Numbers:"500+"
    },
    {
      category:"Customers",
      Numbers:"250k+"
    }
  ]

  return (
    <section className='w-full flex flex-col overflow-visible lg:flex-row z-100 '>

      <div className='lg:h-[120vh] overflow-visible lg:w-[50vw]'>

        <div className='w-full p-2 lg:ps-[10%] flex lg:h-[100vh] flex-col !overflow-visible justify-center lg:pb-10 lg:pt-10'>

            <span className='m-2 text-[var(--nike-color)] text-xl '>Our Summer collections</span>
            <p className='text-7xl hidden lg:block w-[53vw] p-2 ps-0 bg-white pb-6 pe-1 font-semibold text-left z-10' >The New Arrival</p>
            <p className='text-7xl hidden lg:block font-semibold' ><span className='text-[var(--nike-color)] '>Nike</span> Shoes</p>

            <h1 className='text-6xl bg-white lg:mt-8 z-10 section lg:hidden lg:w-[60vw] leading-20 h-auto md:w-[60%] text-wrap text-left m-2 font-bold'>The New Arrival <span className='text-[var(--nike-color)]'>Nike</span> Shoes</h1>
            <p className='m-2 w-full md:w-[60%] text-[var(--secondary-text)] text-left text-lg '>Discover stylish Nike arrivals,quality comfort,and innovation for your active life.</p> 
            <button className='m-2 border flex p-3 bg-[var(--primary-background-color)] text-sm rounded-3xl w-[120px] md:w-[150px] justify-center text-[var(--primary-text)] cursor-pointer items-center '>Shop now <img src={arrow} alt="" className='ml-2' /> </button>

        </div>

        <div className='flex flex-wrap lg:h-[17vh] '>

          {engament.map((item,index) => (
            <div key={index} className='flex flex-col md:w-[25%] justify-center w-[35%] mb-2 items-center'>
                <span className='engament mb-1 font-semibold text-4xl'>{item.Numbers}</span>
                <span >{item.category}</span>
            </div>
          ))}

        </div>
      </div>  
      
        <Hero/>
    </section>
  )
}

export default Section