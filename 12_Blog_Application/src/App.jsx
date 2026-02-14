import { useEffect, useState } from "react"
import {useDispatch} from 'react-redux';
import './App.css'
import authService from './appwrite/Auth'
import{login ,logout} from './Store/authslice'
import {Header ,Footer } from './components'
import { Outlet } from 'react-router-dom'

function App() {

 const [loading ,setLoading] =useState(true)
 const dispatch =useDispatch()

 useEffect(()=>{
  authService.getCurrentUser()
              .then((userData)=>{
                if(userData){
                  dispatch(login({userData}))
                } else{
                  dispatch(logout())
                }
              })
              .finally(()=> setLoading(false))
 },[dispatch])
 return !loading ? (
      <div className='flex flex-col min-h-screen bg-white'>
        <Header/>
        <main className='flex-1 bg-gray-50'>
         <Outlet/>
        </main>
        <Footer/>
      </div>
) : (
  <div className='flex items-center justify-center min-h-screen bg-white'>
    <div className='text-center'>
      <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4'></div>
      <p className='text-gray-600 text-lg'>Loading...</p>
    </div>
  </div>
)
}

export default App
