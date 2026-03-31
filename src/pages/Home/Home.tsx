import Hero from "./Hero";
import Services from "./Services";
import Images from "./Images";
import FinalCTA from "./FinalCTA";
import Testimonials from "./Testimonials";
import { SEO } from "../../lib/SEO";


export default function HomePage() {
  return (
    <main className="min-h-screen">
      <SEO 
        title="Construcción, Galpones y Piletas"
        description="Empresa líder en construcción en Junín. Especialistas en galpones, piletas, pisos industriales y reformas integrales con más de 10 años de experiencia."
        path="/"
      />
      <Hero />

      <Services />

      <Images />

      <Testimonials />
      
      <FinalCTA />
    </main>
  );
}
