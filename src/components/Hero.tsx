//import React from 'react';
import Slider from "react-slick";
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';
import { Download, ChevronRight, Zap } from 'lucide-react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Assets
import profile2 from "../assets/Naff_Graduating.jpg";
import profile3 from "../assets/igm1.jpg";
import profile4 from "../assets/profile.jpg";
import profile5 from "../assets/sui.jpg";
import profile7 from "../assets/dcc.jpg";

const Hero = () => {
  const images = [profile2, profile3, profile4, profile5, profile7];
  const professions = ['Software Developer', 'AI/ML Engineer', 'Full-Stack Architect'];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    fade: true,
  };

  return (
    <section
      id="home"
      // min-h-screen ensures it fills the phone screen; pt-24 provides space for the fixed navbar
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-[#0b0c2a] text-white"
    >
      {/* Background Decorative Elements - Subtle glows */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 z-10">
        {/* MOBILE: flex-col (stacks text on top, image below)
            DESKTOP: md:flex-row (side-by-side)
        */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* 1. TEXT SECTION - Appears first on mobile */}
          <motion.div 
            className="w-full md:flex-1 text-center md:text-left space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase">
              <Zap size={14} className="mr-2 animate-pulse" />
              Available for new projects
            </div>

            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-400">
              Hello, I'm <span className="text-white">Naff Mwaura</span>
            </h2>
            
            {/* Font scaling: text-3xl for small phones, scaling up to 7xl for monitors */}
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.15]">
              Building <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">Digital Excellence</span> in Kenya
            </h1>
            
            <div className="h-8 text-lg sm:text-2xl text-yellow-400 font-mono font-medium">
              <Typewriter
                words={professions}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </div>
            
            <p className="text-slate-400 text-sm sm:text-lg max-w-lg mx-auto md:mx-0 leading-relaxed">
              Specializing in <span className="text-slate-200">TypeScript, React, and Node.js</span>. 
              Bridging the gap between AI innovation and scalable web systems.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
              <a
                href="/resume.pdf"
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold transition-all duration-300 shadow-xl shadow-blue-900/20 flex items-center justify-center gap-2 active:scale-95"
              >
                <Download size={18} />
                Download Resume
              </a>
              <a
                href="#projects"
                className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 rounded-2xl font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                Portfolio
                <ChevronRight size={18} />
              </a>
            </div>
          </motion.div>

          {/* 2. IMAGE SECTION - Appears below text on mobile */}
          <motion.div 
            className="w-full md:flex-1 flex justify-center items-center relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Visual Glow behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-[2.5rem] blur-2xl transform scale-90 md:rotate-6"></div>
            
            {/* Fixed Aspect Ratio Container: Resizes based on screen width but keeps proportions */}
            <div className="relative w-full max-w-[260px] sm:max-w-[320px] lg:max-w-[360px] aspect-[3/4] bg-slate-900 rounded-[2.5rem] p-2 border border-white/10 shadow-2xl overflow-hidden group">
              <Slider {...settings} className="h-full">
                {images.map((img, idx) => (
                  <div key={idx} className="h-full outline-none">
                    <div className="relative h-full w-full flex items-center justify-center bg-[#0b0c2a] rounded-[2.2rem] overflow-hidden">
                      <img
                        src={img}
                        alt={`Naff Mwaura Profile ${idx + 1}`}
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c2a]/40 via-transparent to-transparent"></div>
                    </div>
                  </div>
                ))}
              </Slider>
              
              {/* Floating Info Badge - Only visible when text is large enough */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl hidden sm:block">
                 <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-1">Specialization</p>
                 <p className="text-sm font-semibold text-white italic">AI & Scalable Architecture</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;