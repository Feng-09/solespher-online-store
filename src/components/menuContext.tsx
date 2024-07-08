"use client"

import { useState, createContext } from "react"

type menuContextType = {
    menu?: boolean,
    setMenu?: React.Dispatch<React.SetStateAction<boolean>>
}

type menuContextProviderProps = {
    children: React.ReactNode
}

export const menuContext = createContext<menuContextType>({})

export const MenuContextProvider = ({children}: menuContextProviderProps) => {
    const [menu, setMenu] = useState(false)
    return <menuContext.Provider value={{menu, setMenu}}>{children}</menuContext.Provider>
}