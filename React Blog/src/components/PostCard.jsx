import { Link } from "react-router-dom";
const count = 50;
export default function PostCard(props) {
  {console.log(props)}
  return (
    <div className="card lg:card-side bg-indigo-900 shadow-xl m-10 h-64">
      <figure className="w-96">
        <img src={props.photo[0].url} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.content.slice(0,count)+(props.content.length>count ? "...": "")}</p>
        <div className="card-actions justify-end">
          <p>written by {props.user.username}</p>
          <Link to={`/post/${props._id}`} className="btn btn-primary">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
