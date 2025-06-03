import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0b0c2a] text-white fixed top-0 left-0 w-full z-10 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-10">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-blue-500">
          <a href="#">Naff Mwaura</a>
        </h1>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`md:flex md:items-center md:gap-6 font-semibold absolute md:static bg-[#0b0c2a] left-0 w-full md:w-auto transition-all duration-300 ease-in-out px-4 md:px-0 ${
            isOpen ? "top-16 opacity-100" : "top-[-500px] opacity-0 md:opacity-100"
          }`}
        >
          <li className="py-2 md:py-0">
            <a href="#home" className="hover:text-purple-400">Home</a>
          </li>
          <li className="py-2 md:py-0">
            <a href="#about" className="hover:text-purple-400">About</a>
          </li>
          <li className="py-2 md:py-0">
            <a href="#education" className="hover:text-purple-400">Education</a>
          </li>
          <li className="py-2 md:py-0">
            <a href="#projects" className="hover:text-purple-400">Projects</a>
          </li>
          <li className="py-2 md:py-0">
            <a href="#experience" className="hover:text-purple-400">Experience</a>
          </li>
          <li className="py-2 md:py-0">
            <a href="#certification" className="hover:text-purple-400">Certification</a>
          </li>
          <li className="py-2 md:py-0">
            <a href="#skills" className="hover:text-purple-400">Skills</a>
          </li>
          <li className="py-2 md:py-0">
            <a href="#contact" className="hover:text-purple-400">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
