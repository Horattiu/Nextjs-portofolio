import React from "react";

function Footer() {
  return (
    <div className="">
      <div className="dark:invert flex flex-col items-center justify-center bg-gray-100 p-10	">
        <div className=" flex flex-col items-center justify-center  bottom-2 ">
          <h5 className="dark:invert">Some inspirational quote</h5>
          <p className="dark:invert">-somebody</p>
          <hr className=" w-32 p-1   border-gray-900 " />
          <p className="dark:invert">
            @2023 by Oltean Horatiu.personal portofolio.
          </p>
          <p className=" dark:invert mb-9">contact:dev.Horatiu@gmail.com </p>
        </div>
        <div className="lg:w-1/3 dark:invert ">
          <img
            src="./img/scene.png"
            alt=""
            className="dark:invert object-cover "
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
