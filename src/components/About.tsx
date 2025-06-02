import { motion } from "framer-motion";

const About = () => {
  return (
    <section id= "about" className="scroll-mt-25 bg-[#0b0c2a] text-white px-70 pb-16 pt-10">
      <motion.h2
        className="text-3xl text-purple-400 font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        About me:
      </motion.h2>

      <motion.p
        className="max-w-3xl leading-relaxed font-normal space-x-1.5"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        viewport={{ once: true }}
      >
        I’m an IT student from Kenya with a strong passion for technology and a spirit of adventure. My diverse experience spans software development, database management, and web programming, allowing me to bring a fresh and dynamic perspective to the tech field. I’m a dedicated and curious learner, always eager to embrace new challenges and grow both personally and professionally. Outside of academics and projects, I enjoy spending time in nature and seeking out new adventures. This blend of technical expertise and adventurous drive equips me to take on challenges with confidence and creativity.
      </motion.p>
    </section>
  );
};

export default About;
