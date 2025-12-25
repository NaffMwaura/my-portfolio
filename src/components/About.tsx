//import React from 'react';
import { motion } from "framer-motion";
import {  MapPin, GraduationCap, Target, Terminal, Cpu } from 'lucide-react';

const About = () => {
  // Stagger animation variants for the cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const quickFacts = [
    { icon: MapPin, label: "Location", value: "Nairobi, Kenya", color: "text-blue-400" },
    { icon: GraduationCap, label: "Education", value: "BBIT Student", color: "text-purple-400" },
    { icon: Target, label: "Focus", value: "AI & Full-Stack", color: "text-green-400" },
    { icon: Terminal, label: "Experience", value: "3+ Years Coding", color: "text-yellow-400" },
  ];

  return (
    <section
      id="about"
      className="relative scroll-mt-20 bg-[#0b0c2a] text-white py-20 md:py-32 overflow-hidden"
    >
      {/* Subtle Background Glow to match Hero */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Side: Textual Narrative */}
          <div className="flex-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-blue-500 font-mono font-medium tracking-widest uppercase text-sm mb-2">
                01. About Me
              </h2>
              <h3 className="text-3xl sm:text-5xl font-bold mb-6">
                Merging <span className="text-purple-400">Logic</span> with <br /> 
                Digital <span className="text-cyan-400">Adventure</span>
              </h3>
              
              <div className="space-y-6 text-slate-400 leading-relaxed text-base sm:text-lg">
                <p>
                  I’m <span className="text-white font-medium">Naff Mwaura</span>, an IT student from Kenya with a strong passion for technology and a spirit of adventure. My core expertise lies in building resilient and scalable solutions using <span className="text-blue-400">TypeScript, React, Angular, and Node.js</span>.
                </p>
                <p>
                  My journey has led me to tackle complex engineering challenges, from optimizing database systems with <span className="text-green-400">PostgreSQL/NEON</span> to integrating advanced AI/ML models using <span className="text-yellow-400">FastAPI and TensorFlow</span> (as seen in projects like AgroScan AI).
                </p>
                <p>
                  Currently, I am pushing the boundaries of my technical stack by diving deep into <span className="text-purple-400 font-mono">Kubernetes (K3S)</span> and decentralized systems via <span className="text-cyan-400">IOTA blockchain</span>. I believe in software that doesn't just work, but drives real impact.
                </p>
              </div>
            </motion.div>

            {/* Interactive "Core Tech" Pill tags */}
            <div className="flex flex-wrap gap-3 pt-4">
              {['React', 'Node.js', 'Python', 'ML', 'K3S', 'IOTA'].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-slate-300 hover:border-purple-500/50 hover:text-white transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right Side: Quick Info Cards (Visual Stacking) */}
          <motion.div 
            className="flex-1 w-full"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {quickFacts.map((fact, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-purple-500/30 transition-all group"
                >
                  <fact.icon className={`${fact.color} mb-4 group-hover:scale-110 transition-transform`} size={28} />
                  <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-1">{fact.label}</p>
                  <p className="text-sm sm:text-base font-semibold text-slate-200">{fact.value}</p>
                </motion.div>
              ))}
              
              {/* Feature Box (Spans 2 columns on tablet+) */}
              <motion.div
                variants={itemVariants}
                className="sm:col-span-2 p-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/10 rounded-2xl flex items-center gap-6"
              >
                <div className="p-3 bg-blue-500/20 rounded-xl">
                  <Cpu className="text-blue-400" size={32} />
                </div>
                <div>
                  <p className="text-sm font-bold text-white uppercase tracking-tight">System Architect</p>
                  <p className="text-xs text-slate-400">Available for innovative software partnerships.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;