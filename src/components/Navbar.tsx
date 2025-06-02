
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-80 py-12 bg-[#0b0c2a] text-white fixed top-0 left-0 w-full z-10">
      <h1  className="font-bold text-3xl  text-blue-500"> <a href="">Naff Mwaura </a> </h1>
      <ul className="flex gap-6 font-semibold">
        <li>
          <a href="#home" className="hover:text-purple-400 cursor-pointer " >Home</a> </li>
        <li>
            <a href="#about" className="hover:text-purple-400 cursor-pointer">
              About
            </a>
          </li>
             <li>
          <a href="#education"className="hover:text-purple-400 cursor-pointer"> 
          Education </a> 
          </li>
        <li >

        </li>
        <li>
          <a href="#projects"className="hover:text-purple-400 cursor-pointer"> 
          Projects </a> 
          </li>
        <li >
          <a href="#experience"className="hover:text-purple-400 cursor-pointer">
            Experience
          </a>
        </li>
        <li> 
          <a href="#certification" className="hover:text-purple-400 cursor-pointer">Certification</a></li>
        <li>
          <a href="#skills" className="hover:text-purple-400 cursor-pointer" >Skills</a> </li>
        <li>
          <a href="#contact"className="hover:text-purple-400 cursor-pointer" >Contact</a> </li>
      </ul>
    </nav>
  );
};

export default Navbar;
