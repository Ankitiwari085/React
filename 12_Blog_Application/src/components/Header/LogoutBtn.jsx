import React from 'react'
import {useDispatch} from 'react-redux'
import authService  from '../../appwrite/Auth'
import {logout} from '../../Store/authslice'


function LogoutBtn() {
    const dispatch= useDispatch()
    const logoutHandler =()=>{
        authService.logout().then(()=>{
            dispatch(logout())
        })
    }

    return (
        <button 
        className='inline-bock px-6 py-6 duration-200 hiver:bg-blue-100 rounded-full'
        onClick={logoutHandler}>
            Logout
        </button>
    )
}

export default LogoutBtn
