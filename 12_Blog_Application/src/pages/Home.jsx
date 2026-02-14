import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/configuration"
import { Container ,PostCard } from '../components'
import { useSelector } from 'react-redux'


function Home() {

    const [posts ,setPosts] =useState([])
    const userData = useSelector((state) => state.auth.userData)
    const isLoggedIn = !!userData

    useEffect(()=>{
        // Only fetch posts if user is logged in
        if (isLoggedIn) {
            appwriteService.getPosts()
                            .then((postsData)=>{
                                if (postsData && postsData.documents) {
                                    console.log('Retrieved posts:', postsData.documents);
                                    postsData.documents.forEach(post => {
                                        console.log('Post:', post.title, 'FeaturedImage ID:', post.featuredImage);
                                    });
                                    setPosts(postsData.documents)
                                }
                            })
                            .catch((error) => {
                                console.error('Error fetching posts:', error);
                                setPosts([]);
                            })
        } else {
            // Clear posts if user logs out
            setPosts([]);
        }
    }, [isLoggedIn])
 


   if(posts.length===0){
    return (
        <div className='w-full py-16'>
            <Container>
                <div className='flex flex-col items-center justify-center min-h-96 text-center'>
                    <div className='mb-4 text-6xl'>📝</div>
                    <h1 className='text-4xl font-bold text-gray-800 mb-4'>
                        No Posts Yet
                    </h1>
                    <p className='text-xl text-gray-600 mb-6'>
                        Login to your account to see and create posts
                    </p>
                </div>
            </Container>
        </div>
    )
   }

   return (
    <div className='w-full py-12'>
        <Container>
            <h2 className='text-3xl font-bold text-gray-800 mb-8'>Latest Posts</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {posts.map((post)=>(
                    <div key={post.$id}>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
        </Container>
    </div>
   )
}

export default Home
