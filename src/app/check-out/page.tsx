"use client"

import Image from "next/image";
import Process from "@/components/process";
import { useState, useEffect, useContext } from "react";
import { cartContext } from "@/components/cartContext";
import CartProductCard from "@/components/cartProductCard";
import { useRouter } from "next/navigation";

export default function Checkout() {
    const [payWith, setPayWith] = useState("card")
    const [check, setCheck] = useState(false)

    const router = useRouter()

    const { cart, setCart } = useContext(cartContext)
    const [totalAdd, setTotalAdd] = useState(0)

    let subtotal: any = localStorage.getItem('subTotal');
    let shipping: any = localStorage.getItem('shipping');

    subtotal = JSON.parse(subtotal)
    shipping = JSON.parse(shipping)
    
    useEffect(() => {
        const cartArray = localStorage.getItem('cartArray')
        if (cartArray)
        setCart(JSON.parse(cartArray))
    }, [])

    return (
        <div className="w-full flex flex-col items-center">
        <div className="absolute flex gap-x-1 left-8 lg:left-12 hover:cursor-pointer" onClick={() => {router.back()}}>
            <Image src="/images/vector.svg" alt="back" width={10} height={10} />
            <p className="font-aeonik text-[#605F5F] font-medium text-sm leading-6">Back</p>
        </div>

        <header className="px-8 pt-16 pb-10 flex flex-col gap-y-6 items-center w-full">
            <h1 className="text-black font-medium font-aeonik text-[2.5rem] leading-[2.75rem] tracking-[-0.4px] lg:text-[3.375rem] lg:leading-[3.6875rem]">Check Out</h1>
            <Process page="checkout" />
        </header>

        <main className="w-full p-6 pb-16 flex flex-col gap-y-6 lg:grid lg:grid-cols-2 lg:grid-flow-col lg:grid-rows-1 lg:gap-12 lg:py-20 max-lg:max-w-[40.1875rem]">
            <div className="flex flex-col gap-y-6">
            <section className="border border-[#6C7275] flex flex-col gap-y-6 py-6 px-4 rounded lg:max-w-[40.1875rem] lg:rounded-lg lg:h-fit">
                <h2 className="font-aeonik font-bold leading-[1.15rem] text-[#141718]">Contact Information</h2>
                <div className="flex flex-col gap-y-6">
                    <div className="flex justify-between w-full gap-x-12">
                        <div className="flex flex-col gap-y-3 flex-grow">
                            <h3 className="font-aeonik font-bold text-xs leading-[0.8625rem] text-[#6C7275]">FIRST NAME</h3>
                            <input placeholder="First name" value="" className="font-aeonik border border-[#6C7275] rounded-md px-4 h-10 w-full" />
                        </div>
                        <div className="flex flex-col gap-y-3 flex-grow">
                            <h3 className="font-aeonik font-bold text-xs leading-[0.8625rem] text-[#6C7275]">LAST NAME</h3>
                            <input placeholder="Last name" value="" className="font-aeonik border border-[#6C7275] rounded-md px-4 h-10 w-full" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-3">
                        <h3 className="font-aeonik font-bold text-xs leading-[0.8625rem] text-[#6C7275]">PHONE NUMBER</h3>
                        <input placeholder="Phone number" value="" className="font-aeonik border border-[#6C7275] rounded-md px-4 h-10 w-full" />
                    </div>
                    <div className="flex flex-col gap-y-3">
                        <h3 className="font-aeonik font-bold text-xs leading-[0.8625rem] text-[#6C7275]">EMAIL ADDRESS</h3>
                        <input placeholder="Your email" value="" className="font-aeonik border border-[#6C7275] rounded-md px-4 h-10 w-full" />
                    </div>
                </div>
            </section>

            <section className="border border-[#6C7275] flex flex-col gap-y-6 py-6 px-4 rounded lg:max-w-[40.1875rem] lg:rounded-lg lg:h-fit">
                <h2 className="font-aeonik font-bold leading-[1.15rem] text-[#141718]">Shipping Address</h2>
                <div className="flex flex-col gap-y-6">
                    <div className="flex flex-col gap-y-3">
                        <h3 className="font-aeonik font-bold text-xs leading-[0.8625rem] text-[#6C7275]">STREET ADDRESS *</h3>
                        <input placeholder="Street Address" value="" className="font-aeonik border border-[#6C7275] rounded-md px-4 h-10 w-full" />
                    </div>
                    <div className="flex flex-col gap-y-3 relative">
                        <h3 className="font-aeonik font-bold text-xs leading-[0.8625rem] text-[#6C7275]">COUNTRY *</h3>
                        <input placeholder="country" value="" className="font-aeonik border border-[#6C7275] rounded-md px-4 h-10 w-full" />
                        <Image src="/images/chevron-down.svg" alt="pick country" width={24} height={24} className="absolute right-4 top-9" />
                    </div>
                    <div className="flex flex-col gap-y-3">
                        <h3 className="font-aeonik font-bold text-xs leading-[0.8625rem] text-[#6C7275]">TOWN / CITY *</h3>
                        <input placeholder="Town / City" value="" className="font-aeonik border border-[#6C7275] rounded-md px-4 h-10 w-full" />
                    </div>
                    <div className="flex justify-between gap-x-12">
                        <div className="flex flex-col gap-y-3 flex-grow">
                            <h3 className="font-aeonik font-bold text-xs leading-[0.8625rem] text-[#6C7275]">STATE</h3>
                            <input placeholder="State" value="" className="font-aeonik border border-[#6C7275] rounded-md px-4 h-10 w-full" />
                        </div>
                        <div className="flex flex-col gap-y-3 flex-grow">
                            <h3 className="font-aeonik font-bold text-xs leading-[0.8625rem] text-[#6C7275]">ZIP CODE</h3>
                            <input placeholder="Zip Code" value="" className="font-aeonik border border-[#6C7275] rounded-md px-4 h-10 w-full" />
                        </div>
                    </div>
                    <div className="flex gap-x-2 items-center hover:cursor-pointer w-fit" onClick={() => {setCheck(a => !a)}}>
                        <div className="w-4 h-4 rounded border-[1.5px] border-[#6C7275] text-xs leading-3">{check ? "✔" : null}</div>
                        <p className="font-aeonik text-[#6C7275] text-xs leading-[0.8625rem]">Use a different billing address (optional)</p>
                    </div>
                </div>
            </section>

            <section className="border border-[#6C7275] flex flex-col gap-y-6 py-6 px-4 rounded lg:max-w-[40.1875rem] lg:rounded-lg lg:h-fit">
                <h2 className="font-aeonik font-bold leading-[1.15rem] text-[#141718]">Payment method</h2>
                <div className="flex flex-col gap-y-6">
                    <div className={"rounded-lg border border-[#141718] py-[0.8125rem] px-4 flex justify-between hover:cursor-pointer" + (payWith === "card" ? " bg-[#F3F5F7]" : "")} onClick={() => {setPayWith("card")}}>
                        <div className="flex gap-x-3">
                            <div className="border border-[#141718] rounded-full w-[1.125rem] h-[1.125rem] flex items-center justify-center">
                                <div className={"rounded-full w-[0.625rem] h-[0.625rem]" + (payWith === "card" ? " bg-[#141718]" : "")}></div>
                            </div>
                            <p className="font-aeonik font-medium text-sm leading-4 text-[#141718] lg:text-base lg:leading-[1.625rem]">Pay by Card Credit</p>
                        </div>
                    </div>
                    <div className={"rounded-lg border border-[#141718] py-[0.8125rem] px-4 flex justify-between hover:cursor-pointer" + (payWith === "paypal" ? " bg-[#F3F5F7]" : "")} onClick={() => {setPayWith("paypal")}}>
                        <div className="flex gap-x-3">
                            <div className="border border-[#141718] rounded-full w-[1.125rem] h-[1.125rem] flex items-center justify-center">
                                <div className={"rounded-full w-[0.625rem] h-[0.625rem]" + (payWith === "paypal" ? " bg-[#141718]" : "")}></div>
                            </div>
                            <p className="font-aeonik font-medium text-sm leading-4 text-[#141718] lg:text-base lg:leading-[1.625rem]">Paypal</p>
                        </div>
                    </div>

                    <div className="w-full h-[1px] bg-[#6C7275] my-4"></div>

                    <div className="flex flex-col gap-y-3">
                        <h3 className="font-aeonik font-bold text-xs leading-[0.8625rem] text-[#6C7275]">CARD NUMBER</h3>
                        <input placeholder="1234 1234 1234" value="" className="font-aeonik border border-[#6C7275] rounded-md px-4 h-10 w-full" />
                    </div>
                    <div className="flex justify-between gap-x-12">
                        <div className="flex flex-col gap-y-3 flex-grow">
                            <h3 className="font-aeonik font-bold text-xs leading-[0.8625rem] text-[#6C7275]">EXPIRATION DATE</h3>
                            <input placeholder="MM/YY" value="" className="font-aeonik border border-[#6C7275] rounded-md px-4 h-10 w-full" />
                        </div>
                        <div className="flex flex-col gap-y-3 flex-grow">
                            <h3 className="font-aeonik font-bold text-xs leading-[0.8625rem] text-[#6C7275]">CVC</h3>
                            <input placeholder="CVC code" value="" className="font-aeonik border border-[#6C7275] rounded-md px-4 h-10 w-full" />
                        </div>
                    </div>
                </div>
            </section>
            </div>

            <div className="bg-[#141718] py-4 px-10 rounded-lg w-full h-[3.125rem] font-aeonik text-center text-white font-medium tracking-[-0.4px] leading-[1.15rem] hidden lg:block lg:max-w-[40.1875rem] hover:cursor-pointer hover:bg-white hover:text-black border-2 hover:border-black duration-300">Place Order</div>

            <section className="border border-[#6C7275] flex flex-col gap-y-6 py-6 px-4 rounded lg:w-[25.8125rem] lg:rounded-lg lg:justify-self-end lg:row-span-4 lg:h-fit">
                <h2 className="font-aeonik font-bold leading-[1.15rem] text-[#141718]">Order Summary</h2>
                <div className="flex flex-col gap-y-6">
                    <div className="flex flex-col gap-y-6">
                        {cart?.map((item, id) => {
                            return (<CartProductCard img={item.img} shoe={item.shoe} price={item.price} color={item.color} setSubTotalAdd={setTotalAdd} />)
                        })}
                    </div>
                    <div className="flex gap-x-2">
                        <input placeholder="Input" value="" className="font-aeonik border border-[#6C7275] rounded-md px-4 h-[2.625rem] w-full" />
                        <div className="bg-[#141718] py-3 px-[1.625rem] rounded-lg text-white font-aeonik font-medium leading-[1.15rem] tracking-[-0.4px] hover:cursor-pointer hover:bg-white hover:text-black border-2 hover:border-black duration-300">Apply</div>
                    </div>
                    <div>
                        <div className="flex justify-between items-center py-[0.8125rem] border-b border-[#E8ECEF]">
                            <p className="font-aeonik text-[#141718] leading-[1.15rem]">Shipping</p>
                            <p className="font-aeonik font-bold text-[#141718] leading-[1.15rem]">{shipping === "express" ? "₦ 2,340" : "Free"}</p>
                        </div>
                        <div className="flex justify-between items-center py-[0.8125rem] border-b border-[#E8ECEF]">
                            <p className="font-aeonik text-[#141718] leading-[1.15rem]">Subtotal</p>
                            <p className="font-aeonik font-bold text-[#141718] leading-[1.15rem]">{"₦ " + subtotal?.toLocaleString('en-US', {useGrouping: true})}</p>
                        </div>
                        <div className="flex justify-between items-center py-[0.8125rem]">
                            <p className="font-aeonik font-medium text-xl leading-[1.4375rem] text-[#141718]">Total</p>
                            <p className="font-aeonik font-medium text-xl leading-[1.4375rem] text-[#141718]">{shipping === "express" ? "₦ " + (subtotal + 2340)?.toLocaleString('en-US', {useGrouping: true}) : "₦ " + subtotal?.toLocaleString('en-US', {useGrouping: true})}</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="bg-[#141718] py-4 px-10 rounded-lg w-full h-[3.125rem] font-aeonik text-center text-white font-medium tracking-[-0.4px] leading-[1.15rem] lg:hidden hover:cursor-pointer hover:bg-white hover:text-black border-2 hover:border-black duration-300">Place Order</div>
        </main>
        </div>
    )
}