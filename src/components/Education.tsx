// Education.tsx
const educationData = [
  {
    title: "Computer Science",
    institution: "Kirinyaga University",
    date: "Graduating in October 2025",
    img: "/images/kyu.png", // Place the image in the public/images folder
  },
  {
    title: "Software Engineering",
    institution: "ALX Software Engineering Programme",
    date: "Graduate August 2023",
    img: "/images/alx.png",
  },
  {
    title: "Aberdare Institute of Catering",
    institution: "Diploma in Food Production",
    date: "Graduated in December 2021",
    img: "/images/aic.png",
  },
];

const Education = () => {
  return (
    <section id = "education" className="scroll-mt-20 bg-[#0b0c2a] text-white px-6 md:px-12 py-16">
            <div className="flex justify-center">
            <h1 className="text-3xl font-bold text-purple-400 mb-8 flex items-center gap-2">
                📚 Education 🎓
            </h1>
            </div>

      <div className="grid md:grid-cols-3 gap-6">
        {educationData.map((edu, idx) => (
          <div
            key={idx}
            className="border border-purple-500 rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300"
          >
            <img
              src={edu.img}
              alt={edu.institution}
              className="w-24 h-24 object-contain mb-4"
            />
            <h3 className="text-xl font-semibold text-white">{edu.title}</h3>
            <p className="text-gray-300">{edu.institution}</p>
            <p className="text-sm text-gray-400">{edu.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
