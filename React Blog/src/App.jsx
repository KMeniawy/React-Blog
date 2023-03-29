import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import BlogContext from "./store/Context";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import EditToolPost from "./pages/EditToolPost";
import PostDetails from "./pages/PostDetails";
import RequireAuth from "./pages/RequireAuth";


function App() {
  return (
    <div>
      <Routes>
          {/* <Route element={<RequireAuth />}> */}
            {/* {user?.userToken && <Route path="/" element={<Home/>}/>} */}
            <Route path="/create" element={<EditToolPost />} /> {/* TODO */}
            <Route path="/profile/:userId" element={<Profile />} /> {/* TODO */}
            <Route path="/post/edit/:postId" element={<EditToolPost />} />{/* TODO */}
            <Route path="/post/:postId" element={<PostDetails />} />
            <Route path="/" element={<Home />}/>
            <Route path="*" element={<NotFound />} /> {/* TODO */}
          {/* </Route> */}
          <Route path="/login" element={<Login />} /> {/* TODO */}
          <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
