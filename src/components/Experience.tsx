const experiences = [
  {
    title: "Software Engineering Industrial Attachee at Teach2Give",
    description:
      "Participated in an intensive, hands-on software engineering training program focused on modern web development technologies and practices. Engaged in collaborative projects, demonstrating strong teamwork and problem-solving abilities.",
    date: "May 2024 – update",
    color: "text-red-400",
  },
  {
    title: "Co-Founder/Software Engineer Udhamini Scholarships System",
    description:
      "Udhamini Scholarships application is a platform that lets all students get access to a centralized repository of scholarships and apply for them. Main responsibilities include adding new features and optimizing Mongo DB aggregation pipelines for queries.",
    date: "October 2022 – update",
    color: "text-yellow-400",
  },
];

const Experience = () => {
  return (
    <section className="bg-[#0b0c2a] text-white px-6 md:px-12 py-16">
      <h2 className="text-3xl font-bold mb-10 text-center flex items-center justify-center gap-2 text-purple-400">
        👨‍💻 <span className="text-white">Experience</span> 👩‍💻
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
