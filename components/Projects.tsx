"use client";
import React from "react";
import { Button } from "./ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


function Projects() {


  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
 }, [])
  function openWebsiteInNewTab(url: string) {
    window.open(url, "_blank");
  }

  return (
    <>
      <div data-aos="fade-up" className="text-center p-20 ">
        <h1 id="projects" className="font-medium text-3xl  ">
          Projects
        </h1>
      </div>
      <div data-aos="fade-up" className="g grid md:grid-cols-3 sm:grid-cols-2 gap-4 justify-items-center mx-auto max-w-5xl ">
        <Card className="bg-gray-300 transparent dark:invert relative hover:bg-orange-200 transition duration-300 ease-in-out h-60 ">
          <img className="  absolute " src="./img/tailw.png" alt="" />
          <CardHeader className="">
            <CardTitle className="text-gray-800">Fabricadserv</CardTitle>
            <CardDescription className="text-gray-800 mb-1 pb-10 ">
              Fabricad is an online furniture shop created with React for the
              frontend and Express for the server. It includes Stripe payment
              integration and will be launched once the products are ready for
              sale.
            </CardDescription>
            <Button
              className="absolute w-60 bottom-4 mb-1"
              onClick={() =>
                openWebsiteInNewTab("https://fabricadserv.vercel.app/")
              }
            >
              visit
            </Button>
          </CardHeader>
        </Card>
        <Card className="bg-gray-300 transparent dark:invert relative hover:bg-orange-200 transition duration-300 ease-in-out ">
          <img className="  absolute " src="./img/tailw.png" alt="" />
          <CardHeader className="">
            <CardTitle className="text-gray-800">Image Gallery</CardTitle>
            <CardDescription className="text-gray-800 mb-1 pb-10 ">
              An image search web app built with React and styled with Tailwind
              CSS, offering a simple way to explore a variety of images through
              API-based searches.
            </CardDescription>
            <Button
              className="absolute w-60 bottom-4 mb-1"
              onClick={() =>
                openWebsiteInNewTab("https://react-tw-img-gallery.netlify.app/")
              }
            >
              visit
            </Button>{" "}
          </CardHeader>
        </Card>

        <Card className="bg-gray-300 transparent dark:invert relative hover:bg-orange-200 transition duration-300 ease-in-out ">
          <img className="  absolute " src="./img/tailw.png" alt="" />
          <CardHeader className="">
            <CardTitle className="text-gray-800">Express blog</CardTitle>
            <CardDescription className="text-gray-800 mb-1 pb-10 ">
              <div className="">
                <img src="/img/wip.png" alt="" className="w-20  mx-auto mt-1" />
                <p className="mx-auto mt-4">Adding new features! Stay tuned </p>
              </div>
              {/* blog application developed using Node.js and MongoDB. It follows
              the Express Router and Model-View-Controller (MVC) architectural
              pattern. */}
            </CardDescription>
            <Button
              className="absolute w-60 bottom-4"
              // onClick={() => openWebsiteInNewTab("")}
            >
              visit
              {/* "https://express-nodejs-ll9x.onrender.com/" */}
            </Button>
          </CardHeader>
        </Card>

        <Card className="bg-gray-300 h-60 transparent dark:invert relative hover:bg-orange-200 transition duration-300 ease-in-out ">
          <img className="  absolute " src="./img/tailw.png" alt="" />
          <CardHeader className="">
            <CardTitle className="text-gray-800">Expense tracker</CardTitle>
            <CardDescription className="text-gray-800 mb-1 pb-10 ">
              expense tracker app built with React that allows you to add or
              delete fictive transactions and provides a balance calculation
              feature.
            </CardDescription>
            <Button
              className="absolute w-60 bottom-4"
              onClick={() =>
                openWebsiteInNewTab(
                  "https://react-expense-tracker-final.netlify.app/"
                )
              }
            >
              visit
            </Button>{" "}
          </CardHeader>
        </Card>
        <Card className="bg-gray-300  transparent dark:invert relative hover:bg-orange-200 transition duration-300 ease-in-out ">
          <img className="  absolute " src="./img/tailw.png" alt="" />
          <CardHeader className="">
            <CardTitle className="text-gray-800"> Car-Query</CardTitle>
            <CardDescription className="text-gray-800 mb-1 pb-10 ">
              A web app created with JavaScript that uses an API to fetch car
              data. You can search by car make and model. It's a prototype for a
              small SaaS idea.
            </CardDescription>
            <Button
              className="absolute w-60 bottom-4"
              onClick={() =>
                openWebsiteInNewTab("https://car-query.netlify.app")
              }
            >
              visit
            </Button>{" "}
          </CardHeader>
        </Card>
      </div>
    </>
  );
}

export default Projects;
