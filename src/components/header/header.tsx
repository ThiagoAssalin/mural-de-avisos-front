"use client"

import { useContext, useState } from "react"
import api from "@/api/api";
import { UserContext } from "@/api/context";

export default function Header(){
    const {setRenderOn} = useContext(UserContext)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const takeTitle = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setTitle(e.target.value)
    }

    const takeDescription = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setDescription(e.target.value)
    }

    async function handlePost(title:string, description:string){
        await api.post("/new",{title , description})
        setRenderOn(true)
    }
    

    return(
        <header className="bg-gray-600 flex flex-col w-full h-20 justify-center p-3" >
            <h1 className=" text-white">Novo Post</h1>
            <div className=" flex gap-1">
                <input type="text" placeholder="Titulo" className="p-2 text-black" onChange={takeTitle}></input>
                <input type="text" placeholder="Descrição" className="p-2 text-black" onChange={takeDescription}></input>
                <button className="text-white" onClick={()=>{handlePost(title, description)}} >Salvar</button>
            </div>
        </header>
    )
}