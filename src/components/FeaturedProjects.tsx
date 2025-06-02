const projects = [
  {
    title: "Dashboard System ERP",
    desc: "A hybrid app that streamlines procurement and tender processes across various counties.",
    img: "/images/project1.png",
    live: "https://your-live-link.com",
    github: "https://github.com/your-repo",
  },
  {
    title: "Surge Procurement Ltd",
    desc: "Web platform for procurement tracking and vendor management.",
    img: "/images/project2.png",
    live: "#",
    github: "#",
  },
  {
    title: "RideWave Renting System",
    desc: "Rental web app built with React and Node.js, supporting car listings and payments.",
    img: "/images/project3.png",
    live: "#",
    github: "#",
  },
  // Add more projects here...
];

const FeaturedProjects = () => {
  return (
    <section id = "projects" className="scroll-mt-20 bg-[#0b0c2a] text-white px-6 md:px-12 py-16">
      <h2 className="text-3xl font-bold text-yellow-400 mb-10 text-center flex items-center justify-center gap-2">
        ⭐ Featured Project ⭐
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#15162c] p-4 rounded-lg border border-purple-600 shadow-lg hover:scale-105 transition-transform"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-gray-300 mb-4">{project.desc}</p>
            <div className="flex gap-4">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1 bg-purple-500 hover:bg-purple-600 rounded text-sm"
              >
                Live Link
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1 bg-purple-500 hover:bg-purple-600 rounded text-sm"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
