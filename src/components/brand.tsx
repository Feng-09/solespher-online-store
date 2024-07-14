"use client"

import { useQuery } from "@tanstack/react-query";
import { getInfo } from "../../pages/api/getInfo";

export default function Brand({productId}: { productId: string}) {
    const { data, isLoading } = useQuery({
        queryKey: ['productInfo'],
        queryFn: async () => await getInfo(productId)
    })

    let info: {
        value: string
    }[] = []
    if (data) {
        info = data
    }

    return (
        <p className="font-aeonik font-medium text-[#74748B] text-xl leading-[1.15rem]">{info[1]?.value}</p>
    )
}