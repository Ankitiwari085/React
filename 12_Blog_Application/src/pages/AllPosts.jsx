import React, { useEffect, useState } from 'react'
import { Container ,PostCard } from '../components'
import appwriteService from "../appwrite/configuration"
import { useSearchParams } from 'react-router-dom'

function AllPosts() {
    const [posts , setPosts] = useState([])
    useEffect(()=>{ appwriteService.getPosts([]).then((posts)=>{
        if (posts) {
            setPosts(posts.documents)
        }
    })},[])

    // appwriteService.getPosts([]).then((posts)=>{
    //     if (posts) {
    //         setPosts(posts.documents)
    //     }
    // })

    
    return (
        <div className='w-fulll py-8'>
            <Container>
               <div className='flex flex-wrap'>
               {posts.map((post)=>(
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard post={post}/>
                    </div>
               ))}
               </div>
            </Container>
        </div>
    )
}

export default AllPosts
