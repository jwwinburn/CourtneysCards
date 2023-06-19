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

        <div
          className="btn w-18 mask mask-circle flex justify-center"
          onClick={() => {
            navigate("/");
          }}
        >
          <img className=" max-h-10" src="images/JCSG_Logo.png" />
        </div>

        <div className="w-4/12 flex justify-end pr-5">
          <div className="pr-4">
            <button
              className="btn btn-ghost"
              onClick={() => {
                navigate("/shoppingcart");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-8 h-8"
                href="www.google.com"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </button>
          </div>
          <input
            type="text"
            placeholder="Search here..."
            className="input w-48 max-w-xs"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
