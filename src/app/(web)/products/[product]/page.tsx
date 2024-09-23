import Link from 'next/link'
import React, { ReactNode } from 'react'
import ProductDetails from '@/app/_components/ProductDetails'
import get from '@/config/fetch/get'

export default async function ProductPage({
  params,
}: {
  params: {product: any};
}){
  // API for the product selected
  const productData = await get(`/products/${params.product}`,{})
  return (
    <ProductDetails productData={productData}/>
  )
}
