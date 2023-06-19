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

          <button
            className="btn bg-primary"
            onClick={() => window.my_modal_3.showModal()}
          >
            Submit Email
          </button>
          <dialog id="my_modal_3" className="modal">
            <form method="dialog" className="modal-box bg-primary">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
              <h3 className="font-bold text-lg">Thank You!</h3>
              <p className="py-4">You have been added to the mailing list.</p>
            </form>
          </dialog>
        </div>
      </div>
    </div>
  );
};
