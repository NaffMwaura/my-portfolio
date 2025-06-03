
const Navbar = () => {
  return (
    <nav className="bg-[#0b0c2a] text-white fixed top-0 left-0 w-full z-10 py-6">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="font-bold text-4xl text-blue-500 mr-10">
          <a href="#">Naff Mwaura</a>
        </h1>
        <ul className="flex gap-6 font-semibold">
          <li><a href="#home" className="hover:text-purple-400">Home</a></li>
          <li><a href="#about" className="hover:text-purple-400">About</a></li>
          <li><a href="#education" className="hover:text-purple-400">Education</a></li>
          <li><a href="#projects" className="hover:text-purple-400">Projects</a></li>
          <li><a href="#experience" className="hover:text-purple-400">Experience</a></li>
          <li><a href="#certification" className="hover:text-purple-400">Certification</a></li>
          <li><a href="#skills" className="hover:text-purple-400">Skills</a></li>
          <li><a href="#contact" className="hover:text-purple-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

