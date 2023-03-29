import React ,{ useEffect, useState } from "react";

const BlogContext = React.createContext({
    user: undefined ,
    setUser:""
  });
  export const BlogContextProvider = (props) => {
    const [user, setUser] = useState();
    useEffect(()=>{
        localStorage.getItem("userToken")? setUser(true) : setUser(false) ;
    },[])
    return <BlogContext.Provider value={{ user, setUser }}>{props.children}</BlogContext.Provider>;
  };
  export default BlogContext;