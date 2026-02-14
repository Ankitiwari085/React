import React, { useEffect, useState } from 'react'
import { Container ,PostForm }  from '../components'
import appwriteService from "../appwrite/configuration"
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'


function EditPost() {

    const [post ,setPosts] =useState(null)
    const {slug}=useParams()
    const navigate =useNavigate()
    const authStatus = useSelector(state => state.auth.status)
    const userData = useSelector(state => state.auth.userData)

    useEffect(() => {
        if (!authStatus) {
            console.warn('User not authenticated, redirecting to login');
            navigate('/login')
        }
    }, [authStatus, navigate])

    useEffect(()=>{
        if (slug) {
            appwriteService.getPost(slug).then((post)=>{
                if (post) {
                    // Check if current user is the author
                    if (userData && post.userId !== userData.$id) {
                        console.warn('User is not the author of this post');
                        navigate('/')
                        return;
                    }
                    setPosts(post)
                }
            })  
        }
        else{
          navigate('/')       
        }
    },[slug,navigate,userData])
    
    if (!authStatus) {
        return null // Don't render anything while redirecting
    }
    
    return post?( 
        <div className='py-8'>
            <Container>
                <PostForm post={post}/>
            </Container>
        </div>
    ): null
}

export default EditPost
