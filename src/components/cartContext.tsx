"use client"

import { useState, createContext } from "react";

type cartContextType = {
    cart: {
        img: string,
        shoe: string,
        price: string,
        color: string
    }[],
    setCart: React.Dispatch<React.SetStateAction<{
        img: string,
        shoe: string,
        price: string,
        color: string
    }[]>>
}

type cartContextProviderProps = {
    children: React.ReactNode
}

export const cartContext = createContext<cartContextType>({ cart: [], setCart: () => {} })

export const CartContextProvider = ({children}: cartContextProviderProps) => {
    const [cart, setCart] = useState<{
        img: string,
        shoe: string,
        price: string,
        color: string
    }[]>([])
    return <cartContext.Provider value={{ cart, setCart }}>{children}</cartContext.Provider>
}