import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Signup() {
  const navigate = useNavigate();
  //--------------states-----------------
  const [userData, setUserData] = useState({
    username: "",
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
      const { data } = await axios.post("https://bloggy-kmeniawy.onrender.com/v1/users/sign-up", userData);
      localStorage.setItem("userToken",data.data.access_token);
      let x = localStorage.getItem("userToken");
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className="px-20 p-10 bg-[url('https://ik.imagekit.io/0gnwjf9dd/Blob_Group.svg?updatedAt=1680897450698')] bg-no-repeat bg-cover">
      <div>
        <h2 className="text-amber-600 px-24 pt-4 text-5xl mb-40">Sign up</h2>
      </div>
      <form onSubmit={handleSubmit} className="mx-auto w-3/5 2xl:w-2/5 bg-base-100 p-10 rounded-3xl">
        <div className="flex flex-col m-20 justify-around py-5 items-center rounded-3xl">
          <label htmlFor="username" className="text-amber-600 font-bold mx-3.5">
            Username
          </label>
          <input
            type="text"
            name="username"
            value={userData.username}
            required={true}
            className="input input-bordered w-full max-w-xs m-5 text-white border-amber-600 focus:outline-amber-600 focus:text-amber-600"
            onChange={handleChange}
          />
          <label htmlFor="email" className="text-amber-600 font-bold">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={userData.email}
            required={true}
            className="input input-ghost w-full max-w-xs m-5 text-white border-amber-600 focus:outline-amber-600 focus:text-amber-600"
            onChange={handleChange}
          />

          <label htmlFor="password" className="text-amber-600 font-bold">
            Password
          </label>
          <input
            type="password"
            name="password"
            required={true}
            value={userData.password}
            className="input input-ghost w-full max-w-xs m-5 text-white border-amber-600 focus:outline-amber-600 focus:text-amber-600"
            onChange={handleChange}
          />
          <label htmlFor="password" className="text-amber-600 font-bold">
            Repeat Password
          </label>
          <input
            type="password"
            name="confirm_password"
            id="repeat-password"
            required={true}
            className="input input-ghost w-full max-w-xs m-5 text-white border-amber-600 focus:outline-amber-600 focus:text-amber-600"
            onChange={handleChange}
          />
          <button
            className="btn md:btn-md mt-10 ml-5 bg-[#F28C18] text-black hover:text-white w-1/2"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}
