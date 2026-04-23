import React from 'react';

export const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#tech-stack', label: 'Tech Stack' },
  { href: '#contact', label: 'Contact' },
];

export const HERO_DATA = {
  greeting: "Greetings, I am",
  name: "Bùi Minh Tín",
  title: "Data & Backend Developer",
  description: "Junior Information Technology student at Ho Chi Minh City University of Education (HCMUE), specialized in architecting robust Backend systems and optimizing Data processing pipelines.",
  techStack: ['Python', 'Node.js', 'SQL', 'PostgreSQL', 'Java', 'Docker'],
};

export const ABOUT_DATA = {
  title: "About",

  highlight: "Myself",
  descriptionLine1: "Junior Information Technology Student at HCMUE",
  bio: [
    "I am a third-year Information Technology student at Ho Chi Minh City University of Education (HCMUE). Driven by a profound interest in Data and Backend engineering, I focus on building scalable architectures and implementing efficient data-driven solutions.",
    "I am actively seeking professional internship opportunities and collaborative projects to apply my technical expertise and contribute to high-impact software development."
  ],
  stats: [
    { label: "Academic Year", value: "Junior" },
    { label: "Projects Completed", value: "10+" },
    { label: "Technical Skills", value: "15+" },
  ],
  profile1: "/profile-01.jpg",
  profile2: "/profile-02.jpg",
  ygoBack: "/ygo_back_card.jpg",

  skills: [
    { 
      title: 'Frontend Development', 
      desc: 'React, Vue, Next.js, TailwindCSS', 
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /> 
    },
    { 
      title: 'Backend Engineering', 
      desc: 'Node.js, Python, Express, FastAPI', 
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" /> 
    },
    { 
      title: 'Database Management', 
      desc: 'PostgreSQL, MongoDB, Redis', 
      icon: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7C5 4 4 5 4 7z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-3-3v6" /></> 
    },
    { 
      title: 'DevOps & Infrastructure', 
      desc: 'Docker, CI/CD, AWS, Linux', 
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /> 
    },
  ]
};

export const PROJECTS_DATA = {
  title: "Featured",

  highlight: "Projects",
  description: "\u00A0",
  projects: [
    {
      num: '01', type: 'Web Application', title: 'HCMUE Youth Portal',
      desc: 'The official news and media platform for the Youth Union and Student Association of HCMUE. Facilitates centralized news distribution, event management, and student engagement.',
      tags: ['Node.js', 'PostgreSQL', 'Docker', 'TailwindCSS'],
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
      github: null,
      demo: "https://youth.hcmue.edu.vn/",
      demoLabel: "Visit Site",
      image: "/project-screenshot-01.png"
    },
    {
      num: '02', type: 'Full-Stack App', title: 'Internet Coffee Manager',
      desc: 'A comprehensive management solution for internet cafes, integrating customer account management, service provisioning, automated billing, and business analytics.',
      tags: ['React', 'Node.js', 'TailwindCSS', 'Google AI'],
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2 1m2-1l-2-1m2 1v2.5M7 10l-2 1m2-1l-2-1m2 1v2.5M7 4L5 5m2-1L5 3m2 1v2.5M4 7l-2 1m2-1l-2-1m2 1v2.5" />,
      github: "https://github.com/MrT223/Internet-Coffee-Manager",
      demo: "#",
      demoLabel: "Private Demo",
      image: "/project-screenshot-02.png"
    },
    {
      num: '03', type: 'Full-Stack App', title: 'Ciname Galyxa',
      desc: 'A modern cinema booking platform featuring real-time seat selection, concession management, theater administration, and an integrated member loyalty program.',
      tags: ['Next.js 14', 'Node.js', 'MongoDB', 'TailwindCSS'],
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 4V20M17 4V20M3 8H7M17 8H21M3 12H21M3 16H7M17 16H21M4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20Z" />,
      github: "https://github.com/MinQuan-kun/Ciname_Galyxa.git",
      demo: "https://ciname-galyxa.onrender.com",
      demoLabel: "Live Demo",
      image: "/project-screenshot-03.png"
    },
  ]
};

export const TECH_STACK_DATA = {
  title: "Languages &",
  highlight: "Technologies",
  description: "\u00A0",
  techs: [
    { name: 'JavaScript', icon: <path fill="currentColor" d="M11.666 4.667v6.333c0 .828.672 1.5 1.5 1.5s1.5-.672 1.5-1.5V4.667h1.5v6.333a3 3 0 01-6 0V4.667h1.5zM2.834 8.5h6.332v1.5H4.334v2.5H9.166v1.5H2.834V8.5z"/> },
    { name: 'TypeScript', icon: <path fill="currentColor" d="M3 3h18v18H3V3zm15.12 14.28V6.2h-1.63v1.65h-1.33V6.2h-1.63v11.08h1.63v-1.63h1.33v1.63h1.63zM9.53 17.28v-9.33H11.2v9.33H9.53z"/> },
    { name: 'Python', icon: <path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.31 13.91l-1.41-1.41 1.41-1.41 1.42 1.41-1.42 1.41zm-6.62 0l-1.41-1.41 1.41-1.41 1.41 1.41-1.41 1.41z"/> },
    { name: 'C++', icon: <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-2v2h-2v-2h-2v-2h2V9h2v2h2v2zM7 15a3 3 0 01-3-3 3 3 0 013-3 3 3 0 013 3 3 3 0 01-3 3z"/> },
    { name: 'C#', icon: <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-2v2h-2v-2h-2v-2h2V9h2v2h2v2zM7 15a3 3 0 01-3-3 3 3 0 013-3 3 3 0 013 3 3 3 0 01-3 3z"/> },
    { name: 'React', icon: <path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/> },
    { name: 'Next.js', icon: <path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 14.5v-9l6 9h-1.5l-4.5-6.75V16.5H13zm-1-9v9h-1.5v-9H12z"/> },
    { name: 'NestJS', icon: <path fill="currentColor" d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm4 11l-4 4-4-4V7h8v6z"/> },
    { name: 'PHP', icon: <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 13H8V9h2v6zm6 0h-2V9h2v6z"/> },
    { name: 'Laravel', icon: <path fill="currentColor" d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm4 11l-4 4-4-4V7h8v6z"/> },
    { name: 'MongoDB', icon: <path fill="currentColor" d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm-1 15h2v-2h-2v2zm0-4h2V7h-2v6z"/> },
    { name: 'PostgreSQL', icon: <path fill="currentColor" d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm-1 15h2v-2h-2v2zm0-4h2V7h-2v6z"/> },
    { name: 'Redis', icon: <path fill="currentColor" d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm-1 15h2v-2h-2v2zm0-4h2V7h-2v6z"/> },
    { name: 'Docker', icon: <path fill="currentColor" d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2v10h10V2zM4 12V4h10v8H4z"/> },
    { name: 'Git', icon: <path fill="currentColor" d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/> },
    { name: 'Unity', icon: <path fill="currentColor" d="M12 2L2 12l10 10 10-10L12 2zm0 15a5 5 0 110-10 5 5 0 010 10z"/> },
  ]
};

export const CONTACT_DATA = {
  title: "Let's",

  highlight: "Connect",
  description: "I am always open to new opportunities and professional collaborations.",
  info: [
    { label: 'Email', value: 'contact@tinbuiminh.dev', href: 'mailto:contact@tinbuiminh.dev', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /> },
    { label: 'Phone', value: '(+84) 000 000 000', href: 'tel:+84000000000', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /> },
    { label: 'Location', value: 'Ho Chi Minh City, Vietnam', href: null, icon: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></> },
  ],
  socials: [
    { label: 'GitHub', icon: <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" /> },
    { label: 'LinkedIn', icon: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /> },
    { label: 'Twitter', icon: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /> },
    { label: 'Facebook', icon: <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /> },
  ]
};

export const FOOTER_DATA = {
  logo: "Bùi Minh Tín",
  copyright: `© ${new Date().getFullYear()} Bùi Minh Tín. All rights reserved.`,
  links: NAV_LINKS
};
