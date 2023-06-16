import React from "react";
// import logo from "./src/Components/images/JCSG_Logo.png";

function Navbar() {
  return (
        <div>
      <div className="navbar bg-primary text-primary-content flex justify-between">
        <div className="w-4/12 flex justify-around">
          <a className="font-sans btn btn-ghost normal-case text-xl">
            Special Occasions
          </a>
          <a className="btn btn-ghost normal-case text-xl">Holiday</a>
          <a className="btn btn-ghost normal-case text-xl">Just because</a>
          <a className="btn btn-ghost normal-case text-xl">Misc</a>
        </div>
        
        <div className="w-4/12 flex justify-center">
          <img className="max-h-12" src="images/JCSG_Logo.png" />
        </div>

        <div className="w-4/12 flex justify-end pr-5">
          <input
            type="text"
            placeholder="Search here..."
            className="input w-48 max-w-xs pr-8"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
