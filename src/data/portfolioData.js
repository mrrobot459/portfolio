import profileImage from '../assets/Ravi_Ram.png';
import resumePdf from '../assets/Ravi_Ram.pdf';
import amazonImage from '../assets/amazone.png';
import ecommerceImage from '../assets/ecommerce.png';
import certificateImage from '../assets/certificate.jpg';

export const portfolioData = {
  personalInfo: {
    fullName: 'Ravi Ram',
    jobTitle: 'MERN Stack Developer',
    shortTagline:
      'MERN Stack Developer with hands-on experience in building responsive full-stack web applications using React.js, Node.js, Express.js, and MongoDB.',
    profileImage,
    location: 'Punjab, India',
    email: 'ravipariyar9449@gmail.com',
    phone: '7814432894',
    githubUsername: 'mrrobot459',
    githubUrl: 'https://github.com/mrrobot459',
    linkedinUrl: 'https://www.linkedin.com/in/ravi-ram459/',
    resumeUrl: resumePdf,
  },

  heroSection: {
    heroTitle: "Hi, I'm Ravi Ram",
    heroSubtitle: 'MERN Stack Developer',
    heroDescription:
      'I build responsive and user-friendly web applications using the MERN stack. I have hands-on experience in frontend development, backend APIs, authentication, and database integration.',
    heroButtons: [
      { text: 'View Projects', link: '#projects' },
      { text: 'Contact Me', link: '#contact' },
    ],
  },

  aboutSection: {
    aboutTitle: 'About Me',
    aboutDescription:
      'I am a MERN Stack Developer with practical experience in developing full-stack web applications. I have completed 6 months of MERN Stack training and 6 months of experience as a MERN Stack Trainer. I enjoy building responsive applications, working with REST APIs, authentication, and MongoDB database integration.',
    totalExperience: '1 Year MERN Stack Experience',
    completedProjects: '2+ Full Stack Projects',
    technologiesKnown: [
      'HTML',
      'CSS',
      'JavaScript',
      'React.js',
      'Redux',
      'Bootstrap',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'MongoDB',
      'REST API',
      'JWT Authentication',
    ],
  },

  skillsSection: {
    frontendSkills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Redux', 'Bootstrap', 'Tailwind CSS'],
    backendSkills: ['Node.js', 'Express.js'],
    databaseSkills: ['MongoDB'],
    toolsSkills: ['Git', 'GitHub', 'Postman', 'Render', 'VS Code'],
    otherSkills: ['REST API', 'JWT Authentication', 'CRUD Operations', 'Responsive Web Design', 'bcrypt'],
  },

  experienceSection: [
    {
      companyName: 'Cyber Core Technology',
      role: 'MERN Stack Trainer',
      duration: '6 Months',
      location: 'Punjab, India',
      descriptionPoints: [
        'Trained students in HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB.',
        'Guided learners in building mini projects and full-stack MERN applications.',
        'Explained APIs, authentication, CRUD operations, and database integration.',
      ],
    },
    {
      companyName: 'Cyber Core Technology',
      role: 'MERN Stack Trainee',
      duration: '6 Months',
      location: 'Punjab, India',
      descriptionPoints: [
        'Completed practical training in MERN stack development.',
        'Built responsive frontend interfaces and backend APIs.',
        'Worked on MongoDB integration, authentication, and full-stack project development.',
      ],
    },
  ],

  projectsSection: [
    {
      projectName: 'Amazon Clone',
      projectDescription:
        'A responsive Amazon-inspired frontend e-commerce project built using React.js, JavaScript, HTML, and CSS. It replicates the shopping interface with reusable components, product sections, and a clean responsive layout.',
      techStack: ['React.js', 'JavaScript', 'HTML', 'CSS'],
      githubLink: 'https://github.com/mrrobot459/amazon-clone-main',
      liveLink: 'https://amazon-clone-main-q8zd.onrender.com/',
      projectImage: amazonImage,
    },
    {
      projectName: 'MERN E-commerce Project',
      projectDescription:
        'A full-stack e-commerce web application with product management, user features, and MERN stack integration for handling frontend, backend, and database operations.',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST API'],
      githubLink: 'https://mern-ecommerce-project-1-796g.onrender.com/',
      liveLink: 'https://mern-ecommerce-project-1-796g.onrender.com/',
      projectImage: ecommerceImage,
    },
  ],

  educationSection: [
    {
      degree: 'BCA Cyber Security',
      instituteName: 'CT University',
      passingYear: '2024',
      description:
        'Completed Bachelor of Computer Applications in Cyber Security with a strong foundation in computer science, web development, databases, and security concepts. During the course, I developed practical skills in programming, problem-solving, and modern web technologies.',
    },
  ],

  certificationsSection: [
    {
      certificateName: 'MERN Stack Developer Certificate',
      issuer: 'Cyber Core Technology',
      issueDate: 'June 2026',
      certificateLink: certificateImage,
    },
  ],

  contactSection: {
    contactTitle: 'Contact Me',
    contactDescription:
      'Feel free to reach out for job opportunities, freelance work, or collaboration on web development projects.',
    email: 'ravipariyar9449@gmail.com',
    phone: '7814432894',
    location: 'Punjab, India',
    githubUrl: 'https://github.com/mrrobot459',
    linkedinUrl: 'https://www.linkedin.com/in/ravi-ram459/',
  },

  footerSection: {
    footerText: '© 2026 Ravi Ram. All rights reserved.',
    socialLinks: {
      github: 'https://github.com/mrrobot459',
      linkedin: 'https://www.linkedin.com/in/ravi-ram459/',
      email: 'ravipariyar9449@gmail.com',
    },
  },
};
