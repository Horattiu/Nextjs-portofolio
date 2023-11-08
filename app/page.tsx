import Image from "next/image";
import Nav from "../components/Nav";
import { Button } from "@/components/ui/button";
import About from "@/components/About";
import Tech from "@/components/Tech";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import "./csss.css";
import Landing from "@/components/Landing";
import { Contact } from "@/components/Contact";
import dynamic from "next/dynamic";
// import dynamic from "next/dynamic";

const DynamicNav = dynamic(() => import("../components/Nav"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="">
      <DynamicNav />
      <Landing />
      <About />
      <Tech />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
