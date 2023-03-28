import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

export default function Signup() {
  //--------------states-----------------
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  //-------------handlers-----------------
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    console.log({ ...userData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:3001/v1/users/sign-up", userData);
      console.log(data);
    } catch (error) {
      console.log(error);
      toast(error);
    }
  };
  return (
    //username,email (unique),password,repeat password
    <>
      <form>
        <h2 className="text-amber-600 px-24 pt-4 text-5xl">Sign up</h2>
        <div className="flex flex-col m-20 justify-around p-20 border-amber-600 border-2 rounded-3xl">
          <label htmlFor="name" className="text-amber-600 font-bold">
            Username
          </label>
          <input
            label="username"
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
            label="email"
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
            label="password"
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
            label="confirm-password"
            type="password"
            name="confirm-password"
            id="repeat-password"
            required={true}
            className="input input-ghost w-full max-w-xs m-5 text-white border-amber-600 focus:outline-amber-600 focus:text-amber-600"
            onChange={handleChange}
          />
          <button
            type="submit"
            onSubmit={() => handleSubmit(userData)}
            className="btn md:btn-md m-10 bg-amber-600 text-black hover:text-white"
          >
            Submit
          </button>
        </div>
      </form>
      <ToastContainer />
    </>
  );
}
