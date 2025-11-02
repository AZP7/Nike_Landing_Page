import React from 'react'
import { bigShoe1, bigShoe2, bigShoe3,thumbnailBackground,thumbnailShoe1,thumbnailShoe2,thumbnailShoe3 } from '../assets/images/index.js'


function Hero() {
    const shoes = [bigShoe1, bigShoe2, bigShoe3]
    const thumbnailShoes = [thumbnailShoe1,thumbnailShoe2,thumbnailShoe3]

    return (
        <section className='h-[60vh] flex flex-col justify-center items-center z-0'>
            <div className='w-full h-full element flex justify-center z-0 items-center'>
                <img src={shoes[0]} className='w-[95%] object-contain'  alt="" />
            </div>

                <div className='p-0 flex w-[75%] h-[10vh] justify-between -translate-y-10 '>
                    {thumbnailShoes.map((item,index)=>{
                        return(
                            <div key={index} className='thumbnail w-[30%] cursor-pointer p-0 flex justify-center items-center rounded-lg'>
                                <img src={item} className='w-[65%] object-contain' />
                            </div>
                        )
                    })}

                </div>    
        </section>
    
    )
    }

export default Hero
