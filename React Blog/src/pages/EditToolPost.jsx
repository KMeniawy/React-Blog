import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const CreatePost = () => {
    const urlParam = useParams();
    //--------------states-----------------
    const [postData, setPostData] = useState({
        title: "",
        content: "",
        photo: [],
        //userID
    });

    //-------------handlers----------------
    const handleUpdate = async () => {
      const { data } =
      await axios
        .patch(`http://localhost:3001/v1/post/${urlParam.postId}`)
        .then((res) => {
          console.log("patch data",data);
          console.log("patch res",res.data);
        });
    };
    const handleCreate = async () => {
      const { data } =
        await axios
          .post(`http://localhost:3001/v1/post`)
          .then((res) => {
            console.log("add res",res.data);
            console.log("add data",data);
          });
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          if(urlParam.postId){
            handleUpdate();
          }else{ handleCreate(); }
        } catch (error) {
          console.log(error);
          toast(error);
        }
      };

    //--------------effect-----------------
    useEffect(() => {
        if (urlParam.postId) {
            const getPost = async () => {
                const data = await axios.get(
                  `http://localhost:3001/v1/post/${urlParam.postId}`
                );
                setPostData(data.data);
              };
              getPost().catch(console.error);
        }
    }, []);

    return (
        <>
        <div className="mx-20 mt-10">
        <h1 className="text-amber-600 px-24 pt-4 text-5xl mb-40">{urlParam.postId? "edit post" :"Add new post"}</h1>
        <form className="mx-auto xl:w-4/12 2xl:w-2/5">
          <div className="flex flex-col m-20 justify-around pt-20 px-10 border-amber-600 border-2 rounded-3xl">
          <label htmlFor="title" className="text-amber-600 font-bold mx-3.5">
            Title
          </label>
          <input type="text" name="title" className="input input-bordered w-full max-w-xs m-5 text-white border-amber-600 focus:outline-amber-600 focus:text-amber-600 mx-auto" />
          <label htmlFor="content" className="text-amber-600 font-bold mx-3.5">
            Content
          </label>
          <textarea name="content" cols="20" rows="3" className="textarea textarea-primary w-full max-w-xs m-5 text-white border-amber-600 focus:outline-amber-600 focus:text-amber-600 mx-auto"></textarea>
          <label htmlFor="image" className="text-amber-600 font-bold mx-3.5">
            Image
          </label>
          <input type="file" name="content" className="file-input file-input-bordered file-input-primary w-full max-w-xs m-5 block mx-auto"/>
          <button className="btn md:btn-md m-10 bg-[#F28C18] text-black hover:text-white w-1/2 mx-auto">{urlParam.postId? "Update" :"Add"}</button>
          </div>
        </form>

        </div>
        </>
     );
}

export default CreatePost;