import profile from "../assets/profile.jpg"; // rename and put your image here

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-10 pt-32 pb-10 bg-[#0b0c2a] text-white">
      <div className="max-w-xl">
        <h2 className="text-3xl text-red-500">Hello, I'm</h2>
        <h1 className="text-5xl font-bold text-green-400 mt-2">
          Naff Mwaura <span className="text-white">_</span>
        </h1>
        <div className="flex gap-3 mt-4 flex-wrap">
          <span className="text-yellow-400 font-medium">Fullstack Developer,</span>
          <span className="text-blue-300 font-medium">Azure AI Engineer,</span>
          <span className="text-red-300 font-medium">Azure Data Scientist.</span>
        </div>
        <a
          href="/resume.pdf"
          target="_blank"
          className="inline-block mt-6 px-6 py-2 bg-purple-500 rounded text-white font-semibold hover:bg-purple-600"
        >
          Download Resume
        </a>
      </div>

      <div className="mt-8 md:mt-0">
        <img
          src={profile}
          alt="Profile"
          className="rounded-xl w-64 h-64 object-cover shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
