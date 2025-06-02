import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Typewriter } from 'react-simple-typewriter';



import profile1 from "../assets/image.png";
import profile2 from "../assets/Naff_Graduating.jpg";
import profile3 from "../assets/IMG-20221008-WA0025.jpg";
import profile4 from "../assets/profile.jpg";


const Hero = () => {
  const images = [profile1, profile2, profile3, profile4];

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


    <section id = "home"className=" scroll-mt-20 flex h-[50vh] flex-col md:flex-row items-center justify-between px-70 pt-20 pb-10 bg-[#0b0c2a] text-white">
      {/* Left content */}
      <div className="max-w-xl">
        <h2 className="text-3xl text-red-500 font-bold">Hello, I'm</h2>
                <h1 className="text-5xl font-bold text-green-400 mt-2">
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
        <div className="flex gap-3 mt-4 flex-wrap">
          <span className="text-yellow-400 font-medium">Fullstack Developer,</span>
          <span className="text-blue-300 font-medium">Azure AI Engineer,</span>
          <span className="text-red-300 font-medium">Azure Data Scientist.</span>
        </div>
        <a
          href="/resume.pdf"
          download
          className="inline-block mt-6 px-6 py-2 bg-purple-500 rounded text-white font-semibold hover:bg-purple-600"
        >
          Download Resume
        </a>
      </div>

      {/* Right - Carousel Box */}
<div className="mt-10 md:mt-0 w-[320px] h-[450px] rounded-xl overflow-hidden shadow-lg">
  <Slider {...settings}>
    {images.map((img, idx) => (
      <div
        key={idx}
        className="w-full h-[1000px] flex items-center justify-center "
      >
        <img
          src={img}
          alt={`Profile ${idx + 1}`}
          className="max-h-full max-w-full object-contain"
        />
      </div>
    ))}
  </Slider>
</div>

    </section>
  );
};
export default Hero;
