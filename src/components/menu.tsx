"use client"

import { useContext } from "react";
import { menuContext } from "./menuContext";
import { useRouter } from "next/navigation";

export default function Menu() {
    const { menu } = useContext(menuContext)
    const router = useRouter()

    return (
        <nav className={"flex flex-col gap-y-12 items-center w-screen bg-[#ffffff05] backdrop-blur-[40.774227142333984px] fixed top-0 menu"
            + (menu ? " expand" : "")}>
            <div className="group w-fit h-fit flex flex-col items-center hover:opacity-70 hover:cursor-pointer" onClick={() => {router.push('/')}}>
              <p className="px-6 py-2 font-aeonik font-normal text-lg leading-[1.15rem]">Home</p>
              <div className="w-0 h-[1px] group-hover:w-12 duration-100 bg-black"></div>
            </div>
            <div className="group w-fit h-fit flex flex-col items-center hover:opacity-70 hover:cursor-pointer">
              <p className="px-6 py-2 font-aeonik font-normal text-lg leading-[1.15rem]">Shop</p>
              <div className="w-0 h-[1px] group-hover:w-12 duration-100 bg-black"></div>
            </div>
            <div className="group w-fit h-fit flex flex-col items-center hover:opacity-70 hover:cursor-pointer">
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