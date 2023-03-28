import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import DeletePost from "../components/Icons/DeletePost";
import EditPost from "../components/Icons/EditPost";
import WrittenBy from "../components/Icons/WrittenBy";
import Loader from "../components/shared/Loader";

export default function PostDetails() {
  const urlParam = useParams();
  //--------------states-----------------
  const [postData, setPostData] = useState([]);

  //-------------handlers----------------
  const handleDelete = () => {
    axios
      .delete(`http://localhost:3001/v1/post/${urlParam.postId}`)
      .then((res) => {
        console.log(res.data);
      });
  };

  //--------------effect-----------------
  useEffect(() => {
    const getPost = async () => {
      const data = await axios.get(
        `http://localhost:3001/v1/post/${urlParam.postId}`
      );
      setPostData(data.data);
    };
    getPost().catch(console.error);
  }, []);

  return (
    <div className="flex justify-center h-1/2 items">
      {postData.length === 0 && (
        <div className=" my-40">
          <Loader />
        </div>
      )}
      {postData.data && (
        <div className="place-items-center mx-auto my-10 bg-blue-900 p-4 rounded-xl">
          <div className=" place-items-start">
            <h3 className="font-bold text-2xl inline-block">
              {postData.data.title}
            </h3>
            <div className="float-right mt-2">
              <span className="mx-2">
                <Link to={`../post/edit/${urlParam.postId}`} className="inline-block">
                  <EditPost />
                </Link>
              </span>
              <span>
                <Link to={"../"} className="inline-block" onClick={()=>handleDelete()}>
                  <DeletePost/>
                </Link>
              </span>
            </div>
          </div>
          <img
            src={postData.data.photo[0].url}
            className="w-50 rounded-lg my-5"
          />
          <p className="text-lg mb-5">{postData.data.content}</p>
          <div className="text-center">
            <div className="disabled btn-circle bg-primary p-3 mx-auto">
              <WrittenBy />
            </div>
            <p className="text-lg">{postData.data.user.username}</p>
          </div>
        </div>
      )}
    </div>
  );
}
