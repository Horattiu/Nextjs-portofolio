"use client";
import { useRef, RefObject } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "./ui/button";

export const Contact = () => {
  const form: RefObject<HTMLFormElement | null> = useRef(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "YOUR_SERVICE_ID",
          "YOUR_TEMPLATE_ID",
          form.current,
          "YOUR_PUBLIC_KEY"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <>
      <div className="text-center p-10 flex justify-center gap-4">
        <h1 className="text-xl">Drop a line! </h1>
        <img src="./img/message.png" alt="" className="w-20 dark:invert" />
      </div>
      <form
        onSubmit={sendEmail}
        className="px-10 lg:p-0 max-w-md mx-auto dark:invert"
      >
        <div className="mb-4">
          <input
            className="dark:invert rounded-xl w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
            // className="shadow-md border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="user_name"
            placeholder="name"
          />
        </div>
        <div className="mb-4">
          <input
            className="dark:invert rounded-xl w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
            type="email"
            name="user_email"
            placeholder="email address"
          />
        </div>
        <div className="mb-6">
          <textarea
            className="dark:invert rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
            name="message"
            placeholder="message..."
          ></textarea>
        </div>
        <div className="text-center">
          {/* <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Send
        </button> */}
          <Button className=" dark:invert px-16 transition-transform hover:scale-105  mb-32">
            submit
          </Button>
        </div>
      </form>
    </>
  );
};
