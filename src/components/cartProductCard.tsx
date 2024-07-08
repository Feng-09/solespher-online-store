"use client" 

import Image from "next/image"
import { useContext, useState, useEffect } from "react"
import { cartContext } from "@/components/cartContext";
import { usePathname } from "next/navigation";


type CartProductCardProps = {
    img: string,
    shoe: string,
    price: string,
    color: string,
    setSubTotalAdd: React.Dispatch<React.SetStateAction<number>>
}

export default function CartProductCard(props: CartProductCardProps) {
    const { cart, setCart } = useContext(cartContext)
    const [ qty, setQty ] = useState(1)

    const pathname = usePathname()

    useEffect(() => {
        const cartArray = localStorage.getItem('cartArray')
        if (cartArray)
        setCart(JSON.parse(cartArray))
    }, [])

    const price = Number(props.price.split(" ").at(1)?.split(",").join(""))
    const subTotal = qty * price
    
    useEffect(() => {
        props.setSubTotalAdd(a => a + (subTotal / 2))
    }, [])

    const handleMinus = () => {
        if (qty > 0) {
            setQty(a => a - 1)
        }
        props.setSubTotalAdd(a => a - price)
    }

    const handlePlus = () => {
        setQty(a => a + 1)
        props.setSubTotalAdd(a => a + price)
    }

    const handleRemove = () => {
        const newCart = cart.filter((item) => {
            return item.shoe != props.shoe
        })
        setCart(newCart)
        localStorage.setItem('cartArray', JSON.stringify(newCart))
        // props.setSubTotalAdd(a => a - (qty * price))
    }

    return (
        <div className={"py-6 flex gap-x-4 w-full border-b border-[#E8ECEF]" + (pathname === '/cart' ? " lg:grid lg:grid-cols-5" : "")}>
            <Image src={props.img} alt="product display" width={84} height={96} className={"" + (pathname === '/cart' ? " lg:col-span-1" : "")} />
            <div className={"flex justify-between flex-grow" + (pathname === '/cart' ? " lg:col-span-4 lg:grid lg:grid-cols-4 lg:items-center" : "")}>
                <div className={"flex flex-col gap-y-2" + (pathname === '/cart' ? " lg:-ml-10" : "")}>
                    <h2 className="font-aeonik font-bold text-sm leading-4 text-[#141718]">{props.shoe}</h2>
                    <p className="font-aeonik text-[#6C7275] text-xs leading-[0.8625rem]">Color: {props.color}</p>
                    <div className={"border border-[#6C7275] py-2 px-3 w-fit h-fit rounded flex gap-x-[0.625rem]" + (pathname === '/cart' ? " lg:hidden" : "")}>
                        <Image src="/images/Minus.svg" alt="remove" width={16} height={16} className="hover:cursor-pointer" onClick={handleMinus} />
                        <p className="font-aeonik text-[#121212] text-xs leading-[0.8625rem] font-bold">{qty}</p>
                        <Image src="/images/Add.svg" alt="add" width={16} height={16} className="hover:cursor-pointer" onClick={handlePlus} />
                    </div>
                    <div className={"hidden gap-x-1 items-center hover:cursor-pointer" + (pathname === '/cart' ? " lg:flex" : "")} onClick={handleRemove}>
                        <Image src="/images/Line.svg" alt="delete" width={24} height={24} />
                        <p className="font-aeonik font-bold text-sm leading-4 text-[#6C7275]">Remove</p>
                    </div>
                </div>
                <div className={"flex flex-col gap-y-2 items-end" + (pathname === '/cart' ? " lg:hidden" : "")}>
                    <h2 className="font-aeonik font-bold text-sm leading-4 text-[#141718] text-right">{props.price}</h2>
                    <Image src="/images/Line.svg" alt="delete" width={24} height={24} className="hover:cursor-pointer" onClick={handleRemove} />
                </div>

                <div className={"border border-[#6C7275] py-2 px-3 justify-self-end rounded gap-x-[0.625rem] hidden w-fit h-fit" + (pathname === '/cart' ? " lg:flex" : "")}>
                    <Image src="/images/Minus.svg" alt="remove" width={16} height={16} className="hover:cursor-pointer" onClick={handleMinus} />
                    <p className="font-aeonik text-[#121212] text-xs leading-[0.8625rem] font-bold">{qty}</p>
                    <Image src="/images/Add.svg" alt="add" width={16} height={16} className="hover:cursor-pointer" onClick={handlePlus} />
                </div>

                <h2 className={"font-aeonik font-bold text-sm leading-4 text-[#141718] text-right hidden" + (pathname === '/cart' ? " lg:block" : "")}>{props.price}</h2>

                <h2 className={"font-aeonik font-bold text-[1.125rem] leading-5 text-[#141718] text-right hidden" + (pathname === '/cart' ? " lg:block" : "")}>{"₦ " + subTotal.toLocaleString('en-US', {useGrouping: true})}</h2>
            </div>
        </div>
    )
}