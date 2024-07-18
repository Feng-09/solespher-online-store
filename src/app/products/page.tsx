"use client"

import ProductCard from "@/components/productCard"
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../../pages/api/actions";
import { useContext, useEffect } from "react";
import { searchContext } from "@/components/searchContext";

export default function Products() {
    const { searchInp, setSearchInp } = useContext(searchContext)
    const { data, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => await getProducts()
    })

    const loaderArr = [1,2,3,4,5,6,7,8,9,10,11,12]
    
    let products: [] = []
    if (data) {
      products = data.items
    }

    useEffect(() => {
        if (data && searchInp !== '') {
            const filtProducts = products.filter((item: { name: string }) => {
                return item.name.includes(searchInp)
            })
        }
    }, [searchInp])



    return (
        <section className="w-full px-[3.75rem] py-10 lg:max-xl:px-10 max-sm:p-6">
            <h2 className="font-aeonik font-bold text-2xl leading-[1.725rem] mb-8">Products</h2>
            <div className="grid justify-items-center grid-cols-4 gap-y-12 md:max-xl:grid-cols-3 max-md:grid-cols-2">
                {data ? products?.map((product: {
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
                      index={id}
                      productId={product.id}
                      key={id} />)
          }) : loaderArr.map((item, id) => {
            return (<div key={id} className="relative max-lg:w-40 max-[400px]:w-36 max-lg:h-52 max-[400px]:h-48 lg:w-60 lg:h-80 bg-slate-300 rounded-2xl flex items-center justify-center">
                      <div className="loaderCirc"></div>
                      <div className="loaderCirc2"></div>
                    </div>)})}
            </div>
        </section>
    )
}

//`https://api.timbu.cloud/extrainfo/products/${product.id}?organization_id=c7ab58dd60ac44b58fdaaba775b4e3f7&reverse_sort=false&Appid=XQQYQ1CDHQ0RBBZ&Apikey=6f96b3ce51794908bdb767033000c31d20240712161809995865`