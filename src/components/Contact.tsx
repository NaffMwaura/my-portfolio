import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Facebook, 
  MessageSquare, 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  AlertCircle
} from "lucide-react";

/**
 * NOTE: To resolve the build error in this environment, 
 * I have replaced the @emailjs/browser import with a mock function.
 * In your local project, ensure you run: npm install @emailjs/browser
 */
const mockEmailJS = {
  sendForm: (serviceId: string, templateId: string, _form: HTMLFormElement, publicKey: string) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Mock Email Sent with:", { serviceId, templateId, publicKey });
        resolve({ text: "OK" });
      }, 2000);
    });
  }
};

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Replace import.meta.env with placeholders for the preview environment
  const EMAILJS_SERVICE_ID = "service_placeholder";
  const EMAILJS_TEMPLATE_ID = "template_placeholder";
  const EMAILJS_PUBLIC_KEY = "public_key_placeholder";

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);
    setStatus('idle');

    // Using mockEmailJS for the canvas preview
    mockEmailJS
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus('success');
          setIsSending(false);
          formRef.current?.reset();
          setTimeout(() => setStatus('idle'), 5000);
        },
        (error) => {
          console.error(error);
          setStatus('error');
          setIsSending(false);
        }
      );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section 
      id="contact" 
      className="relative scroll-mt-20 bg-[#0b0c2a] text-white py-20 md:py-32 overflow-hidden"
    >
      {/* Background Visual Flair */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-500 font-mono font-medium tracking-widest uppercase text-sm mb-2"
          >
            07. Get In Touch
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-bold"
          >
            Let's Make <span className="text-purple-400">Magic</span> Together
          </motion.h3>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Column: Socials & Info */}
          <motion.div 
            className="lg:w-2/5 space-y-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-slate-400 text-lg leading-relaxed">
                Whether you have a project in mind, a question about my stack, or just want to connect—my inbox is always open.
              </p>
              
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4 text-slate-300">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-blue-400">
                    <Mail size={20} />
                  </div>
                  <span>naftalimwaura@gmail.com</span>
                </div>
                <div className="flex items-center gap-4 text-slate-300">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-green-400">
                    <Phone size={20} />
                  </div>
                  <span>+254 115 408 536</span>
                </div>
                <div className="flex items-center gap-4 text-slate-300">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-purple-400">
                    <MapPin size={20} />
                  </div>
                  <span>Nairobi, Kenya</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <h4 className="text-sm font-mono uppercase tracking-widest text-slate-500">Connect Elsewhere</h4>
              <div className="flex flex-wrap gap-4">
                {[
                  { icon: Github, href: "https://github.com/NaffMwaura", color: "hover:text-white" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/naff-mwaura-2bb415257/", color: "hover:text-blue-500" },
                  { icon: Twitter, href: "https://x.com/Naff_Zoe", color: "hover:text-blue-400" },
                  { icon: Facebook, href: "https://www.facebook.com/naftali.mwaura.352343/", color: "hover:text-blue-600" },
                  { icon: MessageSquare, href: "https://wa.me/254115408536", color: "hover:text-green-500" },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 bg-white/5 border border-white/10 rounded-2xl transition-all duration-300 ${social.color} hover:border-white/20 hover:scale-110`}
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            className="lg:w-3/5"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
              <form ref={formRef} onSubmit={sendEmail} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-slate-500 ml-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="John Doe"
                      className="w-full bg-[#0b0c2a]/50 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-slate-500 ml-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="john@example.com"
                      className="w-full bg-[#0b0c2a]/50 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-500 ml-1">Your Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="How can I help you today?"
                    className="w-full bg-[#0b0c2a]/50 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="group relative w-full md:w-auto px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-900/20"
                >
                  {isSending ? (
                    <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {status === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-green-400 bg-green-400/10 p-4 rounded-xl border border-green-400/20"
                  >
                    <CheckCircle2 size={18} />
                    <span className="text-sm font-medium">Message sent successfully! I'll get back to you soon.</span>
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-red-400 bg-red-400/10 p-4 rounded-xl border border-red-400/20"
                  >
                    <AlertCircle size={18} />
                    <span className="text-sm font-medium">Something went wrong. Please try again or email me directly.</span>
                  </motion.div>
                )}
              </form>

              {/* Decorative corner glow inside form */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full"></div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Footer */}
        <motion.footer 
          className="mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-xs">NM</div>
            <p className="text-slate-500 text-sm">© 2025 Naftaly Boro Mwaura. All rights reserved.</p>
          </div>
          
          <div className="flex gap-4 text-[10px] font-mono tracking-widest text-slate-600 uppercase">
             <span className="text-blue-500/50">Fullstack Developer</span>
             <span className="hidden sm:inline">•</span>
             <span className="text-purple-500/50">AI/ML Engineer</span>
             <span className="hidden sm:inline">•</span>
             <span className="text-green-500/50">IT Student</span>
          </div>

          <div className="flex items-center gap-1 text-slate-500 text-xs">
            Built with <span className="text-red-500">❤</span> by <span className="text-slate-300 font-medium">@naffmwaura</span>
          </div>
        </motion.footer>
      </div>
    </section>
  );
};

export default Contact;