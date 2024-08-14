import { useContext } from "react";
import { AuthContext } from "./../provider/AuthProvider";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user.photoURL);
  const profileImg = user?.photoURL;

  const handleLogOut = () => {
    // const auth = getAuth();
    logOut()
    .then((res) => {
      console.log(res)
    }).catch((error) => {
      console.log(error)
    });
  };

  return (
    <div className="navbar bg-base-100 shadow-sm container px-4 mx-auto">
      <div className="flex-1">
        <div className="flex gap-2 items-center">
          <img className="w-auto h-7" src="" alt="" />
          <Link to="http://localhost:5173/" className="font-bold">SoloSphere</Link>
        </div>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <div>Home</div>
          </li>
          <li>
            <Link to="/alljobs">All Jobs</Link>
          </li>

          {/* if user not found then show login button */}
          {!user && (
            <>
              <li>
                <Link to={"/login"}>Login</Link>
              </li>
            </>
          )}
        </ul>

        <div className="dropdown dropdown-end z-50">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            {user && (
              <>
                <div className="w-10 rounded-full" title="">
                  <img
                  //( referrerpolicy )  , if google prifile pic loading issue;
                    referrerPolicy="no-referrer"

                    
                    alt="User Profile Photo"
                    src={profileImg}
                  />
                </div>
              </>
            )}
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to={"/addjob"} className="justify-between">Add Job</Link>
            </li>
            <li>
              <Link to={"/mypostedjob"}>My Posted Jobs</Link>
            </li>
            <li>
              <Link to={"/mybids"}>My Bids</Link>
            </li>
            <li>
              <Link to={"/bidrequest"}>Bid Requests</Link>
            </li>
            {user && 
              <>
                <li className="mt-2">
                  <button
                    onClick={handleLogOut}
                    className="bg-gray-200 block text-center"
                  >
                    Logout
                  </button>
                </li>
              </>
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
