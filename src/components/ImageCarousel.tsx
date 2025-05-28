import { motion } from "framer-motion";
import img1 from "../assets/profile.jpg";
import img2 from "../assets/Naff_Graduating.jpg";

const images = [img1, img2];

const ImageCarousel = () => {
  return (
    <div className="overflow-hidden py-8 bg-[#0b0c2a]">
      <motion.div
        className="flex space-x-6"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Slide ${idx}`}
            className="w-64 h-40 object-cover rounded-lg shadow-md"
          />
        ))}
        {/* Duplicate for seamless loop */}
        {images.map((img, idx) => (
          <img
            key={`dup-${idx}`}
            src={img}
            alt={`Slide ${idx}`}
            className="w-64 h-40 object-cover rounded-lg shadow-md"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ImageCarousel;
