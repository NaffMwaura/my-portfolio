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
{
  title: "AgroScan AI: Tea Leaf Disease Detector",
  desc: "Developed an AI/ML-powered web application for smallholder tea farmers in Kiambu County to instantly diagnose common tea leaf diseases from uploaded images. It provides confidence scores and actionable agricultural recommendations, built with a React/TypeScript frontend and a Python/FastAPI backend leveraging TensorFlow (MobileNetV2).",
  img: "./Screenshot 2025-07-29 150802.png", 
  live: "https://agroscanai.netlify.app", 
  github: "https://github.com/NaffMwaura/Agroscan-ai", 
},
{
  title: "Zod Post Viewer",
  desc: "A Next.js 15 and TypeScript web application displaying blog posts parsed and validated using Zod schemas. Supports image grids, tag filtering, and a responsive UI with Tailwind CSS.",
  img: "./w1GE8ao.png",
  live:   "https://github.com/NaffMwaura/zod-post-viewer",
  github: "https://github.com/NaffMwaura/zod-post-viewer",
},
{
  title: "PostCraft AI (Gemini Nano Codelab)",
  desc: "An Angular application leveraging the experimental **Chrome Built-in AI (Gemini Nano) API** for fast, **on-device** text generation. Features include content refinement, real-time streaming using **AsyncGenerators**, and OCR, ensuring user **privacy**.",
  img: "./Screenshot 2025-11-06 014246.png",
  live: "https://postcraft-lxnjizfni-naff-mwauras-projects.vercel.app", // Use your Vercel URL here
  github: "https://github.com/NaffMwaura/devfest-chrome-build-in-ai-workshop",
}

  // More projects are coming here...
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
