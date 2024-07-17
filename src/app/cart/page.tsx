"use client"

import Process from "@/components/process";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { cartContext } from "@/components/cartContext";
import CartProductCard from "@/components/cartProductCard";
import { useRouter } from "next/navigation";

export default function Cart() {
    const { cart, setCart } = useContext(cartContext)
    const [ shipping, setShipping ] = useState("free")
    const [subTotalAdd, setSubTotalAdd] = useState(0)
    const router = useRouter()
    
    useEffect(() => {
        if (typeof window != "undefined") {
            const cartArray = window.localStorage.getItem('cartArray')
            if (cartArray)
            setCart(JSON.parse(cartArray))
        }
    }, [])

    useEffect(() => {
        if (typeof window != "undefined") {
            window.localStorage.setItem('subTotal', JSON.stringify(subTotalAdd))
            window.localStorage.setItem('shipping', JSON.stringify(shipping))
        }
    }, [subTotalAdd, shipping])

    const handleClear = () => {
        setSubTotalAdd(0)
        const newCart: [] = []
        setCart(newCart)
        if (typeof window != "undefined") {
            window.localStorage.setItem('cartArray', JSON.stringify(newCart))
        }
    }

    return (
        <>
        <div className="absolute flex gap-x-1 left-8 lg:left-12 hover:cursor-pointer" onClick={() => {router.back()}}>
            <Image src="/images/Vector.svg" alt="back" width={10} height={10} />
            <p className="font-aeonik text-[#605F5F] font-medium text-sm leading-6">Back</p>
        </div>
        
        <header className="px-8 pt-16 pb-10 flex flex-col gap-y-6 items-center w-full">
            <h1 className="text-black font-medium font-aeonik text-[2.25rem] leading-[2.75rem] tracking-[-0.4px] lg:text-[3.375rem] lg:leading-[3.6875rem]">Cart</h1>
            <Process page="cart" />
        </header>

        <div className="lg:flex lg:justify-between lg:relative lg:px-12 pb-20 lg:pb-60">
        <section className="px-6 w-full lg:w-3/5">
            <div className="lg:grid grid-cols-5">
                <h2 className="font-aeonik font-bold leading-[1.15rem] text-[#121212] col-span-2">Products</h2>
                <h2 className="font-aeonik font-bold leading-[1.15rem] text-[#121212] hidden lg:block text-end">Quantity</h2>
                <h2 className="font-aeonik font-bold leading-[1.15rem] text-[#121212] hidden lg:block text-end">Price</h2>
                <h2 className="font-aeonik font-bold leading-[1.15rem] text-[#121212] hidden lg:block text-end">Subtotal</h2>
            </div>            
            <div className="w-full h-[1px] bg-[#6C7275] mt-6"></div>
            <div className="flex flex-col gap-y-6">
                {cart?.length === 0 ? (<div className="font-aeonik font-medium leading-[1.15rem] text-[#6C7275] text-center py-40">There are currently no items in your cart</div>) :
                 cart?.map((item, id) => {
                    return (<CartProductCard img={item.img} shoe={item.shoe} price={item.price} color={item.color} setSubTotalAdd={setSubTotalAdd} subTotalAdd={subTotalAdd} qty={item.qty} key={id} index={id} />)
                })}
            </div>
            {cart?.length !== 0 ? (<div className="font-aeonik font-medium leading-[1.15rem] text-red-400 text-center py-2 float-right border-2 border-red-400 rounded-2xl px-4 mt-4 hover:cursor-pointer hover:border-red-600 hover:text-red-600 duration-100" onClick={handleClear}>Clear Cart</div>) : null}
        </section>

        <section className="p-6 w-full lg:absolute lg:bottom-0 lg:left-12 lg:w-fit">
            <h2 className="font-aeonik font-bold leading-[1.15rem] text-[#121212] mb-1">Have a coupon?</h2>
            <p className="font-aeonik text-sm text-[#6C7275] leading-4">Add your code for an instant cart discount</p>
            <div className="relative p-4 rounded-lg pl-12 border border-[#6C7275] my-4">
                <Image src="/images/ticket-percent.svg" alt="coupon" width={24} height={24} className="absolute left-4 top-4" />
                <input placeholder="Coupon Code" type="input" className="focus:outline-none lg:w-[26.5rem]" />
                <p className="font-aeonik font-medium leading-[1.15rem] text-[#141718] tracking-[-0.4px] absolute right-4 top-4 hover:cursor-pointer">Apply</p>
            </div>
        </section>

        <section className="px-6">
            <div className="p-4 rounded-lg border border-[#6C7275] flex flex-col gap-y-6 lg:w-[25.8125rem]">
                <h2 className="font-aeonik font-bold leading-[1.15rem] text-[#141718] lg:text-xl lg:leading-7">Cart summary</h2>
                <div className="flex flex-col gap-y-4">
                    <div className="flex flex-col gap-y-3">
                        <div className={"rounded-lg border border-[#141718] py-[0.8125rem] px-4 flex justify-between hover:cursor-pointer" + (shipping === "free" ? " bg-[#F3F5F7]" : "")} onClick={() => {setShipping("free")}}>
                            <div className="flex gap-x-3">
                                <div className="border border-[#141718] rounded-full w-[1.125rem] h-[1.125rem] flex items-center justify-center">
                                    <div className={"rounded-full w-[0.625rem] h-[0.625rem]" + (shipping === "free" ? " bg-[#141718]" : "")}></div>
                                </div>
                                <p className="font-aeonik font-medium text-sm leading-4 text-[#141718] lg:text-base lg:leading-[1.625rem]">Free shipping</p>
                            </div>
                            <p className="text-[#141718] font-aeonik font-medium text-right text-sm leading-4 lg:text-base lg:leading-[1.625rem]">₦ 0.00</p>
                        </div>
                        <div className={"rounded-lg border border-[#141718] py-[0.8125rem] px-4 flex justify-between hover:cursor-pointer" + (shipping === "express" ? " bg-[#F3F5F7]" : "")} onClick={() => {setShipping("express")}}>
                            <div className="flex gap-x-3">
                                <div className="border border-[#141718] rounded-full w-[1.125rem] h-[1.125rem] flex items-center justify-center">
                                    <div className={"rounded-full w-[0.625rem] h-[0.625rem]" + (shipping === "express" ? " bg-[#141718]" : "")}></div>
                                </div>
                                <p className="font-aeonik font-medium text-sm leading-4 text-[#141718] lg:text-base lg:leading-[1.625rem]">Express shipping</p>
                            </div>
                            <p className="text-[#141718] font-aeonik font-medium text-right text-sm leading-4 lg:text-base lg:leading-[1.625rem]">₦ 2,340.00</p>
                        </div>
                        <div className={"rounded-lg border border-[#141718] py-[0.8125rem] px-4 flex justify-between hover:cursor-pointer" + (shipping === "pickup" ? " bg-[#F3F5F7]" : "")} onClick={() => {setShipping("pickup")}}>
                            <div className="flex gap-x-3">
                                <div className="border border-[#141718] rounded-full w-[1.125rem] h-[1.125rem] flex items-center justify-center">
                                    <div className={"rounded-full w-[0.625rem] h-[0.625rem]" + (shipping === "pickup" ? " bg-[#141718]" : "")}></div>
                                </div>
                                <p className="font-aeonik font-medium text-sm leading-4 text-[#141718] lg:text-base lg:leading-[1.625rem]">Pick up</p>
                            </div>
                            <p className="text-[#141718] font-aeonik font-medium text-right text-sm leading-4 lg:text-base lg:leading-[1.625rem]">₦ 0.00</p>
                        </div>
                    </div>

                    <div className="w-full flex justify-between items-center h-[3.25rem]">
                        <p className="font-aeonik font-bold leading-4 text-sm text-[#141718] lg:text-base lg:leading-[1.625rem]">Subtotal</p>
                        <p className="font-aeonik font-bold leading-4 text-sm text-[#141718] lg:text-base lg:leading-[1.15rem]">{"₦ " + subTotalAdd.toLocaleString('en-US', {useGrouping: true})}</p>
                    </div>

                    
                    <div className="w-full flex justify-between items-center h-[3.25rem]">
                        <p className="font-aeonik font-black leading-[1.15rem] text-[#141718] lg:text-xl lg:leading-[1.4375rem]">Total</p>
                        <p className="font-aeonik font-black leading-[1.15rem] text-[#141718] lg:text-xl lg:leading-[1.625rem]">{
                            shipping === "express" ? "₦ " + (subTotalAdd + 2340).toLocaleString('en-US', {useGrouping: true}) :
                            "₦ " + subTotalAdd.toLocaleString('en-US', {useGrouping: true})}</p>
                    </div>

                    <div className="bg-[#141718] py-3 px-[1.625rem] w-[17.5rem] h-[2.8125rem] rounded-lg text-white font-aeonik font-medium text-lg leading-[1.29375rem] text-center tracking-[-0.4px] self-center lg:w-full hover:cursor-pointer hover:bg-white hover:text-black border-2 hover:border-black duration-300" onClick={() => {router.push('/check-out')}}>Checkout</div>
                </div>
            </div>
        </section>
        </div>
        </>
    )
}