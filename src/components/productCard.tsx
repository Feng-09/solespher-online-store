"use client"

import Image from "next/image";
import { useContext, useEffect } from "react";
import { cartContext } from "@/components/cartContext";

type CardProps = {
    img: string,
    price: string,
    brand: string,
    shoe: string,
    discount?: string,
    sale?: string
    color: string
}

export default function ProductCard(props: CardProps) {
    const { cart, setCart } = useContext(cartContext)

    useEffect(() => {
        if (typeof window !== undefined) {
            localStorage.setItem('cartArray', JSON.stringify(cart))
        }
    }, [cart])

    const addToCart = () => {
            setCart((prevCart) => [...prevCart, {
                img: props.img,
                shoe: props.shoe,
                price: props.price,
                color: props.color
            }])
        }

    return (
        <div className="flex flex-col gap-4 relative rounded-lg w-fit max-lg:w-40 max-[400px]:w-36 group hover:cursor-pointer" onClick={addToCart}>
            <p className="hidden group-hover:inline-block font-aeonik font-medium leading-[1.15rem] text-[#141718] text-xl text-center absolute self-center top-32">Click to add to cart</p>
            <Image src={props.img} alt="product display" width={280} height={320} className="rounded-lg group-hover:opacity-40 duration-300" />
            {props.sale ?
            (<div className="bg-[#EA4336] rounded-lg py-2 px-3 absolute top-[10px] left-[10px] text-white font-aeonik font-medium text-sm leading-4">{props.sale}</div>)
            : null}
            <div className="flex flex-col gap-4 relative">
                <h2 className="font-aeonik text-[#EA4336] font-bold text-[1.75rem] leading-[2.0125rem] max-lg:text-base">{props.price}</h2>
                <p className="font-aeonik font-medium text-[#74748B] leading-[1.15rem]">{props.brand}</p>
                <p className="font-aeonik font-medium text-[#141718] leading-[1.15rem] tracking-tight">{props.shoe}</p>
                {props.discount ?
                (<p className="font-aeonik font-medium text-sm leading-4 text-[#139C10] bg-[#C5FFCE] py-1 px-2 rounded absolute top-0 right-0 max-lg:px-1">{props.discount}</p>)
                : null}
            </div>
        </div>
    )
}