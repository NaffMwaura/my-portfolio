//import React from 'react';
import { motion } from "framer-motion";
import { 
  Briefcase, 
  Calendar, 
  Terminal, 
   
  Award, 
   
  Cpu, 
  Code2, 
  Library, 
  Database, 
  Cloud 
} from 'lucide-react';

const experiences = [
  {
    title: "Software Engineering Intern",
    company: "Momentum Labs",
    description: "Architecting custom software solutions for Quantity Surveyors. Building a mobile-first Progressive Web App (PWA) that replaces physical clipboards. Features include 100% offline PDF drawing measurements, SMM rule application (PPRA standards), and automated Payment Certificate generation with cloud synchronization.",
    date: "Dec 2025 – Present",
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/10",
    icon: Briefcase,
    badges: ["PWA", "Offline-First", "FinTech"]
  },
  {
    title: "Software Development Industrial Attachee",
    company: "Teach2Give",
    description: "Intensive software engineering immersion. Contributed to agile team projects, honing skills in modern web stacks, problem-solving, and building scalable architecture.",
    date: "Feb 2025 – April 2025",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    icon: Terminal,
    badges: ["Agile", "Full-Stack"]
  },
  {
    title: "Freelance CS Project Consultant",
    company: "Fiverr",
    description: "Delivering custom algorithms and web solutions for global clients. Specialized in complex data structures and database systems with a high client satisfaction rate.",
    date: "May 2023 – Present",
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    icon: Award,
    badges: ["Consultancy", "Algorithms"]
  },
];

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
    items: ["React", "Next.js", "Angular", "Node.js", "Express", "Tailwind CSS", "Fast API", "TensorFlow"],
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

export const Experience = () => {
  return (
    <section id="experience" className="relative scroll-mt-20 bg-[#0b0c2a] text-white py-16 md:py-32">
      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-mono font-bold tracking-widest uppercase text-xs mb-2">04. Professional Path</h2>
          <h3 className="text-3xl md:text-5xl font-black">Experience</h3>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative flex flex-col md:flex-row gap-6 md:gap-10 group"
            >
              {/* Timeline Connector - Hidden on Mobile */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-[27px] top-[60px] w-[2px] h-[calc(100%+48px)] bg-white/5 hidden md:block"></div>
              )}

              {/* Icon Marker */}
              <div className="flex justify-center md:block">
                <div className={`w-14 h-14 rounded-2xl ${exp.bgColor} border border-white/10 flex items-center justify-center z-10 group-hover:scale-110 transition-transform`}>
                  <exp.icon className={exp.color} size={28} />
                </div>
              </div>

              {/* Card */}
              <div className="flex-1 bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-[2rem] hover:border-white/20 transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold text-white">{exp.title}</h4>
                    <p className={`text-base font-bold ${exp.color}`}>{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-500 bg-black/40 px-3 py-1 rounded-full border border-white/5 self-start">
                    <Calendar size={12} /> {exp.date}
                  </div>
                </div>

                <p className="text-slate-400 text-base leading-relaxed mb-6">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.badges.map(badge => (
                    <span key={badge} className="px-3 py-1 bg-white/5 rounded-lg text-[10px] font-bold uppercase tracking-wider text-slate-300 border border-white/5">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Skills = () => {
  return (
    <section id="skills" className="relative scroll-mt-20 bg-[#0b0c2a] text-white py-16 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-mono font-bold tracking-widest uppercase text-xs mb-2">06. Tech Stack</h2>
          <h3 className="text-3xl md:text-5xl font-black flex items-center justify-center gap-4">
            <Cpu className="text-cyan-400 hidden sm:block" size={40} />
            Skills & Technologies
          </h3>
        </div>

        {/* MOBILE: grid-cols-1 (1 column) 
            TABLET: sm:grid-cols-2 (2 columns)
            DESKTOP: lg:grid-cols-4 (4 columns)
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {skillCategories.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] hover:border-blue-500/40 transition-all group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform">
                  <skill.icon className={skill.color} size={24} />
                </div>
                <h4 className="text-lg font-bold">{skill.category}</h4>
              </div>

              <div className="flex flex-wrap gap-2">
                {skill.items.map(item => (
                  <span key={item} className="px-3 py-1.5 bg-[#0b0c2a] border border-white/5 rounded-xl text-xs font-mono text-slate-400 group-hover:text-white transition-colors">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience