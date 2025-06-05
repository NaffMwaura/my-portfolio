import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Typewriter } from 'react-simple-typewriter';

import profile2 from "../assets/Naff_Graduating.jpg";
import profile3 from "../assets/IMG-20221008-WA0025.jpg";
import profile4 from "../assets/profile.jpg";

const Hero = () => {
  const images = [profile2, profile3, profile4];

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

    /*<section
  id="home"
  className="scroll-mt-20 flex flex-col-reverse md:flex-row items-center px-1 md:px-20 pt-32 pb-10 bg-[#0b0c2a] text-white min-h-screen gap-6"
>
 */
    <section
      id="home"
      className="scroll-mt-20 flex flex-col-reverse md:flex-row items-center justify-between px-1 md:px-60 pt-12 pb-1 bg-[#0b0c2a] text-white min-h-screen"
    >
      {/* Left Content */}
      <div className="max-w-xl text-center md:text-left pb-1">
        <h2 className="text-2xl sm:text-3xl text-red-500 font-bold">Hello, I'm</h2>
        <h1 className="text-4xl sm:text-5xl font-bold text-green-400 mt-2">
          <Typewriter
            words={['Naff Mwaura']}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={150}
            deleteSpeed={200}
            delaySpeed={1500}
          />
        </h1>
        <div className="flex justify-center md:justify-start gap-3 mt-4 flex-wrap">
          <span className="text-yellow-400 font-medium">Fullstack Developer</span>
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
      <div className="mb-10 md:mb-0 w-[260px] sm:w-[300px] md:w-[320px] h-[400px] sm:h-[430px] md:h-[450px] rounded-xl overflow-hidden shadow-lg bg-black">
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
    </section>
  );
};

export default Hero;
