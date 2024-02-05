
'use client'


import React from "react";
import { Button } from "./ui/button";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";





function About() {
  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
 }, [])


  return (
    <div data-aos="fade-up"
      id="about"
      className="flex justify-center items-center gap-x-44 h-full flex-col sm:flex-row md:w-screen pb-20 "
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
          I'm a web developer and illustrator who has a genuine passion for all
          things related to computers, especially in software. I enjoy crafting
          web solutions and continuously expanding my knowledge to grow as a
          developer. Have a creative challenge? I'm all ears.
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
