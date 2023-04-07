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
        className="float-left 2xl:mt-32 xl:ml-20 md:ml-10 2xl:ml-40 w-1/3 border-[1px] border-primary rounded-3xl p-10"
      >
        <input
          type="email"
          name="email"
          value={userData.email}
          required={true}
          onChange={handleChange}
          placeholder="Email"
          className="input input-ghost w-full max-w-xs text-white focus:outline-amber-600 focus:text-amber-600 block mb-4"
        />
        <input
          type="password"
          name="password"
          required={true}
          value={userData.password}
          onChange={handleChange}
          placeholder="Password"
          className="input input-ghost w-full max-w-xs text-white focus:outline-amber-600 focus:text-amber-600 block mb-4"
        />
        <button className="btn md:btn-md m-5 bg-amber-600 text-black hover:text-white">
          Login
        </button>
      </form>
      <div className="w-2/5 float-right container">
        <Link
          to={"../signup"}
          className="btn rounded-full md:btn-md m-5 bg-amber-600 text-black hover:text-white border-none absolute 2xl:top-[61%] 2xl:left-[70%] xl:top-[52%] xl:left-[69%] lg:top-[52%] lg:left-[66%] md:top-[42%] md:left-[64%] sm:top-[50%] sm:left-[58%]"
        >
          don't have an account
        </Link>
        <img
          src="https://ik.imagekit.io/0gnwjf9dd/blog/Flat_vector_illustration_of_stock_trader_working_on_computer__Converted_.png?updatedAt=1680081129093"
          className="rounded-tr-3xl rounded-bl-3xl block float-right md:block sm:hidden"
        />
      </div>
    </div>
  );
}
