"use client"

import Image from "next/image";
import searchIcon from "../../public/images/searchIcon.svg";
import cartIcon from "../../public/images/buttonSignin.png";
import exit from '../../public/images/circle-xmark-regular.svg';
import { useContext, useState, useEffect } from "react";
import { menuContext } from "./menuContext";
import { cartContext } from "./cartContext";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const [searchInp, setSearchInp] = useState('');
  const { menu, setMenu } = useContext(menuContext)
  const [cartItems, setCartItems] = useState(0)
  const router = useRouter()
  const { cart, setCart } = useContext(cartContext)

  useEffect(() => {
    setCartItems(cart?.length)
  }, [cart])

  useEffect(() => {
    if (typeof window != "undefined") {
        const cartArray: any = window.localStorage.getItem('cartArray')
        const cart = JSON.parse(cartArray)
        if (cart.length != 0) {
          setCartItems(cart.length)
        }
    }
  }, [])

  const handleMenu = /* contextSafe */((e: any) => {
    if (setMenu != undefined)
    setMenu(a => !a)
    if (!menu) {
        e.currentTarget.children[0].classList.add("active")
        e.currentTarget.children[1].classList.add("active")
        e.currentTarget.children[2].classList.add("active")

        e.currentTarget.children[0].classList.remove("rest")
        e.currentTarget.children[1].classList.remove("rest")
        e.currentTarget.children[2].classList.remove("rest")
    } else {
        e.currentTarget.children[0].classList.remove("active")
        e.currentTarget.children[1].classList.remove("active")
        e.currentTarget.children[2].classList.remove("active")

        e.currentTarget.children[0].classList.add("rest")
        e.currentTarget.children[1].classList.add("rest")
        e.currentTarget.children[2].classList.add("rest")
    }

    //   document.getElementById('eclipse').classList.toggle("active")

    // if (menu == false) {
    //   gsap.from(".animage", {y:30, opacity: 0, stagger: 0.05, duration: 1, delay: 0.4, ease: 'elastic.out'})
    //   e.currentTarget.children[0].classList.remove("rest")
    //   e.currentTarget.children[1].classList.remove("rest")
    //   e.currentTarget.children[2].classList.remove("rest")
    // } else {
    //   gsap.to(".animage", {y:30, opacity: 0, stagger: -0.05, duration: 0.4, ease: 'back.in', repeat: 1, yoyo: true})
    //   e.currentTarget.children[0].classList.add("rest")
    //   e.currentTarget.children[1].classList.add("rest")
    //   e.currentTarget.children[2].classList.add("rest")
    // }    
  })

    return (
        <nav className="w-full h-[8.25rem] pt-[1.875rem] flex flex-col max-sm:pt-4 z-40 fixed top-0 bg-white">
        <div className="flex items-center justify-between w-full px-[3.75rem] py-4 relative max-lg:px-4">
          <div className='lg:hidden flex flex-col gap-y-1 ham mr-4 absolute z-50' onClick={handleMenu}>
            <div className='w-4 h-[2px] bg-black dark:bg-black rounded-full' id='line1'></div>
            <div className='w-4 h-[2px] bg-black dark:bg-black rounded-full' id='line2'></div>
            <div className='w-4 h-[2px] bg-black dark:bg-black rounded-full' id='line3'></div>
          </div>
          <h1 className="text-[1.6875rem] font-black leading-[2.056875rem] text-black font-mont max-sm:text-xl max-lg:ml-6 hover:cursor-pointer" onClick={() => {router.push('/')}}>SOLESPHERE</h1>
          <div className="flex gap-x-4 absolute left-1/2 -ml-[14.512rem] max-lg:hidden">
            <div className="group w-fit h-fit flex flex-col items-center hover:opacity-70 hover:cursor-pointer" onClick={() => {router.push('/')}}>
              <p className="px-6 py-2 font-aeonik font-normal text-base leading-[1.15rem]">Home</p>
              <div className="w-0 h-[1px] group-hover:w-8 duration-100 bg-black"></div>
            </div>
            <div className="group w-fit h-fit flex flex-col items-center hover:opacity-70 hover:cursor-pointer">
              <p className="px-6 py-2 font-aeonik font-normal text-base leading-[1.15rem]">Shop</p>
              <div className="w-0 h-[1px] group-hover:w-8 duration-100 bg-black"></div>
            </div>
            <div className="group w-fit h-fit flex flex-col items-center hover:opacity-70 hover:cursor-pointer">
              <p className="px-6 py-2 font-aeonik font-normal text-base leading-[1.15rem]">Products</p>
              <div className="w-0 h-[1px] group-hover:w-8 duration-100 bg-black"></div>
            </div>
            <div className="group w-fit h-fit flex flex-col items-center hover:opacity-70 hover:cursor-pointer">
              <p className="px-6 py-2 font-aeonik font-normal text-base leading-[1.15rem]">Contact Us</p>
              <div className="w-0 h-[1px] group-hover:w-8 duration-100 bg-black"></div>
            </div>
          </div>
          <div className="w-[23.5rem] flex items-center justify-end gap-x-4">
            <div className="group relative w-10 h-10 rounded-full flex items-center overflow-hidden border border-[#E4EBF1] hover:cursor-pointer hover:flex-grow pl-10 hover:pr-2 duration-300 has-[:focus]:flex-grow">
              <input
              className="w-full rounded-md focus:outline-none focus:w-full"
              onChange={(e) => {setSearchInp(e.target.value)}}
              value={searchInp}
              />
              <Image src={searchIcon} alt="search" className="absolute w-4 h-4 top-[0.6rem] left-[0.6rem]" />
              {searchInp != '' ? (
                <Image
                src={exit}
                alt="close search"
                onClick={() => {setSearchInp('')}}
                className="w-4 h-4 absolute top-[0.6rem] right-[0.6rem] hidden group-hover:block duration-300" />
              ) : null}
            </div>
            <div className="w-10 h-10 rounded-full border border-[#E4EBF1] hover:cursor-pointer flex items-center justify-center relative" onClick={() => {router.push('/cart')}}>
              <Image src={cartIcon} alt="cart" className="w-full h-full" />
              <div className="text-white w-4 h-4 flex items-center justify-center text-[9px] rounded-full bg-black font-aeonik absolute top-[2px] right-[2px]">{cartItems}</div>
            </div>
          </div>
        </div>
        <div className="bg-[#591D24] w-full h-[2.125rem] text-center font-aeonik leading-[2.125rem] text-white">Get 10% off on business sign up</div>
      </nav>
    )
}