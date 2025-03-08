import About from "@/components/About";
import FamousPlace from "@/components/FamousPlace";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div>
      <div>
        <Hero />
      </div>
      <div className="min-h-screen">
        <FamousPlace/>
      </div>
      <div className="min-h-screen">
        <About/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>

  );
}
