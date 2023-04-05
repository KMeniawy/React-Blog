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
    //username,email (unique),password,repeat password
    <div className="mx-20 mt-10">
      <div>
        <h2 className="text-amber-600 px-24 pt-4 text-5xl mb-40">Sign up</h2>
      </div>
      <div>
        <img src="https://www.freepik.com/free-vector/set-background-designs-deep-purple_3594010.htm#query=gray%20and%20purple&position=1&from_view=search&track=ais"/>
      </div>
      <form onSubmit={handleSubmit} className="mx-auto xl:w-4/12 2xl:w-2/5">
        <div className="flex flex-col m-20 justify-around pt-20 pl-10 mr-5 rounded-3xl">
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
