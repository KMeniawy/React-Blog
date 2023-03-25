import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';


import Home from './pages/Home';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import EditPost from './pages/EditPost';
import PostDetails from './pages/PostDetails';
import Settings from './pages/Settings';
import RequireAuth from './pages/RequireAuth';


function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        {/* <Route element={RequireAuth}> TODO */}
          <Route path='/post/:postId' element={<PostDetails/>}/> {/* TODO */}
          <Route path='/profile/:userId' element={<Profile/>}/> {/* TODO */}
          <Route path='/post/edit/:postId' element={<EditPost/>}/> {/* TODO */}
          <Route path='/settings' element={<Settings/>}/> {/* TODO */}
        {/* </Route> */}
        <Route path='/login' element={<Login/>}/> {/* TODO */}
        <Route path='/signup' element={<Signup/>}/> {/* TODO */}
        <Route path='*' element={<NotFound/>}/> {/* TODO */}
        <Route path='/' element={<Home/>}>
        </Route>
      </Routes>
      <Footer/>
    </div>

  )
}

export default App
