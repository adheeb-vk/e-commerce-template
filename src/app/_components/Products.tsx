"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import '../globals.css'

export default function Products({productsData,}:{productsData: any,}) {
    const products = productsData;
    return (
        <div className='py-10 px-10 max-[480px]:px-6 max-[480px]:py-8'>
            <div className='flex flex-wrap gap-6 w-full justify-center h-max'>
                {products?.map((product:any) => {
                return (
                    <div key={``} className='w-[28%] max-[770px]:w-full py-6 rounded-xl flex flex-col items-center justify-end px-6 shadow shadow-gray-400'>
                        <div className='w-full h-full'>
                            <div className='w-full h-full flex justify-center'>
                                <Image
                                src={product?.image}
                                alt={`prodouct-image`}
                                width={100}
                                height={100}
                                className='block'
                                />
                            </div>
                        </div>
                        <div className='w-full mt-6'>
                            <h2 className="title" >{}</h2>
                            <span className='font-bold price'>Price: {} Rs</span>
                            <Link href={`/products/${product.id}`} className='button block mt-4 w-full py-3 px-6 primary font-bold rounded-xl text-center text-white'>Buy Now</Link>
                        </div>
                    </div>
                );
                })}
            </div>
        </div>
    )
}
