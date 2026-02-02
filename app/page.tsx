// app/page.tsx (SERVER)

import Hero from "@/components/sections/Hero";
import Advantages from "@/components/sections/Advantages";
import ProjectsHero from "@/components/sections/ProjectsHero";
import TrustMetrics from "@/components/sections/TrustMetrics";
import BlogHero from "@/components/sections/BlogHero";



export default function HomePage() {
  return (
    <>     
      <main>
        
        <Hero />
        <Advantages />
        <ProjectsHero />
        <TrustMetrics />
        <BlogHero/>
      </main>
    </>
  );
}
