import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";

import UserIcon from "../Icons/UserIcon";
import BlogContext from "../../store/Context";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import ChatBubble from "../Icons/ChatBubble";

export default function Navbar() {
  const [username , setUsername] = useState("");
  const { setUser,user } = useContext(BlogContext);
  const navigate = useNavigate();
  const handleLogout = ()=>{
    localStorage.removeItem("userID");
    localStorage.removeItem("userToken");
    setUser(false);
    navigate("/");
  }
  useEffect(() => {
    const getUser = async () => {
      const data = await axios.get(
        `https://bloggy-kmeniawy.onrender.com/v1/user/profile/${user.id}`
      );
      console.log(data.data.data);
      setUsername(data.data.data.username);
    };
    getUser().catch(console.error);
  }, []);
  return (
    <div className="navbar bg-primary text-primary-content">
      <div className="flex-1 ml-5">
        <Link to={"/"} className="btn btn-ghost normal-case text-2xl font-nunito border-none">
        <ChatBubble className="ml-1"/>Bloggy
        </Link>
      </div>
      <div className="flex-none mr-5">
        <p className="pr-10 text-[#212121] font-body">hello, <span className="font-bold">{username}</span></p>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-150">
                <UserIcon/>
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="text-amber-500 font-body" onClick={handleLogout}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
