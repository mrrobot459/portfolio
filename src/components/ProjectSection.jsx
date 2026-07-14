import React from 'react';
import amazone from '../assets/amazone.png';
import ecommerce from '../assets/ecommerce.png';
import { ExternalLink, Github, Code } from 'lucide-react';

const projects = [
  {
    title: "Amazon Clone",
    description:
      "A responsive Amazon-inspired frontend e-commerce project built using React.js, JavaScript, HTML, and CSS. It replicates the shopping interface with reusable components, product sections, and a clean responsive layout for a smooth user experience.",
    image: amazone,
    tags: ["React.js", "JavaScript", "HTML", "CSS"],
    demoLink: "https://amazon-clone-main-q8zd.onrender.com/",
    githubLink: "https://github.com/mrrobot459/amazon-clone-main",
  },
  {
    title: "MERN E-commerce Project",
    description:
      "A full-stack e-commerce web application built using the MERN stack with features like product listing, user-friendly shopping interface, and backend integration for managing application data and functionality.",
    image: ecommerce,
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "REST API"],
    demoLink: "https://mern-ecommerce-project-1-796g.onrender.com/",
    githubLink: "https://github.com/mrrobot459/MERN-Ecommerce-Project",
  }
];
const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-[#101820] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#FEE715] mb-16">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#101820] border border-[#FEE715] rounded-xl overflow-hidden flex flex-col shadow-md transform transition duration-300 hover:scale-[1.03] hover:shadow-[0_0_25px_#FEE715]"
            >
              <div className="h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2 text-white">
                  <Code size={28} className="text-[#FEE715]" />
                  {project.title}
                </h3>
                <p className="text-white text-base mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#FEE715] text-black text-sm font-semibold rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex gap-3 flex-wrap">
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-black bg-[#FEE715] rounded-md hover:bg-[#A7BEAE] hover:text-black transition"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-[#FEE715] border border-[#FEE715] rounded-md hover:bg-[#A7BEAE] hover:text-black transition"
                  >
                    <Github size={18} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
