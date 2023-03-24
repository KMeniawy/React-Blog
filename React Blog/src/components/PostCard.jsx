export default function PostCard() {
  return (
    <div className="card lg:card-side bg-blue-900 shadow-xl m-10 h-64">
      <figure className="w-96">
        <img src="./src/assets/Imgs/pic (1).jpg"/>
      </figure>
      <div className="card-body">
        <h2 className="card-title">Dummy data</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, culpa?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Read More</button>
        </div>
      </div>
    </div>
  );
}
