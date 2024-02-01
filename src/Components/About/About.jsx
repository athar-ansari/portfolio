import React from "react";

const About = () => {
  return (
    <>
      <div
        className="h-screen w-full font-sans antialiased text-gray-100 leading-normal tracking-wider bg-black bg-cover"
        style={{
          backgroundImage: "url('https://source.unsplash.com/1L71sPT5XKc')",
        }}
      >
        <div className="max-w-4xl flex items-center  h-auto lg:h-screen flex-wrap mx-auto lg:my-0">
        <h2 className="font-bold text-7xl  w-full text-center text-white  p-3 md:text-6xl ">
          About
        </h2>
          {/* Main Col */}
          <div
            id="profile"
            className="w-full mt-28 lg:mt-0 lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-gray-900 opacity-75 mx-6 lg:mx-0"
          >
            <div className="p-4 md:p-12 text-center lg:text-left">
              {/* Image for mobile view */}
              <div
                className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://source.unsplash.com/MP0IUfwrn0A')",
                }}
              ></div>

              <h1 className="text-3xl font-bold pt-8 lg:pt-0">Athar</h1>
              <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
              <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                {" "}
                What you do
              </p>
            </div>
          </div>

          {/* Img Col */}
          <div className="w-full lg:w-2/5">
            {/* Big profile image for side bar (desktop) */}
            <img
              src="https://source.unsplash.com/MP0IUfwrn0A"
              className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
