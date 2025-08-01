import React from 'react';

interface CertificationData {
  id: string; 
  imageSrc: string; 
  title: string;     
  verifyLink: string; 
}


const certifications: CertificationData[] = [
  {
    id: 'azure-ai-engineer',
    imageSrc: './DevTown.png', 
    title: 'Tailwind CSS: Design Apps like a Design Guru',
    verifyLink: 'https://cert.devtown.in/verify/Z1Tk03x', 
  },
  {
    id: 'azure-data-scientist',
    imageSrc: './introduction-to-iot.png', 
    title: 'Introduction to IOT by Cisco',
    verifyLink: 'https://www.credly.com/badges/8d029976-5bf0-41ef-a65f-e4ad224d6c62/public_url', 
  },
  {
    id: 'azure-ai-fundamentals',
    imageSrc: './Certificate_TEACH2GIVE1.jpg', 
    title: 'Software Engineering Industrial Attachment',
    verifyLink: 'https://www.credly.com/go/pqnXgYQ4', 
  },
  {
    id: 'azure-data-fundamentals',
    imageSrc: '/cb.png', 
    title: 'Cybesecurity Essentials CCNA',
    verifyLink: 'https://www.credly.com/go/pqnXgYQ4',
  },
  {
    id: 'microsoft-365-fundamentals',
    imageSrc: '/net.png', 
    title: 'Introduction to Networks',
    verifyLink: 'https://www.credly.com/go/pqnXgYQ4'
  },
  {
    id: 'Oracle Cloud Infrastructure ',
    imageSrc: 'Learning-Path_badge_default Oracle.png', 
    title: 'OCI 2025 Certified AI Foundations Associate', 
    verifyLink: 'https://certview.oracle.com/', 
  },
  //  more certifications 
];

const CertificationCard: React.FC<CertificationData> = ({ imageSrc, title, verifyLink }) => {
  return (
    <div className="bg-[#1c1d35] dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-300">
      <div className="w-32 h-32 mb-4 flex items-center justify-center">
        <img src={imageSrc} alt={title} className="max-w-full max-h-full object-contain" />
      </div>
      <h3 className="text-white dark:text-gray-100 text-lg font-semibold mb-3">{title}</h3>
      <a
        href={verifyLink}
        target="_blank" // Opens in a new tab
        rel="noopener noreferrer" // Security best practice for target="_blank"
        className="mt-auto px-4 py-2 border border-green-600 text-green-400 dark:text-green-400 dark:border-green-600 rounded-md hover:bg-green-600 hover:text-white transition-colors duration-300 font-medium"
      >
        Verify
      </a>
    </div>
  );
};

// Main Certification Section Component
const Certification: React.FC = () => {
  return (
    <section id="certification" className="min-h-screen py-16 bg-[#0b0c2a] dark:bg-black text-white dark:text-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-purple-400 flex items-center justify-center space-x-4">
          <span role="img" aria-label="license" className="text-5xl md:text-6xl">🎖️</span>
          <span>License & Certification</span>
          <span role="img" aria-label="certification" className="text-5xl md:text-6xl">🏅</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map(cert => (
            <CertificationCard key={cert.id} {...cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certification;