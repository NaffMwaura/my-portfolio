//import React from 'react';
import { motion } from "framer-motion";
import { Code2, Library, Database, Cloud, Cpu, Wrench } from 'lucide-react';

const skillCategories = [
  {
    category: "Languages",
    icon: Code2,
    color: "text-blue-400",
    items: ["JavaScript", "TypeScript", "Python", "SQL", "C"],
  },
  {
    category: "Frameworks & Libraries",
    icon: Library,
    color: "text-purple-400",
    items: ["React", "Next.js", "Angular", "Node.js", "Express", "Tailwind CSS", "Bootstrap", "Fast API", "TensorFlow"],
  },
  {
    category: "Tools & Platforms",
    icon: Database,
    color: "text-green-400",
    items: ["Git", "GitHub", "PostgreSQL", "MongoDB", "Figma", "Vercel", "Docker"],
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    color: "text-yellow-400",
    items: ["Azure", "GitHub Actions", "CI/CD", "Linux", "Nginx", "EC2"],
  },
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section 
      id="skills" 
      // FIX: Reduced bottom padding to pb-0 or pb-10 to prevent large gaps before the next section
      className="relative scroll-mt-20 bg-[#0b0c2a] text-white pt-20 md:pt-32 pb-10 overflow-hidden"
    >
      {/* Background Decorative Glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-500 font-mono font-medium tracking-widest uppercase text-sm mb-2"
          >
            06. Technical Arsenal
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-bold flex items-center justify-center gap-4"
          >
            <Cpu className="text-cyan-400 hidden sm:block" size={40} />
            Skills & Technologies
          </motion.h3>
        </div>

        {/* Skills Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:border-blue-500/40 transition-all duration-500 hover:shadow-[0_15px_40px_rgba(30,64,175,0.1)]"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon className={skill.color} size={24} />
                </div>
                <h4 className="text-lg font-bold text-white tracking-tight">
                  {skill.category}
                </h4>
              </div>

              {/* Skills List as Pill Badges */}
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-xl text-xs font-mono text-slate-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all cursor-default"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>

              {/* Subtle corner decoration */}
              <div className="absolute top-2 right-2 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                 <Wrench size={12} className="text-slate-700" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Banner and extra margin removed here 
            to eliminate the whitespace issue. 
        */}
      </div>
    </section>
  );
};

export default Skills;