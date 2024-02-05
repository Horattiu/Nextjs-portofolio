'use client'

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




function Tech() {

  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
 }, [])

  return (
    <>
    <div >
        <h1 data-aos="fade-up"
          className=" h-32 flex items-center justify-center text-4xl font-medium  p-20"
          id="tech"
        >
          Technologies
        </h1>
      </div>
      <div  data-aos="fade-up" className="w-64  mx-auto ">
        <img src="./img/robot.png" alt="" className="pb-5 dark:invert" />
      </div>
      <div data-aos="fade-up" className=" grid md:grid-cols-3 sm:grid-cols-2 gap-4 justify-items-center mx-auto max-w-5xl  ">
        <Card className=" ">
          <CardHeader>
            <CardTitle>JavaScript</CardTitle>
            <CardDescription>
              Built my knowledge on the language from ground up following ES6+
              concepts. Studied both in OOP and Functional paradigms.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="">
          <CardHeader>
            <CardTitle>React</CardTitle>
            <CardDescription>
              React's component-based architecture promotes reusability and
              modularity, allowing me to build complex user interfaces
              efficiently.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="">
          <CardHeader>
            <CardTitle>TypeScript</CardTitle>
            <CardDescription>
              TypeScript's static typing system helps catch errors during
              development, making my code more robust and reliable.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="">
          <CardHeader>
            <CardTitle>NodeJS</CardTitle>
            <CardDescription>
              Node.js allows me to use JavaScript on the server-side, creating a
              full-stack development environment using a single language.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="">
          <CardHeader>
            <CardTitle>MongoDB</CardTitle>
            <CardDescription>
              MongoDB is schemaless, which means I can change the structure of
              data on the fly without impacting existing data.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="">
          <CardHeader>
            <CardTitle>Tailwind CSS</CardTitle>
            <CardDescription>
              Tailwind allows me to quickly prototype and build user interfaces
              without the need to write custom CSS from scratch.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card />
      </div>
    </>
  );
}

export default Tech;
