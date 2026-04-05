import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

interface Project {
  id: string;
  title: string;
  stack: string[];
  link: string;
  content: string;
}

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="py-24 px-6 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-4">Featured Work</h2>
        <div className="h-1 w-20 bg-cyan-500 rounded-full mb-12"></div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-slate-800 border border-slate-700/50 rounded-xl p-8 hover:border-cyan-500/50 transition-all hover:shadow-xl hover:shadow-cyan-900/20"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-semibold text-slate-100 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 p-2">
                    {project.link.includes('github.com') ? <FaGithub size={24} /> : <FiExternalLink size={24} />}
                  </a>
                )}
              </div>
              
              <div 
                className="prose prose-sm prose-invert mb-8 text-slate-400 prose-ul:my-2 prose-li:my-1"
                dangerouslySetInnerHTML={{ __html: project.content }}
              />

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.stack.map(tech => (
                  <span 
                    key={tech} 
                    className="px-3 py-1 bg-cyan-950/40 text-cyan-400 text-sm rounded-full border border-cyan-900/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
