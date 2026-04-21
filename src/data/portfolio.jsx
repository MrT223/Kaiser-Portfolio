import React from 'react';

export const NAV_LINKS = [
  { href: '#about', label: 'Giới thiệu' },
  { href: '#projects', label: 'Dự án' },
  { href: '#certificates', label: 'Chứng chỉ' },
  { href: '#contact', label: 'Liên hệ' },
];

export const HERO_DATA = {
  greeting: "Xin chào, tôi là",
  name: "Bùi Minh Tín",
  title: "Data & Backend Developer",
  description: "Sinh viên năm 3 tại trường Đại học Sư phạm TP.HCM (HCMUE). Chuyên sâu về mảng Dữ liệu và phát triển hệ thống Backend.",
  techStack: ['Python', 'Node.js', 'SQL', 'PostgreSQL', 'Java', 'Docker'],
};

export const ABOUT_DATA = {
  title: "Về",

  highlight: "bản thân tôi",
  descriptionLine1: "Sinh viên năm 3 chuyên ngành CNTT tại HCMUE",
  bio: [
    "Tôi hiện là sinh viên năm 3 tại trường Đại học Sư phạm TP.HCM (HCMUE). Với niềm đam mê lớn dành cho mảng Dữ liệu và Backend, tôi luôn nỗ lực học hỏi để xây dựng các hệ thống ổn định và xử lý dữ liệu hiệu quả.",
    "Tôi đang tìm kiếm các cơ hội thực tập và dự án thực tế để áp dụng những kiến thức đã học vào môi trường chuyên nghiệp."
  ],
  stats: [
    { label: "Năm học", value: "Năm 3" },
    { label: "Dự án", value: "10+" },
    { label: "Kỹ năng", value: "15+" },
  ],

  skills: [
    { 
      title: 'Frontend', 
      desc: 'React, Vue, Next.js, TailwindCSS', 
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /> 
    },
    { 
      title: 'Backend', 
      desc: 'Node.js, Python, Express, FastAPI', 
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" /> 
    },
    { 
      title: 'Database', 
      desc: 'PostgreSQL, MongoDB, Redis', 
      icon: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7C5 4 4 5 4 7z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-3-3v6" /></> 
    },
    { 
      title: 'DevOps', 
      desc: 'Docker, CI/CD, AWS, Linux', 
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /> 
    },
  ]
};

export const PROJECTS_DATA = {
  title: "Các dự án",

  highlight: "nổi bật",
  description: "\u00A0",
  projects: [
    {
      num: '01', type: 'Web Application', title: 'HCMUE Youth Portal',
      desc: 'Website chính thức của Đoàn Thanh niên - Hội Sinh viên Trường Đại học Sư phạm TP.HCM. Cung cấp tin tức, sự kiện và hoạt động đoàn hội.',
      tags: ['Node.js', 'PostgreSQL', 'Docker', 'TailwindCSS'],
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
      github: null,
      demo: "https://youth.hcmue.edu.vn/",
      demoLabel: "Truy cập",
      image: "/project-screenshot-01.png"
    },
    {
      num: '02', type: 'Full-Stack App', title: 'Internet Coffee Manager',
      desc: 'Hệ thống quản lý quán cà phê internet toàn diện, tích hợp quản lý khách hàng, dịch vụ, menu và báo cáo doanh thu chi tiết.',
      tags: ['React', 'Node.js', 'TailwindCSS', 'Google AI'],
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2 1m2-1l-2-1m2 1v2.5M7 10l-2 1m2-1l-2-1m2 1v2.5M7 4L5 5m2-1L5 3m2 1v2.5M4 7l-2 1m2-1l-2-1m2 1v2.5" />,
      github: "https://github.com/MrT223/Internet-Coffee-Manager",
      demo: "#",
      demoLabel: "Private Demo",
      image: "/project-screenshot-02.png"
    },
    {
      num: '03', type: 'Full-Stack App', title: 'Cine Galaxy',
      desc: 'Hệ thống quản lý và đặt vé xem phim hiện đại với tính năng đặt ghế trực quan, quản lý rạp, combo bắp nước và tích hợp hệ thống điểm thưởng thành viên.',
      tags: ['Next.js 14', 'Node.js', 'MongoDB', 'TailwindCSS'],
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 4V20M17 4V20M3 8H7M17 8H21M3 12H21M3 16H7M17 16H21M4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20Z" />,
      github: "https://github.com/MinQuan-kun/Ciname_Galyxa.git",
      demo: "https://ciname-galyxa.onrender.com",
      demoLabel: "Live Demo"
    },
  ]
};

export const CERTS_DATA = {
  title: "Chứng chỉ &",

  highlight: "Thành tựu",
  description: "Những chứng chỉ và thành tựu nổi bật.",
  certs: [
    { year: '2024', title: 'AWS Solutions Architect', issuer: 'Amazon Web Services', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /> },
    { year: '2023', title: 'Google Cloud Developer', issuer: 'Google Cloud', desc: 'Duis aute irure dolor in reprehenderit in voluptate velit.', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /> },
    { year: '2023', title: 'Meta Front-End Developer', issuer: 'Meta (Coursera)', desc: 'Excepteur sint occaecat cupidatat non proident.', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /> },
    { year: '2022', title: 'Docker Certified Associate', issuer: 'Docker Inc.', desc: 'Sed ut perspiciatis unde omnis iste natus error sit.', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /> },
    { year: '2022', title: 'Scrum Master Certified', issuer: 'Scrum Alliance', desc: 'Nemo enim ipsam voluptatem quia voluptas sit.', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /> },
    { year: '2021', title: 'CompTIA Security+', issuer: 'CompTIA', desc: 'At vero eos et accusamus et iusto odio dignissimos.', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /> },
  ]
};

export const CONTACT_DATA = {
  title: "Hãy",

  highlight: "kết nối với tôi",
  description: "Luôn sẵn sàng cho những cơ hội hợp tác mới.",
  info: [
    { label: 'Email', value: 'hello@example.com', href: 'mailto:hello@example.com', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /> },
    { label: 'Điện thoại', value: '+84 123 456 789', href: 'tel:+84123456789', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /> },
    { label: 'Vị trí', value: 'TP. Hồ Chí Minh, Việt Nam', href: null, icon: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></> },
  ],
  socials: [
    { label: 'GitHub', icon: <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" /> },
    { label: 'LinkedIn', icon: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /> },
    { label: 'Twitter', icon: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /> },
    { label: 'Facebook', icon: <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /> },
  ]
};

export const FOOTER_DATA = {
  logo: "DevPortfolio",
  copyright: "© 2024 DevPortfolio. All rights reserved.",
  links: NAV_LINKS
};
