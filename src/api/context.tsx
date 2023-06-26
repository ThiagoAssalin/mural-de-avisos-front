"use client"
import React, { createContext, useState, ReactNode } from "react"; 


type UserContextProps = {
    children: ReactNode
}
type UserContextType = {
    renderOn: boolean
    setRenderOn: (newState: boolean) => void
}
const initialValue = {
    renderOn: false,
    setRenderOn:()=>{}
}

export const UserContext = createContext<UserContextType>(initialValue)

export const UserContextProvider = ({children}: UserContextProps)=>{
    const [renderOn, setRenderOn] = useState(initialValue.renderOn)

    return(
        <UserContext.Provider value={{renderOn, setRenderOn}}>{children}</UserContext.Provider>
    )
}