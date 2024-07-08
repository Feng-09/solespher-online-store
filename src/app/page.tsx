"use client"

import Image from "next/image";
import dunks1 from '../../public/images/Dunks1.png'
import ExploreButton from "@/components/exploreButton";
import ExclusiveCard from "@/components/exclusiveCard";
import ProductCard from "@/components/productCard";
import data from "../products.json";
import { useRouter } from "next/navigation";

export default function Home() {
  const products = data.products
  const router = useRouter()

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
        {products.map((product, id) => {
          return (<ProductCard
            img={product.img}
            price={product.price}
            brand={product.brand}
            shoe={product.shoe}
            discount={product.discount}
            sale={product.sale}
            color={product.color}
            key={id} />)
        })}
        </div>
      </section>

      <div className="w-full px-[3.75rem] h-fit mb-20">
        <div className="h-[1px] w-full bg-[#CECECE]"></div>
      </div>
    </>
  );
}
