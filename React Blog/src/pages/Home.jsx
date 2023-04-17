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
import { useContext } from "react";
import BlogContext from "../store/Context";

export default function Home() {
  const { posts:postsData ,setPosts } =useContext(BlogContext);
  //--------------states-----------------
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
      setViewData(postsData.splice(0,3))
      console.log("peep");
  }, []);

  return (
    <>
      <div className="mx-auto lg:m-20 mt-10 lg:mb-30 xs:my-[10vh] lg:p-5">
        {(viewedData.length === 0 )?
          ( <div className="my-[20%]"><br /></div> ):"" }
        <InfiniteScroll
        dataLength={viewedData.length}
        next={fetchData}
        hasMore={hasMore}
        scrollThreshold="10%"
        loader={<div className="flex justify-center my-50 md:mb-[30vh] md:mt-[30vh] xl:mt-[5vh] xs:mb-[40vh]">
        <Loader />
        <br />
      </div>}
        endMessage={<NewsFeedEnd/>}
        >
          {viewedData.length !== 0 && (
            <>
            <div className="lg:w-3/4 xl:mx-auto lg:ml-[20%] md:ml-[25%]">
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
