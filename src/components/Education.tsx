// Education.tsx
const educationData = [
  {
    title: "Business Information Technology",
    institution: "Dedan Kimathi University of Technology",
    date: "Graduating in April 2026",
    img: "./download (3).jpg", // Place the image in the public/images folder
  },

    {
    title: " Software Development Program",
    institution: "TEACH2GIVE",
    date: "Graduated in April 2025",
    img: "image1.jpg",
  },
  {
    title: "Introduction to Networking",
    institution: "Cisco Networking Academy",
    date: "Graduated April 2023",
    img: "net.png",
  },
    {
    title: "Introduction to IoT",
    institution: "Cisco Networking Academy",
    date: "Graduated April 2024",
    img: "iot.png",
  },
      {
    title: "Cybersecurity essentials",
    institution: "Cisco Networking Academy",
    date: "Graduated August 2024",
    img: "cb.png",
  },
        {
    title: "Computer Packages",
    institution: "Petcom Computer College",
    date: "Graduated May 2022",
    img: "pet.jpg",
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
            className="border border-purple-600 rounded-lg p-10 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300"
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
