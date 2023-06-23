"use client"

import api from "@/api/api";
import Post from "@/interface/postType";
import { useEffect, useState } from "react";
 
 export default function Posts(){
    const [posts, setPosts] = useState<[Post]>()
    useEffect(()=>{
            async function loadPost() {
                const response = await api.get('/all')
                setPosts(JSON.parse(response.data))
            }
            loadPost()
    },[])
    return(
        <div id="card-post">
             {posts && <ul>
                {posts.map((post)=>{
                    return(
                        <div key={post.id} className=" bg-slate-600 w-1/4 rounded p-2">
                            <h3 className=" mb-2">{post.title}</h3>
                            <p>{post.description}</p>
                        </div>
                    )
                })}
                </ul>}
                
        </div>
    )

 }