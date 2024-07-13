"use client"

import { useState, createContext } from "react";

type searchContextType = {
    searchInp: string,
    setSearchInp: React.Dispatch<React.SetStateAction<string>>
}

type searchContextProviderProps = {
    children: React.ReactNode
}

export const searchContext = createContext<searchContextType>({ searchInp: '', setSearchInp: () => {} })

export const SearchContextProvider = ({children}: searchContextProviderProps) => {
    const [searchInp, setSearchInp] = useState<string>('')
    return <searchContext.Provider value={{ searchInp, setSearchInp }}>{children}</searchContext.Provider>
}