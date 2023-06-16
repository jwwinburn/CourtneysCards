import React from "react";

function Hero() {
  return (
    <div className="hero rounded-none min-h-screen border-black">
  <div className="hero-content flex-col lg:flex-row">
    <img classname="rounded-none" src="https://cdn.pixabay.com/photo/2021/01/25/07/04/hearts-5947464_1280.png" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Valentine's Day Sale!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="rounded-none btn btn-primary">Order Now</button>
    </div>
  </div>
</div>


    
   
  );
}

export default Hero;
