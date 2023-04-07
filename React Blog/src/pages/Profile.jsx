import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { useContext } from "react";

import BlogContext from "../store/Context";
import Loader from "../components/shared/Loader";
import ProfileIcon from "../components/Icons/ProfileIcon";

export default function Profile() {
  const urlParam = useParams();
  const { user } = useContext(BlogContext);

  //--------------states-----------------
  const [profile, setProfile] = useState("");
  //--------------effect-----------------
  useEffect(() => {
    const getUser = async () => {
      const data = await axios.get(
        `https://bloggy-kmeniawy.onrender.com/v1/user/profile/${urlParam.userId}`
      );
      console.log(data.data.data);
      setProfile(data.data.data);
    };
    getUser().catch(console.error());
  }, [urlParam]);
  return (
    <>
      <div className="flex justify-center h-1/2 items mt-20">
        {user.length === 0 && (
          <div className=" my-80">
            <Loader />
          </div>
        )}
        {profile && (
          <>
            <div className="flex justify-center items-center mx-auto flex-col w-[70%] h-[70vh]">
              <ProfileIcon />
              <div className=" my-10 bg-indigo-900 p-4 rounded-xl w-[50%] text-center h-[30%]">
                <h3 className="font-bold text-2xl inline-block font-body text-white mb-10">
                  {profile.username}
                </h3>
                {user.id !== profile._id && (
                  <>
                    <h1 className="text-white">Follow</h1>
                    <input type="checkbox" className="toggle toggle-primary" />
                  </>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
