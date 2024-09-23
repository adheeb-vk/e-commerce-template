import React from 'react'
import "../../globals.css"
import Products from '../../_components/Products'
import get from '@/config/fetch/get';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "easycasa | Products",
  description: "An e-commerce platform",
};

export default async function page(){
  // API for your products
  const productsData = await get(`/products`,{});
  return(
    <Products productsData={productsData}></Products>
  )
}
