import React from 'react'
import arrow from '../assets/icons/arrow-right.svg'

function Section() {

  return (
    <section className='w-full flex '>  

        <div className='w-full p-2 flex flex-col justify-center '>
            <span className='m-2 text-[var(--nike-color)] text-xs '>Our Summer collections</span>
            <h1 className='text-6xl leading-20 h-auto  m-2 font-bold'>The New Arrival <span className='text-[var(--nike-color)]'>Nike</span> Shoes</h1>
            <p className='m-2 w-full text-[var(--secondary-text)] text-left text-lg '>Discover stylish Nike arrivals,quality comfort,and innovation for your active life.</p> 
            <button className='m-2 border flex p-2 pl-3 bg-[var(--primary-background-color)] text-sm rounded-3xl w-[40%] justify-start text-[var(--primary-text)] cursor-pointer items-center '>Shop now <img src={arrow} alt="" className='ml-2' /> </button>

        </div>

        <div>

        </div>
      
    </section>
  )
}

export default Section