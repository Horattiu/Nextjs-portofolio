"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { TiThMenu } from "react-icons/ti";
import { RiEyeCloseLine } from "react-icons/ri";
import { ModeToggle } from "./ui/toggle-mode";

export default function Nav() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth <= 768
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(typeof window !== "undefined" && window.innerWidth <= 768);
    };

    handleResize(); // Set the initial value on component mount.
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMenuIconClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigateToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    closeMenu();
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const smallScreenNav = (
    <ul className="flex items-center justify-between w-full dark:invert pl-10">
      <li className="justify-self-end cursor-pointer">
        <button
          onClick={handleMenuIconClick}
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? (
            <RiEyeCloseLine size={24} className="cursor-pointer dark:invert" />
          ) : (
            <TiThMenu size={24} className="cursor-pointer dark:invert" />
          )}
        </button>
      </li>
      <li className="ml-6 cursor-pointer">
        <ModeToggle />
      </li>
    </ul>
  );

  const largeScreenNav = (
    <ul className="flex space-x-4 text-center items-center justify-between w-full dark:invert">
      <li
        className={`hover:text-orange-500 transition dark:invert cursor-pointer`}
      >
        <a href="#tech">TECH</a>
      </li>
      <li
        className={`hover:text-orange-500 transition ease-in dark:invert cursor-pointer`}
      >
        <a href="#projects">PROJECTS</a>
      </li>
      <li
        className={`hover:text-orange-500 transition dark:invert cursor-pointer`}
      >
        <a href="#about">ABOUT ME</a>
      </li>
      <li className="">
        <ModeToggle />
      </li>
    </ul>
  );

  return (
    <div>
      <nav className="flex items-center w-full z-50 fixed shadow-lg h-20 bg-opacity-90 backdrop-blur-lg backdrop-filter">
        <div className="w-full">
          <ul className="flex items-center justify-between w-full">
            <li className="pl-10 md:pl-40 sm:pl-20">
              <a href="" className="">
                <Image
                  src="/./logonext.png"
                  alt=""
                  className="dark:invert w-24"
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
      {isMenuOpen && (
        <div
          className="z-20 fixed inset-0 flex items-center justify-center bg-white dark:invert font-bold"
          onClick={closeMenu}
        >
          <ul className="flex-col text-center flex gap-8 dark:invert">
            <li
              className="my-2 cursor-pointer"
              onClick={() => navigateToSection("tech")}
            >
              TECH
            </li>
            <li
              className="my-2 cursor-pointer"
              onClick={() => navigateToSection("about")}
            >
              ABOUT ME
            </li>
            <li
              className="my-2 cursor-pointer"
              onClick={() => navigateToSection("projects")}
            >
              PROJECTS
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
