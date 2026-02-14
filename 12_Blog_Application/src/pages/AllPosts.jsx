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
        <div className='w-full py-12'>
            <Container>
                <h2 className='text-3xl font-bold text-gray-800 mb-8'>All Posts</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {posts.map((post)=>(
                    <div key={post.$id}>
                        <PostCard {...post}/>
                    </div>
               ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts
