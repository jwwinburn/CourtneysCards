import React from "react";
import { useNavigate } from "react-router-dom";
// import logo from "./src/Components/images/JCSG_Logo.png";

function Navbar() {
  const navigate = useNavigate();

  return (

    <header class="sticky top-0 z-50">
    <div>
      <div className="navbar bg-primary text-primary-content flex justify-between">
        <div className="w-4/12 flex justify-around">
          <a
            className="font-sans font-normal btn btn-ghost normal-case text-xl"
            onClick={() => {
              navigate("/occasions");
            }}
          >
            Special Occasions
          </a>
          <a
            className="btn font-normal btn-ghost normal-case text-xl"
            onClick={() => {
              navigate("holiday");
            }}
          >
            Holiday
          </a>
          <a
            className="btn font-normal btn-ghost normal-case text-xl"
            onClick={() => {
              navigate("justBecause");
            }}
          >
            Just Because
          </a>
          <a
            className="btn font-normal btn-ghost normal-case text-xl"
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


        <div className="w-4/12 flex justify-end pr-4">
          <div>
            <button
              className="w-14 h-8 btn btn-ghost"
              onClick={() => {
                navigate("signin");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="mt-1 w-7 h-7"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </button>
          </div>
          <div className="pr-4">
            <button
              className="w-14 h-8 btn btn-ghost"
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
    </header>

  );
}

export default Navbar;
