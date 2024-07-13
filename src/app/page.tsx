"use client"

import Image from "next/image";
import dunks1 from '../../public/images/Dunks1.png'
import ExploreButton from "@/components/exploreButton";
import ExclusiveCard from "@/components/exclusiveCard";
import ProductCard from "@/components/productCard";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../pages/api/actions";
import Products from "./products/page";
import { useContext, useEffect, useState } from "react";
import { searchContext } from "@/components/searchContext";

export default function Home() {
  const { searchInp, setSearchInp } = useContext(searchContext)
  const [display, setDisplay] = useState(1)
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(12)
  const { data, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: async () => await getProducts()
  })

  let products: [] = []
  if (data) {
    console.log(data)
    products = data.items
  }

  useEffect(() => {
    if (data && searchInp !== '') {
      products.filter((item: { name: string }) => {
        return item.name.includes(searchInp)
      })
    }
  }, [searchInp])

  const viewPage = (page: number) => {
    if (page == 1) {
      setStart(0)
      setEnd(12)
    } else if (page == 2) {
      setStart(12)
      setEnd(24)
    } else if (page == 3) {
      setStart(24)
      setEnd(30)
    }
  }


  // const extrainfo = async (product: any) => {
  //   const response = await fetch(`https://api.timbu.cloud/extrainfo/products/${product.id}?organization_id=c7ab58dd60ac44b58fdaaba775b4e3f7&reverse_sort=false&Appid=XQQYQ1CDHQ0RBBZ&Apikey=6f96b3ce51794908bdb767033000c31d20240712161809995865`)
  //   const info = response.json()
  //   return info;
  // }

  return (
    <>
    <main className="w-full pt-6 lg:pt-12">
      <section className="w-full h-fit flex bg-hero-pattern bg-center px-16 lg:max-xl:px-4 max-lg:flex-col max-lg:px-4 max-lg:items-center max-lg:pt-8">
        <div className="w-1/2 pl-10 pr-[7.8rem] py-32 flex flex-col gap-y-10 lg:max-xl:px-12 max-lg:p-4 max-lg:w-full max-lg:text-center max-lg:items-center max-lg:max-w-[25rem]">
          <h1 className="text-[2.5rem] font-aeonik font-bold leading-[2.875rem] text-white max-lg:text-2xl">Step Up Your Sneaker Game</h1>
          <p className="text-white font-aeonik text-2xl font-medium leading-[1.725rem] max-lg:text-base">Discover the latest and greatest in sneaker fashion. From exclusive releases to unbeatable deals, find your perfect pair today!</p>
          <ExploreButton />
        </div>
        <Image src={dunks1} alt="dunks1" className="w-1/2 max-lg:w-full max-lg:max-w-[30rem]" />
      </section>
    </main>

      <section className="w-full px-[3.75rem] py-10 lg:max-xl:px-10 max-sm:px-6">
        <h2 className="font-aeonik font-bold text-[2rem] leading-[2.3rem] mb-8 max-sm:w-80 ">Exclusive Deals Just For You</h2>
        <div className="flex w-full justify-between max-lg:flex-col items-center gap-y-8">
          <div className="bg-[#F3EEE8] rounded-3xl">
            <ExclusiveCard
            img="/LimitedImg.png"
            heading="Limited-Time Offers"
            text="Grab hot deals before they're gone! Exclusive discounts on top brands for a limited time."
            width={340}
            height={197} />
          </div>
          <div className="bg-[#EFEFEF] rounded-3xl">
            <ExclusiveCard
            img="/images/surpriseImg.png"
            heading="Get Surprise Item"
            text="Discover exclusive, surprises curated just for you. Don't miss out on these rare finds!"
            width={320}
            height={320} />
          </div>
          <div className="bg-[#F8F6F0] rounded-3xl">
            <ExclusiveCard
            img="/images/membersImg.png"
            heading="Members-Only Access"
            text="Unlock special perks and early access to new releases and stay ahead in the sneaker game."
            width={313.03}
            height={232} />
          </div>
        </div>
      </section>

      <div className="w-full px-[3.75rem] h-fit">
        <div className="h-[1px] w-full bg-[#CECECE]"></div>
      </div>

      <section className="w-full px-[3.75rem] py-10 lg:max-xl:px-10 max-sm:p-6">
        <h2 className="font-aeonik font-bold text-2xl leading-[1.725rem] mb-8">Latest Products</h2>
        <div className="grid justify-items-center grid-cols-4 gap-y-12 md:max-xl:grid-cols-3 max-md:grid-cols-2">
        {products?.slice(start, end).map((product: {
                    name: string,
                    discount: string,
                    sale: string,
                    color: string,
                    id: string,
                    photos: { url: string }[],
                    current_price: { NGN: number[] }[]
                }, id) => {
          return (<ProductCard
            img={`https://api.timbu.cloud/images/${product.photos[0]?.url}?organization_id=c7ab58dd60ac44b58fdaaba775b4e3f7&reverse_sort=false&Appid=XQQYQ1CDHQ0RBBZ&Apikey=6f96b3ce51794908bdb767033000c31d20240712161809995865`}
            price={`₦ ${product.current_price[0].NGN[0].toLocaleString('en-US', {useGrouping: true})}`}
            brand={''}
            shoe={product.name}
            discount={product.discount}
            sale={product.sale}
            color={product.color}
            index={id + 4}
            key={id} />)
        })}
        </div>
        <div className="flex gap-x-4 border border-[#6C7275] p-2 rounded-lg mt-8 w-fit">
          <div className={"p-2 text-white w-10 h-10 flex items-center justify-center rounded-lg bg-[#141718] hover:cursor-pointer" + (display == 1 ? "" : " opacity-40")} onClick={() => {setDisplay(1); viewPage(1)}}>1</div>
          <div className={"p-2 text-white w-10 h-10 flex items-center justify-center rounded-lg bg-[#141718] hover:cursor-pointer" + (display == 2 ? "" : " opacity-40")} onClick={() => {setDisplay(2); viewPage(2)}}>2</div>
          <div className={"p-2 text-white w-10 h-10 flex items-center justify-center rounded-lg bg-[#141718] hover:cursor-pointer" + (display == 3 ? "" : " opacity-40")} onClick={() => {setDisplay(3); viewPage(3)}}>3</div>
        </div>
      </section>

      <div className="w-full px-[3.75rem] h-fit mb-20">
        <div className="h-[1px] w-full bg-[#CECECE]"></div>
      </div>
    </>
  );
}

//`https://api.timbu.cloud/extrainfo/products/${product.id}?organization_id=c7ab58dd60ac44b58fdaaba775b4e3f7&reverse_sort=false&Appid=XQQYQ1CDHQ0RBBZ&Apikey=6f96b3ce51794908bdb767033000c31d20240712161809995865`