import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      // Adjusted padding for a cleaner vertical rhythm.
      // This will reduce the space between the divider and this section.
      className="scroll-mt-20 bg-[#0b0c2a] text-white py-10 md:py-16"
    >
      {/* Wrap content in a container to center it with mx-auto */}
      <div className="container mx-auto px-6 md:px-10">
        <motion.h2
          className="text-2xl sm:text-3xl text-purple-400 font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          About Naff Mwaura ✨
        </motion.h2>

        <motion.p
          className="max-w-3xl leading-relaxed font-normal text-sm sm:text-base"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          viewport={{ once: true }}
        >
          I’m Naff Mwaura, an IT student from Kenya with a strong passion for technology and a
          spirit of adventure. My core expertise is in Full-Stack Software Development,
          focusing on resilient and scalable solutions using TypeScript, React, Angular, and Node.js. 
          I have professional experience spanning advanced topics like database management (PostgreSQL/NEON) and the integration of AI/ML models (FastAPI/TensorFlow) into live systems.
          
          I’m a dedicated and curious learner, currently expanding my skills into cutting-edge areas like
          Kubernetes (K3S) and IOTA blockchain integration. This blend of deep technical skill
          and adventurous drive equips Naff to take on complex engineering challenges with confidence and creativity.
        </motion.p>
      </div>
    </section>
  );
};

export default About;