import React from "react";
import { Button } from "./ui/button";

function About() {
  return (
    <div
      id="#about-me"
      className="flex justify-center items-center gap-x-44 h-full flex-col sm:flex-row md:w-screen "
    >
      <div className="rounded-full ">
        <img
          className=" w-56 h-56 rounded-full object-cover"
          src="./img/portrait.jpg"
          alt=""
        />
      </div>
      <div className="text-left max-w-lg p-10 ">
        <h1 className="text-4xl font-medium leading-tight tracking-tighter  lg:leading-[1.1]">
          about
        </h1>
        <hr className="w-16" />
        <p className="pt-4">
          I am highly enthusiastic about software development with with a
          "guilty" passion for UI design. I've had the pleasure of working with
          a few clients, bringing their visions to life. I am actively focused
          on expanding my skill set to become a full-stack developer. This is my
          portfolio.
        </p>
        <div className="flex gap-6 pt-6">
          <Button className="px-8 dark:invert ">resume</Button>
          <Button className="px-8 dark:invert">Gitub</Button>
        </div>
      </div>
    </div>
  );
}

export default About;
