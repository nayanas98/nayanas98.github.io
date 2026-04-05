interface SkillCategory {
  name: string;
  skills: { name: string; level: number }[];
}

export default function Skills({ categories }: { categories: SkillCategory[] }) {
  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-foreground mb-4">Technical Expertise</h2>
      <div className="h-1 w-20 bg-cyan-500 rounded-full mb-12"></div>
      
      <div className="grid md:grid-cols-2 gap-12">
        {categories.map((category) => (
          <div key={category.name} className="space-y-6">
            <h3 className="text-xl font-semibold text-slate-200 border-b border-slate-800 pb-2">
              {category.name}
            </h3>
            <div className="space-y-4">
              {category.skills.map(skill => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2">
                    <div 
                      className="bg-cyan-500 h-2 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]" 
                      style={{ width: `${(skill.level / 5) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
