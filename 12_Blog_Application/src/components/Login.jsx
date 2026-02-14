import React ,{useState}from 'react'
import {Link ,useNavigate} from 'react-router-dom'
import {login as authLogin} from '../Store/authslice'
import {Button ,Input ,Logo } from './index'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/Auth'
import {useForm} from 'react-hook-form'

function Login() {
    const navigate=useNavigate()
    const dispatch =useDispatch()
    const {register ,handleSubmit} =useForm()
    const [error ,setError] =useState("")

    const login =async(data)=>{
        setError("")
        try {
            const session = await authService.login(data)
            if (session) {
                const userData =await authService.getCurrentUser()
                if (userData) {
                    dispatch(authLogin(userData))
                    navigate("/")
                }
            }
        } catch (error) {
            setError(error.message)
        }
    }
    return (
        <div 
        className='flex items-center justify-center min-h-screen w-full bg-gray-50 py-8'>
            <div className={`mx-auto w-full max-w-md bg-white rounded-lg p-8 shadow-lg border border-gray-200`}>
                <div className='mb-6 flex justify-center'>
                    <Logo width='80px'/>
                </div>
                <h2 className='text-center text-3xl font-bold text-gray-900 mb-2'>
                    Welcome Back
                </h2>
                    <p className='mt-2 text-center text-sm text-gray-600 mb-6'>
                        Don&apos;t have an account?&nbsp;
                        <Link
                         to="/signup"
                         className='font-semibold text-blue-600 hover:text-blue-700 transition'>
                             Sign Up
                        </Link>
                    </p>

                    {error &&<div className='bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 text-sm'>
                        {error}</div>}

                        <form 
                        onSubmit={handleSubmit(login)}
                        className='space-y-4' >
                            <Input 
                            label="Email"
                            placeholder="name@example.com"
                            type="email"
                            {...register("email",{
                                required:true,
                                validate:{
                                    matchpattern:(value)=>/([\d\w]+[\.\w\d]*)\+?([\.\w\d]*)?@([\w\d]+[\.\w\d]*)/.test(value) || "Email address must be a valid address"
                                
                                }
                            })}
                            />
                            <Input 
                            label="Password"
                            type="password"
                            placeholder="Enter your password" 
                            {...register("password",{
                                required:true
                            })}/>
                            <Button
                            type="submit"
                            bgColor='bg-blue-600'
                            className='w-full py-3 font-semibold'>
                                Sign In</Button>

                        </form>
            </div>
        </div>
    )
}

export default Login
