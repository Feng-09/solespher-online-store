"use client"

import Process from "@/components/process"
import { useRouter } from "next/navigation"

export default function Complete() {
    const router = useRouter()
    return (
        <main className=" flex flex-col items-center">
            <header className="px-8 pt-16 pb-10 flex flex-col gap-y-6 items-center w-full">
                <h1 className="text-black font-medium font-aeonik text-[2.5rem] leading-[2.75rem] tracking-[-0.4px] lg:text-[3.375rem] lg:leading-[3.6875rem]">Order Complete</h1>
                <Process page="order-complete" />
            </header>
            
            <div className="border-2 border-[#23262F] lg:w-80 lg:h-80 rounded-3xl p-8 flex flex-col justify-around mb-20">
                <div className="w-10 h-10 bg-[#38CB89] flex items-center justify-center text-white text-2xl rounded-full">✔</div>
                <div className="font-aeonik font-medium text-lg text-[#141718]">Order Successful</div>
                <div className="border-[#141718] border-2 px-4 w-fit py-2 text-[#141718] text-lg rounded-2xl hover:cursor-pointer" onClick={() => router.push('/')}><span className="font-bold">&larr;</span> Return to Home</div>
            </div>
        </main>
    )
}