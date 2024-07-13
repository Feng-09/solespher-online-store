"use client"

import { useContext, useEffect, useRef } from "react";
import { menuContext } from "./menuContext";
import { useRouter } from "next/navigation";

export default function Menu() {
    const { menu } = useContext(menuContext)
    const router = useRouter()
    const navRef = useRef(null)

    useEffect(() => {
      const nav: any = navRef.current
      if (menu) {
        setTimeout(() => {
          nav.classList.add('blurry')
        }, 600)
      } else {
        setTimeout(() => {
          nav.classList.remove('blurry')
        }, 600)
      }
    }, [menu])

    return (
        <nav className={"flex flex-col gap-y-12 items-center w-screen bg-[#ffffff05] backdrop-blur-[40.774227142333984px] fixed top-0 menu z-50"
            + (menu ? " expand" : "")} ref={navRef}>
            <div className="group w-fit h-fit flex flex-col items-center hover:opacity-70 hover:cursor-pointer" onClick={() => {router.push('/')}}>
              <p className="px-6 py-2 font-aeonik font-normal text-lg leading-[1.15rem]">Home</p>
              <div className="w-0 h-[1px] group-hover:w-12 duration-100 bg-black"></div>
            </div>
            <div className="group w-fit h-fit flex flex-col items-center hover:opacity-70 hover:cursor-pointer">
              <p className="px-6 py-2 font-aeonik font-normal text-lg leading-[1.15rem]">Shop</p>
              <div className="w-0 h-[1px] group-hover:w-12 duration-100 bg-black"></div>
            </div>
            <div className="group w-fit h-fit flex flex-col items-center hover:opacity-70 hover:cursor-pointer" onClick={() => router.push('/products')}>
              <p className="px-6 py-2 font-aeonik font-normal text-lg leading-[1.15rem]">Products</p>
              <div className="w-0 h-[1px] group-hover:w-12 duration-100 bg-black"></div>
            </div>
            <div className="group w-fit h-fit flex flex-col items-center hover:opacity-70 hover:cursor-pointer">
              <p className="px-6 py-2 font-aeonik font-normal text-lg leading-[1.15rem]">Contact Us</p>
              <div className="w-0 h-[1px] group-hover:w-12 duration-100 bg-black"></div>
            </div>
        </nav>
    )
}