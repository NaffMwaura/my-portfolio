import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Theme state and logic would go here if you were to implement it
  // const [darkMode, setDarkMode] = useState(false);
  
  return (
    <nav className="bg-[#0b0c2a] text-white dark:bg-black dark:text-white fixed top-0 left-0 w-full z-10 py-4 shadow-md transition-colors duration-300">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-10">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-blue-500">
          <a href="#">Naff Mwaura</a>
        </h1>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden text-white dark:text-white focus:outline-none"
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
          className={`md:flex md:items-center md:gap-8 font-semibold absolute md:static bg-[#0b0c2a] text-white dark:bg-black dark:text-white left-0 w-full md:w-auto transition-all duration-300 ease-in-out px-4 md:px-0 ${
            isOpen ? "top-16 opacity-100" : "top-[-500px] opacity-0 md:opacity-100"
          }`}
        >
          {[
            "home",
            "about",
            "education",
            "projects",
            "experience",
            "certification",
            "skills",
            "contact",
          ].map((id) => (
            <li key={id} className="py-2 md:py-0">
              <a href={`#${id}`} className="hover:text-purple-400">
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
