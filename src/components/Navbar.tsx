import  { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to close the menu when an item is selected
  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    "home",
    "about",
    "education",
    "projects",
    "experience",
    "certification",
    "skills",
    "contact",
  ];

  return (
    <nav className="bg-[#0b0c2a]/95 backdrop-blur-xl text-white fixed top-0 left-0 w-full z-[100] py-4 border-b border-white/10 shadow-2xl">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 lg:px-10">
        
        {/* Logo / Name - Scale text for readability */}
        <h1 className="font-bold text-xl sm:text-2xl tracking-tighter">
          <a href="#" className="hover:opacity-80 transition-opacity">
            <span className="text-blue-500">Naff</span> Mwaura
          </a>
        </h1>

        {/* Hamburger Icon for Mobile - Larger tap target */}
        <button
          className="lg:hidden p-2 text-white hover:bg-white/10 rounded-xl transition-colors focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Navigation Links */}
        <ul
          className={`
            /* MOBILE STYLES (One component going downwards) */
            flex flex-col gap-6 absolute left-0 w-full px-8 py-10 bg-[#0b0c2a] border-b border-white/10 shadow-2xl transition-all duration-500 ease-in-out
            
            /* DESKTOP RESET (Horizontal row for large screens) */
            lg:static lg:flex-row lg:items-center lg:gap-8 lg:p-0 lg:bg-transparent lg:border-none lg:shadow-none lg:w-auto lg:opacity-100
            
            /* VISIBILITY LOGIC */
            ${isOpen ? "top-[72px] opacity-100 visible" : "top-[-800px] opacity-0 invisible lg:visible"}
          `}
        >
          {navLinks.map((id) => (
            <li key={id} className="w-full lg:w-auto">
              <a
                href={`#${id}`}
                className={`
                  /* Mobile: Large, readable text */
                  text-lg font-bold capitalize transition-colors block py-3 border-b border-white/5
                  
                  /* Desktop: Small, professional tracking */
                  lg:text-xs lg:uppercase lg:tracking-widest lg:font-extrabold lg:py-0 lg:border-none lg:hover:text-blue-400
                  
                  hover:text-blue-400
                `}
                onClick={closeMenu}
              >
                {id}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;