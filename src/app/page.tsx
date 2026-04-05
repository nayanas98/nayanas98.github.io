import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { getBioData, getProjectsData, getSkillsData } from "@/lib/markdown";

export default async function Home() {
  const bioData = await getBioData();
  const projectsData = await getProjectsData();
  const skillsData = getSkillsData();

  return (
    <main className="min-h-screen bg-slate-900 text-slate-50 selection:bg-cyan-500/30 selection:text-cyan-200">
      <Hero 
        title={bioData.title || "Nayana Sajeev"} 
        role={bioData.role || "QA Automation Engineer"} 
      />
      <About 
        content={bioData.content} 
        location={bioData.location} 
        email={bioData.email} 
        linkedin={bioData.linkedin} 
      />
      <Projects projects={projectsData} />
      <Skills categories={skillsData} />
      <Contact />
      
      <footer className="py-8 text-center text-slate-500 text-sm bg-slate-950">
        <p>© {new Date().getFullYear()} Nayana Sajeev. Built with Next.js & Tailwind CSS.</p>
      </footer>
    </main>
  );
}
