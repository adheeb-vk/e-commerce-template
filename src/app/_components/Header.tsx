"use client"
import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import '../globals.css'


export default function Header() {
    const [mobileMenu, setMobileMenu] = useState(false)
  return (
    <>
    <header className='max-[320px]:px-6 sticky w-full flex items-center py-6 px-12 justify-between primary'>
        <h1 className=" max-[260px]:text-xl text-3xl font-bold flex gap-6 items-center text-white secondary">
            <Link href={"/"}>Logo</Link>
        </h1>
        <nav>
            <button onClick={
                ()=>{
                    setMobileMenu(true)
                }
            } className={`${mobileMenu ? "hidden" : "max-[690px]:block"} hidden text-6xl font-bold text-center text-black bg-black p-2 rounded-md menu-icon`}>
                <Image
                src={'/images/menu-icon.svg'}
                width={30}
                height={30}
                alt='icon'
                />
            </button>
            <button onClick={
                ()=>{
                    setMobileMenu(false)
                }
            } className={`${mobileMenu ? "" : "hidden"} text-6xl font-bold text-center text-black bg-black p-2 rounded-md`}>
                <Image
                src={'/images/close.svg'}
                width={30}
                height={30}
                alt='icon'
                />
            </button>
            <ul className='flex justify-center text-base menu text-black font-bold'>
                <li className='cursor-pointer'><Link className='py-2 px-4 nav-menu' href={"/"}>Home</Link></li>
                <li className='cursor-pointer'><Link className='py-2 px-4 nav-menu' href={"/about"}>About</Link></li>
                <li className='cursor-pointer'><Link className='py-2 px-4 nav-menu' href={"/products"}>Products</Link></li>
            </ul>
        </nav>
        <Link className='max-[690px]:hidden py-2 px-3 bg-secondary inline-block text-white font-bold rounded-lg shadow-md hover:shadow-black' href={"/contact"}>Contact Us</Link>
    </header>
    <div className={`${mobileMenu ? "" : "hidden"} mobile-menu absolute z-10 w-full h-full flex flex-start primary-lite`}>
        <ul className='font-bold pt-6 h-full w-full flex flex-col gap-6 justify-start items-center font-bold'>
            <li className='px-6 flex justify-start w-full'><Link onClick={()=>{setMobileMenu(false)}} href={"/"}>Home</Link></li>
            <li className='px-6 flex justify-start w-full'><Link onClick={()=>{setMobileMenu(false)}} href={"/about"}>About</Link></li>
            <li className='px-6 flex justify-start w-full'><Link onClick={()=>{setMobileMenu(false)}} href={"/products"}>Products</Link></li>
            <Link onClick={()=>{setMobileMenu(false)}} className='mt-4 py-2 px-3 bg-secondary inline-block text-white font-bold rounded-lg' href={"/contact"}>Contact Us</Link>
        </ul>
    </div>
    </>
  )
}
