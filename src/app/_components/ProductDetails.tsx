"use client"
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import "../globals.css"

function ProductDetails({productData}:{productData: any}) {

const gallery = ["1","2","3","4","5","6"]

  return (
    <>
    <div className='py-8 px-10 flex justify-around max-[830px]:flex-col max-[380px]:px-6'>
      <Link
      href={"/products"}
      className='hidden max-[690px]:inline-block bg-secondary flex py-2 px-3 w-max rounded-xl text-white mb-6 font-bold max-[460px]:py-2 max-[460px]:py-1 flex justify-between items-center'
      >
        <span>
          <Image
          src={'/images/arrow-back.svg'}
          height={10}
          width={20}
          alt='arrow'
          />
        </span>
      </Link>
      <div className='flex-col px-6 py-6 align-center items-center border-2 border-solid border-black rounded-2xl w-[28%] h-max max-[1024px]:w-[40%] max-[880px]:w-[38%] max-[830px]:mx-auto max-[830px]:w-[60%] max-[590px]:w-[70%] max-[590px]:w-[80%] max-[480px]:w-[90%] max-[380px]:w-[100%]'>
        <div className='w-full mb-4'>
          <Image  
          src={productData?.image}
          alt='Product'
          width={100} 
          height={100}
          />
        </div>
        <div className='w-full'>
          <h4 className='mb-3 font-bold text-xl'>{productData?.title}</h4>
          <p className='text-md mb-3 w-full'>{productData?.description}</p>
          <span className='py-1 px-3 bg-secondary text-white font-semibold text-sm block w-max rounded-md mb-4 mt-6'>{productData?.price} Rs</span>
          <Link href={`https://wa.me/<Your Number>?text=${productData?.title}`} target='_blank' className='button font-bold w-full block mt-4 py-3 px-6 primary rounded-xl text-center text-white'>Buy Now</Link>
        </div>
      </div>
      <div className='w-[50%] max-[880px]:w-[40%] max-[830px]:w-full max-[830px]:pt-12'>
        <h2 className='text-4xl max-[830px]:text-2xl font-bold text-center mb-6 w-full'>Gallery</h2>
        <div>
          <ul className='flex gap-6 w-full max-[830px]:justify-center flex-wrap'>
            {gallery.map((number)=>{
              return(
                <li className='p-12 bg-gray-400'>{number}</li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProductDetails;
