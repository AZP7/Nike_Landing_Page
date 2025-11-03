import React from 'react'
import {shoe4,shoe5,shoe6,shoe7,shoe8} from '../assets/images/index.js'
import {star} from '../assets/icons/index.js'

function Product() {


    const shoesData = [
        {rating:4.5,
         model_name:'Nike Air Jordan-01',
         price:200.20,
         image:shoe4
        },
        {
            rating:4.5,
            model_name:'Nike Air Jodna-10',
            price:210.20,
            image:shoe5
        },
        {
            rating:4.5,
            model_name:'Nike Air Jordan-100',
            price:220.20,
            image:shoe6
        },
        {
            rating:4.5,
            model_name:'Nike Air Jordan-001',
            price:230.20,
            image:shoe7
        }
    ]

  return (
    <>
    <section className='flex flex-col'>

        <div className='w-full ps-[7%]'>
            <h1 className='text-4xl w-[60%] lg:text-5xl font-bold poppins mb-4'>Our <span className='text-[var(--nike-color)]'>Popular</span> Products</h1>
            <p className='mb-6 lg:w-[45%]'>Experience top-notch quality and style with our sought-after selections.Discover a world of comfort, desgin and value.</p>
        </div>

        <div className='flex flex-wrap  justify-start lg:justify-around'>
            {shoesData.map((item,index)=>(
                <div key={index} className='flex md:ps-[7%] lg:p-0 lg:w-[23%] md:w-[28%] lg:mb-[10%] flex-col ps-8'>
                    <img src={item.image} alt="shoes photo" className='mb-2 lg:mb-[15%]' />
                    <div className='flex flex-col items-start mb-3 justify-center'>
                        <p className='flex text-md text-gray-500 mb-2'><img src={star} alt="star" className='mr-2 w-[20px]' />({item.rating})</p>
                        <p className='font-bold poppins text-lg'>{item.model_name}</p>
                        <p className='poppins text-[var(--nike-color)] text-xl font-bold'>${item.price}</p>
                    </div>
                </div>
            ))}
        </div>

        <div className='flex flex-col w-full justify-center  lg:items-start lg:h-[100vh] items-center lg:flex-row'>
            <div className='ps-8 lg:ps-4 mb-5 md:ps-[7%] lg:w-[55%] lg:h-full lg:mb-0 '>
                <h1 className='text-5xl w-[85%] lg:w-full h-[18vh] text-wrap font-semibold'>We Provide You <span className='text-[var(--nike-color)]'>Super Quality</span> Shoes</h1>
                <p className='text-gray-500 mt-2 lg:w-[85%] mb-2 lg:mt-8'>Ensuring premium comfort and style, our meticulously craftedd footwear is desgined to elevate your experience, providing you with unmatched quality , innovation, and a touch of elegance.</p>
                <p className='text-gray-500 mb-4 lg:w-[85%]'>Our dedication to detail and excellence ensures your satisfaction with every step.</p>
                <button className='bg-[var(--nike-color)] lg:text-lg md:mt-6 text-[#fff] p-2 ps-5 pe-5 rounded-3xl'>View details</button>
            </div>
            <img src={shoe8} alt="Big Shoes" className='w-[85%] lg:w-[45%] md:w-[60%] object-contain' />
        </div>

    </section>
    </>

  )
}

export default Product
