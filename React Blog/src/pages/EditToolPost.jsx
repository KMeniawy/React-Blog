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
        <form className="border-primary border-2 xl:mt-32 xl:ml-20 md:ml-10  2xl:ml-40 w-1/3 p-5 rounded-lg">
          <input type="text" className="input input-bordered w-full max-w-xs m-5 text-white border-amber-600 focus:outline-amber-600 focus:text-amber-600" />
          <input type="text" className="input input-bordered w-full max-w-xs m-5 text-white border-amber-600 focus:outline-amber-600 focus:text-amber-600"/>
          <input type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs m-5 block "/>
          <button className="btn md:btn-md m-10 bg-[#F28C18] text-black hover:text-white">click me</button>
        </form>

        </div>
        </>
     );
}

export default CreatePost;