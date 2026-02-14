import React, { useState, useEffect } from 'react'
import {Link ,useNavigate ,useParams} from "react-router-dom"
import appwriteService from '../appwrite/configuration'
import {Button , Container } from '../components'
import parse from "html-react-parser"
import { useSelector } from 'react-redux'

export default function Post() {
    
    const [post, setPost] = useState(null)
    const [loading, setLoading] = useState(true)
    const {slug} = useParams()
    const navigate = useNavigate()

    const userData = useSelector((state) => state.auth.userData)

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if(slug) {
            setLoading(true)
            appwriteService.getPost(slug)
                            .then((post) => {
                                if(post) {
                                    setPost(post)
                                } else {
                                    navigate('/')
                                }
                            })
                            .catch((error) => {
                                console.error('Error fetching post:', error)
                                navigate('/')
                            })
                            .finally(() => setLoading(false))
        } else {
            navigate('/')
        }
    }, [slug, navigate])

    const deletePost =()=>{
        appwriteService.deletePost(post.$id)
                        .then((status)=>{
                            if(status){
                                appwriteService.deleteFile(post.featuredImage);
                                navigate('/')
                            }
                        })
    }

    return loading ? (
        <div className='py-8'>
            <Container>
                <div className='flex items-center justify-center min-h-96'>
                    <div className='text-center'>
                        <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4'></div>
                        <p className='text-gray-600 text-lg'>Loading post...</p>
                    </div>
                </div>
            </Container>
        </div>
    ) : post ? (
        <div className='py-8'>
            <Container>
                <div className='w-full flex justify-center mb-4 relative border rounded-xl p-2'>
                    <img
                        src={appwriteService.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className='rounded-xl w-full max-h-96 object-cover'
                        onError={(e) => {
                            console.warn('❌ Post preview image failed, trying download URL...');
                            const downloadUrl = appwriteService.getFileDownloadUrl(post.featuredImage);
                            if (downloadUrl && e.target.src !== downloadUrl) {
                                e.target.src = downloadUrl;
                            } else {
                                console.error('All URLs failed for file:', post.featuredImage);
                                e.target.src = 'https://via.placeholder.com/600x400?text=Image+Not+Found'
                            }
                        }}
                    />
                    {isAuthor && (
                        <div className='absolute right-6 top-6'>
                            <Link to={`/edit-post/${post.slug}`}>
                                <Button
                                    bgColor="bg-green-500"
                                    className="mr-3">
                                    Edit
                                </Button>
                            </Link>
                            <Button
                                    bgColor="bg-red-500"
                                    className="mr-3"
                                    onClick={deletePost}>
                                    Delete
                                </Button>
                        </div>
                    ) }
                </div>
                <div className='w-full mb-6'>
                <h1 className='text-2xl font-bold'>
                    {post.title}
                </h1>
                </div>
                <div className='browser-css'>
                    {parse(post.content)}
                </div>
            </Container>
        </div>
    ) : (
        <div className='py-8'>
            <Container>
                <div className='flex items-center justify-center min-h-96'>
                    <div className='text-center'>
                        <p className='text-gray-600 text-lg'>Post not found</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}


