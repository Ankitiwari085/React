import config from '../config/config.js';
import {Client ,ID ,Databases ,Storage, Query } from 'appwrite';

export class Service{
    client= new Client();
    databases;
    bucket;

    constructor(){
        this.client.setEndpoint(config.appwriteUrl)
                    .setProject(config.appwriteProjectId);
        this.databases =new Databases(this.client);
        this.bucket= new Storage(this.client);

    }
    async createPost({title ,slug ,content ,featuredImage,status,userId}){
        try {
            console.log('Creating post with:', {title, slug, status, userId, hasImage: !!featuredImage});
            return await this.databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                ID.unique(),
                {
                    title,
                    slug,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            ) 
        } catch (error) {
            console.error("Appwrite Service :: CreatePost :: error ::", error);
            throw error; // Re-throw to let caller handle it
        }
    }

    async updatePost(id,{title  ,content ,featuredImage,status,slug}){
        try {
            console.log('Updating post:', {id, title, slug, status});
            return await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                id,
                {
                    title,
                    slug,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.error("Appwrite Service :: UpdatePost :: error ::", error);
            throw error; // Re-throw to let caller handle it
        }
    }
    async deletePost(id){
        try {
            await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                id
            )
            return true;
        } catch (error) {
            console.log("Appwrite Service :: DeletePost :: error ::" ,error)
            return false
        }
    }

    async getPost(slug){
        try {
            const posts = await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                [Query.equal("slug",slug)]
            )
            return posts.documents.length > 0 ? posts.documents[0] : null;
        } catch (error) {
            console.log("Appwrite Service :: GetPost :: error ::" ,error)
            return null;
        }
    }

    async getPosts(queries =[Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                queries
            )
        } catch (error) {
            console.log("Appwrite Service :: GetPosts :: error ::" ,error)
            return false
        }
    }

    //file upload Services...
    async uploadFile(file){
        try {
            console.log('Uploading file:', file.name, 'Size:', file.size);
            const result = await this.bucket.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file
            );
            console.log('File uploaded successfully:', result.$id);
            return result;
        } catch (error) {
            console.error("Appwrite Service :: UploadFile :: error ::", error);
            throw error; // Re-throw to let caller handle it
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                config.appwriteBucketId,
                fileId
            )
            return  true
        } catch (error) {
             console.log("Appwrite Service :: DeleteFile :: error ::" ,error)
            return false
            }
    }

    getFilePreview(fileId){
        try {
            if (!fileId) {
                console.warn('getFilePreview called with empty fileId');
                return '';
            }
            
            // Use Appwrite SDK's built-in method which returns a URL object
            const filePreviewUrl = this.bucket.getFilePreview(
                config.appwriteBucketId,
                fileId
            );
            
            // Convert URL object to string
            const urlString = filePreviewUrl.toString();
            console.log('🖼️ Generated Image URL:', urlString);
            return urlString;
        } catch (error) {
            console.warn("⚠️ SDK method failed, using fallback REST URL");
            // Fallback: construct URL manually without extra parameters
            const endpoint = config.appwriteUrl;
            const bucketId = config.appwriteBucketId;
            const projectId = config.appwriteProjectId;
            const fallbackUrl = `${endpoint}/storage/buckets/${bucketId}/files/${fileId}/preview?project=${projectId}`;
            console.log('🔄 Fallback URL:', fallbackUrl);
            return fallbackUrl;
        }
    }

    // Alternative method to get download URL as fallback
    getFileDownloadUrl(fileId) {
        try {
            if (!fileId) {
                return '';
            }
            const fileUrl = this.bucket.getFileDownload(
                config.appwriteBucketId,
                fileId
            );
            return fileUrl.toString();
        } catch (error) {
            console.warn("⚠️ Download URL failed, constructing manually");
            const endpoint = config.appwriteUrl;
            const bucketId = config.appwriteBucketId;
            const projectId = config.appwriteProjectId;
            return `${endpoint}/storage/buckets/${bucketId}/files/${fileId}/download?project=${projectId}`;
        }
    }
}

const service =new Service();

export default service;