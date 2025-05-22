
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-[#0b0c2a] text-white fixed top-0 left-0 w-full z-10">
      <h1 className="font-bold text-xl text-blue-500">Naff Mwaura </h1>
      <ul className="flex gap-6 font-semibold">
        <li className="hover:text-purple-400 cursor-pointer ">Home</li>
        <li> <a href = "About" className="hover:text-purple-400 cursor-pointer">About </a></li>
        <li className="hover:text-purple-400 cursor-pointer">Projects</li>
        <li className="hover:text-purple-400 cursor-pointer">Experience</li>
        <li className="hover:text-purple-400 cursor-pointer">Certification</li>
        <li className="hover:text-purple-400 cursor-pointer">Community</li>
        <li className="hover:text-purple-400 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
