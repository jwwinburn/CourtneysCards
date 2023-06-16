import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="navbar bg-primary text-primary-content flex flex-wrap">
        <div className="flex flex-auto">
          <a
            className="font-sans btn btn-ghost normal-case text-xl"
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </a>
          <a
            className="font-sans btn btn-ghost normal-case text-xl"
            onClick={() => {
              navigate("/occasions");
            }}
          >
            Special Occasions
          </a>
          <a
            className="btn btn-ghost normal-case text-xl"
            onClick={() => {
              navigate("/holiday");
            }}
          >
            Holiday
          </a>
          <a
            className="btn btn-ghost normal-case text-xl"
            onClick={() => {
              navigate("/justBecause");
            }}
          >
            Just Because
          </a>
          <a
            className="btn btn-ghost normal-case text-xl"
            onClick={() => {
              navigate("/misc");
            }}
          >
            Misc
          </a>
        </div>
        <div>
          <div>
            <input
              type="text"
              placeholder="Search here..."
              className="input w-48 max-w-xs pr-8"
            />
            <a className="btn btn-ghost normal-case text-xl">About</a>
            <a className="btn btn-ghost normal-case text-xl">Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
