import axios from "axios";
import { useEffect, useState } from "react";
import { render } from "react-dom";

import PostCard from "../components/PostCard";
import CheckNews from "../components/Icons/CheckNews";
import Loader from "../components/shared/Loader";

export default function Home() {
  //--------------states-----------------
  const [postData, setPostData] = useState([]);
  //--------------effect-----------------
  useEffect(() => {
    axios
      .get("http://localhost:3001/v1/post")
      .then((res) => setPostData(res.data))
      .catch((err) => console.log(err));
  }, []);
console.log(postData);
  return (
    <div className="m-20 p-5">
      {postData.length === 0 && (
        <div className="flex justify-center mb-10">
          <Loader />
        </div>
      )}
      {postData.length !== 0 && (
        <>
          {console.log("this before mapping",postData.data)}
          {(postData?.data).map((item) => (
              <PostCard
                key={item._id}
                {...item}
              />
          ))}
          <br />
          <div className="flex justify-center mt-10">
            {/* NOTE : this is the end of the news feed */}
            <hr className="border-amber-600 border-2 relative w-20 my-10 mr-2" />
            <h2 className="text-3xl pt-4 py-2">you're all caught up</h2>{" "}
            <CheckNews className="p-1" />
            <hr className="border-amber-600 border-2 relative w-20 my-10 ml-2" />
          </div>
        </>
      )}
    </div>
  );
}
