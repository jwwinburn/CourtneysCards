import React from "react";

function Navbar() {
  return (
    <div>
      <div className="navbar bg-primary text-primary-content flex flex-wrap">
            <div className="flex flex-auto">
        <a className="font-sans btn btn-ghost normal-case text-xl">Special Occasions</a>
        <a className="btn btn-ghost normal-case text-xl">Holiday</a>
        <a className="btn btn-ghost normal-case text-xl">Just because</a>
        <a className="btn btn-ghost normal-case text-xl">Misc</a>
      </div>
            <div>
                <div>
        <input type="text" placeholder="Search here..." className="input w-48 max-w-xs pr-8" />
        <a className="btn btn-ghost normal-case text-xl">About</a>
        <a className="btn btn-ghost normal-case text-xl">Contact</a>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Navbar;
