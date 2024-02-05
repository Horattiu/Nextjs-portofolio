import React from "react";
import 'aos/dist/aos.css'; // Import AOS CSS directly


function Landing() {
  return (
    <div className="flex flex-col sm:flex-row gap-0 md:gap-16  justify-center items-center w-full h-screen">
      <div className="  text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1] ">
        <h1 className=" text-red-500 dark:invert">hi</h1>
        <h1 className=" ">I'm Oltean Horatiu</h1>
        <h1 className=" ">web developer</h1>
        <h1 className="">based in Romania</h1>
        
   
      </div>
      <div className="">
        <img
          src="./img/pc.png"
          alt=""
          className="dark:invert lg:w-96 md:w-96 w-80"
        />
      </div>
    </div>
  );
}

export default Landing;
