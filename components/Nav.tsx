"use client";

import React, { useState, useEffect } from "react";
import { ModeToggle } from "./ui/toggle-mode";
import Image from "next/image";
import { TiThMenu } from "react-icons/ti";
import { RiEyeCloseLine } from "react-icons/ri";

export default function Nav() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768;
      setIsMobile(isMobile);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMenuIconClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const largeScreenNav = (
    <ul className="flex space-x-4 text-center items-center justify-between w-full">
      <li className={`dark:invert cursor-pointer`}>
        <a href="#tech">TECH</a>
      </li>
      <li className={`dark:invert cursor-pointer`}>
        <a href="#projects">PROJECTS</a>
      </li>
      <li className={`dark:invert cursor-pointer`}>
        <a href="#about-me">ABOUT ME</a>
      </li>
      <li className="">
        <ModeToggle />
      </li>
    </ul>
  );

  const smallScreenNav = (
    <ul className="flex items-center justify-between w-full ">
      <li className="justify-self-end" onClick={handleMenuIconClick}>
        {isMenuOpen ? (
          <RiEyeCloseLine size={24} className="cursor-pointer dark:invert" />
        ) : (
          <TiThMenu size={24} className="cursor-pointer dark:invert" />
        )}
      </li>
      <li className="ml-6">
        <ModeToggle />
      </li>
    </ul>
  );

  const modalContent = (
    <div className="z-20 fixed inset-0 flex items-center justify-center bg-white dark:invert  font-bold">
      <img
        className="z-50 absolute top-0 h-full"
        src="./img/tailw.png"
        alt=""
      />
      <ul className="flex-col text-center flex gap-8">
        <li className="dark:invert cursor-pointer my-2">
          <a href="#tech">TECH</a>
        </li>
        <li className="dark:invert cursor-pointer my-2">PROJECTS</li>
        <li className="dark:invert cursor-pointer my-2">ABOUT ME</li>
      </ul>
    </div>
  );

  return (
    <div>
      <nav className="flex items-center w-full z-50 fixed  shadow-lg h-20 bg-opacity-90 backdrop-blur-lg backdrop-filter dark:invert">
        <div className="w-full">
          <ul className="flex items-center justify-between w-full">
            <li className="pl-40">
              <a href="" className="dark:invert">
                <Image
                  src="/./img/logonext.png"
                  alt=""
                  className="dark:invert"
                  width={100}
                  height={24}
                  priority
                />
              </a>
            </li>
            <div className="mr-20">
              {isMobile ? smallScreenNav : largeScreenNav}
            </div>
          </ul>
        </div>
      </nav>
      {isMenuOpen && modalContent}
    </div>
  );
}
