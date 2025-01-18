import React from "react";

const Experience = () => {
  const experiences = [
    {
      role: "Web Developer Intern",
      company: "NIELIT, Ropar",
      duration: "July 2024 - Present",
      description:
        "Engaged in a six-month internship focused on work-based learning with the latest computer technologies. Contributed to web development projects using modern frameworks.",
    },
    {
      role: "ReactJS Trainee",
      company: "Techlive Solutions Pvt. Ltd., Mohali (Punjab)",
      duration: "July 2023 - August 2023",
      description:
        "Designed and developed a single-page front-end web application using ReactJS. Applied HTML, CSS, Bootstrap, and JavaScript for dynamic and responsive designs.",
    },
  ];

  return (
    <section
      id="experience"
      className="p-8 bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText transition-colors duration-300 scroll-mt-16"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Experience</h2>
        {experiences.map((exp, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-bold">{exp.role}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {exp.company} ({exp.duration})
            </p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
