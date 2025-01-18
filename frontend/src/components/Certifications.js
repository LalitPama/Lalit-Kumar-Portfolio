import React from "react";

const Certifications = () => {
  const certifications = [
    "Problem Solving (Basic) Certification – HackerRank",
    "CSS (Basic) Certification – HackerRank",
    "Introduction to Generative AI Badge – Google Cloud Skill Boost",
    "One Day Workshop on AI and ML – ThinkNext Technologies Pvt. Ltd.",
  ];

  return (
    <section
      id="certifications"
      className="p-8 bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText transition-colors duration-300 scroll-mt-16"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Certifications</h2>
        <ul className="list-disc pl-5">
          {certifications.map((cert, index) => (
            <li key={index}>{cert}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Certifications;
