import UserIcon from "../Icons/UserIcon";
export default function Navbar() {
  return (
    <div className="navbar bg-primary text-primary-content">
      <div className="flex-1 ml-5">
        <a className="btn btn-ghost normal-case text-xl ">Bloggy</a>
      </div>
      <div className="flex-none mr-5">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-150">
                <UserIcon/>
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="text-amber-500">
                Profile
                {/* <span className="badge">New</span> */}
              </a>
            </li>
            <li>
              <a className="text-amber-500">Settings</a>
            </li>
            <li>
              <a className="text-amber-500">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
