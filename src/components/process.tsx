"use client"

import { useRouter } from "next/navigation"

type ProcessProps = {
    page: string
}

export default function Process(props: ProcessProps) {
    const router = useRouter()

    return (
        <div className="flex gap-x-8 overflow-x-scroll no-scrollbar w-full max-w-fit lg:w-fit justify-start">
            <div className={"flex items-start pb-[1.625rem] w-fit pr-2 lg:pr-20 hover:cursor-pointer" + (props.page === "cart" ? " border-b-[2px] border-black" : "")} onClick={() => {router.push('/cart')}}>
                <div className="flex items-center gap-x-6">
                    <div className={"rounded-[2.5rem] py-2 px-4 text-center font-aeonik font-bold leading-[1.15rem] text-white" + (props.page === "cart" ? " bg-[#23262F]" : " bg-[#38CB89]")}>{props.page === "cart" ? "1" : "✔"}</div>
                    <h2 className={"font-aeonik font-bold leading-[1.15rem] text-nowrap" + (props.page === "cart" ? " text-[#23262F]" : " text-[#38CB89]")}>Shopping cart</h2>
                </div>
            </div>
            <div className={"flex items-start pb-[1.625rem] w-fit pr-2 lg:pr-20 hover:cursor-pointer" + (props.page === "checkout" ? " border-b-[2px] border-black" : "")} onClick={() => {router.push('/check-out')}}>
                <div className="flex items-center gap-x-6">
                    <div className={"rounded-[2.5rem] py-2 px-4 text-center font-aeonik font-bold leading-[1.15rem] text-white" + (props.page === "checkout" ? " bg-[#23262F]" : props.page === "order-complete" ? " bg-[#38CB89]" : " bg-[#B1B5C3]")}>{props.page === "order-complete" ? "✔" : "2"}</div>
                    <h2 className={"font-aeonik font-bold leading-[1.15rem] text-nowrap" + (props.page === "checkout" ? " text-[#23262F]" : props.page === "order-complete" ? " text-[#38CB89]" : " text-[#B1B5C3]")}>Checkout details</h2>
                </div>
            </div>
            <div className={"flex items-start pb-[1.625rem] w-fit pr-2 lg:pr-20 hover:cursor-pointer" + (props.page === "order-complete" ? " border-b-[2px] border-black" : "")}> 
                <div className="flex items-center gap-x-6">
                    <div className={"rounded-[2.5rem] py-2 px-4 text-center font-aeonik font-bold leading-[1.15rem] text-white" + (props.page === "order-complete" ? " bg-[#38CB89]" : " bg-[#B1B5C3]")}>{props.page === "order-complete" ? "✔" : "3"}</div>
                    <h2 className={"font-aeonik font-bold leading-[1.15rem] text-nowrap" + (props.page === "order-complete" ? " text-[#38CB89]" : " text-[#B1B5C3]")}>Order complete</h2>
                </div>
            </div>
        </div>
    )
}