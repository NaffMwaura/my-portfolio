const skills = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "SQL", "C"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS", "Bootstrap"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitHub", "PostgreSQL", "MongoDB", "Figma", "Vercel", "Docker"],
  },
  {
    category: "Cloud & DevOps",
    items: ["Azure", "GitHub Actions", "CI/CD", "Linux", "Nginx", "EC2"],
  },
];

const Skills = () => {
  return (
    <section className="bg-[#0b0c2a] text-white py-16 px-6 md:px-12">
      <h2 className="text-3xl font-bold mb-10 text-center text-purple-400">
        🚀 Skills & Technologies
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-[#15162c] border border-purple-700 rounded-xl shadow-lg p-6 hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold text-yellow-400 mb-4">
              {skill.category}
            </h3>
            <ul className="space-y-2 text-gray-300">
              {skill.items.map((item, idx) => (
                <li
                  key={idx}
                  className="bg-[#1f2235] px-3 py-1 rounded-md inline-block mr-2 mb-2 hover:bg-purple-500 hover:text-white transition-colors duration-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
