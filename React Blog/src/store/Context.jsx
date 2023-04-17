import axios from "axios";
import React ,{ useEffect, useState } from "react";

const BlogContext = React.createContext({
    user: "",
    setUser:"",
    posts: [],
    setPosts:"",
  });

  export const BlogContextProvider = (props) => {
    const userToken = localStorage.getItem("userToken");
    const userID = localStorage.getItem("userID");
    const [user, setUser] = useState(userID?{id:userID,token:userToken}:"");
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
      axios
      .get("https://bloggy-kmeniawy.onrender.com/v1/post")
      .then((res) => {
        setPosts(res.data.data.reverse());
      })
    })
    return <BlogContext.Provider value={{ user, setUser, posts, setPosts }}>{props.children}</BlogContext.Provider>;
  };
  export default BlogContext;