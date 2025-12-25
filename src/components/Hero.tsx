//import React from 'react';
import Slider from "react-slick";
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';
import { Download, ChevronRight } from 'lucide-react';
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
  const professions = ['Software Developer', 'AI/ML Engineer', 'Full-Stack Architect Ninja'];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1500, // Smoother transition
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    fade: true, // Fade effect looks more professional for portfolios
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-[#0b0c2a] text-white"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-10 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Left Content: Text & CTA */}
          <motion.div 
            className="flex-1 text-center md:text-left space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-medium tracking-wider uppercase">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Available for new projects
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold text-slate-400">
              Hello, I'm <span className="text-white">Naff Mwaura</span>
            </h2>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
              Building <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">Digital Excellence</span> in Kenya
            </h1>
            
            <div className="h-8 text-xl sm:text-2xl text-yellow-400 font-mono">
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
            
            <p className="text-slate-400 text-base sm:text-lg max-w-lg mx-auto md:mx-0 leading-relaxed">
              Specializing in <span className="text-slate-200">TypeScript, React, Node.js</span>, and robust cloud infrastructure with <span className="text-slate-200">Kubernetes</span>. 
              Bridging the gap between AI innovation and scalable web systems.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
              <a
                href="/resume.pdf"
                className="group w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all duration-300 shadow-lg shadow-blue-900/20 active:scale-95"
              >
                <Download size={20} />
                Download Resume
              </a>
              <a
                href="#projects"
                className="group w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-bold transition-all duration-300 active:scale-95"
              >
                View Portfolio
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Right Content: Profile Carousel */}
          <motion.div 
            className="flex-1 flex justify-center items-center relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Visual Backing Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-[2.5rem] blur-2xl transform rotate-6 scale-90"></div>
            
            <div className="relative w-[280px] sm:w-[340px] lg:w-[380px] aspect-[3/4] bg-slate-900 rounded-[2rem] p-2 border border-white/10 shadow-2xl overflow-hidden group">
              <Slider {...settings} className="h-full">
                {images.map((img, idx) => (
                  <div key={idx} className="h-full outline-none">
                    <div className="relative h-full w-full flex items-center justify-center bg-[#0b0c2a] rounded-[1.5rem] overflow-hidden">
                      <img
                        src={img}
                        alt={`Naff Mwaura Profile ${idx + 1}`}
                        className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Subtle Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c2a]/60 via-transparent to-transparent"></div>
                    </div>
                  </div>
                ))}
              </Slider>
              
              {/* Glassmorphism Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl">
                 <p className="text-xs font-bold text-blue-400 uppercase tracking-tighter">Current Focus</p>
                 <p className="text-sm font-medium text-white italic">AI-Driven Systems</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;