import { FiMail, FiMapPin } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

interface AboutProps {
  content: string;
  location: string;
  email: string;
  linkedin: string;
}

export default function About({ content, location, email, linkedin }: AboutProps) {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-3 gap-12 items-start">
        <div className="md:col-span-1 space-y-6">
          <h2 className="text-3xl font-bold text-foreground">About Me</h2>
          <div className="h-1 w-20 bg-cyan-500 rounded-full"></div>
          
          <div className="space-y-4 pt-4 text-slate-400">
            <div className="flex items-center gap-3">
              <FiMapPin className="text-cyan-500" size={20} />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-3">
              <FiMail className="text-cyan-500" size={20} />
              <a href={`mailto:${email}`} className="hover:text-cyan-400 transition-colors">{email}</a>
            </div>
            <div className="flex items-center gap-3">
              <FaLinkedin className="text-cyan-500" size={20} />
              <a href={linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">LinkedIn Profile</a>
            </div>
          </div>
        </div>
        
        <div className="md:col-span-2 space-y-6">
          <div 
            className="prose prose-invert prose-cyan max-w-none text-slate-300 leading-relaxed space-y-4"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    </section>
  );
}
