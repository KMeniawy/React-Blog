import { Link } from "react-router-dom";
const count = 50;
export default function PostCard(props) {
  return (
    <div className="card lg:card-side bg-indigo-900 shadow-md m-10 hover:bg-secondary hover:shadow-primary hover:transition-all sm:h-1/5">
      <figure className="sm:w-auto lg:w-[400px] bg-white lg:bg-none lg:ml-o">
        <img src={props.photo[0].url} className="w-auto xl:overflow-hidden lg:bg-center"/>
      </figure>
      <div className="card-body">
        <h2 className="card-title font-body">{props.title}</h2>
        <p className="font-body">{props.content.slice(0,count)+(props.content.length>count ? "...": "")}</p>
        <div className="card-actions justify-end font-body">
          <p>written by {props.user.username}</p>
          <Link to={`/post/${props._id}`} className="btn btn-primary hover:animate-pulse">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
