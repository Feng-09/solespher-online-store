"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"

export default function Footer() {
  const router = useRouter()
    return (
        <footer className="bg-[#141718] pt-20 pb-8 px-[3.75rem] w-screen flex flex-col gap-y-12 max-lg:py-12 max-lg:px-6">
            <div className="flex justify-between items-center max-lg:flex-col gap-y-10">
                <div className="flex gap-x-8 items-center max-lg:flex-col gap-y-4">
                  <h1 className="text-[1.6875rem] font-black leading-[2.056875rem] text-white font-mont hover:cursor-pointer" onClick={() => {router.push('/')}}>SOLESPHERE</h1>
                  <div className="w-[1px] h-6 bg-[#6C7275] max-lg:h-[1px] max-lg:w-6"></div>
                  <p className="font-aeonik text-[#E8ECEF] text-sm leading-[1.375rem]">Shoe Store</p>
                </div>

                <div className="flex gap-x-10 items-center max-lg:flex-col gap-y-8">
                  <div className="group w-fit h-fit flex flex-col items-center hover:opacity-70 hover:cursor-pointer" onClick={() => {router.push('/')}}>
                    <p className="font-aeonik text-sm leading-[1.375rem] text-[#FEFEFE]">Home</p>
                    <div className="w-0 h-[1px] group-hover:w-8 duration-100 bg-white"></div>
                  </div>
                  <div className="group w-fit h-fit flex flex-col items-center hover:opacity-70 hover:cursor-pointer">
                    <p className="font-aeonik text-sm leading-[1.375rem] text-[#FEFEFE]">Shop</p>
                    <div className="w-0 h-[1px] group-hover:w-8 duration-100 bg-white"></div>
                  </div>
                  <div className="group w-fit h-fit flex flex-col items-center hover:opacity-70 hover:cursor-pointer" onClick={() => router.push('/products')}>
                    <p className="font-aeonik text-sm leading-[1.375rem] text-[#FEFEFE]">Products</p>
                    <div className="w-0 h-[1px] group-hover:w-8 duration-100 bg-white"></div>
                  </div>
                  <div className="group w-fit h-fit flex flex-col items-center hover:opacity-70 hover:cursor-pointer">
                    <p className="font-aeonik text-sm leading-[1.375rem] text-[#FEFEFE]">Contact Us</p>
                    <div className="w-0 h-[1px] group-hover:w-8 duration-100 bg-white"></div>
                  </div>
                </div>
            </div>

            <div className="border-t border-[#6C7275] py-4 flex justify-between items-center max-lg:flex-col-reverse max-lg:py-6 gap-y-8">
                <div className="flex gap-x-7 items-center max-lg:flex-col-reverse gap-y-8">
                    <div>
                      <p className="font-aeonik text-xs leading-5 text-[#E8ECEF]">Copyright © 2024 SOLESPHERE. All rights reserved</p>
                    </div>
                    <div className="flex gap-x-7">
                      <p className="font-aeonik text-xs leading-[0.8625rem] font-bold text-[#E8ECEF] hover:cursor-pointer">Privacy Policy</p>
                      <p className="font-aeonik text-xs leading-[0.8625rem] font-bold text-[#E8ECEF] hover:cursor-pointer">Terms of Use</p>
                    </div>
                </div>
                
                <div className="flex gap-x-6 items-center">
                    <Image src="/images/instagram.svg" alt="instagram" width={24} height={24} className="hover:cursor-pointer" />
                    <Image src="/images/facebook.svg" alt="instagram" width={24} height={24} className="hover:cursor-pointer" />
                    <Image src="/images/youtube.svg" alt="instagram" width={24} height={24} className="hover:cursor-pointer" />
                </div>
            </div>
        </footer>
    )
}