import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <div className="bg-primaryBlack">
      <div className="">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}
