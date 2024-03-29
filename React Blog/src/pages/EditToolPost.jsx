import axios from "axios";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import BlogContext from "../store/Context";

const CreatePost = () => {
  const urlParam = useParams();
  const { user, setPosts } = useContext(BlogContext);
  const navigate = useNavigate();
  //--------------states-----------------
  const [photo, setPhoto] = useState([]);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  //-------------handlers----------------

  const handleChangeContent = (e) => {
    setContent(e.target.value);
  };
  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangePhoto = (e) => {
    setPhoto(e.target.files);
  };
  const handleUpdate = async () => {
    const fData = new FormData();
    fData.append("title", title);
    fData.append("content", content);
    fData.append("photo", photo[0]);
    await axios
      .patch(`https://bloggy-kmeniawy.onrender.com/v1/post/${urlParam.postId}`, fData, {
        headers: { Authorization: "Bearer " + user.token },
      }).then(
        setPosts(prevPosts=>[...prevPosts,fData])
      )
      .catch((error) => toast.error(error));
    console.log("res");
  };
  const handleCreate = async () => {
    const fData = new FormData();
    fData.append("title", title);
    fData.append("content", content);
    fData.append("photo", photo[0]);

    await axios
      .post(`https://bloggy-kmeniawy.onrender.com/v1/post`, fData, {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: "Bearer " + user.token,
        },
      }).then(()=>{
        const post = {...fData,_id:res.data.data._id}
        setPosts(prevPosts=>[...prevPosts,post])
      }
      )
      .catch((error) => console.log(error));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (urlParam.postId) {
        handleUpdate();
      } else {
        handleCreate();
      }
      setTimeout(() => {
        const test = {title:title, content:content, photo:photo};
        navigate("/");
        window.location.reload();
      }, 1000);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  //--------------effect-----------------
  useEffect(() => {
    if (urlParam.postId) {
      const getPost = async () => {
        const data = await axios.get(
          `https://bloggy-kmeniawy.onrender.com/v1/post/${urlParam.postId}`
        );
        let apiData = data.data.data;
        setTitle(apiData.title);
        setContent(apiData.content);
      };
      getPost();
    }
  }, []);
  return (
    <>
      <div className="md:mx-20 xs:mx-0 mt-20">
        <h1 className="text-amber-600 px-24 pt-4 md:text-5xl md:mb-40 xs:text-xl xs:pl-5">
          {urlParam.postId ? "edit post" : "Add new post"}
        </h1>
        <form className="md:mx-auto xl:w-4/12 2xl:w-2/5 xs:w-[100%] xs:" onSubmit={handleSubmit}>
          <div className="flex flex-col md:m-20 xs:my-5  justify-around pt-20 px-10 md:border-amber-600 md:border-2 rounded-3xl">
            <label htmlFor="title" className="text-amber-600 font-bold mx-3.5">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={handleChangeTitle}
              className="input input-bordered w-full max-w-xs m-5 text-white border-amber-600 focus:outline-amber-600 focus:text-amber-600 mx-auto"
            />
            <label
              htmlFor="content"
              className="text-amber-600 font-bold mx-3.5"
            >
              Content
            </label>
            <textarea
              name="content"
              cols="20"
              rows="3"
              value={content}
              onChange={handleChangeContent}
              className="textarea textarea-primary w-full max-w-xs m-5 text-white border-amber-600 focus:outline-amber-600 focus:text-amber-600 mx-auto"
            ></textarea>
            <label htmlFor="photo" className="text-amber-600 font-bold mx-3.5">
              Image
            </label>
            <input
              type="file"
              name="photo"
              onChange={handleChangePhoto}
              className="file-input file-input-secondary border-[#F28C18] file-input-bordered w-full max-w-xs m-5 block mx-auto"
            />
            <button className="btn md:btn-md m-10 bg-[#F28C18] text-black hover:text-white w-1/2 mx-auto">
              {urlParam.postId ? "Update" : "Add"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreatePost;
