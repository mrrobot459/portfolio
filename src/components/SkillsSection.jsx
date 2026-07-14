import React from 'react';
import 'devicon/devicon.min.css';
import { portfolioData } from '../data/portfolioData';

const skillIconMap = {
  HTML: 'devicon-html5-plain colored',
  CSS: 'devicon-css3-plain colored',
  JavaScript: 'devicon-javascript-plain colored',
  'React.js': 'devicon-react-original colored',
  Redux: 'devicon-redux-original colored',
  Bootstrap: 'devicon-bootstrap-plain colored',
  'Tailwind CSS': 'devicon-tailwindcss-plain colored',
  'Node.js': 'devicon-nodejs-plain colored',
  'Express.js': 'devicon-express-original',
  MongoDB: 'devicon-mongodb-plain colored',
  Git: 'devicon-git-plain colored',
  GitHub: 'devicon-github-original',
  Postman: 'devicon-postman-plain colored',
  'VS Code': 'devicon-vscode-plain colored',
  Render: 'devicon-heroku-plain colored',
  'REST API': 'devicon-javascript-plain colored',
  'JWT Authentication': 'devicon-json-plain colored',
  'CRUD Operations': 'devicon-nodejs-plain colored',
  'Responsive Web Design': 'devicon-html5-plain colored',
  bcrypt: 'devicon-nodejs-plain colored',
};

const skillCategories = [
  {
    name: 'Frontend',
    skills: portfolioData.skillsSection.frontendSkills.map((skill) => ({ name: skill, iconClass: skillIconMap[skill] || 'devicon-devicon-plain' })),
  },
  {
    name: 'Backend',
    skills: portfolioData.skillsSection.backendSkills.map((skill) => ({ name: skill, iconClass: skillIconMap[skill] || 'devicon-devicon-plain' })),
  },
  {
    name: 'Database',
    skills: portfolioData.skillsSection.databaseSkills.map((skill) => ({ name: skill, iconClass: skillIconMap[skill] || 'devicon-devicon-plain' })),
  },
  {
    name: 'Tools',
    skills: portfolioData.skillsSection.toolsSkills.map((skill) => ({ name: skill, iconClass: skillIconMap[skill] || 'devicon-devicon-plain' })),
  },
  {
    name: 'Other Skills',
    skills: portfolioData.skillsSection.otherSkills.map((skill) => ({ name: skill, iconClass: skillIconMap[skill] || 'devicon-devicon-plain' })),
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="bg-[#101820] py-20 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#FEE715] mb-12">
          My Skills
        </h2>

        <div className="space-y-16">
          {skillCategories.map((category, idx) => (
            <div key={idx}>
              <h3 className="text-xl font-semibold mb-6 text-[#FEE715] border-b-2 inline-block border-[#FEE715]">
                {category.name}
              </h3>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center text-center p-4 rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_#FEE715] bg-[#101820]"
                  >
                    <i className={`${skill.iconClass} text-3xl sm:text-4xl`} />
                    <span className="text-sm mt-3 text-white hover:text-[#A7BEAE] transition duration-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
