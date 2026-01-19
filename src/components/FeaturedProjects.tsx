//import React from 'react';
import { motion } from "framer-motion";
import { Github, ExternalLink, Code,  Layers } from 'lucide-react';

const projects = [
  {
    title: "SkillMatch AI",
    desc: "A sophisticated recruitment engine that leverages AI to match job seekers with optimal roles based on skills and experience. Features a robust PostgreSQL backbone and a seamless Angular interface.",
    img: "/image.png",
    live: "https://skillsmatchai-app-k3p7.vercel.app/",
    github: "https://github.com/NaffMwaura/skillsmatchai-app",
    tags: ["Angular", "Node.js", "Express", "PostgreSQL", "AI"]
  },
  {
    title: "AgroScan AI: Tea Detector",
    desc: "A high-impact agricultural PWA for tea farmers in Kiambu. Diagnoses leaf diseases using MobileNetV2 with real-time assistance via an integrated AI chatbot.",
    img: "./agro.png",
    live: "https://coffeescan-ai.netlify.app",
    github: "https://github.com/NaffMwaura/coffee-disease-detector",
    tags: ["React", "FastAPI", "TensorFlow", "PWA"]
  },
 
  {
    title: "PostCraft AI",
    desc: "Experimental Angular application utilizing Chrome's Built-in AI (Gemini Nano) for on-device text generation and OCR, prioritizing user privacy and low latency.",
    img: "./Screenshot 2025-11-06 014246.png",
    live: "https://postcraft-lxnjizfni-naff-mwauras-projects.vercel.app",
    github: "https://github.com/NaffMwaura/devfest-chrome-build-in-ai-workshop",
    tags: ["Angular", "Gemini Nano", "OCR", "AsyncGenerators"]
  },
  {
    title: "CoffeeScan AI",
    desc: "ML-powered diagnostic tool tailored for coffee farmers in Nyeri County. Provides high-confidence disease identification and actionable agricultural mitigation strategies.",
    img: "./coffee.png",
    live: "https://agroscanai.netlify.app",
    github: "https://github.com/NaffMwaura/Agroscan-ai",
    tags: ["React", "Python", "ML", "FastAPI"]
  },
  {
    title: "Zod Post Viewer",
    desc: "Next.js 15 application demonstrating advanced schema validation. Features dynamic filtering and a responsive UI built with Tailwind CSS and validated via Zod.",
    img: "./w1GE8ao.png",
    live: "https://github.com/NaffMwaura/zod-post-viewer",
    github: "https://github.com/NaffMwaura/zod-post-viewer",
    tags: ["Next.js", "TypeScript", "Zod", "Tailwind"]
  },
  {
    title: "QuoteManager App",
    desc: "A streamlined web platform for content creators to manage and curate inspirational quote libraries with full CRUD functionality and a focus on UX.",
    img: "download (2).png",
    live: "https://github.com/NaffMwaura/QuoteManagerApp",
    github: "https://github.com/NaffMwaura/QuoteManagerApp",
    tags: ["React", "State Mgmt", "CRUD"]
  },
   {
  title: "QS Pocket Knife: Offline Estimator",
  desc: "A mission-critical PWA for Quantity Surveyors. Features a 'Verify Once' architecture for 100% offline functionality on remote sites, using Dexie.js for local CAD drawing storage and measurement persistence.",
  img: "./qs-pocket-knife.png", // Make sure to save a high-res screenshot of your dashboard
  live: "https://momentum-qs.netlify.app",
  github: "https://github.com/NaffMwaura/Momentum-Labs-Team--C",
  tags: ["React 19", "Supabase", "Dexie.js", "PWA", "Tailwind v4"]
},
  {
    title: "Inn Booking Website",
    desc: "Dynamic reservation system for local hospitality. Features an administrative dashboard for room inventory and reservation tracking built with PHP and MySQL.",
    img: "download (5).jpg",
    live: "https://github.com/NaffMwaura/inn-Website",
    github: "https://github.com/NaffMwaura/inn-Website",
    tags: ["PHP", "MySQL", "Admin Panel"]
  },
  
  
];

const FeaturedProjects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section 
      id="projects" 
      className="relative scroll-mt-20 bg-[#0b0c2a] text-white py-20 md:py-32 overflow-hidden"
    >
      {/* Decorative Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-500 font-mono font-medium tracking-widest uppercase text-sm mb-2"
          >
            03. Selection of Work
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-bold flex items-center justify-center gap-4"
          >
            Featured Projects
          </motion.h3>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={projectVariants}
              className="group flex flex-col bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(30,64,175,0.2)]"
            >
              {/* Project Image Container */}
              <div className="relative h-52 overflow-hidden">
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000";
                  }}
                />
                <div className="absolute top-4 right-4 z-20 flex gap-2">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-[#0b0c2a]/80 rounded-full hover:text-blue-400 transition-colors">
                    <Github size={18} />
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-2 bg-[#0b0c2a]/80 rounded-full hover:text-blue-400 transition-colors">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-3 text-blue-400">
                  <Code size={16} />
                  <span className="text-[10px] font-mono uppercase tracking-widest">Project {index + 1}</span>
                </div>
                
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h4>
                
                <p className="text-sm text-slate-400 line-clamp-3 mb-6 leading-relaxed">
                  {project.desc}
                </p>

                {/* Tech Tags */}
                <div className="mt-auto flex flex-wrap gap-2 pt-4">
                  {project.tags?.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <a 
            href="https://github.com/NaffMwaura" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-white/10 rounded-2xl hover:bg-white/5 hover:border-white/20 transition-all font-semibold"
          >
            <Layers size={20} />
            View Full Archive on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;