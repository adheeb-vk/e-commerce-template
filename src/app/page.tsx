import React from 'react'
import "./globals.css"
import Products from './_components/Products'
import get from '@/config/fetch/get'; 

export default async function page(){
  // const productsData = await get('/products',{});
  // const productData = await get('/products/1',{})

  return(
    <div>
      <h1>Home Page</h1>
    </div>
  )
}
