import React from 'react'
import appwriteService from '../appwrite/configuration'
import {Link} from 'react-router-dom'


function PostCard({ $id, slug, title, featuredImage}) {
    const imageUrl = appwriteService.getFilePreview(featuredImage);
    const downloadUrl = appwriteService.getFileDownloadUrl(featuredImage);
    
    console.log('🎨 PostCard - File ID:', featuredImage);
    console.log('🎨 PostCard - Preview URL:', imageUrl);
    console.log('🎨 PostCard - Download URL (fallback):', downloadUrl);
    
    const handleImageError = (e) => {
        console.warn('❌ Preview image failed, trying download URL...');
        // If preview failed and we have a different download URL, try it
        if (downloadUrl && e.target.src !== downloadUrl) {
            e.target.src = downloadUrl;
        } else {
            console.error('All URLs failed for file:', featuredImage);
            e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found'
        }
    }
    
    return (
        <Link to={`/post/${slug}`}>
            <div className='w-full bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform'>
                <div className='w-full h-48 overflow-hidden bg-gray-200'>
                    <img 
                        src={imageUrl} 
                        alt={title} 
                        className='w-full h-full object-cover'
                        onError={handleImageError}
                    />
                </div>
                <div className='p-4'>
                    <h2 className='text-lg font-bold text-gray-800 line-clamp-2 hover:text-blue-600'>{title}</h2>
                </div>
            </div>
        </Link>
    )
}

export default PostCard
