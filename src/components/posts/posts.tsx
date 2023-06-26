"use client"

import api from "@/api/api";
import {Post} from "@/interface/postType";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "@/api/context";
 
 export default function Posts(){
    const {renderOn,setRenderOn} = useContext(UserContext)
    const [posts, setPosts] = useState<[Post]>()
    useEffect(()=>{
            async function loadPost() {
                const response = await api.get('/all')
                setPosts(JSON.parse(response.data))
            }
            setRenderOn(false)
            loadPost()
            
    },[renderOn])
    
    console.log(posts)

    async function handleDelete(id:string){
        let postsFilter:any = posts?.filter((filtered)=>{
            return(filtered.id !==id)
        })
        await api.delete(`/del/${id}`)
        setPosts(postsFilter)
    }

    return(
        <div id="card-post">
             {posts && <ul>
                {posts.map((post)=>{
                    return(
                        <div key={post.id} className=" bg-slate-600 w-1/4 rounded p-2 mb-1">
                            <h3 className=" mb-2">{post.title}</h3>
                            <p className="mb-2">{post.description}</p>
                            <button className=" border p-1" onClick={()=>{handleDelete(post.id)}}>Delete</button>
                        </div>
                    )
                })}
                </ul>}
                
        </div>
    )

 }