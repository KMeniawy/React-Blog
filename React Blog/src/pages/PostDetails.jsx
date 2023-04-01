import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";

import DeletePost from "../components/Icons/DeletePost";
import EditPost from "../components/Icons/EditPost";
import WrittenBy from "../components/Icons/WrittenBy";
import Loader from "../components/shared/Loader";
import BlogContext from "../store/Context";

export default function PostDetails() {
  const urlParam = useParams();
  const { user } = useContext(BlogContext);
  console.log(user.id);
  const navigate = useNavigate();
  //--------------states-----------------
  const [postData, setPostData] = useState([]);
  const [author, setAuthor] = useState("");
  //-------------handlers----------------
  const handleDelete = () => {
    axios
      .delete(`https://bloggy-kmeniawy.onrender.com/v1/post/${urlParam.postId}`, {
        headers: { Authorization: "Bearer " + user.token },
      })
      .then((res) => {
        console.log(res.data);
        setTimeout(() => {
          navigate("/");
        }, 300);
      });
  };

  //--------------effect-----------------
  useEffect(() => {
    const getPost = async () => {
      const data = await axios.get(
        `https://bloggy-kmeniawy.onrender.com/v1/post/${urlParam.postId}`
      );
      setPostData(data.data);
      console.log(data.data.data.user._id);
      setAuthor(data.data.data.user._id);
    };
    getPost().catch(console.error);
  }, [author]);
  return (
    <div className="flex justify-center h-1/2 items">
      {postData.length === 0 && (
        <div className=" my-80">
          <Loader />
        </div>
      )}
      {postData.data && (
        <div className="place-items-center mx-auto my-10  bg-indigo-900 p-4 rounded-xl w-1/2">
          <div className=" place-items-start">
            <h3 className="font-bold text-2xl inline-block font-body">
              {postData.data.title}
            </h3>
            <div className="float-right mt-2">
              {author === user.id ? (
                <>
                  <span className="mx-2">
                    <Link
                      to={`../post/edit/${urlParam.postId}`}
                      className="inline-block"
                    >
                      <EditPost />
                    </Link>
                  </span>
                  <span>
                    <button
                      className="inline-block"
                      onClick={() => handleDelete()}
                    >
                      <DeletePost />
                    </button>
                  </span>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
          <img
            src={postData.data.photo[0].url}
            className="w-50 rounded-lg my-5 mx-auto"
          />
          <p className="text-lg mb-5 font-body">{postData.data.content}</p>
          <div className="text-center">
            <div className="disabled btn-circle bg-primary p-3 mx-auto">
              <WrittenBy />
            </div>
            <p className="text-lg font-body">{postData.data.user.username}</p>
          </div>
        </div>
      )}
    </div>
  );
}
