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

function Projects() {
  return (
    <>
      <div className="text-center p-20">
        <h1 className="font-medium text-3xl ">Projects</h1>
      </div>
      <div className="g grid md:grid-cols-3 sm:grid-cols-2 gap-4 justify-items-center mx-auto max-w-5xl ">
        <Card className="bg-gray-300 transparent dark:invert relative hover:bg-orange-200 transition duration-300 ease-in-out ">
          <img className="  absolute " src="./img/tailw.png" alt="" />
          <CardHeader className="">
            <CardTitle className="text-gray-800">Fabricadserv</CardTitle>
            <CardDescription className="text-gray-800">
              website i created for Fabricadserv, a furniture company in
              Cluj-Napoca. the website includes a functional working card and a
              working apyment system integrated with stripe.
            </CardDescription>
            <Button>visit</Button>
          </CardHeader>
        </Card>

        <Card className="bg-gray-300 transparent dark:invert relative hover:bg-orange-200 transition duration-300 ease-in-out ">
          <img className="  absolute " src="./img/tailw.png" alt="" />
          <CardHeader className="">
            <CardTitle className="text-gray-800">express blog</CardTitle>
            <CardDescription className="text-gray-800">
              it wollos the MVC router control bla bla
            </CardDescription>
            <Button>visit</Button>
          </CardHeader>
        </Card>

        <Card className="bg-gray-300 transparent dark:invert relative hover:bg-orange-200 transition duration-300 ease-in-out ">
          <img className="  absolute " src="./img/tailw.png" alt="" />
          <CardHeader className="">
            <CardTitle className="text-gray-800">filter component</CardTitle>
            <CardDescription className="text-gray-800">
              Built my knowledge on the language from ground up following ES6+
              concepts. Studied both in OOP and Functional paradigms.
            </CardDescription>
            <Button>visit</Button>
          </CardHeader>
        </Card>

        <Card className="bg-gray-300 transparent dark:invert relative hover:bg-orange-200 transition duration-300 ease-in-out ">
          <CardHeader className="">
            <CardTitle className="text-gray-800">expense tracker</CardTitle>
            <CardDescription>
              Built my knowledge on the language from ground up following ES6+
              concepts. Studied both in OOP and Functional paradigms.
            </CardDescription>
            <Button>visit</Button>
          </CardHeader>
        </Card>
      </div>

      {/* <div className="w-full flex items-center justify-center flex-col  dark:invert">
        <h1 className="text-4xl font-medium text-center p-10  dark:invert">
          Projects
        </h1>
        <img src="./img/folder.png" alt="" className="w-16" />
      </div>
      <div className="grid  md:grid-cols-3 sm:grid-cols-2  gap-6 relative w-full p-14 dark:invert  ">
        <div className="relative flex flex-col items-center justify-center h-64 bg-gray-300 dark:invert">
          <h1 className=" dark:invert text-center text-sm ">projects</h1>
          <p className="dark:invert text-center text-sm ">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <Button className=" mt-20 px-10 z-10 dark:invert">visit</Button>
        </div>
        <div className="relative flex flex-col items-center justify-center h-64 bg-gray-300 ">
          <h1 className="dark:invert text-center">projects</h1>
          <p className="dark:invert text-center">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <Button className=" mt-20 px-10 z-10 dark:invert">visit</Button>
        </div>
        <div className="relative flex flex-col items-center justify-center h-64 bg-gray-300">
          <h1 className="dark:invert text-center">projects</h1>
          <p className="dark:invert text-center">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <Button className=" mt-20 px-10 z-10 dark:invert">visit</Button>
        </div>
      </div> */}
    </>
  );
}

export default Projects;
