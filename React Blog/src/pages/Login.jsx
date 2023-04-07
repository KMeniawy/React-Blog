import axios from "axios";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import BlogContext from "../store/Context";

export default function Login() {
  const { setUser } = useContext(BlogContext);
  const navigate = useNavigate();
  //--------------states-----------------
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  //-------------handlers-----------------
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://bloggy-kmeniawy.onrender.com/v1/users/sign-in",
        userData
      );
      localStorage.setItem("userToken", data.data.access_token);
      localStorage.setItem("userID", data.data.user._id);
      setUser({id:data.data.user._id,token:data.data.access_token});
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className="mx-20 mt-10">
      <h2 className="text-amber-600 px-24 pt-4 text-5xl mb-10">Login</h2>
      <form
        onSubmit={handleSubmit}
        className="float-left 2xl:mt-32 xl:ml-20 md:ml-10 2xl:ml-40 w-1/3  p-10 flex flex-col items-center"
      >
        <input
          type="email"
          name="email"
          value={userData.email}
          required={true}
          onChange={handleChange}
          placeholder="Email"
          className="input input-primary w-full max-w-xs text-white focus:outline-amber-600 focus:text-amber-600 block mb-4"
        />
        <input
          type="password"
          name="password"
          required={true}
          value={userData.password}
          onChange={handleChange}
          placeholder="Password"
          className="input input-primary w-full max-w-xs text-white focus:outline-amber-600 focus:text-amber-600 block mb-4"
        />
        <button className="btn md:btn-md m-5 bg-amber-600 text-black hover:text-white">
          Login
        </button>
        <Link
          to={"../signup"}
          className=" m-5 text-primary hover:text-white border-none "
        >
          don't have an account
        </Link>
      </form>
      <div className="w-2/5 float-right container">
        <img
          src="https://ik.imagekit.io/0gnwjf9dd/hehe.png?updatedAt=1680899178693"
          className="rounded-tr-3xl rounded-bl-3xl block float-right md:block sm:hidden"
        />
      </div>
    </div>
  );
}
