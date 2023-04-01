import CheckNews from "./Icons/CheckNews";

const NewsFeedEnd = () => {
    return (
        <>
        <div className="flex justify-center mt-10">
          <hr className="border-amber-600 border-2 relative w-20 my-10 mr-2" />
          <h2 className="text-3xl pt-4 py-2 font-body">you're all caught up</h2>
          <CheckNews className="p-1" />
          <hr className="border-amber-600 border-2 relative w-20 my-10 ml-2" />
        </div>
        </>
     );
}
export default NewsFeedEnd;