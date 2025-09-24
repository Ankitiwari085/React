import { useState } from 'react'
import { Link, Navigate, Route, Routes } from 'react-router'
import Home from './Home'
import About from './About'
import Login from './Login'
import Navbar from './Navbar'
import PageNotFound from './PageNotFound'
import College from './College'
import Student from './Student'
import Department from './Department'
import CollegeDetails from './CollegeDetails'
import Users from './Users'
import UserDetails from './UserDetails'

function App() {
  return (
    <>
      {/* <Navbar/> */}
      <Routes>
        <Route element={<Navbar />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />

          <Route path='/users' element={<Users />} />
          <Route path='/userdetails/:id/:name?' element={<UserDetails />} />

          <Route path='user'>
            <Route path='/user/login' element={<Login />} />
          </Route>

        </Route>
        <Route path='/college' element={<College />}>
          <Route path='student' element={<Student />} />
          <Route path='department' element={<Department />} />
          <Route path='college_details' element={<CollegeDetails />} />
        </Route>
        <Route path='/*' element={<Navigate to={"/login"} />} />
        {/* <Route path='/*' element={<PageNotFound/>}/> */}

      </Routes>
    </>
  )
}

export default App
