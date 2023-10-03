import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Experiment from "@/components/project/Experiment";
import Project from "@/components/project/Project";

export default function Home() {
  return (
    <div className="bg-primaryBlack">
      <div className="">
        <Navbar />
        <Hero />
        <Project />
        <Experiment />
      </div>
    </div>
  );
}
