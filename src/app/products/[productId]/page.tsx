"use client"

import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../../../pages/api/actions";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { cartContext } from "@/components/cartContext";
import Brand from "@/components/brand";

export default function ProductId({ params }: {
    params: { productId: number }
}) {
    const [display, setDisplay] = useState(0)
    const { data, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => await getProducts()
    })
    
    let products: {
        name: string,
        photos: { url: string }[],
        current_price: { NGN: number[] }[],
        description: string,
        id: string
    }[] = []
    if (data) {
      console.log(data)
      products = data.items
    }

    const { cart, setCart } = useContext(cartContext)

    const addToCart = () => {
        setCart((prevCart) => [...prevCart, {
            img: `https://api.timbu.cloud/images/${products[params.productId]?.photos[0]?.url}?organization_id=c7ab58dd60ac44b58fdaaba775b4e3f7&reverse_sort=false&Appid=XQQYQ1CDHQ0RBBZ&Apikey=6f96b3ce51794908bdb767033000c31d20240712161809995865`,
            shoe: products[params.productId]?.name,
            price: `₦ ${products[params.productId]?.current_price[0]?.NGN[0].toLocaleString('en-US', {useGrouping: true})}`,
            color: '',
            qty: 1
        }])
    }

    useEffect(() => {
        if (typeof window != "undefined") {
            window.localStorage.setItem('cartArray', JSON.stringify(cart))
        }
    }, [cart])

    const viewPage = (image: number) => {
        if (image == 1) {
            setDisplay(0)
        } else if (image == 2) {
            setDisplay(1)
        }
      }

    return (
        <div className="flex flex-col gap-y-20 items-center p-6">
            <main className="w-full flex flex-col gap-y-8 h-fit lg:flex-row lg:justify-between pb-20 lg:px-12">
            <div className="flex flex-col items-start w-full h-fit">
                {data ? (
                    <Image src={`https://api.timbu.cloud/images/${products[params.productId]?.photos[display]?.url}?organization_id=c7ab58dd60ac44b58fdaaba775b4e3f7&reverse_sort=false&Appid=XQQYQ1CDHQ0RBBZ&Apikey=6f96b3ce51794908bdb767033000c31d20240712161809995865`}
                    alt="product display"
                    width={465.53}
                    height={532}
                    className="rounded-lg" />
                ): (
                    <div className="font-aeonik font-black text-[#141718] text-3xl w-28 h-36 bg-[#74748B] flex items-center justify-center">...</div>
                )}


                <div className="flex gap-x-4 border border-[#6C7275] p-2 rounded-lg mt-8 w-fit">
                    <div className={"p-2 text-white w-10 h-10 flex items-center justify-center rounded-lg bg-[#141718] hover:cursor-pointer" + (display == 1 ? "" : " opacity-40")} onClick={() => {setDisplay(1); viewPage(1)}}>
                    <Image src={`https://api.timbu.cloud/images/${products[params.productId]?.photos[0]?.url}?organization_id=c7ab58dd60ac44b58fdaaba775b4e3f7&reverse_sort=false&Appid=XQQYQ1CDHQ0RBBZ&Apikey=6f96b3ce51794908bdb767033000c31d20240712161809995865`}
                        alt="product display"
                        width={40}
                        height={40}
                        className="rounded-lg" />
                    </div>
                    <div className={"p-2 text-white w-10 h-10 flex items-center justify-center rounded-lg bg-[#141718] hover:cursor-pointer" + (display == 2 ? "" : " opacity-40")} onClick={() => {setDisplay(2); viewPage(2)}}>
                    <Image src={`https://api.timbu.cloud/images/${products[params.productId]?.photos[1]?.url}?organization_id=c7ab58dd60ac44b58fdaaba775b4e3f7&reverse_sort=false&Appid=XQQYQ1CDHQ0RBBZ&Apikey=6f96b3ce51794908bdb767033000c31d20240712161809995865`}
                        alt="product display"
                        width={40}
                        height={40}
                        className="rounded-lg" />
                    </div>
                </div>
            </div>

                <div className="lg:h-[24rem] h-80 flex flex-col justify-between lg:w-1/3">
                    <div className="flex flex-col gap-y-4">
                    <Brand productId={products[params.productId]?.id} />
                    <h1 className="font-aeonik font-bold text-[#141718] leading-[2.875rem] text-3xl lg:text-[2.5rem] tracking-tight">{products[params.productId]?.name}</h1>
                    </div>
                    <h1 className="font-aeonik font-bold text-[#141718] leading-[2.875rem] text-3xl lg:text-[2.5rem]">{`₦ ${products[params.productId]?.current_price[0]?.NGN[0].toLocaleString('en-US', {useGrouping: true})}`}</h1>
                    <div>
                        <div className="bg-[#141718] max-w-[29rem] flex justify-center gap-x-2 py-4 px-10 rounded-xl text-white hover:cursor-pointer border-2 duration-300" onClick={addToCart}>
                            <Image src="/images/shopping-cart.svg" alt="cart" width={24} height={24} />
                            <p className="font-aeonik font-bold leading-[1.15rem] tracking-wide">Add To Cart</p>
                        </div>
                    </div>
                </div>
            </main>
        

        <section className="w-full lg:w-3/5 flex flex-col items-center gap-y-8 border-2 border-[#74748B] mb-20 rounded-2xl py-8">
            <div className="bg-[#F8F8F8] p-1 rounded-3xl w-fit">
              <div className="bg-white text-[#333333] font-medium leading-6 font-aeonik rounded-3xl py-2 px-4">Product Details</div>
            </div>

            <div className="flex flex-col gap-y-4 w-full px-4 lg:w-[36rem]">
                <div className="flex gap-x-2">
                    <Image src="/images/note-2.svg" width={24} height={24} alt="description" />
                    <p className="font-aeonik font-medium text-[#141718] text-sm">Description</p>
                </div>
                <p className="font-aeonik text-sm text-[#74748B]">{products[params.productId]?.description}</p>
            </div>
        </section>
        </div>
    )
}