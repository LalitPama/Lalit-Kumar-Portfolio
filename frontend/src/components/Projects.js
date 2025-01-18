import React from "react";
import portImage from "./images/port.png"; // Adjust the path as necessary

const Projects = () => {
  const projects = [
    {
      title: "Brand Page (ReactJS)",
      description:
        "Developed a single-page web application for a shoe brand using ReactJS, HTML, CSS, Bootstrap, and JavaScript.",
    },
    {
      title: "Background Generator (ReactJS)",
      description:
        "Created a ReactJS application that allows users to customize backgrounds by selecting colors, angles, and orientations, with an option to copy the CSS code.",
    },
    {
      title: "Portfolio Website",
      description:
        "Designed and developed a fully responsive portfolio website using ReactJS, Tailwind CSS, and modern web development practices. Integrated light and dark modes, smooth navigation, and a professional layout to showcase projects, skills, and contact details.",
      image: portImage, // Use the imported image here
    },
  ];

  return (
    <section
      id="projects"
      className="bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText py-10 scroll-mt-16"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <div key={index} className="border p-4 rounded">
              {project.image && ( // Check if the image exists
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              )}
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;