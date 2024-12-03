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
      <div>
        <FamousPlace/>
      </div>
      <div>
        <About/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>

  );
}
