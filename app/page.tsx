import About from "@/components/about/About";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Project from "@/components/project/Project";

export default function Home() {
  return (
    <div className="bg-primaryBlack">
      <div className="">
        <Navbar />
        <Hero />
        <Project />
        <About />
        <Footer />
      </div>
    </div>
  );
}
