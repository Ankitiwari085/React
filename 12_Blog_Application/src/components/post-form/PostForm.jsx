import React, { useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import {Button , Input ,Select ,RTE} from '../index'
import appwriteService from '../../appwrite/configuration'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function PostForm({post}) {
    const {register , handleSubmit ,watch ,setValue ,control, getValues}=useForm({
        defaultValues:{
            title:post?.title||'',
            slug:post?.slug || '',
            content:post?.content ||'',
            status:post?.status||'active'
        }
    })
    
    const [preview, setPreview] = useState(null)
    const titleValue = watch('title')
    const imageValue = watch('image')
    const navigate =useNavigate()
    const userData = useSelector(state=>state.auth.userData)
    const authStatus = useSelector(state=>state.auth.status)

    console.log('PostForm - Auth Status:', authStatus, 'UserData:', userData);

    // Handle image preview
    useEffect(() => {
        if (imageValue && imageValue.length > 0) {
            const file = imageValue[0]
            const reader = new FileReader()
            reader.onloadend = () => {
                setPreview(reader.result)
            }
            reader.readAsDataURL(file)
        } else {
            setPreview(null)
        }
    }, [imageValue])

    const submit = async (data) => {
        console.log('Submit - userData:', userData, 'authStatus:', authStatus);
        
        // Check both status and userData for authentication
        if (!authStatus || !userData) {
            console.error('User not authenticated');
            alert('Please login first to create a post');
            navigate('/login');
            return;
        }

        try {
            // Check if image is provided for new posts
            if (!post && (!data.image || data.image.length === 0)) {
                alert('Please select an image for the post');
                return;
            }

            if (post) {
                // Editing existing post
                let featuredImageId = post.featuredImage; // Keep existing image by default
                
                if (data.image && data.image.length > 0) {
                    // Upload new image if provided
                    const file = await appwriteService.uploadFile(data.image[0]);
                    if (!file) {
                        alert('Failed to upload image');
                        return;
                    }
                    featuredImageId = file.$id;
                    // Delete old image
                    appwriteService.deleteFile(post.featuredImage);
                }
                
                const dbPost = await appwriteService.updatePost(post.$id, {
                    title: data.title,
                    slug: data.slug,
                    content: data.content,
                    status: data.status,
                    featuredImage: featuredImageId
                });
                
                if (dbPost) {
                    console.log('Post updated successfully:', dbPost);
                    navigate(`/post/${dbPost.slug}`);
                } else {
                    alert('Failed to update post');
                }
            } else {
                // Creating new post
                if (!data.image || data.image.length === 0) {
                    alert('Please select an image for the post');
                    return;
                }

                const file = await appwriteService.uploadFile(data.image[0]);
                
                if (!file) {
                    alert('Failed to upload image');
                    return;
                }

                const dbPost = await appwriteService.createPost({
                    title: data.title,
                    slug: data.slug,
                    content: data.content,
                    status: data.status,
                    featuredImage: file.$id,
                    userId: userData.$id
                });
                
                if (dbPost) {
                    console.log('Post created successfully:', dbPost);
                    alert('Post created successfully!');
                    navigate(`/post/${dbPost.slug}`);
                } else {
                    alert('Failed to create post');
                }
            }
        } catch (error) {
            console.error('Error submitting post:', error);
            alert('Error: ' + (error.message || 'Failed to save post'));
        }
    }

    const slugTransform = useCallback((value)=>{
        if(value && typeof value ==='string'){
            return value
                        .trim()
                        .toLowerCase()
                        .replace(/[^\w\s-]/g,'')
                        .replace(/\s+/g,'-')
                        .replace(/-+/g,'-')
        }
        return ''
    },[])

    useEffect(()=>{
        if (titleValue) {
            setValue('slug', slugTransform(titleValue), {shouldValidate:true})
        }
    },[titleValue, slugTransform, setValue])
    
    
    return (
        <form onSubmit={handleSubmit(submit)} className='flex flex-wrap'>
            <div className='w-2/3 px-2'>
                <Input
                    label="Title :"
                    className='mb-4'
                    {...register("title",{required:true})}
                    />
                     <Input
                    label="Slug :"
                    placeholder="slug"
                    className='mb-4'
                    {...register("slug",{required:true})}
                    onInput={(e)=>{
                        setValue("slug",slugTransform(e.currentTarget.value),{shouldValidate:true});
                    }}
                    />
                    <RTE
                    label="content :" name="content" control={control}
                    defaultValue={post?.content || ''}
                    />
            </div>
            <div className='w-1/3 px-2'>
              <Input
                    label="Featured Image :"
                    type="file"
                    className='mb-4'
                    accept="image/png,image/jpg,image/jpeg,image/gif"
                    {...register("image",{required:!post})}
                    />
                    {(preview || (post && post.featuredImage)) && (
                        <div className='w-full mb-4'>
                            <img 
                            src={preview || appwriteService.getFilePreview(post.featuredImage)}
                            alt={post?.title || 'Preview'}
                            className='rounded-lg w-full object-cover'
                            />
                        </div>
                    ) }
                      <Select
                        options={["active" ,"inactive"]}
                        label="Status"
                        className="mb-4"
                        {...register("status" , {required:true})}
                      />
                      <Button
                        type="submit"
                        bgColor={post? "bg-green-500": undefined}
                        className="w-full">
                            {post ? "update ": "Submit"}
                        </Button>   
            </div> 
        </form>
    )
}
export default PostForm
