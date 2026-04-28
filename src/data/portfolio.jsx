import React from 'react';

export const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#tech-stack', label: 'Tech Stack' },
  { href: '#contact', label: 'Contact' },
];

export const HERO_DATA = {
  greeting: "Greetings, I am",
  name: "Bùi Minh Tín",
  title: "Full Stack Developer & Database Specialist",
  description: "Junior Information Technology student at HCMUE, specialized in architecting robust Full-Stack applications and designing high-performance Database systems.",
  techStack: ['PostgreSQL', 'React', 'Node.js', 'Next.js', 'Python', 'Docker'],
};

export const ABOUT_DATA = {
  title: "About",

  highlight: "Myself",
  descriptionLine1: "Junior Information Technology Student at HCMUE",
  bio: [
    "I am a third-year Information Technology student at Ho Chi Minh City University of Education (HCMUE). Driven by a profound interest in Frontend, Backend engineering, and Database management, I focus on building scalable architectures and implementing data-driven, user-centric solutions.",
    "I am actively seeking professional internship opportunities and collaborative projects to apply my technical expertise across the entire software development stack, with a particular emphasis on database optimization and backend efficiency."
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

export const ACHIEVEMENTS_DATA = {
  title: "Accomplishments &",
  highlight: "Certifications",
  description: "",
  
  achievements: [
    {
      num: '01',
      title: "Giải nhì Nghiên cứu Khoa học Sinh viên",
      issuer: "HCMUE - Faculty of Information Technology",
      date: "2024",
      desc: "Đề tài: Sử dụng Google Apps Script thiết kế bài kiểm tra tự động",
      image: "/award-01.jpg",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    }
  ],

  certificatesTitle: "Google Developer Badges",
  certificatesDesc: "",
  certificates: [
    { "name": "AI Boost Bites: Build an AI Support Bot", "image": "https://cdn.qwiklabs.com/zbO1g7PW1bF51aeXwfYYWOTr2UF%2BgLmeMzzpQlL%2BdcA%3D", "link": "https://www.skills.google/public_profiles/fd0f4879-c8f6-438a-9baa-e958d30ac1ec/badges/23774409" },
    { "name": "AI Boost Bites: Advanced Analysis in Sheets", "image": "https://cdn.qwiklabs.com/Mvm3fVq9wNPbD18KSavBge%2F7BAEqCA0PBnNJKBLGDo0%3D", "link": "https://www.skills.google/public_profiles/fd0f4879-c8f6-438a-9baa-e958d30ac1ec/badges/23738313" },
    { "name": "AI Boost Bites: Notes to Sheets with Gemini", "image": "https://cdn.qwiklabs.com/UtTzuA%2BEMiCpGbOQ0o%2FVwGHFXOaerR0I7Nyfliq69Ng%3D", "link": "https://www.skills.google/public_profiles/fd0f4879-c8f6-438a-9baa-e958d30ac1ec/badges/23738170" },
    { "name": "AI Boost Bites: Gemini Calendar Hacks in Gmail", "image": "https://cdn.qwiklabs.com/P7x51m2%2Bq9cdRKiIKnVv2Ex4r151hLx19i2zVnWnXHE%3D", "link": "https://www.skills.google/public_profiles/fd0f4879-c8f6-438a-9baa-e958d30ac1ec/badges/23737967" },
    { "name": "AI Boost Bites: Build Slides Fast with Gemini", "image": "https://cdn.qwiklabs.com/rfyHXDMUIISYQD4bXOaszWnS%2BZ46jwucmKNbFc1iMtE%3D", "link": "https://www.skills.google/public_profiles/fd0f4879-c8f6-438a-9baa-e958d30ac1ec/badges/23737890" },
    { "name": "AI Boost Bites: Talk to Your Data in Sheets", "image": "https://cdn.qwiklabs.com/thacVpFGDeNKIRjhsQZLkALF2BKGRoIH%2F8jjEUoETq8%3D", "link": "https://www.skills.google/public_profiles/fd0f4879-c8f6-438a-9baa-e958d30ac1ec/badges/23737875" },
    { "name": "AI Boost Bites: AI Magic in a Sheets Cell", "image": "https://cdn.qwiklabs.com/fCar2tT5H%2BCfIGmFUC3yS0Wqn4lOoYg80qxswWQTMiE%3D", "link": "https://www.skills.google/public_profiles/fd0f4879-c8f6-438a-9baa-e958d30ac1ec/badges/23737769" },
    { "name": "AI Boost Bites: Create ‘What If’ Scenarios with AI", "image": "https://cdn.qwiklabs.com/oI44gvkzJsRAoRwr27uik6R7TlbK6IIqU17oygPKe0Q%3D", "link": "https://www.skills.google/public_profiles/fd0f4879-c8f6-438a-9baa-e958d30ac1ec/badges/23737747" },
    { "name": "AI Boost Bites: Become a Creative Mashup Artist", "image": "https://cdn.qwiklabs.com/Q4NU16PHnMZT1gv%2FNLktZwthKnGF%2FOncadx6prRNXDA%3D", "link": "https://www.skills.google/public_profiles/fd0f4879-c8f6-438a-9baa-e958d30ac1ec/badges/23737736" },
    { "name": "AI Boost Bites: Become an AI Art Director for Your World", "image": "https://cdn.qwiklabs.com/v5NyWNFdNLvbQB382WkEOn%2FXEEknN2AjdkcqY21%2BX2U%3D", "link": "https://www.skills.google/public_profiles/fd0f4879-c8f6-438a-9baa-e958d30ac1ec/badges/23737720" },
    { "name": "AI Boost Bites: Create the Perfect Portrait", "image": "https://cdn.qwiklabs.com/nMy4XWOu3iDhorzpljJcNH9g1iMH6atVI7Im%2BX6RmBo%3D", "link": "https://www.skills.google/public_profiles/fd0f4879-c8f6-438a-9baa-e958d30ac1ec/badges/23737690" },
    { "name": "AI Boost Bites: Research Hacks with NotebookLM", "image": "https://cdn.qwiklabs.com/QnMrsZVGxlKRTBXYgibnFidS4Bm3XUG4uRc0%2FcFyhcU%3D", "link": "https://www.skills.google/public_profiles/fd0f4879-c8f6-438a-9baa-e958d30ac1ec/badges/23737648" },
    { "name": "AI Boost Bites: Find the Story in Your Data", "image": "https://cdn.qwiklabs.com/0ENaohMg5NF58FLM1EKmbcBCWe8utR6JvFweczvikF8%3D", "link": "https://www.skills.google/public_profiles/fd0f4879-c8f6-438a-9baa-e958d30ac1ec/badges/23722588" },
    { "name": "AI Boost Bites: Streamline Event Planning with AI", "image": "https://cdn.qwiklabs.com/29cYZ0Z0zjFQUFZPBdLzxtSNxCMg7E0DwiSm%2FasjR9k%3D", "link": "https://www.skills.google/public_profiles/fd0f4879-c8f6-438a-9baa-e958d30ac1ec/badges/23722572" },
    { "name": "AI Boost Bites: Supercharge Research with Gemini", "image": "https://cdn.qwiklabs.com/QCD6qqT%2B%2FQ30G4CsV2u8BDzGZLmj5JJdziaeugF09%2BQ%3D", "link": "https://www.skills.google/public_profiles/fd0f4879-c8f6-438a-9baa-e958d30ac1ec/badges/23722556" },
    { "name": "AI Boost Bites: Make Any Big Purchase with Confidence", "image": "https://cdn.qwiklabs.com/rO9aGKQKCBKB2sGCJIPQcCRVun1RNbtRyswLhNdUViU%3D", "link": "https://www.skills.google/public_profiles/fd0f4879-c8f6-438a-9baa-e958d30ac1ec/badges/23722491" },
    { "name": "AI Boost Bites: Animated Charts with Gemini", "image": "https://cdn.qwiklabs.com/B9NwADnwxT%2F2Ox06LkGwllQXK5n8sYxYco6AitOsa5E%3D", "link": "https://www.skills.google/public_profiles/fd0f4879-c8f6-438a-9baa-e958d30ac1ec/badges/23722456" },
    { "name": "AI Boost Bites: Turn Your Ideas into Animated Art", "image": "https://cdn.qwiklabs.com/nELM7maJy2gnbDkZPpiBtiCulbT6ZSZSk%2FQJQb90izA%3D", "link": "https://www.skills.google/public_profiles/fd0f4879-c8f6-438a-9baa-e958d30ac1ec/badges/23722429" },
    { "name": "AI Boost Bites: Your Personal AI Tutor", "image": "https://cdn.qwiklabs.com/AuLQ1FEl093O58CyWdGPf4%2BG8NvRdJXJLe5YDi1Vsh8%3D", "link": "https://www.skills.google/public_profiles/fd0f4879-c8f6-438a-9baa-e958d30ac1ec/badges/23722415" },
    { "name": "AI Boost Bites: Gamify Your Study Guides", "image": "https://cdn.qwiklabs.com/%2FCX5yCny46yTm0P8pFP9wRPZJldf2RyUsNKz%2FSS6WN4%3D", "link": "https://www.skills.google/public_profiles/fd0f4879-c8f6-438a-9baa-e958d30ac1ec/badges/23722398" },
    { "name": "AI Boost Bites: Get Your Competitor's Playbook in Minutes", "image": "https://cdn.qwiklabs.com/jN83C3C564BTnoEFB3c4hHVbIAerjkOMR9GLmHT7UgQ%3D", "link": "https://www.skills.google/public_profiles/fd0f4879-c8f6-438a-9baa-e958d30ac1ec/badges/23722263" },
    { "name": "AI Boost Bites: Build a Personalized Weather App", "image": "https://cdn.qwiklabs.com/cwN3xKY3gOBgOhN3GYYA02OLiO6Eyq3oDg0Prc0EfFs%3D", "link": "https://www.skills.google/public_profiles/fd0f4879-c8f6-438a-9baa-e958d30ac1ec/badges/23721290" },
    { "name": "AI Boost Bites: Create a 3D Solar System", "image": "https://cdn.qwiklabs.com/PuTER%2B9UCnPwdtE9FYd57am08S9C6T85bOVS%2FqvwZRk%3D", "link": "https://www.skills.google/public_profiles/fd0f4879-c8f6-438a-9baa-e958d30ac1ec/badges/23721270" },
    { "name": "AI Boost Bites: Create Your Own Productivity Tools", "image": "https://cdn.qwiklabs.com/oAk8KVgG3dPCgOZfTCQ2VF7QaZ%2FHpVNaQjfftp%2BX%2By4%3D", "link": "https://www.skills.google/public_profiles/fd0f4879-c8f6-438a-9baa-e958d30ac1ec/badges/23721259" },
    { "name": "AI Boost Bites: Guided Learning with Gemini", "image": "https://cdn.qwiklabs.com/WzJVR4Ra3vwRUl%2FgSsEfAg8wKePaHTD5IUu%2BT%2BGfRBg%3D", "link": "https://www.skills.google/public_profiles/fd0f4879-c8f6-438a-9baa-e958d30ac1ec/badges/23721248" },
    { "name": "AI Boost Bites: Create Your Own Retro Arcade Game", "image": "https://cdn.qwiklabs.com/77xMsnOKfqYkDQRaajEihlf7nmmugzv5ORrNtUWx68I%3D", "link": "https://www.skills.google/public_profiles/fd0f4879-c8f6-438a-9baa-e958d30ac1ec/badges/23721239" },
    { "name": "AI Boost Bites: Become a \"Vibe DJ\"", "image": "https://cdn.qwiklabs.com/E9jbszfpImxp0pgFZnfCFD45RCAiei7g%2FpdarSyD4F0%3D", "link": "https://www.skills.google/public_profiles/fd0f4879-c8f6-438a-9baa-e958d30ac1ec/badges/23721218" },
    { "name": "AI Boost Bites: Create Your Ultimate College Scouting Report", "image": "https://cdn.qwiklabs.com/cC%2BYltmo4EBJeUY5zqr0mRAE6AswaIVTxdwKYn2wReo%3D", "link": "https://www.skills.google/public_profiles/fd0f4879-c8f6-438a-9baa-e958d30ac1ec/badges/23721194" },
    { "name": "AI Boost Bites: One-Click Campaign Visuals", "image": "https://cdn.qwiklabs.com/fPyfuy6wXS5bWAWyWch%2FgiiCHYrROhgBkfP1O8JrIgc%3D", "link": "https://www.skills.google/public_profiles/fd0f4879-c8f6-438a-9baa-e958d30ac1ec/badges/23721114" },
    { "name": "AI Boost Bites: From Napkin Sketch to Functional App", "image": "https://cdn.qwiklabs.com/0xPYJPaO%2FGUkm%2FIBpBqlLIGcY%2BmdL7RyMhz1uXvWlso%3D", "link": "https://www.skills.google/public_profiles/fd0f4879-c8f6-438a-9baa-e958d30ac1ec/badges/23721066" },
    { "name": "AI Boost Bites: NotebookLM Reports", "image": "https://cdn.qwiklabs.com/wMG4qZeYKWVp3NFJl4wb%2BVPyhXDasUuEzIskfv2LgYE%3D", "link": "https://www.skills.google/public_profiles/fd0f4879-c8f6-438a-9baa-e958d30ac1ec/badges/23720995" },
    { "name": "AI Boost Bites: Your Personal Feedback Agent", "image": "https://cdn.qwiklabs.com/IIEOvvtuXEXTRoUW4wuNrYMIQuzLnBWRuUYwzgdhtjI%3D", "link": "https://www.skills.google/public_profiles/fd0f4879-c8f6-438a-9baa-e958d30ac1ec/badges/23720978" },
    { "name": "AI Boost Bites: Presentation Scripts with Gemini", "image": "https://cdn.qwiklabs.com/Kx%2B%2BpkDKzg9megCwXOn5MfkKj9MNDcouWnVoQwCX%2FdM%3D", "link": "https://www.skills.google/public_profiles/fd0f4879-c8f6-438a-9baa-e958d30ac1ec/badges/23720954" },
    { "name": "AI Boost Bites: Project Notebooks", "image": "https://cdn.qwiklabs.com/Xn4Orf6MbJr9eljlnLQEzLq8gGtvfvyYRQgtwv7%2F%2Fkk%3D", "link": "https://www.skills.google/public_profiles/fd0f4879-c8f6-438a-9baa-e958d30ac1ec/badges/23720922" },
    { "name": "AI Boost Bites: NotebookLM for Market Research", "image": "https://cdn.qwiklabs.com/nQ4b0CiXm7m2XUvzzaWKmx7659vihFPyTKWZAq44ubE%3D", "link": "https://www.skills.google/public_profiles/fd0f4879-c8f6-438a-9baa-e958d30ac1ec/badges/23720902" },
    { "name": "AI Boost Bites: NotebookLM Video Overviews", "image": "https://cdn.qwiklabs.com/OgEKKA6lK1kMMYWRVX0WJAMuteS44UB8IRD4SuamxJU%3D", "link": "https://www.skills.google/public_profiles/fd0f4879-c8f6-438a-9baa-e958d30ac1ec/badges/23720873" },
    { "name": "AI Boost Bites: Discover Sources in NotebookLM", "image": "https://cdn.qwiklabs.com/lmE%2BtIwpWmqaKkFhz%2BmG1p2rcP8he2lN8lHU%2BmxGZ4M%3D", "link": "https://www.skills.google/public_profiles/fd0f4879-c8f6-438a-9baa-e958d30ac1ec/badges/23720851" },
    { "name": "AI Boost Bites: NotebookLM Mind Maps", "image": "https://cdn.qwiklabs.com/lY3dvoYQhE%2BDRnTHhHq0byo1Mv3NSNwSwcDyRC4zUUQ%3D", "link": "https://www.skills.google/public_profiles/fd0f4879-c8f6-438a-9baa-e958d30ac1ec/badges/23720826" },
    { "name": "AI Boost Bites: Intro to NotebookLM", "image": "https://cdn.qwiklabs.com/LfphJE4ffS8gMf1%2Favz7ZvrsZPwFZ1CjxSQEQ4LZR84%3D", "link": "https://www.skills.google/public_profiles/fd0f4879-c8f6-438a-9baa-e958d30ac1ec/badges/23720814" },
    { "name": "AI Boost Bites: Email Content Creation", "image": "https://cdn.qwiklabs.com/hebgtvz8tlnaoha5CYFrSG1D08LS5WX1LAucQRHkdjQ%3D", "link": "https://www.skills.google/public_profiles/fd0f4879-c8f6-438a-9baa-e958d30ac1ec/badges/23720790" },
    { "name": "AI Boost Bites: Create Docs in Seconds", "image": "https://cdn.qwiklabs.com/m3RGonNoaiqg65yFpO6v1xPR8ovDrrnZNqWI0i1s9YQ%3D", "link": "https://www.skills.google/public_profiles/fd0f4879-c8f6-438a-9baa-e958d30ac1ec/badges/23720762" },
    { "name": "AI Boost Bites: AI Power-Ups for Google Workspace", "image": "https://cdn.qwiklabs.com/ydX8SIVF3NS1pN246f9PtJjGf5EmnyrlnQMNYJ9X0zQ%3D", "link": "https://www.skills.google/public_profiles/fd0f4879-c8f6-438a-9baa-e958d30ac1ec/badges/23720723" },
    { "name": "AI Boost Bites: Tame Your Inbox with AI", "image": "https://cdn.qwiklabs.com/GovfqO0LLP29A0CGYWOopTjGbUmv2j3rv8dIqALv2J4%3D", "link": "https://www.skills.google/public_profiles/fd0f4879-c8f6-438a-9baa-e958d30ac1ec/badges/23720665" },
    { "name": "AI Boost Bites: Gemini Slide Summaries", "image": "https://cdn.qwiklabs.com/tZobx%2FFQAl1nfDYMRhUg95mlYBI51n1Gfghld39%2FAp0%3D", "link": "https://www.skills.google/public_profiles/fd0f4879-c8f6-438a-9baa-e958d30ac1ec/badges/23720624" },
    { "name": "AI Boost Bites: No-Code Sheets & Scripts", "image": "https://cdn.qwiklabs.com/1g0gpiB8XR0%2Ft0yObuq99ZvwqDzBTbpEEZtV0MRDzWw%3D", "link": "https://www.skills.google/public_profiles/fd0f4879-c8f6-438a-9baa-e958d30ac1ec/badges/23720556" },
    { "name": "AI Boost Bites: Amplify Exec Voices with AI", "image": "https://cdn.qwiklabs.com/b5V%2FIhsctZ78FMGa3uYoqf8vjr63N9wzGzPoFwui25k%3D", "link": "https://www.skills.google/public_profiles/fd0f4879-c8f6-438a-9baa-e958d30ac1ec/badges/23720524" },
    { "name": "AI Boost Bites: Exec Summaries with Gemini Gems", "image": "https://cdn.qwiklabs.com/3bxJs0CERuRoHFv4lUX7J5aPRv%2F58RluvEDcQDZHCWA%3D", "link": "https://www.skills.google/public_profiles/fd0f4879-c8f6-438a-9baa-e958d30ac1ec/badges/23720384" },
    { "name": "AI Boost Bites: Automate tasks with Gemini and Apps Script", "image": "https://cdn.qwiklabs.com/ifSp1k5lkn1JqxI7fz1oGAxqrfoHzEKdGOmOLII%2FNd0%3D", "link": "https://www.skills.google/public_profiles/fd0f4879-c8f6-438a-9baa-e958d30ac1ec/badges/23720353" },
    { "name": "AI Boost Bites: \"Eat the Frog\" with NotebookLM", "image": "https://cdn.qwiklabs.com/zu4IlrPPX7ty%2B11bWNvvFGqAOiXbOmRbJsnREnkJhyg%3D", "link": "https://www.skills.google/public_profiles/fd0f4879-c8f6-438a-9baa-e958d30ac1ec/badges/23720234" },
    { "name": "AI Boost Bites: Gemini Image-to-Sheets Hack", "image": "https://cdn.qwiklabs.com/%2BrIpa83CQUzIpdsu0Dc5zXJiXx%2F%2BTKSi35dsTzzE2T4%3D", "link": "https://www.skills.google/public_profiles/fd0f4879-c8f6-438a-9baa-e958d30ac1ec/badges/23720195" },
    { "name": "AI Boost Bites: Poke Holes in Your Strategy", "image": "https://cdn.qwiklabs.com/MR2VThssybuWq3Epa%2F0ZuVnpclfk4onY3igsHP28Azw%3D", "link": "https://www.skills.google/public_profiles/fd0f4879-c8f6-438a-9baa-e958d30ac1ec/badges/23720173" },
    { "name": "AI Boost Bites: NotebookLM for Competitive Edge", "image": "https://cdn.qwiklabs.com/lQEE5iqPEa%2BAIhmJmB769uyFwmwIoLvz0Bln5Fk5zvI%3D", "link": "https://www.skills.google/public_profiles/fd0f4879-c8f6-438a-9baa-e958d30ac1ec/badges/23720138" },
    { "name": "AI Boost Bites: Personalization with customized prompts", "image": "https://cdn.qwiklabs.com/ZwYG3SlROXHvUoDMKccD%2BlEMrAQJtDMpjUPoGa%2BjMI4%3D", "link": "https://www.skills.google/public_profiles/fd0f4879-c8f6-438a-9baa-e958d30ac1ec/badges/23720114" },
    { "name": "AI Boost Bites: TL;DR with Gemini in Docs & Drive", "image": "https://cdn.qwiklabs.com/5S5xEoPuikFEU0g0TBxTIrNB%2BM9olkl2ulABU4FVuHI%3D", "link": "https://www.skills.google/public_profiles/fd0f4879-c8f6-438a-9baa-e958d30ac1ec/badges/23720079" },
    { "name": "AI Boost Bites: Prompting like a Pro with Google Workspace", "image": "https://cdn.qwiklabs.com/hsgoaIaNDljV9yZPQ6UPN67yG0FAtTJ4V7uERoiZDUY%3D", "link": "https://www.skills.google/public_profiles/fd0f4879-c8f6-438a-9baa-e958d30ac1ec/badges/23720047" },
    { "name": "AI Boost Bites: Content Generation with Gemini Made Easy", "image": "https://cdn.qwiklabs.com/9UrQECS5xwTQbTYNrh3RfL88dWAH0t33na6sbZj09eM%3D", "link": "https://www.skills.google/public_profiles/fd0f4879-c8f6-438a-9baa-e958d30ac1ec/badges/23719986" },
    { "name": "AI Boost Bites: Customer insights with NotebookLM", "image": "https://cdn.qwiklabs.com/jTe812NsVw%2Bb5UyKo0JrVrNf%2FLNy0cLrnNZbz4ymjzg%3D", "link": "https://www.skills.google/public_profiles/fd0f4879-c8f6-438a-9baa-e958d30ac1ec/badges/23719915" },
    { "name": "AI Boost Bites: Gemini Gems – Your ultimate marketing sidekick", "image": "https://cdn.qwiklabs.com/WPXAhcv9U7hTrwB7bp86uMEyMViSQ0anOtY7xszxDkU%3D", "link": "https://www.skills.google/public_profiles/fd0f4879-c8f6-438a-9baa-e958d30ac1ec/badges/23719777" }
  ]
};

export const CONTACT_DATA = {
  title: "Let's",

  highlight: "Connect",
  channels: [
    {
      label: 'GitHub',
      username: 'MrT223',
      href: 'https://github.com/MrT223',
      color: '#6e40c9',
      icon: <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />,
    },
    {
      label: 'LinkedIn',
      username: 'Bùi Minh Tín',
      href: null,
      color: '#0a66c2',
      icon: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />,
    },
    {
      label: 'Facebook',
      username: 'Minh Tín',
      href: 'https://www.facebook.com/KaiserHahn.GGEZ/',
      color: '#1877f2',
      icon: <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />,
    },
    {
      label: 'Gmail',
      username: '4901104152@student.hcmue.edu.vn',
      href: 'mailto:4901104152@student.hcmue.edu.vn',
      color: '#ea4335',
      icon: <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />,
    },
    {
      label: 'Discord',
      username: 'kaiser_hahn',
      href: 'https://discord.com/users/451310505639018497',
      color: '#5865f2',
      icon: <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.8733.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />,
    },
    {
      label: 'Location',
      username: 'HCMUE, An Duong Vuong',
      href: 'https://www.google.com/maps/search/?api=1&query=280+An+Dương+Vương,+Phường+7,+Chợ+Quán,+Hồ+Chí+Minh+720000,+Việt+Nam',
      color: '#ffffff',
      iconStroke: true,
      icon: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></>,
    },
  ]
};

export const FOOTER_DATA = {
  logo: "Bùi Minh Tín",
  copyright: `© ${new Date().getFullYear()} Bùi Minh Tín. All rights reserved.`,
  links: NAV_LINKS
};
