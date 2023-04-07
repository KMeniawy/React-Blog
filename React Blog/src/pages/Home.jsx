import axios from "axios";
import { useEffect, useState } from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import InfiniteScroll from 'react-infinite-scroll-component';
import { toast } from "react-toastify";

import PostCard from "../components/PostCard";
import Loader from "../components/shared/Loader";
import PlusSign from "../components/Icons/PlusSign";
import NewsFeedEnd from "../components/NewsFeedEnd";

export default function Home() {
  //--------------states-----------------
  const [postsData, setPostsData] = useState([]);
  const [length, setLength] = useState(3)
  const [viewedData, setViewData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  //-------------handlers----------------
  const fetchData = function () {
    if (length<=postsData.length) {
      setTimeout(() => {
        setLength(length+1);
        setViewData(postsData.slice(0,length));
      }, 500);
    }else{
      setHasMore(false)
    }
  };
  //--------------effect-----------------
  useEffect(() => {
    axios
      .get("https://bloggy-kmeniawy.onrender.com/v1/post")
      .then((res) => {
        setPostsData(res.data.data.reverse());
        setViewData(res.data.data.slice(0,2));
      })
      .catch((err) => toast.error(err));
  }, []);

  return (
    <>
      <div className="m-20 mt-10 mb-30 p-5">
        {(viewedData.length === 0 )?
          ( <div className="my-[20%]"><br /></div> ):"" }
        <InfiniteScroll
        dataLength={viewedData.length}
        next={fetchData}
        hasMore={hasMore}
        scrollThreshold="30%"
        loader={<div className="flex justify-center my-50 mb-10">
        <Loader />
        <br />
      </div>}
        endMessage={<NewsFeedEnd/>}
        >
          {postsData.length !== 0 && (
            <>
            <div className="lg:w-3/4 mx-auto">
                {viewedData?.map((item) => (
                  <PostCard key={item._id} {...item} />
                ))}
            </div>
                <br />

            </>
          )}
        </InfiniteScroll>
        <Link
          to={"/create"}
          className="btn-circle bg-[#413333] fixed bottom-[2%] right-[2%] p-2"
        >
          {<PlusSign />}
        </Link>
      </div>
    </>
  );
}
