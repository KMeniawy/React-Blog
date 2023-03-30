import React ,{ useEffect, useState } from "react";

const BlogContext = React.createContext({
    user: "",
    setUser:"",
  });
  export const BlogContextProvider = (props) => {
    const userToken = localStorage.getItem("userToken");
    const userID = localStorage.getItem("userID");
    const [user, setUser] = useState(userID?{id:userID,token:userToken}:"");
    return <BlogContext.Provider value={{ user, setUser }}>{props.children}</BlogContext.Provider>;
  };
  export default BlogContext;