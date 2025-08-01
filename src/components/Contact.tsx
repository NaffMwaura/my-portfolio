import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("An error occurred. Please try again.");
        }
      );

    e.currentTarget.reset();
  };

  return (
    <section  id = "contact" className="scroll-mt-20 bg-[#0b0c2a] text-white px-6 md:px-20 py-16">
      <div className="flex flex-col md:flex-row justify-between gap-12">
        {/* Social Connect Section */}
        <motion.div
          className="md:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold text-purple-400 mb-2">Connect with me:</h2>
          <p className="mb-4">Satisfied with me? Please contact me</p>
          <div className="flex space-x-4 mb-6 text-3xl">
            <a href="https://github.com/NaffMwaura" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/naff-mwaura-2bb415257/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-purple-400">
              <FaLinkedin />
            </a>
            <a href="https://x.com/Naff_Zoe" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-purple-400">
              <FaTwitter />
            </a>
            <a href="https://www.facebook.com/naftali.mwaura.352343" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-purple-400">
              <FaFacebook />
            </a>
                  <a
          href="https://wa.me/254115408536" // Replace with your actual WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded shadow-lg"
        >
          <FaWhatsapp className="text-xl" />
        </a>
          </div>
          <section className="bg-[#0b0c2a] text-white px-10 py-16" id="contact">

      
  
    </section>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="md:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          variants={fadeIn}
        >
          <h2 className="text-2xl font-semibold mb-4">Contact me, let's make magic together</h2>
          <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name:"
              required
              className="w-full p-3 rounded bg-[#1f1f38] border border-gray-600 text-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Email:"
              required
              className="w-full p-3 rounded bg-[#1f1f38] border border-gray-600 text-white"
            />
            <textarea
              name="message"
              rows={4}
              placeholder="Message:"
              required
              className="w-full p-3 rounded bg-[#1f1f38] border border-gray-600 text-white"
            />
            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-600 px-6 py-2 rounded font-semibold"
            >
              Send
            </button>
          </form>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        className="mt-16 border-t border-gray-700 pt-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={2}
        variants={fadeIn}
      >
        <p>© Copyright 2025 | Naff Mwaura</p>
        <p className= "text-color - via-white"> • Fullstack Developer • AI/ML Engineer • IT Student </p>
        <p>Designed by <span className="text-purple-400">@naffmwaura</span></p>
      </motion.div>
    </section>
  );
};

export default Contact;
