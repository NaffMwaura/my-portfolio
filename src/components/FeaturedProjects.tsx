const projects = [
  {
    title: "SkillMatch AI",
    desc: "This is a Web Application that uses AI for both Jobseekers and Employers. The application is able to recommend jobs to job seekers based on their skills and experience. I used Angular frontend, NodeJS and express for backend and postgreSQL database",
    img: "/image.png",
    live: "https://skillsmatchai-app-k3p7.vercel.app/",
    github: "https://github.com/NaffMwaura/skillsmatchai-app",
  },
  {
    title: "QuoteManager App",
    desc: "The QuoteManager is a simple and effective web application that allows users to create, view, edit, and delete inspirational quotes. The platform is designed for personal use, bloggers, or anyone who wants to manage a curated list of quotes.",
    img: "download (2).png",
    live: "https://github.com/NaffMwaura/QuoteManagerApp",
    github: "https://github.com/NaffMwaura/QuoteManagerApp",
  },
  {
    title: " Inn Booking Website (PHP & MySQL)",
    desc: "Developed a dynamic and responsive website for a local inn that allows users to browse rooms, make reservations, and contact the innkeepers. The platform was built using PHP for server-side logic and MySQL for the database. It offers a smooth booking experience and an admin dashboard for managing reservations.",
    img: "download (5).jpg",
    live: "https://github.com/NaffMwaura/inn-Website",
    github: "https://github.com/NaffMwaura/inn-Website",
  },
  // Add more projects here...
];

const FeaturedProjects = () => {
  return (
    <section id = "projects" className="scroll-mt-20 bg-[#0b0c2a] text-white px-6 md:px-12 py-16">
      <h2 className="text-3xl font-bold text-yellow-400 mb-10 text-center flex items-center justify-center gap-2">
        ⭐ Featured Projects ⭐
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
