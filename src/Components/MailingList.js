import React from "react";

export const MailingList = () => {
  return (
    <div className="hero h-72 bg-white">
      <div className="hero-overlay bg-opacity-20"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-4xl">
          <h1 className="mb-5 text-4xl font-bold text-black">
            Want first dibs?
          </h1>
          <p className="mb-5 text-lg text-black">
            Join our mailing list to find out when we release new cards!
          </p>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-primary w-full max-w-xs bg-white"
          />
        </div>
      </div>
    </div>
  );
};
