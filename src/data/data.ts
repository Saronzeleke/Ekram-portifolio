import type { Testimonial, Certificate, Project, Skill } from '../types';

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Khalid Hassen",
    role: "General Manager",
    company: "Abay Mart.",
    content: "It was a real pleasure having Ekram as part of the team. She consistently impressed me with her eagerness to learn, and not only did she meet expectations, she always went above and beyond what was asked of her. Her work was consistently delivered on time, and she played a significant role in managing our social media presence. What really stood out was her humble attitude and willingness to absorb new skills quickly – I truly believe these qualities would make her a great fit for any position, as she has the ability to pick things up rapidly. I highly recommend her and wish her the very best in her future endeavors!",
    rating: 5,
    image:'/public/tk.jpg'
  },
  {
    id: 2,
    name: "Yamlak Sisay",
    role: "Marketer, CEO Birana creatives",
    company: "StartupHub",
    content: "would love to highly recommend Ekram as a social media manager. She's creative, reliable, and truly understands how to grow and engage an audience. Her strategies brought noticeable improvement to my brand's online presence, and working with her has been a smooth, professional experience.",
    rating: 5,
    image: "/public/yk.jpg"
  },
  // {
  //   id: 3,
  //   name: "Emily Rodriguez",
  //   role: "Small Business Owner",
  //   company: "Local Boutique",
  //   content: "Transformed our social media presence completely. Engagement increased by 250% and sales followed. Excellent communication throughout the project.",
  //   rating: 5,
  //   image: "/public/a.jpg"
  // },
  // {
  //   id: 4,
  //   name: "David Thompson",
  //   role: "Marketing Manager",
  //   company: "E-commerce Plus",
  //   content: "ROI improved by 180% within 3 months. Strategic approach to digital marketing with measurable results. Couldn't be happier with the outcome.",
  //   rating: 5,
  //   image: "/public/a.jpg"
  // }
];

export const certificates: Certificate[] = [
  {
    id: 1,
title: "Ethiopia Digital Marketing Membership",
issuer:"Ethiopia Digital Marketing",
date:"2024",
image:"/public/abal.jpg",
credentialId:"EDM-2024-005"
    
  },
  {
    id: 2,
    title: "Social Media Marketing Certification",
    issuer: "HubSpot",
    date: "2023",
    image: "./public/c2.jpg",
    credentialId: "HS-2023-003"
  },
  {
    id:3,
    title: "Benetsa Marketing And communication",
    issuer: "Bentsa",
    date: "2024",
    image: "/public/c1.jpg",
    credentialId: "GA-2024-001"
  },
  {
    id: 4,
    title: "Digital Marketing Fundamentals",
    issuer: "Fundamentals of Digital Marketing",
    date: "2023",
    image:"/public/c4.jpg",
    credentialId: "AD-2023-004"
  },
  {
id:5,

    title: "Acomplishment in Digital Marketing",
    issuer: "Merhayan",
    date: "2024",
    image: "./public/c3.jpg",
    credentialId: "FB-2024-002"
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Meta Ads campaign",
    category: " Ads Specialist",
    description: "Complete  Meta Ads campaign campaign that increased sales by 300% through strategic social media marketing and targeted advertising.",
    image: "/public/l7.jpg",
    technologies: ["Facebook Ads"]
  },
  {
    id: 2,
    title: "Social media management",
    category: "Social media manager",
    description: "Social media management .",
    image: "/public/l5.jpg",
    technologies: ["LinkedIn Ads"]
  },
  {
    id: 3,
    title: "Copy Writing for Local Business",
    category: "Copywriting",
    description: "Social media strategy and content creation that boosted engagement by 400% and increased foot traffic significantly.",
    image: "/public/l2.jpg",
    technologies: [ "Content Creation", "Analytics"]
  },
  {
    id: 4,
    title: "Social Media Management ",
    category: "Social media manager",
    description: "Social media management ",
    image: "/public/l6.jpg",
    technologies: ["Social Media Management","Content Creation","Analytics"]
  },
  {
    id: 5,
    title: "Social media management",
    category: "  Social media manager",
    description: "Social media management ",
    image: "/public/l8.jpg",
    technologies: ["LinkedIn Ads", "Email Marketing", "CRM", "Analytics"]
  },
  {
    id: 6,
    title: "Creative director for the CSR initiative creative Africa",
    category: "creative manager",
    description:" led the creative direction for a csr initiative that foucesed on empowering local communities through digital marketing and social media.",
    image: "/public/l1.jpg",
    technologies:["Social media management", "Content Creation","creative manager","Analytics"]
  },
  {
    id:7,
    title:"content writer",
    category:"content writer",
    description:"content writer for abay mart",
    image:"/public/l3.jpg",
    technologies:["content writing"]
  }
];

export const skills: Skill[] = [
  // Hard Skills
  { name: "Managing Social Media Accounts", level: 95, category: "hard" },
  { name: "Running Digital Marketing Campaigns", level: 90, category: "hard" },
  { name: "Planning Content and Campaign", level: 88, category: "hard" },
  { name: "Writing Copy for Websites", level: 92, category: "hard" },
  // { name: "Logo Design", level: 94, category: "hard" },
  { name: "Social Media Marketing", level: 90, category: "hard" },
  { name: "Telling Unique Stories for Brands", level: 85, category: "hard" },
  { name: "Building Brand Awareness and Engagement", level: 87, category: "hard" },
  { name: "Content Creation", level: 89, category: "hard" },
  { name: "Engaging with Online Communities", level: 86, category: "hard" },
  
  // Soft Skills
  { name: "Communication", level: 95, category: "soft" },
  { name: "Project Management", level: 90, category: "soft" },
  { name: "Creative Thinking", level: 93, category: "soft" },
  { name: "Problem Solving", level: 88, category: "soft" },
  { name: "Client Relations", level: 92, category: "soft" },
  { name: "Time Management", level: 89, category: "soft" },
  { name: "Leadership", level: 85, category: "soft" },
  { name: "Adaptability", level: 90, category: "soft" }
];