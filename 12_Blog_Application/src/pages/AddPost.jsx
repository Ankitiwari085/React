import React, { useEffect } from 'react'
import { Container , PostForm} from '../components'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function AddPost() {
    const authStatus = useSelector(state => state.auth.status)
    const navigate = useNavigate()
    
    useEffect(() => {
        if (!authStatus) {
            console.warn('User not authenticated, redirecting to login');
            navigate('/login')
        }
    }, [authStatus, navigate])
    
    if (!authStatus) {
        return null // Don't render anything while redirecting
    }
    
    return (
        <div className='py-8'>
            <Container>
                <PostForm/>
            </Container>
        </div>        
    )
}

export default AddPost
