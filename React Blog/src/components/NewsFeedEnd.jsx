import CheckNews from "./Icons/CheckNews";

const NewsFeedEnd = () => {
    return (
        <>
        <div className="flex justify-center sm:mt-10 xs:mb-0 xs:mt-1">
          <hr className="border-amber-600 border-2 relative sm:w-20 xs:w-10 my-10 mr-2" />
          <h2 className="sm:text-3xl xs:text-md sm:pt-4 xs:pt-7 py-2 font-body">you're all caught up</h2>
          <CheckNews className="sm:p-1 xs:p-3" />
          <hr className="border-amber-600 border-2 relative sm:w-20 xs:w-10 my-10 ml-2" />
        </div>
        <br />
        </>
     );
}
export default NewsFeedEnd;