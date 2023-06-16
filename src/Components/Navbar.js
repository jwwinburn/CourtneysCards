import React from "react";
import { useNavigate } from "react-router-dom";
// import logo from "./src/Components/images/JCSG_Logo.png";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="navbar bg-primary text-primary-content flex justify-between">
        <div className="w-4/12 flex justify-around">
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
              navigate("holiday");
            }}
          >
            Holiday
          </a>
          <a
            className="btn btn-ghost normal-case text-xl"
            onClick={() => {
              navigate("justBecause");
            }}
          >
            Just Because
          </a>
          <a
            className="btn btn-ghost normal-case text-xl"
            onClick={() => {
              navigate("misc");
            }}
          >
            Misc
          </a>
        </div>

        <div className="btn w-18 flex justify-center">
          <img
            className="max-h-10"
            src="images/JCSG_Logo.png"
            onClick={() => {
              navigate("/");
            }}
          />
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
