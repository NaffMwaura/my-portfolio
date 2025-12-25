//import React from 'react';
import { motion } from "framer-motion";
import { Briefcase, Calendar, Terminal, CheckCircle2, Award, Zap } from 'lucide-react';

const experiences = [
  {
    title: "Software Development Industrial Attachee",
    company: "Teach2Give",
    description: "Completed an intensive 3-month hands-on software engineering immersion. Contributed to agile team projects, honing skills in modern web stacks, problem-solving, and scalable architecture design.",
    date: "Feb 2025 – April 2025",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    icon: Terminal
  },
  {
    title: "Freelance Computer Science Consultant",
    company: "Fiverr",
    description: "Architecting custom software solutions for global clients. Specialized in algorithms, data structures, and full-stack web development, maintaining a consistent track record of high-quality delivery and client satisfaction.",
    date: "May 2023 – Present",
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/10",
    icon: Briefcase
  },
];

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <section 
      id="experience" 
      className="relative scroll-mt-20 bg-[#0b0c2a] text-white py-20 md:py-32 overflow-hidden"
    >
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-500 font-mono font-medium tracking-widest uppercase text-sm mb-2"
          >
            04. Professional Path
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-bold flex items-center justify-center gap-4"
          >
            Experience
          </motion.h3>
        </div>

        <motion.div 
          className="max-w-4xl mx-auto space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative flex flex-col md:flex-row gap-6 md:gap-10 group"
            >
              {/* Timeline Connector for Desktop */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-[27px] top-[60px] w-[2px] h-[calc(100%+48px)] bg-gradient-to-b from-blue-500/50 to-transparent hidden md:block"></div>
              )}

              {/* Icon / Marker */}
              <div className="relative">
                <div className={`w-14 h-14 rounded-2xl ${exp.bgColor} border border-white/10 flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300`}>
                  <exp.icon className={exp.color} size={28} />
                </div>
                {/* Pulsing effect behind icon */}
                <div className={`absolute inset-0 ${exp.bgColor} blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity`}></div>
              </div>

              {/* Experience Card */}
              <div className="flex-1 bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:border-white/20 transition-all duration-300 relative overflow-hidden">
                {/* Glow corner */}
                <div className={`absolute -top-10 -right-10 w-24 h-24 ${exp.bgColor} blur-3xl rounded-full`}></div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {exp.title}
                    </h4>
                    <p className={`text-sm font-semibold tracking-wide ${exp.color}`}>
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-500 bg-[#0b0c2a] px-3 py-1 rounded-full border border-white/5 self-start">
                    <Calendar size={12} />
                    {exp.date}
                  </div>
                </div>

                <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Key Achievements Placeholder / Badges */}
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-tight text-slate-300 bg-white/5 px-2 py-1 rounded">
                    <Zap size={10} className="text-yellow-400" />
                    Agile Methodology
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-tight text-slate-300 bg-white/5 px-2 py-1 rounded">
                    <CheckCircle2 size={10} className="text-green-400" />
                    Performance Focused
                  </div>
                </div>

                {/* Hover Checkmark Indicator */}
                <div className="absolute bottom-4 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Award size={20} className={exp.color} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;