import { useState } from "react";
import { Menu, X } from "lucide-react"; // Consistent with your other components

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // A function to close the menu when an item is selected
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
    <nav className="bg-[#0b0c2a]/90 backdrop-blur-md text-white fixed top-0 left-0 w-full z-50 py-4 border-b border-white/10 shadow-lg transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center px-6 md:px-10">
        {/* Logo / Name */}
        <h1 className="font-bold text-xl sm:text-2xl tracking-tight">
          <a href="#" className="hover:opacity-80 transition-opacity">
            <span className="text-blue-500">Naff Mwaura</span> 
          </a>
        </h1>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links */}
        <ul
          className={`
            /* Base Mobile Styles */
            flex flex-col gap-4 absolute left-0 w-full px-8 py-8 bg-[#0b0c2a] border-b border-white/10 shadow-2xl transition-all duration-300 ease-in-out
            
            /* Desktop Reset */
            md:static md:flex-row md:items-center md:gap-8 md:p-0 md:bg-transparent md:border-none md:shadow-none md:w-auto md:opacity-100
            
            /* Visibility Logic */
            ${isOpen ? "top-[64px] opacity-100 visible" : "top-[-600px] opacity-0 invisible md:visible"}
          `}
        >
          {navLinks.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="text-sm uppercase tracking-widest font-semibold hover:text-purple-400 transition-colors block py-2 md:py-0"
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