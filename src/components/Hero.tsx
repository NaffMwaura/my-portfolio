import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Typewriter } from 'react-simple-typewriter';

// Ensure these paths are correct in your project structure
import profile2 from "../assets/Naff_Graduating.jpg";
import profile3 from "../assets/igm1.jpg";
import profile4 from "../assets/profile.jpg";
import profile5 from "../assets/sui.jpg"
import profile7 from "../assets/DSC_0111.jpg";

const Hero = () => {
  const images = [profile2, profile3, profile4, profile5, profile7];
  const professions = ['  Software Developer', 'AI/ML Engineer', 'IT Student'];

  const settings = {
    dots: false,
    infinite: true,
    speed: 8000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 200,
    arrows: false,
  };

  return (
    <section
      id="home"
      // Adjusted padding to avoid double spacing with the new Divider component
      className="scroll-mt-20 flex flex-col-reverse md:flex-row items-center justify-center pt-20 md:pt-28 pb-0 bg-[#0b0c2a] text-white"
    >
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-4 md:px-10">
        {/* Left Content */}
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl text-red-500 font-bold">Hello, I'm</h2>
          {/* Static h1 for the name for better SEO and accessibility */}
          <h1 className="text-4xl sm:text-5xl font-bold text-green-400 mt-2">Naff Mwaura ✨</h1>
          <div className="flex justify-center md:justify-start gap-3 mt-4 flex-wrap">
            <span className="text-yellow-400 font-medium">
              <Typewriter
                words={professions}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={150}
                deleteSpeed={100}
                delaySpeed={1500}
              />
            </span>
          </div>
          <a
            href="/resume.pdf"
            download
            className="inline-block mt-6 px-6 py-2 bg-purple-500 rounded text-white font-semibold hover:bg-purple-600"
          >
            Download Resume
          </a>
        </div>

        {/* Right - Carousel */}
        <div className="w-[260px] sm:w-[300px] md:w-[320px] h-[400px] sm:h-[430px] md:h-[450px] rounded-xl overflow-hidden shadow-lg bg-black">
          <Slider {...settings}>
            {images.map((img, idx) => (
              <div key={idx} className="w-full h-full flex items-center justify-center">
                <img
                  src={img}
                  alt={`Profile ${idx + 1}`}
                  className="w-auto h-full object-contain"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Hero;
