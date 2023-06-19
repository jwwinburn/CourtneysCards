import React from "react";

function CelebrateYourGrad() {
    return (
        <div className="hero rounded-none min-h-screen border-black">
            <div className="hero-content flex-col lg:flex-row">
                <img
                    classname="rounded-none"
                    src="/images/Graduation/pexels-tara-winstead-7723798.jpg"
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-4xl font-bold">Celebrate Your Grad!</h1>
                    <p className="py-6">
                        Kindergarten, Elementary School, Middle School, High School, or College - We've got you covered for all your graduation cards.
                    </p>
                    <button className="rounded-none btn btn-primary">Order Now</button>
                </div>
                <img
                    classname="rounded-none"
                    src="/images/Graduation/pexels-tara-winstead-7723793.jpg"
                    className="max-w-sm rounded-lg shadow-2xl"
                />

            </div>
        </div>
    );
}

export default CelebrateYourGrad;
