import React from 'react'
import Header from './pages/header/Header'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard'
import NoMatch from './pages/nomatch/NoMatch'
import PostUser from './pages/employee/PostUser'
import UpdateUser from './pages/employee/UpdateUser'

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/employee' element={<PostUser/>} />
        <Route path='/employee/:id' element={<UpdateUser/>} />
        <Route path='*' element={<NoMatch/>}/>
      </Routes>
    </>
  )
}