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
    const handleUpdate = () => {
      axios
        .put(`http://localhost:3001/v1/post/${urlParam.postId}`)
        .then((res) => {
          console.log(res.data);
        });
    };
    const handleCreate = () => {
        axios
          .post(`http://localhost:3001/v1/post/${urlParam.postId}`)
          .then((res) => {
            console.log(res.data);
          });
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
            <h1></h1>
        </>
     );
}

export default CreatePost;