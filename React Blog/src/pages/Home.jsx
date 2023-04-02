import axios from "axios";
import { useEffect, useState } from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroller";
import { toast } from "react-toastify";

import PostCard from "../components/PostCard";
import Loader from "../components/shared/Loader";
import PlusSign from "../components/Icons/PlusSign";
import NewsFeedEnd from "../components/NewsFeedEnd";

export default function Home() {
  //--------------states-----------------
  const [postsData, setPostsData] = useState([]);
  const [shownData, setShownData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [postsLength, setPostsLength] = useState(3);
  //-------------handlers----------------
  const handleShowData = function () {
    setTimeout(() => {
      setShownData(postsData);
    }, 300);
  };
  const isLoading = ()=>{
    if (shownData.length === postsData.length) {
      setLoading(false);
    }
  }
  const handleAddLength = function () {
    setPostsLength(postsLength + 1);
  };
  //--------------effect-----------------
  useEffect(() => {
    axios
      .get("https://bloggy-kmeniawy.onrender.com/v1/post")
      .then((res) => {
        setPostsData(res.data);
      })
      .catch((err) => toast.error(err));
  }, []);
  return (
    <div className="m-20 p-5">
      {postsData.length === 0 && (
        <div className="flex justify-center my-80 mb-10">
          <Loader />
        </div>
      )}
      {postsData.length !== 0 && (
        <>
        <div className="lg:w-3/4 mx-auto">
            {(postsData?.data.reverse()).map((item) => (
              <PostCard key={item._id} {...item} />
            ))}
        </div>
            <br />
          <NewsFeedEnd/>
        </>
      )}
      <Link
        to={"/create"}
        className="btn-circle bg-[#413333] fixed bottom-[2%] right-[2%] p-2"
      >
        {<PlusSign />}
      </Link>
    </div>
  );
}
