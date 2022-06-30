import { async } from "@firebase/util";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
const Navbar = () => {
  let navigate = useNavigate();
  const { user, logOut } = UserAuth();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <Link to="/">
        <h1 className="text-red-500 text-4xl font-bold cursor-pointer">
          Top-Films
        </h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="text-white pr-2 font-semibold md:tracking-wider md:text-lg">Account</button>
          </Link>
          <button
            onClick={handleLogout}
            className="bg-rose-600 hover:bg-red-500 px-6 py-2 rounded cursor-pointer text-white"
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="text-white pr-2">Sign In</button>
          </Link>
          <Link to="signup">
            <button className="bg-rose-600 px-6 py-2 rounded cursor-pointer text-white">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
