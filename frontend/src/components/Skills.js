import React from "react";

const Skills = () => {
  const skills = [
    "C/C++",
    "HTML",
    "CSS",
    "JavaScript",  // JavaScript is already there, but ensuring it's included
    "Python",      // Added Python
    "ReactJS",
    "Bootstrap",
    "GitHub",
    "Unix/Linux",
    "Windows",
  ];

  return (
    <section
      id="skills"
      className="p-8 bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText transition-colors duration-300 scroll-mt-16"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <ul className="list-disc pl-5">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
