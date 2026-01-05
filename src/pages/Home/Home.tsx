import Hero from "./Hero";
import Services from "./Services";
import Images from "./Images";
import FinalCTA from "./FinalCTA";
import Testimonials from "./Testimonials";


export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />

      <Services />

      <Images />

      <Testimonials />
      
      <FinalCTA />
    </main>
  );
}
