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
        I'm a Computer Science student hailing from Kenya. With a passion for technology and a love for adventure, I bring a unique perspective to the field.
        I have a wealth of knowledge and experience in various aspects of technology, including software development, database management, and web programming.
        I'm a dedicated learner who is always seeking out new challenges and opportunities for growth.
        When I'm not studying or working on projects, I enjoy exploring the great outdoors and going on adventures.
        With my combination of technical expertise and adventurous spirit, I'm ready to tackle any challenge that comes my way.
      </motion.p>
    </section>
  );
};

export default About;
