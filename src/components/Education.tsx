//import React from 'react';
import { motion } from "framer-motion";
import { GraduationCap, Calendar,  CheckCircle2 } from 'lucide-react';

const educationData = [
  {
    title: "Business Information Technology",
    institution: "Dedan Kimathi University of Technology",
    date: "Graduating in April 2026",
    img: "./download (3).jpg",
    type: "Degree"
  },
  {
    title: "Software Development Program",
    institution: "TEACH2GIVE",
    date: "Graduated in April 2025",
    img: "image1.jpg",
    type: "Professional"
  },
  {
    title: "Introduction to Networking",
    institution: "Cisco Networking Academy",
    date: "Graduated April 2023",
    img: "net.png",
    type: "Certification"
  },
  {
    title: "Introduction to IoT",
    institution: "Cisco Networking Academy",
    date: "Graduated April 2024",
    img: "iot.png",
    type: "Certification"
  },
  {
    title: "Cybersecurity Essentials",
    institution: "Cisco Networking Academy",
    date: "Graduated August 2024",
    img: "cb.png",
    type: "Certification"
  },
  {
    title: "Computer Packages",
    institution: "Petcom Computer College",
    date: "Graduated May 2022",
    img: "pet.jpg",
    type: "Certificate"
  },
];

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section 
      id="education" 
      className="relative scroll-mt-20 bg-[#0b0c2a] text-white py-20 md:py-32 overflow-hidden"
    >
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-500 font-mono font-medium tracking-widest uppercase text-sm mb-2"
          >
            02. Academic Journey
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-bold flex items-center justify-center gap-4"
          >
            <GraduationCap className="text-purple-400 hidden sm:block" size={48} />
            Education & Certifications
          </motion.h3>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-purple-500/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] flex flex-col items-center text-center"
            >
              {/* Type Badge */}
              <span className="absolute top-4 right-6 text-[10px] uppercase tracking-tighter font-bold text-slate-500 group-hover:text-purple-400 transition-colors">
                {edu.type}
              </span>

              {/* Institution Image/Icon Container */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-24 h-24 rounded-2xl bg-[#0b0c2a] border border-white/10 p-4 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  <img
                    src={edu.img}
                    alt={edu.institution}
                    className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    onError={(e) => {
                      // Fallback icon if image fails to load
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = '<div class="text-purple-400"><BookOpen size={40} /></div>';
                    }}
                  />
                </div>
              </div>

              <div className="space-y-2 flex-grow">
                <h4 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                  {edu.title}
                </h4>
                <p className="text-sm text-slate-400 font-medium italic">
                  {edu.institution}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 w-full flex items-center justify-center gap-2 text-xs font-mono text-slate-500">
                <Calendar size={14} className="text-blue-400" />
                {edu.date}
              </div>

              {/* Hover Indicator Icon */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <CheckCircle2 size={16} className="text-green-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;