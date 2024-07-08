"use client"

import Image from "next/image"
import ExploreButton from "./exploreButton"

type CardProps = {
    img: string,
    heading: string,
    text: string,
    width: number,
    height: number
}

export default function ExclusiveCard(props: CardProps) {
    return (
        <div className="rounded-3xl py-10 px-4 flex flex-col gap-y-6 text-center items-center w-[24rem] max-w-[26.5rem] lg:max-xl:w-[19rem] sm:max-lg:w-[24rem] max-sm:w-72">
            <Image src={props.img} alt="item display" width={340} height={197} className="" />
            <div className="flex flex-col items-center">
                <h3 className="font-aeonik font-bold text-2xl leading-[1.725rem] mb-2">Limited-Time Offers</h3>
                <p className="font-aeonik leading-[1.15rem] text-[#707070] mb-4">Grab hot deals before they're gone! Exclusive discounts on top brands for a limited time.</p>
                <ExploreButton />
            </div>
        </div>
    )
}