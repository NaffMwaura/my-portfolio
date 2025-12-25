//import React from 'react';
import { motion } from "framer-motion";
import { ExternalLink,  ShieldCheck, CheckCircle2, Medal } from 'lucide-react';

interface CertificationData {
  id: string;
  imageSrc: string;
  title: string;
  verifyLink: string;
  issuer: string;
}

const certifications: CertificationData[] = [
  {
    id: 'tailwind-guru',
    imageSrc: './DevTown.png',
    title: 'Tailwind CSS: Design Apps like a Design Guru',
    verifyLink: 'https://cert.devtown.in/verify/Z1Tk03x',
    issuer: 'DevTown'
  },
  {
    id: 'cisco-iot',
    imageSrc: './introduction-to-iot.png',
    title: 'Introduction to IOT',
    verifyLink: 'https://www.credly.com/badges/8d029976-5bf0-41ef-a65f-e4ad224d6c62/public_url',
    issuer: 'Cisco Networking Academy'
  },
  {
    id: 't2g-attachment',
    imageSrc: './Certificate_TEACH2GIVE1.jpg',
    title: 'Software Engineering Industrial Attachment',
    verifyLink: 'https://www.credly.com/go/pqnXgYQ4',
    issuer: 'TEACH2GIVE'
  },
  {
    id: 'cisco-cyber',
    imageSrc: '/cb.png',
    title: 'Cybersecurity Essentials CCNA',
    verifyLink: 'https://www.credly.com/go/pqnXgYQ4',
    issuer: 'Cisco Networking Academy'
  },
  {
    id: 'cisco-networks',
    imageSrc: '/net.png',
    title: 'Introduction to Networks',
    verifyLink: 'https://www.credly.com/go/pqnXgYQ4',
    issuer: 'Cisco Networking Academy'
  },
  {
    id: 'oracle-ai',
    imageSrc: 'Learning-Path_badge_default Oracle.png',
    title: 'OCI 2025 Certified AI Foundations Associate',
    verifyLink: 'https://certview.oracle.com/',
    issuer: 'Oracle Cloud Infrastructure'
  },
];

const Certification = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section 
      id="certification" 
      className="relative scroll-mt-20 bg-[#0b0c2a] text-white py-20 md:py-32 overflow-hidden"
    >
      {/* Decorative Glows */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-500 font-mono font-medium tracking-widest uppercase text-sm mb-2"
          >
            05. Credentials
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-bold flex items-center justify-center gap-4"
          >
            License & Certification
          </motion.h3>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={cardVariants}
              className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:border-blue-500/40 transition-all duration-500 hover:shadow-[0_10px_40px_rgba(30,64,175,0.15)] flex flex-col h-full"
            >
              {/* Top Icon Decoration */}
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-blue-500/10 rounded-2xl border border-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                  <ShieldCheck className="text-blue-400" size={24} />
                </div>
                <Medal className="text-slate-700 group-hover:text-purple-500/50 transition-colors" size={20} />
              </div>

              {/* Badge/Logo Image */}
              <div className="flex-grow flex flex-col items-center text-center">
                <div className="w-32 h-32 mb-6 flex items-center justify-center relative">
                   {/* Background Glow behind logo */}
                  <div className="absolute inset-0 bg-blue-500/5 blur-2xl rounded-full"></div>
                  <img 
                    src={cert.imageSrc} 
                    alt={cert.title} 
                    className="max-w-full max-h-full object-contain relative z-10 filter grayscale group-hover:grayscale-0 transition-all duration-500" 
                    onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = '<div class="text-blue-400 opacity-20"><Award size={64} /></div>';
                    }}
                  />
                </div>
                
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {cert.title}
                </h4>
                <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-6">
                  {cert.issuer}
                </p>
              </div>

              {/* Action Button */}
              <div className="mt-auto">
                <a
                  href={cert.verifyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-transparent border border-green-500/30 text-green-400 rounded-xl hover:bg-green-500/10 hover:border-green-500 transition-all duration-300 font-semibold text-sm group/btn"
                >
                  <CheckCircle2 size={16} className="group-hover/btn:scale-110 transition-transform" />
                  Verify Credential
                  <ExternalLink size={14} className="opacity-50" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certification;