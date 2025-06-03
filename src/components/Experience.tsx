const experiences = [
  {
    title: "Software Development Industrial Attachee at Teach2Give",
    description:
    "Completed an intensive 3-month hands-on software engineering training program that significantly boosted my technical and collaborative skills. The program focused on modern web development technologies and best practices. I actively contributed to team-based projects, honed my problem-solving abilities, and gained real-world experience in building scalable web applications.",
    date: "Feb 2025 – April 2025",
    color: "text-red-400",
  },
  {
    title: "Freelance Computer Science Project Consultant – Fiverr",
    description:
"Provides custom solutions for clients on Fiverr, focusing on computer science and software development projects. Delivered academic and real-world applications involving algorithms, data structures, web development, and database systems. Maintained high client satisfaction through clear communication, timely delivery, and quality work.",
    date: "May 2023 – date",
    color: "text-yellow-400",
  },
];

const Experience = () => {
  return (
    <section id= "experience"className=" scroll-mt-20 bg-[#0b0c2a] text-white px-6 md:px-12 py-16">
      <h2 className="text-3xl font-bold mb-10 text-center flex items-center justify-center gap-2 text-purple-400">
        👨‍💻 <span className="text-amber-200">Experience</span> 👩‍💻
      </h2>

      <div className="flex flex-col md:flex-row gap-8 justify-center">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-[#15162c] p-6 rounded-lg border border-purple-600 shadow-lg max-w-md text-center mx-auto"
          >
            <h3 className={`text-lg font-bold mb-3 ${exp.color}`}>
              {exp.title}
            </h3>
            <p className="text-sm text-gray-300 mb-4">{exp.description}</p>
            <p className="text-sm text-blue-400 font-semibold">{exp.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
